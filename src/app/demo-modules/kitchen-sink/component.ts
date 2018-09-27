import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

import {
  Http,
  Headers,
  RequestOptionsArgs,
  RequestOptions
} from '@angular/http';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles.css'],
  templateUrl: 'template.html'
})
export class DemoComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  doctorss: any[];
  doctor1: number;

  patientss: any[];
  patient1: number;

  dateEvent: Date;

  alertNew: boolean = false;

  events: CalendarEvent[] = [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: 'A 3 day event',
    //   color: colors.red,
    //   actions: this.actions,
    //   allDay: true,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue,
    //   allDay: true
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: new Date(),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private http: Http) {

  }

  ngOnInit() {
    this.doctors();
    this.commitments();
    this.patients();
    document.getElementById('today').click();
  }

  doctors() {
    this.http
      .get('http://ec2-54-145-167-89.compute-1.amazonaws.com/api/medicos')
      .toPromise()
      .then(resp => {
        this.doctorss = resp.json().data.map(element => {
          return { id: element.id, name: element.nome_medico };
        });
      })
      .catch(error => {
        console.error(error.status);
      });
  }

  patients() {
    this.http
      .get(`http://ec2-54-145-167-89.compute-1.amazonaws.com/api/pacientes`)
      .toPromise()
      .then(resp => {
        this.patientss = resp.json().data.map(element => {
          return { id: element.id, name: element.nome };
        });
        console.log(this.patientss);
      })
      .catch(error => {
        console.error(error.status);
      });
  }

  commitments() {
    this.events = [];
    this.http
      .get(`http://ec2-54-145-167-89.compute-1.amazonaws.com/api/agendas?medico_id=${this.doctor1}`)
      .toPromise()
      .then(resp => {
        resp.json().data.forEach(element => {
          this.events.push({
            id: element.id,
            title: element.paciente.nome,
            start: startOfDay(element.datahora),
            end: endOfDay(element.datahora),
            color: colors.red,
            draggable: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            }
          });
        });
        this.refresh.next();
      })
      .catch(error => {
        console.error(error.status);
      });
  }

  delete(id: number) {
    this.http
      .delete(`http://ec2-54-145-167-89.compute-1.amazonaws.com/api/agendas/${id}`)
      .toPromise()
      .then(resp => {
        this.commitments();
      })
      .catch(error => {
        console.error(error.status);
      });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {

    if(!this.dateEvent || !this.doctor1 || !this.patient1) {
      this.alertNew = true;
    } else {

      this.http
      .post(`http://ec2-54-145-167-89.compute-1.amazonaws.com/api/agendas`, {
        datahora: this.dateEvent,
        medico_id: this.doctor1,
        paciente_id: this.patient1
      })
      .toPromise()
      .then(resp => {
        this.commitments();
      })
      .catch(error => {
        console.error(error.status);
      });

    }

    /*this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();*/
  }
}

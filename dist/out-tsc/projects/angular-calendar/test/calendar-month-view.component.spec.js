import { inject, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import moment from 'moment';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { spy } from 'sinon';
import { CalendarEventTitleFormatter, CalendarMomentDateFormatter, CalendarDateFormatter, CalendarModule, MOMENT, DAYS_OF_WEEK, CalendarMonthViewComponent, DateAdapter } from '../src';
import { Subject } from 'rxjs';
import { triggerDomEvent } from './util';
import { take } from 'rxjs/operators';
import { adapterFactory } from '../src/date-adapters/date-fns';
describe('calendarMonthView component', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }, {
                    dateFormatter: {
                        provide: CalendarDateFormatter,
                        useClass: CalendarMomentDateFormatter
                    }
                })
            ],
            providers: [{ provide: MOMENT, useValue: moment }]
        });
    });
    var eventTitle;
    beforeEach(inject([CalendarEventTitleFormatter], function (_eventTitle_) {
        eventTitle = _eventTitle_;
    }));
    it('should generate the month view', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        expect(fixture.componentInstance.view.rowOffsets).to.deep.equal([
            0,
            7,
            14,
            21,
            28
        ]);
        expect(fixture.componentInstance.view.days.length).to.equal(35);
        expect(fixture.componentInstance.view.totalDaysVisibleInWeek).to.equal(7);
        expect(fixture.componentInstance.view.days[0].date).to.deep.equal(moment('2016-05-29').toDate());
        fixture.destroy();
    });
    it('should generate the week view with default colors for events', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.ngOnInit();
        fixture.componentInstance.viewDate = new Date('2016-06-01');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                title: 'foo'
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var computedStyles = window.getComputedStyle(fixture.nativeElement.querySelector('.cal-event'));
        expect(computedStyles.getPropertyValue('background-color')).to.equal('rgb(30, 144, 255)');
        expect(computedStyles.getPropertyValue('border-color')).to.equal('rgb(209, 232, 255)');
        expect(computedStyles.getPropertyValue('color')).to.equal('rgb(255, 255, 255)');
        fixture.destroy();
    });
    it('should generate the month view without from week excluded days', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-01-10');
        fixture.componentInstance.excludeDays = [0, 6];
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        expect(fixture.componentInstance.view.days.length).to.equal(25);
        expect(fixture.componentInstance.view.totalDaysVisibleInWeek).to.equal(5);
        expect(fixture.componentInstance.view.rowOffsets).to.deep.equal([
            0,
            5,
            10,
            15,
            20
        ]);
        expect(fixture.componentInstance.view.days[0].date).to.deep.equal(moment('2015-12-28').toDate());
        fixture.destroy();
    });
    it('should update the month view when excluded days changed', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-01-10');
        fixture.componentInstance.excludeDays = [0, 1, 2];
        fixture.componentInstance.ngOnChanges({ excludeDays: {} });
        expect(fixture.componentInstance.view.days.length).to.equal(20);
        expect(fixture.componentInstance.view.totalDaysVisibleInWeek).to.equal(4);
        fixture.destroy();
    });
    it('should open and close the active day events list', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        expect(fixture.componentInstance.openRowIndex).to.equal(undefined);
        expect(fixture.componentInstance.openDay).to.equal(undefined);
        fixture.componentInstance.viewDate = moment()
            .startOf('month')
            .startOf('week')
            .add(8, 'days')
            .toDate();
        fixture.componentInstance.activeDayIsOpen = true;
        fixture.componentInstance.ngOnChanges({
            viewDate: {},
            activeDayIsOpen: {}
        });
        expect(fixture.componentInstance.openRowIndex).to.equal(7);
        expect(fixture.componentInstance.openDay).to.equal(fixture.componentInstance.view.days[8]);
        fixture.componentInstance.activeDayIsOpen = false;
        fixture.componentInstance.ngOnChanges({
            viewDate: {},
            activeDayIsOpen: {}
        });
        expect(!!fixture.componentInstance.openRowIndex).to.equal(false);
        expect(!!fixture.componentInstance.openDay).to.equal(false);
        fixture.destroy();
    });
    it('should add a custom CSS class to events', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                cssClass: 'foo',
                title: 'foo',
                color: {
                    primary: 'blue',
                    secondary: ''
                }
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var event = fixture.nativeElement.querySelector('.cal-days .cal-cell-row .cal-cell:nth-child(4) .cal-events .cal-event');
        expect(event.classList.contains('foo')).to.equal(true);
        fixture.destroy();
    });
    it('should add a custom CSS class to days via the beforeViewRender output', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.beforeViewRender
            .pipe(take(1))
            .subscribe(function (_a) {
            var body = _a.body;
            body[0].cssClass = 'foo';
        });
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        expect(fixture.nativeElement
            .querySelector('.cal-days .cal-cell')
            .classList.contains('foo')).to.equal(true);
        fixture.destroy();
    });
    it('should add a custom CSS class to headers via the beforeViewRender output', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.beforeViewRender
            .pipe(take(1))
            .subscribe(function (_a) {
            var header = _a.header;
            header[0].cssClass = 'foo';
        });
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        expect(fixture.nativeElement
            .querySelector('.cal-header .cal-cell')
            .classList.contains('foo')).to.equal(true);
        fixture.destroy();
    });
    it('should not remove other classes when removing the cssClass', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        var firstDay;
        fixture.componentInstance.beforeViewRender
            .pipe(take(1))
            .subscribe(function (_a) {
            var body = _a.body;
            body[0].cssClass = 'foo';
            firstDay = body[0];
        });
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var cell = fixture.nativeElement.querySelector('.cal-days .cal-cell');
        expect(cell.classList.contains('foo')).to.equal(true);
        expect(cell.classList.contains('cal-out-month')).to.equal(true);
        delete firstDay.cssClass;
        fixture.detectChanges();
        expect(cell.classList.contains('foo')).to.equal(false);
        expect(cell.classList.contains('cal-out-month')).to.equal(true);
        fixture.destroy();
    });
    it('should add the highlight class to events on mouse over', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                title: 'foo',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                }
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var event = fixture.nativeElement.querySelector('.cal-days .cal-cell-row .cal-cell:nth-child(4) .cal-events .cal-event');
        var day = fixture.nativeElement.querySelector('.cal-days .cal-cell-row .cal-cell:nth-child(4)');
        triggerDomEvent('mouseenter', event);
        fixture.detectChanges();
        expect(day.style.backgroundColor).to.equal('rgb(238, 238, 238)');
        expect(day.classList.contains('cal-event-highlight')).to.be.true;
        triggerDomEvent('mouseleave', event);
        fixture.detectChanges();
        expect(day.style.backgroundColor).to.be.equal('');
        expect(day.classList.contains('cal-event-highlight')).to.be.false;
    });
    it('should add event actions to the active day events', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-06-26'),
                end: new Date('2016-06-28'),
                title: 'foo',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                },
                actions: [
                    {
                        label: '<i class="fa fa-fw fa-times"></i>',
                        onClick: spy(),
                        cssClass: 'foo'
                    }
                ]
            }
        ];
        fixture.componentInstance.activeDayIsOpen = true;
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var action = fixture.nativeElement.querySelector('.cal-open-day-events .cal-event-action');
        expect(action.innerHTML).to.equal('<i class="fa fa-fw fa-times"></i>');
        expect(action.classList.contains('foo')).to.equal(true);
        action.click();
        expect(fixture.componentInstance.events[0].actions[0].onClick).to.have.been.calledWith({ event: fixture.componentInstance.events[0] });
    });
    it('should call the event clicked callback', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-06-26'),
                end: new Date('2016-06-28'),
                title: '<span>foo</span>',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                }
            }
        ];
        fixture.componentInstance.activeDayIsOpen = true;
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var title = fixture.nativeElement.querySelector('.cal-open-day-events .cal-event-title');
        expect(title.innerHTML).to.equal('<span>foo</span>');
        fixture.componentInstance.eventClicked.subscribe(function (val) {
            expect(val).to.deep.equal({ event: fixture.componentInstance.events[0] });
        });
        title.click();
    });
    it('should refresh the view when the refresh observable is emitted on', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.refresh = new Subject();
        fixture.componentInstance.ngOnInit();
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        var event = {
            start: new Date('2016-06-01'),
            end: new Date('2016-06-02'),
            title: 'foo',
            color: {
                primary: 'blue',
                secondary: 'lightblue'
            }
        };
        fixture.componentInstance.events.push(event);
        fixture.componentInstance.refresh.next(true);
        expect(fixture.componentInstance.view.days[3].events).to.deep.equal([
            event
        ]);
        fixture.destroy();
    });
    it('should allow the event title to be customised by the calendarConfig provider', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        eventTitle.month = function (event) {
            return "foo " + event.title;
        };
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-06-26'),
                end: new Date('2016-06-28'),
                title: 'bar',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                }
            }
        ];
        fixture.componentInstance.activeDayIsOpen = true;
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var title = fixture.nativeElement.querySelector('.cal-open-day-events .cal-event-title');
        expect(title.innerHTML).to.equal('foo bar');
    });
    it('should allow the locale to be changed', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.locale = 'de';
        fixture.componentInstance.viewDate = new Date();
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        expect(fixture.nativeElement
            .querySelector('.cal-header .cal-cell')
            .innerHTML.trim()).to.equal('Sonntag');
    });
    it('should allow the badge total to be customised', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.beforeViewRender
            .pipe(take(1))
            .subscribe(function (_a) {
            var body = _a.body;
            body[0].badgeTotal = 100;
        });
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.cal-day-badge').innerHTML).to.equal('100');
        fixture.destroy();
    });
    it('should show a tooltip on mouseover of the event', fakeAsync(function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        eventTitle.monthTooltip = function (e) {
            return "title: " + e.title;
        };
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                title: 'foo <b>bar</b>',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                }
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var event = fixture.nativeElement.querySelector('.cal-days .cal-cell-row .cal-cell:nth-child(4) .cal-events .cal-event');
        triggerDomEvent('mouseenter', event);
        fixture.detectChanges();
        flush();
        var tooltip = document.body.querySelector('.cal-tooltip');
        expect(tooltip.querySelector('.cal-tooltip-inner').innerHTML).to.equal('title: foo <b>bar</b>');
        expect(tooltip.classList.contains('cal-tooltip-top')).to.equal(true);
        expect(!!tooltip.style.top).to.equal(true);
        expect(!!tooltip.style.left).to.equal(true);
        triggerDomEvent('mouseleave', event);
        fixture.detectChanges();
        expect(!!document.body.querySelector('.cal-tooltip')).to.equal(false);
    }));
    it('should disable the tooltip', fakeAsync(function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        eventTitle.monthTooltip = function () { return ''; };
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                title: 'foo <b>bar</b>',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                }
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var event = fixture.nativeElement.querySelector('.cal-days .cal-cell-row .cal-cell:nth-child(4) .cal-events .cal-event');
        triggerDomEvent('mouseenter', event);
        fixture.detectChanges();
        flush();
        expect(!!document.body.querySelector('.cal-tooltip')).to.equal(false);
    }));
    it('should allow the start of the week to be changed', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.weekStartsOn = 1;
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.cal-header .cal-cell').innerText).to.deep.equal('Monday');
        fixture.destroy();
    });
    it('should allow events to be dragged and dropped', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-12-05');
        fixture.componentInstance.events = [
            {
                start: new Date(2016, 11, 5, 10, 39, 14),
                end: new Date(2016, 11, 5, 15, 11, 5),
                title: 'draggable event',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                },
                draggable: true
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        var dragEvent;
        fixture.componentInstance.eventTimesChanged.subscribe(function (e) {
            dragEvent = e;
        });
        fixture.detectChanges();
        document.body.appendChild(fixture.nativeElement);
        var cells = fixture.nativeElement.querySelectorAll('.cal-day-cell');
        var event = fixture.nativeElement.querySelector('.cal-event');
        event.style.width = '10px';
        event.style.height = '10px';
        var dragToCellPosition = cells[10].getBoundingClientRect();
        var eventStartPosition = event.getBoundingClientRect();
        triggerDomEvent('mousedown', event, {
            clientX: eventStartPosition.left,
            clientY: eventStartPosition.top
        });
        fixture.detectChanges();
        triggerDomEvent('mousemove', document.body, {
            clientX: dragToCellPosition.left,
            clientY: dragToCellPosition.top
        });
        fixture.detectChanges();
        expect(cells[10].classList.contains('cal-drag-over')).to.equal(true);
        var ghostElement = event.nextSibling;
        var eventAfterDragPosition = ghostElement.getBoundingClientRect();
        var movedLeft = dragToCellPosition.left - eventStartPosition.left;
        expect(eventAfterDragPosition.left).to.equal(eventStartPosition.left + movedLeft);
        var movedTop = dragToCellPosition.top - eventStartPosition.top;
        expect(Math.round(eventAfterDragPosition.top)).to.equal(eventStartPosition.top + movedTop);
        triggerDomEvent('mouseup', document.body, {
            clientX: dragToCellPosition.left,
            clientY: dragToCellPosition.top
        });
        fixture.detectChanges();
        expect(cells[10].classList.contains('cal-drag-over')).to.equal(false);
        fixture.destroy();
        expect(dragEvent.type).to.equal('drop');
        expect(dragEvent.event).to.equal(fixture.componentInstance.events[0]);
        expect(dragEvent.newStart).to.deep.equal(new Date(2016, 11, 7, 10, 39, 14));
        expect(dragEvent.newEnd).to.deep.equal(new Date(2016, 11, 7, 15, 11, 5));
        expect(dragEvent.day.date).to.deep.equal(new Date('2016-12-07'));
    });
    it('should apply the year, month and date changes in the correct order when dragging and dropping events', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2017-02-05');
        fixture.componentInstance.events = [
            {
                start: new Date('2017-02-01'),
                title: 'draggable event',
                color: {
                    primary: 'blue',
                    secondary: 'rgb(238, 238, 238)'
                },
                draggable: true
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        var dragEvent;
        fixture.componentInstance.eventTimesChanged.subscribe(function (e) {
            dragEvent = e;
        });
        fixture.detectChanges();
        document.body.appendChild(fixture.nativeElement);
        var cells = fixture.nativeElement.querySelectorAll('.cal-day-cell');
        var event = fixture.nativeElement.querySelector('.cal-event');
        event.style.width = '10px';
        event.style.height = '10px';
        var dragToCellPosition = cells[2].getBoundingClientRect();
        var eventStartPosition = event.getBoundingClientRect();
        triggerDomEvent('mousedown', event, {
            clientX: eventStartPosition.left,
            clientY: eventStartPosition.top
        });
        fixture.detectChanges();
        triggerDomEvent('mousemove', document.body, {
            clientX: dragToCellPosition.left,
            clientY: dragToCellPosition.top
        });
        fixture.detectChanges();
        triggerDomEvent('mouseup', document.body, {
            clientX: dragToCellPosition.left,
            clientY: dragToCellPosition.top
        });
        fixture.detectChanges();
        fixture.destroy();
        expect(dragEvent.type).to.equal('drop');
        expect(dragEvent.event).to.equal(fixture.componentInstance.events[0]);
        expect(dragEvent.newStart).to.deep.equal(new Date('2017-01-31'));
        expect(dragEvent.newEnd).to.deep.equal(undefined);
    });
    it('should update the event title', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-01');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                title: 'foo',
                color: {
                    primary: 'blue',
                    secondary: ''
                }
            }
        ];
        fixture.componentInstance.activeDayIsOpen = true;
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var event = fixture.nativeElement.querySelector('.cal-event-title');
        expect(event.innerHTML).to.equal('foo');
        fixture.componentInstance.events[0].title = 'bar';
        fixture.detectChanges();
        expect(event.innerHTML).to.equal('bar');
        fixture.destroy();
    });
    it('should handle the click event on month cell events', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.events = [
            {
                start: new Date('2016-05-30'),
                end: new Date('2016-06-02'),
                title: 'foo',
                color: {
                    primary: 'blue',
                    secondary: ''
                }
            }
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, events: {} });
        fixture.detectChanges();
        var eventClickedEvent;
        fixture.componentInstance.eventClicked.subscribe(function (e) {
            eventClickedEvent = e;
        });
        var dayClickedFired = false;
        fixture.componentInstance.dayClicked.subscribe(function () {
            dayClickedFired = true;
        });
        var event = fixture.nativeElement.querySelector('.cal-days .cal-cell-row .cal-cell:nth-child(4) .cal-events .cal-event');
        event.click();
        fixture.destroy();
        expect(eventClickedEvent).to.deep.equal({
            event: fixture.componentInstance.events[0]
        });
        expect(dayClickedFired).to.equal(false);
    });
    it('should add helper classes to the header cells', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        fixture.detectChanges();
        var headerCells = fixture.nativeElement.querySelectorAll('.cal-header .cal-cell');
        expect(headerCells[0].classList.contains('cal-past')).to.equal(true);
        expect(headerCells[0].classList.contains('cal-today')).to.equal(false);
        expect(headerCells[0].classList.contains('cal-future')).to.equal(false);
        expect(headerCells[0].classList.contains('cal-weekend')).to.equal(true);
        expect(headerCells[1].classList.contains('cal-weekend')).to.equal(false);
        expect(headerCells[6].classList.contains('cal-weekend')).to.equal(true);
        fixture.destroy();
    });
    it('should allow the weekend days to be customised', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2017-06-25');
        fixture.componentInstance.weekendDays = [
            DAYS_OF_WEEK.FRIDAY,
            DAYS_OF_WEEK.SATURDAY
        ];
        fixture.componentInstance.ngOnChanges({ viewDate: {}, weekendDays: {} });
        fixture.detectChanges();
        expect(fixture.componentInstance.view.days[0].isWeekend).to.equal(false);
        expect(fixture.componentInstance.view.days[5].isWeekend).to.equal(true);
        expect(fixture.componentInstance.view.days[6].isWeekend).to.equal(true);
        var headerCells = fixture.nativeElement.querySelectorAll('.cal-header .cal-cell');
        expect(headerCells[0].classList.contains('cal-weekend')).to.equal(false);
        expect(headerCells[5].classList.contains('cal-weekend')).to.equal(true);
        expect(headerCells[6].classList.contains('cal-weekend')).to.equal(true);
        fixture.destroy();
    });
    it('should only call the beforeViewRender output once when refreshing the view', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.refresh = new Subject();
        fixture.componentInstance.ngOnInit();
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        var beforeViewRenderCalled = sinon.spy();
        // use subscription to test that it was only called a max of one times
        var subscription = fixture.componentInstance.beforeViewRender.subscribe(beforeViewRenderCalled);
        fixture.componentInstance.refresh.next(true);
        expect(beforeViewRenderCalled).to.have.been.calledOnce;
        subscription.unsubscribe();
        fixture.destroy();
    });
    it('should log on invalid events', function () {
        var stub = sinon.stub(console, 'warn');
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        fixture.componentInstance.viewDate = new Date('2017-01-01');
        fixture.componentInstance.events = [
            { start: '2017-01-01', title: '', color: { primary: '', secondary: '' } }
        ];
        fixture.componentInstance.ngOnChanges({ events: {}, viewDate: {} });
        fixture.detectChanges();
        stub.restore();
        expect(stub).to.have.been.calledOnce; // tslint:disable-line
    });
    it('should expose the view period on the beforeViewRender output', function () {
        var fixture = TestBed.createComponent(CalendarMonthViewComponent);
        var beforeViewRenderCalled = sinon.spy();
        fixture.componentInstance.beforeViewRender
            .pipe(take(1))
            .subscribe(beforeViewRenderCalled);
        fixture.componentInstance.ngOnInit();
        fixture.componentInstance.viewDate = new Date('2016-06-27');
        fixture.componentInstance.ngOnChanges({ viewDate: {} });
        expect(beforeViewRenderCalled.getCall(0).args[0].period.start).to.be.an.instanceOf(Date);
        expect(beforeViewRenderCalled.getCall(0).args[0].period.end).to.be.an.instanceOf(Date);
        expect(Array.isArray(beforeViewRenderCalled.getCall(0).args[0].period.events)).to.equal(true);
        fixture.destroy();
    });
});
//# sourceMappingURL=calendar-month-view.component.spec.js.map
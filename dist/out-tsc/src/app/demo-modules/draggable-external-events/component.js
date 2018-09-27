var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.CalendarView = CalendarView;
        this.view = CalendarView.Month;
        this.viewDate = new Date();
        this.externalEvents = [
            {
                title: 'Event 1',
                color: colors.yellow,
                start: new Date(),
                draggable: true
            },
            {
                title: 'Event 2',
                color: colors.blue,
                start: new Date(),
                draggable: true
            }
        ];
        this.events = [];
        this.activeDayIsOpen = false;
        this.refresh = new Subject();
    }
    DemoComponent.prototype.eventDropped = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd, allDay = _a.allDay;
        var externalIndex = this.externalEvents.indexOf(event);
        if (typeof allDay !== 'undefined') {
            event.allDay = allDay;
        }
        if (externalIndex > -1) {
            this.externalEvents.splice(externalIndex, 1);
            this.events.push(event);
        }
        event.start = newStart;
        if (newEnd) {
            event.end = newEnd;
        }
        if (this.view === 'month') {
            this.viewDate = newStart;
            this.activeDayIsOpen = true;
        }
        this.events = this.events.slice();
    };
    DemoComponent.prototype.externalDrop = function (event) {
        if (this.externalEvents.indexOf(event) === -1) {
            this.events = this.events.filter(function (iEvent) { return iEvent !== event; });
            this.externalEvents.push(event);
        }
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html',
            styles: [
                "\n      .drag-active {\n        position: relative;\n        z-index: 1;\n        pointer-events: none;\n      }\n      .drag-over {\n        background-color: #eee;\n      }\n    "
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
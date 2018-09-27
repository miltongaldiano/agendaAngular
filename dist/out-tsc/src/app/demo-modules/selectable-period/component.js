var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
        this.selectedDays = [];
    }
    DemoComponent.prototype.dayClicked = function (day) {
        this.selectedMonthViewDay = day;
        var selectedDateTime = this.selectedMonthViewDay.date.getTime();
        var dateIndex = this.selectedDays.findIndex(function (selectedDay) { return selectedDay.date.getTime() === selectedDateTime; });
        if (dateIndex > -1) {
            delete this.selectedMonthViewDay.cssClass;
            this.selectedDays.splice(dateIndex, 1);
        }
        else {
            this.selectedDays.push(this.selectedMonthViewDay);
            day.cssClass = 'cal-day-selected';
            this.selectedMonthViewDay = day;
        }
    };
    DemoComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        body.forEach(function (day) {
            if (_this.selectedDays.some(function (selectedDay) { return selectedDay.date.getTime() === day.date.getTime(); })) {
                day.cssClass = 'cal-day-selected';
            }
        });
    };
    DemoComponent.prototype.hourSegmentClicked = function (date) {
        this.selectedDayViewDate = date;
        this.addSelectedDayViewClass();
    };
    DemoComponent.prototype.beforeDayViewRender = function (dayView) {
        this.dayView = dayView;
        this.addSelectedDayViewClass();
    };
    DemoComponent.prototype.addSelectedDayViewClass = function () {
        var _this = this;
        this.dayView.forEach(function (hourSegment) {
            hourSegment.segments.forEach(function (segment) {
                delete segment.cssClass;
                if (_this.selectedDayViewDate &&
                    segment.date.getTime() === _this.selectedDayViewDate.getTime()) {
                    segment.cssClass = 'cal-day-selected';
                }
            });
        });
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html',
            // don't do this in your app, its only so the styles get applied globally
            styles: [
                "\n      .cal-day-selected,\n      .cal-day-selected:hover {\n        background-color: deeppink !important;\n      }\n    "
            ],
            encapsulation: ViewEncapsulation.None
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, TemplateRef } from '@angular/core';
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarDayViewHourSegmentComponent.prototype, "segment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewHourSegmentComponent.prototype, "segmentHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarDayViewHourSegmentComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewHourSegmentComponent.prototype, "customTemplate", void 0);
    CalendarDayViewHourSegmentComponent = __decorate([
        Component({
            selector: 'mwl-calendar-day-view-hour-segment',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarDayViewHourSegmentComponent);
    return CalendarDayViewHourSegmentComponent;
}());
export { CalendarDayViewHourSegmentComponent };
//# sourceMappingURL=calendar-day-view-hour-segment.component.js.map
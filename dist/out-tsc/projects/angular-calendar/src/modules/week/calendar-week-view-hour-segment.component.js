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
var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
    function CalendarWeekViewHourSegmentComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);
    CalendarWeekViewHourSegmentComponent = __decorate([
        Component({
            selector: 'mwl-calendar-week-view-hour-segment',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.date | calendarDate:'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewHourSegmentComponent);
    return CalendarWeekViewHourSegmentComponent;
}());
export { CalendarWeekViewHourSegmentComponent };
//# sourceMappingURL=calendar-week-view-hour-segment.component.js.map
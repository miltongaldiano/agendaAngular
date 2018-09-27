var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { trackByEventId } from '../common/util';
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new EventEmitter();
        this.unhighlightDay = new EventEmitter();
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "day", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "openDay", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarMonthCellComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
    CalendarMonthCellComponent = __decorate([
        Component({
            selector: 'mwl-calendar-month-cell',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy:trackByEventId\"\n          [style.backgroundColor]=\"event.color?.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
            host: {
                class: 'cal-cell cal-day-cell',
                '[class.cal-past]': 'day.isPast',
                '[class.cal-today]': 'day.isToday',
                '[class.cal-future]': 'day.isFuture',
                '[class.cal-weekend]': 'day.isWeekend',
                '[class.cal-in-month]': 'day.inMonth',
                '[class.cal-out-month]': '!day.inMonth',
                '[class.cal-has-events]': 'day.events.length > 0',
                '[class.cal-open]': 'day === openDay',
                '[class.cal-event-highlight]': '!!day.backgroundColor',
                '[style.backgroundColor]': 'day.backgroundColor'
            }
        })
    ], CalendarMonthCellComponent);
    return CalendarMonthCellComponent;
}());
export { CalendarMonthCellComponent };
//# sourceMappingURL=calendar-month-cell.component.js.map
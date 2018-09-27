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
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarDayViewEventComponent.prototype, "dayEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarDayViewEventComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewEventComponent.prototype, "customTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewEventComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewEventComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewEventComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarDayViewEventComponent.prototype, "eventClicked", void 0);
    CalendarDayViewEventComponent = __decorate([
        Component({
            selector: 'mwl-calendar-day-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color?.secondary\"\n        [style.borderColor]=\"dayEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        (mwlClick)=\"eventClicked.emit()\">\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\">\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarDayViewEventComponent);
    return CalendarDayViewEventComponent;
}());
export { CalendarDayViewEventComponent };
//# sourceMappingURL=calendar-day-view-event.component.js.map
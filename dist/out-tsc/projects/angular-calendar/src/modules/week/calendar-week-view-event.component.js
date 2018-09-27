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
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new EventEmitter();
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
    CalendarWeekViewEventComponent = __decorate([
        Component({
            selector: 'mwl-calendar-week-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color?.secondary\"\n        [style.borderColor]=\"weekEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"!tooltipDisabled ? (weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event) : ''\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        (mwlClick)=\"eventClicked.emit()\">\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\">\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewEventComponent);
    return CalendarWeekViewEventComponent;
}());
export { CalendarWeekViewEventComponent };
//# sourceMappingURL=calendar-week-view-event.component.js.map
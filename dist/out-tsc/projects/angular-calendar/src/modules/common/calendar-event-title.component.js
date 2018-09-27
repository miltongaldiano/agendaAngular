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
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarEventTitleComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarEventTitleComponent.prototype, "view", void 0);
    CalendarEventTitleComponent = __decorate([
        Component({
            selector: 'mwl-calendar-event-title',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarEventTitleComponent);
    return CalendarEventTitleComponent;
}());
export { CalendarEventTitleComponent };
//# sourceMappingURL=calendar-event-title.component.js.map
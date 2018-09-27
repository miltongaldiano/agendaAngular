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
import { trackByIndex } from './util';
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByIndex = trackByIndex;
    }
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarEventActionsComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
    CalendarEventActionsComponent = __decorate([
        Component({
            selector: 'mwl-calendar-event-actions',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\">\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy:trackByIndex\"\n          (mwlClick)=\"action.onClick({event: event})\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\">\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarEventActionsComponent);
    return CalendarEventActionsComponent;
}());
export { CalendarEventActionsComponent };
//# sourceMappingURL=calendar-event-actions.component.js.map
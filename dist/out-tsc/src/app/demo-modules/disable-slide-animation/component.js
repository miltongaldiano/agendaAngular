var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { isSameDay, isSameMonth } from 'date-fns';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.viewDate = new Date();
        this.events = [
            {
                start: new Date(),
                title: 'An event',
                color: colors.red
            }
        ];
    }
    DemoComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html'
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
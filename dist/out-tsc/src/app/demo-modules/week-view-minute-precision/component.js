var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { addDays, addHours, startOfDay } from 'date-fns';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.viewDate = new Date();
        this.events = [
            {
                start: addHours(startOfDay(new Date()), 5),
                end: addHours(startOfDay(new Date()), 17),
                title: 'Event 1',
                color: colors.red
            },
            {
                start: addHours(startOfDay(addDays(new Date(), 1)), 2),
                end: addHours(startOfDay(addDays(new Date(), 1)), 18),
                title: 'Event 2',
                color: colors.blue
            },
            {
                start: addHours(startOfDay(new Date()), 8),
                title: 'Event 3',
                color: colors.blue
            }
        ];
    }
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
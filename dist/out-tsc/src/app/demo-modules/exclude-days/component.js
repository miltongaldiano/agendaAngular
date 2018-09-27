var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date('2016-01-05');
        this.events = [
            {
                start: new Date('2016-01-08'),
                end: new Date('2016-01-10'),
                title: 'One day excluded event',
                color: colors.red,
                allDay: true
            },
            {
                start: new Date('2016-01-01'),
                end: new Date('2016-01-09'),
                title: 'Multiple weeks event',
                allDay: true
            }
        ];
        // exclude weekends
        this.excludeDays = [0, 6];
        this.weekStartsOn = DAYS_OF_WEEK.SUNDAY;
    }
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            templateUrl: 'template.html'
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
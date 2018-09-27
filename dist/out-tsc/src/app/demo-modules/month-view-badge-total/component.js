var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Increments badge total on the day cell',
                color: colors.yellow,
                start: new Date(),
                meta: {
                    incrementsBadgeTotal: true
                }
            },
            {
                title: 'Does not increment the badge total on the day cell',
                color: colors.blue,
                start: new Date(),
                meta: {
                    incrementsBadgeTotal: false
                }
            }
        ];
    }
    DemoComponent.prototype.beforeMonthViewRender = function (_a) {
        var body = _a.body;
        body.forEach(function (day) {
            day.badgeTotal = day.events.filter(function (event) { return event.meta.incrementsBadgeTotal; }).length;
        });
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
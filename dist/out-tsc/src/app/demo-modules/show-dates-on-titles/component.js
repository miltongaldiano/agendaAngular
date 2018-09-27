var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEventTitleFormatter } from 'angular-calendar';
import { CustomEventTitleFormatter } from './custom-event-title-formatter.provider';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'An event',
                start: new Date(),
                color: colors.red
            }
        ];
    }
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html',
            providers: [
                {
                    provide: CalendarEventTitleFormatter,
                    useClass: CustomEventTitleFormatter
                }
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
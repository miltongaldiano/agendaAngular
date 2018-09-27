var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarUtils } from 'angular-calendar';
import { subWeeks, startOfMonth, endOfMonth, addWeeks } from 'date-fns';
var MyCalendarUtils = /** @class */ (function (_super) {
    __extends(MyCalendarUtils, _super);
    function MyCalendarUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyCalendarUtils.prototype.getMonthView = function (args) {
        args.viewStart = subWeeks(startOfMonth(args.viewDate), 1);
        args.viewEnd = addWeeks(endOfMonth(args.viewDate), 1);
        return _super.prototype.getMonthView.call(this, args);
    };
    return MyCalendarUtils;
}(CalendarUtils));
export { MyCalendarUtils };
// tslint:disable-next-line
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.viewDate = new Date();
        this.events = [];
    }
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html',
            providers: [
                {
                    provide: CalendarUtils,
                    useClass: MyCalendarUtils
                }
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
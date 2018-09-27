var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CalendarCommonModule, CalendarEventTitleFormatter, CalendarDateFormatter } from './common/calendar-common.module';
import { CalendarMonthModule } from './month/calendar-month.module';
import { CalendarWeekModule } from './week/calendar-week.module';
import { CalendarDayModule } from './day/calendar-day.module';
import { CalendarUtils } from './common/calendar-utils.provider';
export * from './common/calendar-common.module';
export * from './month/calendar-month.module';
export * from './week/calendar-week.module';
export * from './day/calendar-day.module';
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule_1 = CalendarModule;
    CalendarModule.forRoot = function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    var CalendarModule_1;
    CalendarModule = CalendarModule_1 = __decorate([
        NgModule({
            imports: [
                CalendarCommonModule,
                CalendarMonthModule,
                CalendarWeekModule,
                CalendarDayModule
            ],
            exports: [
                CalendarCommonModule,
                CalendarMonthModule,
                CalendarWeekModule,
                CalendarDayModule
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());
export { CalendarModule };
//# sourceMappingURL=calendar.module.js.map
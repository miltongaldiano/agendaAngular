var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEventActionsComponent } from './calendar-event-actions.component';
import { CalendarEventTitleComponent } from './calendar-event-title.component';
import { CalendarTooltipDirective, CalendarTooltipWindowComponent } from './calendar-tooltip.directive';
import { CalendarPreviousViewDirective } from './calendar-previous-view.directive';
import { CalendarNextViewDirective } from './calendar-next-view.directive';
import { CalendarTodayDirective } from './calendar-today.directive';
import { CalendarDatePipe } from './calendar-date.pipe';
import { CalendarEventTitlePipe } from './calendar-event-title.pipe';
import { ClickDirective } from './click.directive';
import { CalendarEventTitleFormatter } from './calendar-event-title-formatter.provider';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
import { CalendarUtils } from './calendar-utils.provider';
export * from './calendar-event-title-formatter.provider';
export * from './calendar-moment-date-formatter.provider';
export * from './calendar-native-date-formatter.provider';
export * from './calendar-angular-date-formatter.provider';
export * from './calendar-date-formatter.provider';
export * from './calendar-utils.provider';
export * from './calendar-event-times-changed-event.interface';
export * from '../../date-adapters/date-adapter';
export * from './calendar-view.enum';
export { DAYS_OF_WEEK } from 'calendar-utils';
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    CalendarCommonModule_1 = CalendarCommonModule;
    CalendarCommonModule.forRoot = function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    var CalendarCommonModule_1;
    CalendarCommonModule = CalendarCommonModule_1 = __decorate([
        NgModule({
            declarations: [
                CalendarEventActionsComponent,
                CalendarEventTitleComponent,
                CalendarTooltipWindowComponent,
                CalendarTooltipDirective,
                CalendarPreviousViewDirective,
                CalendarNextViewDirective,
                CalendarTodayDirective,
                CalendarDatePipe,
                CalendarEventTitlePipe,
                ClickDirective
            ],
            imports: [CommonModule],
            exports: [
                CalendarEventActionsComponent,
                CalendarEventTitleComponent,
                CalendarTooltipWindowComponent,
                CalendarTooltipDirective,
                CalendarPreviousViewDirective,
                CalendarNextViewDirective,
                CalendarTodayDirective,
                CalendarDatePipe,
                CalendarEventTitlePipe,
                ClickDirective
            ],
            entryComponents: [CalendarTooltipWindowComponent]
        })
    ], CalendarCommonModule);
    return CalendarCommonModule;
}());
export { CalendarCommonModule };
//# sourceMappingURL=calendar-common.module.js.map
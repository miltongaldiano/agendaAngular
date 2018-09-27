var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { CalendarView } from './calendar-view.enum';
import { addDaysWithExclusions } from './util';
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarPreviousViewDirective.prototype, "view", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
    __decorate([
        HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarPreviousViewDirective.prototype, "onClick", null);
    CalendarPreviousViewDirective = __decorate([
        Directive({
            selector: '[mwlCalendarPreviousView]'
        }),
        __metadata("design:paramtypes", [DateAdapter])
    ], CalendarPreviousViewDirective);
    return CalendarPreviousViewDirective;
}());
export { CalendarPreviousViewDirective };
//# sourceMappingURL=calendar-previous-view.directive.js.map
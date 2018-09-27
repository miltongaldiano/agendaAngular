var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, LOCALE_ID, Inject, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEventTimesChangedEventType } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { validateEvents, trackByIndex } from '../common/util';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * @hidden
         */
        this.trackByIndex = trackByIndex;
        /**
         * @hidden
         */
        this.trackByDate = function (index, day) { return day.date.toISOString(); };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = this.dateAdapter.getYear(day.date);
        var month = this.dateAdapter.getMonth(day.date);
        var date = this.dateAdapter.getDate(day.date);
        var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
            newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({
            event: event,
            newStart: newStart,
            newEnd: newEnd,
            day: day,
            type: CalendarEventTimesChangedEventType.Drop
        });
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return _this.dateAdapter.isSameDay(day.date, _this.viewDate);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "events", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Subject)
    ], CalendarMonthViewComponent.prototype, "refresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarMonthViewComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarMonthViewComponent = __decorate([
        Component({
            selector: 'mwl-calendar-month-view',
            template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets; trackByIndex\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of (view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)); trackBy:trackByDate\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped(openDay, $event.dropData.event)\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(2, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            CalendarUtils, String, DateAdapter])
    ], CalendarMonthViewComponent);
    return CalendarMonthViewComponent;
}());
export { CalendarMonthViewComponent };
//# sourceMappingURL=calendar-month-view.component.js.map
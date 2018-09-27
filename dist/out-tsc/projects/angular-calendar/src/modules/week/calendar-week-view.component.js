var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, LOCALE_ID, Inject, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarDragHelper } from '../common/calendar-drag-helper.provider';
import { CalendarResizeHelper } from '../common/calendar-resize-helper.provider';
import { CalendarEventTimesChangedEventType } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { validateEvents, trackByIndex, roundToNearest, trackByWeekDayHeaderDate, trackByHourSegment, trackByHour, getMinutesMoved, getDefaultEventEnd, getMinimumEventHeightInMinutes, trackByDayOrWeekEvent, isDraggedWithinPeriod, shouldFireDroppedEvent, getWeekViewPeriod } from '../common/util';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByIndex = trackByIndex;
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByDayOrWeekEvent = trackByDayOrWeekEvent;
        /**
         * @hidden
         */
        this.trackByHourColumn = function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
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
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarWeekViewComponent.prototype.resizeStarted = function (eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        var resizeHelper = new CalendarResizeHelper(eventsContainer, minWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.timeEventResizeStarted = function (eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.timeEventResizing = function (timeEvent, resizeEvent) {
        var _this = this;
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        var adjustedEvents = new Map();
        var tempEvents = this.events.slice();
        this.timeEventResizes.forEach(function (lastResizeEvent, event) {
            var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
            var adjustedEvent = __assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.timeEventResizeEnded = function (timeEvent) {
        this.view = this.getWeekView(this.events);
        var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        this.timeEventResizes.delete(timeEvent.event);
        var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
        this.eventTimesChanged.emit({
            newStart: newEventDates.start,
            newEnd: newEventDates.end,
            event: timeEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeStarted = function (allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.allDayEventResizing = function (allDayEvent, resizeEvent, dayWidth) {
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeEnded = function (allDayEvent) {
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        var allDayEventResizingBeforeStart = currentResize.edge === 'left';
        var daysDiff;
        if (allDayEventResizingBeforeStart) {
            daysDiff = allDayEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = allDayEvent.span - currentResize.originalSpan;
        }
        allDayEvent.offset = currentResize.originalOffset;
        allDayEvent.span = currentResize.originalSpan;
        var newStart = allDayEvent.event.start;
        var newEnd = allDayEvent.event.end || allDayEvent.event.start;
        if (allDayEventResizingBeforeStart) {
            newStart = this.dateAdapter.addDays(newStart, daysDiff);
        }
        else {
            newEnd = this.dateAdapter.addDays(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: allDayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
        this.allDayEventResizes.delete(allDayEvent);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragStarted = function (eventsContainer, event, dayEvent) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        var dragHelper = new CalendarDragHelper(eventsContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.allDayEventResizes.size === 0 &&
                _this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents
                });
        };
        this.dragActive = true;
        this.eventDragEnter = 0;
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(function (column) {
                var linkedEvent = column.events.find(function (columnEvent) {
                    return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                });
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            });
        }
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragMove = function (dayEvent, dragEvent) {
        if (this.snapDraggedEvents) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent_1 = dayEvent.event;
            var adjustedEvent_1 = __assign({}, originalEvent_1, newEventTimes);
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent_1) {
                    return adjustedEvent_1;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent_1, originalEvent_1]]));
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragEnded = function (weekEvent, dragEndEvent, dayWidth, useY) {
        if (useY === void 0) { useY = false; }
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
        if (this.eventDragEnter > 0 &&
            isDraggedWithinPeriod(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: CalendarEventTimesChangedEventType.Drag,
                allDay: !useY
            });
        }
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader(__assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        this.emitBeforeViewRender();
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.view = this.getWeekView(this.events);
        this.emitBeforeViewRender();
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit(__assign({ header: this.days }, this.view));
        }
    };
    CalendarWeekViewComponent.prototype.getWeekView = function (events) {
        return this.utils.getWeekView(__assign({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, getWeekViewPeriod(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    CalendarWeekViewComponent.prototype.getDragMovedEventTimes = function (weekEvent, dragEndEvent, dayWidth, useY) {
        var daysDragged = roundToNearest(dragEndEvent.x, dayWidth) / dayWidth;
        var minutesMoved = useY
            ? getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        var start = this.dateAdapter.addMinutes(this.dateAdapter.addDays(weekEvent.event.start, daysDragged), minutesMoved);
        var end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(this.dateAdapter.addDays(weekEvent.event.end, daysDragged), minutesMoved);
        }
        return { start: start, end: end };
    };
    CalendarWeekViewComponent.prototype.restoreOriginalEvents = function (tempEvents, adjustedEvents) {
        this.view = this.getWeekView(tempEvents);
        var adjustedEventsArray = tempEvents.filter(function (event) {
            return adjustedEvents.has(event);
        });
        this.view.hourColumns.forEach(function (column) {
            adjustedEventsArray.forEach(function (adjustedEvent) {
                var originalEvent = adjustedEvents.get(adjustedEvent);
                var existingColumnEvent = column.events.find(function (columnEvent) { return columnEvent.event === adjustedEvent; });
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    column.events.push({
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false
                    });
                }
            });
        });
        adjustedEvents.clear();
    };
    CalendarWeekViewComponent.prototype.getTimeEventResizedDates = function (calendarEvent, resizeEvent) {
        var minimumEventHeight = getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight);
        var newEventDates = {
            start: calendarEvent.start,
            end: getDefaultEventEnd(this.dateAdapter, calendarEvent, minimumEventHeight)
        };
        var end = calendarEvent.end, eventWithoutEnd = __rest(calendarEvent, ["end"]);
        var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: getDefaultEventEnd(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
        };
        if (resizeEvent.edges.left) {
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            var newStart = this.dateAdapter.addDays(newEventDates.start, daysDiff);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (resizeEvent.edges.right) {
            var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            var newEnd = this.dateAdapter.addDays(newEventDates.end, daysDiff);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (resizeEvent.edges.top) {
            var minutesMoved = getMinutesMoved(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (resizeEvent.edges.bottom) {
            var minutesMoved = getMinutesMoved(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    };
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "events", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Subject)
    ], CalendarWeekViewComponent.prototype, "refresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "precision", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
    CalendarWeekViewComponent = __decorate([
        Component({
            selector: 'mwl-calendar-week-view',
            template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventDropped({dropData: $event}, $event.newStart, true)\">\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\">\n          </div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\">\n          </div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy:trackByIndex\"\n          #eventRowContainer\n          class=\"cal-events-row\">\n          <div\n            *ngFor=\"let allDayEvent of eventRow.row; trackBy:trackByDayOrWeekEvent\"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"allDayEvent.event.draggable && allDayEventResizes.size === 0\"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\"\n            (resizing)=\"allDayEventResizing(allDayEvent, $event, dayColumnWidth)\"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{event: allDayEvent.event, calendarId: calendarId}\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y: !snapDraggedEvents && allDayEvent.event.draggable && allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? {x: dayColumnWidth} : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStarted(eventRowContainer, event)\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\">\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"allDayEvent.event?.resizable?.beforeStart && !allDayEvent.startsBeforeWeek\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\">\n            </div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: allDayEvent.event})\">\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"allDayEvent.event?.resizable?.afterEnd && !allDayEvent.endsAfterWeek\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"let hour of view.hourColumns[0].hours; trackBy:trackByHour; let odd = odd\"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\">\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\">\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy:trackByHourColumn\">\n            <div\n              *ngFor=\"let timeEvent of column.events; trackBy:trackByDayOrWeekEvent\"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"timeEvent.event.draggable && timeEventResizes.size === 0\"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth, top: eventSnapSize || hourSegmentHeight, bottom: eventSnapSize || hourSegmentHeight}\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"timeEventResizeStarted(dayColumns, timeEvent, $event)\"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{event: timeEvent.event, calendarId: calendarId}\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"snapDraggedEvents ? {x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight} : {}\"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragPointerDown)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\">\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"timeEvent.event?.resizable?.beforeStart && !timeEvent.startsBeforeDay\"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\">\n              </div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                (eventClicked)=\"eventClicked.emit({event: timeEvent.event})\">\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"timeEvent.event?.resizable?.afterEnd && !timeEvent.endsAfterDay\"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\">\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"let hour of column.hours; trackBy:trackByHour; let odd = odd\"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\">\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n                mwlDroppable\n                [dragOverClass]=\"!dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\">\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(2, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            CalendarUtils, String, DateAdapter])
    ], CalendarWeekViewComponent);
    return CalendarWeekViewComponent;
}());
export { CalendarWeekViewComponent };
//# sourceMappingURL=calendar-week-view.component.js.map
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
import { CalendarDragHelper } from '../common/calendar-drag-helper.provider';
import { CalendarResizeHelper } from '../common/calendar-resize-helper.provider';
import { CalendarEventTimesChangedEventType } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { validateEvents, trackByEventId, trackByHour, trackByHourSegment, getMinutesMoved, getDefaultEventEnd, getMinimumEventHeightInMinutes, trackByDayOrWeekEvent, isDraggedWithinPeriod, shouldFireDroppedEvent } from '../common/util';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
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
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new EventEmitter();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */
        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */
        this.trackByHour = trackByHour;
        /**
         * @hidden
         */
        this.trackByHourSegment = trackByHourSegment;
        /**
         * @hidden
         */
        this.trackByDayEvent = trackByDayOrWeekEvent;
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
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
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
        if (shouldFireDroppedEvent(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: CalendarEventTimesChangedEventType.Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayEventsContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new CalendarResizeHelper(dayEventsContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var resizingBeforeStart = currentResize.edge === 'top';
        var pixelsMoved;
        if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var minutesMoved = getMinutesMoved(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
        var newStart = dayEvent.event.start;
        var newEnd = getDefaultEventEnd(this.dateAdapter, dayEvent.event, getMinimumEventHeightInMinutes(this.hourSegments, this.hourSegmentHeight));
        if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
        }
        else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: CalendarEventTimesChangedEventType.Resize
        });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStarted = function (event, dayEventsContainer) {
        var _this = this;
        var dragHelper = new CalendarDragHelper(dayEventsContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents
                });
        };
        this.eventDragEnter = 0;
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.dragEnded = function (dayEvent, dragEndEvent) {
        if (this.eventDragEnter > 0) {
            var minutesMoved = getMinutesMoved(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);
            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
                minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
                newStart = this.view.period.start;
            }
            var newEnd = void 0;
            if (dayEvent.event.end) {
                newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }
            if (isDraggedWithinPeriod(newStart, newEnd, this.view.period)) {
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: dayEvent.event,
                    type: CalendarEventTimesChangedEventType.Drag
                });
            }
        }
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.emitBeforeViewRender();
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
        this.emitBeforeViewRender();
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    CalendarDayViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours,
                    allDayEvents: this.view.allDayEvents
                },
                period: this.view.period
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Date)
    ], CalendarDayViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], CalendarDayViewComponent.prototype, "events", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Subject)
    ], CalendarDayViewComponent.prototype, "refresh", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarDayViewComponent.prototype, "locale", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
    CalendarDayViewComponent = __decorate([
        Component({
            selector: 'mwl-calendar-day-view',
            template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\">\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy:trackByEventId\"\n          [dayEvent]=\"{event: event}\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({event: event})\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event, calendarId: calendarId}\"\n          [dragAxis]=\"{x: !snapDraggedEvents && event.draggable, y: !snapDraggedEvents && event.draggable}\">\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy:trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{top: eventSnapSize || hourSegmentHeight, bottom: eventSnapSize || hourSegmentHeight}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{event: dayEvent.event, calendarId: calendarId}\"\n            [dragAxis]=\"{x: !snapDraggedEvents && dayEvent.event.draggable && currentResizes.size === 0, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"snapDraggedEvents ? {y: eventSnapSize || hourSegmentHeight} : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStarted(event, dayEventsContainer)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"dayEvent.event?.resizable?.beforeStart && !dayEvent.startsBeforeDay\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\">\n            </div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\">\n            </div>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours; trackBy:trackByHour\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(2, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            CalendarUtils, String, DateAdapter])
    ], CalendarDayViewComponent);
    return CalendarDayViewComponent;
}());
export { CalendarDayViewComponent };
//# sourceMappingURL=calendar-day-view.component.js.map
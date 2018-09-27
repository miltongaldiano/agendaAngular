import { validateEvents as validateEventsWithoutLog } from 'calendar-utils';
export var validateEvents = function (events) {
    var warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, ['angular-calendar'].concat(args));
    };
    return validateEventsWithoutLog(events, warn);
};
export function isInside(outer, inner) {
    return (Math.ceil(outer.left) <= Math.ceil(inner.left) &&
        Math.ceil(inner.left) <= Math.ceil(outer.right) &&
        Math.ceil(outer.left) <= Math.ceil(inner.right) &&
        Math.ceil(inner.right) <= Math.ceil(outer.right) &&
        Math.ceil(outer.top) <= Math.ceil(inner.top) &&
        Math.ceil(inner.top) <= Math.ceil(outer.bottom) &&
        Math.ceil(outer.top) <= Math.ceil(inner.bottom) &&
        Math.ceil(inner.bottom) <= Math.ceil(outer.bottom));
}
export function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
export var trackByEventId = function (index, event) {
    return event.id ? event.id : event;
};
export var trackByWeekDayHeaderDate = function (index, day) {
    return day.date.toISOString();
};
export var trackByIndex = function (index) { return index; };
export var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
export var trackByHour = function (index, hour) {
    return hour.segments[0].date.toISOString();
};
export var trackByDayOrWeekEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
var MINUTES_IN_HOUR = 60;
export function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
export function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return (MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight)) * 30;
}
export function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
export function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    var daysCounter = 0;
    var daysToAdd = 0;
    var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    var result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        var day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
export function isDraggedWithinPeriod(newStart, newEnd, period) {
    var end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
export function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
export function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
    if (excluded === void 0) { excluded = []; }
    var viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    if (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1) {
        viewStart = dateAdapter.subDays(addDaysWithExclusions(dateAdapter, viewStart, 1, excluded), 1);
    }
    if (daysInWeek) {
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
    else {
        var viewEnd = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        if (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1) {
            viewEnd = dateAdapter.addDays(addDaysWithExclusions(dateAdapter, viewEnd, -1, excluded), 1);
        }
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
}
//# sourceMappingURL=util.js.map
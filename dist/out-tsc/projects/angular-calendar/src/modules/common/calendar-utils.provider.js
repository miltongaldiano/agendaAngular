var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { getDayView, getDayViewHourGrid, getMonthView, getWeekViewHeader, getWeekView } from 'calendar-utils';
import { DateAdapter } from '../../date-adapters/date-adapter';
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return getMonthView(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return getWeekViewHeader(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return getWeekView(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return getDayView(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return getDayViewHourGrid(this.dateAdapter, args);
    };
    CalendarUtils = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DateAdapter])
    ], CalendarUtils);
    return CalendarUtils;
}());
export { CalendarUtils };
//# sourceMappingURL=calendar-utils.provider.js.map
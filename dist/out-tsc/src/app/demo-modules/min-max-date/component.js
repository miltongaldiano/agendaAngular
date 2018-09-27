var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { subMonths, addMonths, addDays, addWeeks, subDays, subWeeks, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay } from 'date-fns';
function addPeriod(period, date, amount) {
    return {
        day: addDays,
        week: addWeeks,
        month: addMonths
    }[period](date, amount);
}
function subPeriod(period, date, amount) {
    return {
        day: subDays,
        week: subWeeks,
        month: subMonths
    }[period](date, amount);
}
function startOfPeriod(period, date) {
    return {
        day: startOfDay,
        week: startOfWeek,
        month: startOfMonth
    }[period](date);
}
function endOfPeriod(period, date) {
    return {
        day: endOfDay,
        week: endOfWeek,
        month: endOfMonth
    }[period](date);
}
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
        this.minDate = subMonths(new Date(), 1);
        this.maxDate = addMonths(new Date(), 1);
        this.prevBtnDisabled = false;
        this.nextBtnDisabled = false;
        this.dateOrViewChanged();
    }
    DemoComponent.prototype.increment = function () {
        this.changeDate(addPeriod(this.view, this.viewDate, 1));
    };
    DemoComponent.prototype.decrement = function () {
        this.changeDate(subPeriod(this.view, this.viewDate, 1));
    };
    DemoComponent.prototype.today = function () {
        this.changeDate(new Date());
    };
    DemoComponent.prototype.dateIsValid = function (date) {
        return date >= this.minDate && date <= this.maxDate;
    };
    DemoComponent.prototype.changeDate = function (date) {
        this.viewDate = date;
        this.dateOrViewChanged();
    };
    DemoComponent.prototype.changeView = function (view) {
        this.view = view;
        this.dateOrViewChanged();
    };
    DemoComponent.prototype.dateOrViewChanged = function () {
        this.prevBtnDisabled = !this.dateIsValid(endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1)));
        this.nextBtnDisabled = !this.dateIsValid(startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1)));
        if (this.viewDate < this.minDate) {
            this.changeDate(this.minDate);
        }
        else if (this.viewDate > this.maxDate) {
            this.changeDate(this.maxDate);
        }
    };
    DemoComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        body.forEach(function (day) {
            if (!_this.dateIsValid(day.date)) {
                day.cssClass = 'cal-disabled';
            }
        });
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html',
            styleUrls: ['styles.css'],
            // this is a hack to get styles to apply to the inner component. Your app should just use a global stylesheet
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
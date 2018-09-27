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
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
// As an alternative to rrule there is also rSchedule
// See https://github.com/mattlewis92/angular-calendar/issues/711#issuecomment-418537158 for more info
import RRule from 'rrule';
import moment from 'moment-timezone';
import { CalendarView } from 'angular-calendar';
import { colors } from '../demo-utils/colors';
// we set the timezone to UTC to avoid issues with DST changes
// see https://github.com/mattlewis92/angular-calendar/issues/717 for more info
moment.tz.setDefault('Utc');
var DemoComponent = /** @class */ (function () {
    function DemoComponent(cdr) {
        this.cdr = cdr;
        this.view = CalendarView.Month;
        this.viewDate = moment().toDate();
        this.recurringEvents = [
            {
                title: 'Recurs on the 5th of each month',
                color: colors.yellow,
                rrule: {
                    freq: RRule.MONTHLY,
                    bymonthday: 5
                }
            },
            {
                title: 'Recurs yearly on the 10th of the current month',
                color: colors.blue,
                rrule: {
                    freq: RRule.YEARLY,
                    bymonth: moment().month() + 1,
                    bymonthday: 10
                }
            },
            {
                title: 'Recurs weekly on mondays',
                color: colors.red,
                rrule: {
                    freq: RRule.WEEKLY,
                    byweekday: [RRule.MO]
                }
            }
        ];
        this.calendarEvents = [];
    }
    DemoComponent.prototype.updateCalendarEvents = function (viewRender) {
        var _this = this;
        if (!this.viewPeriod ||
            !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||
            !moment(this.viewPeriod.end).isSame(viewRender.period.end)) {
            this.viewPeriod = viewRender.period;
            this.calendarEvents = [];
            this.recurringEvents.forEach(function (event) {
                var rule = new RRule(__assign({}, event.rrule, { dtstart: moment(viewRender.period.start)
                        .startOf('day')
                        .toDate(), until: moment(viewRender.period.end)
                        .endOf('day')
                        .toDate() }));
                var title = event.title, color = event.color;
                rule.all().forEach(function (date) {
                    _this.calendarEvents.push({
                        title: title,
                        color: color,
                        start: moment(date).toDate()
                    });
                });
            });
            this.cdr.detectChanges();
        }
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html'
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
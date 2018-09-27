var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';
import { colors } from '../demo-utils/colors';
var timezoneOffset = new Date().getTimezoneOffset();
var hoursOffset = String(Math.floor(Math.abs(timezoneOffset / 60))).padStart(2, '0');
var minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
var direction = timezoneOffset > 0 ? '-' : '+';
var timezoneOffsetString = "T00:00:00" + direction + hoursOffset + minutesOffset;
var DemoComponent = /** @class */ (function () {
    function DemoComponent(http) {
        this.http = http;
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = false;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.fetchEvents();
    };
    DemoComponent.prototype.fetchEvents = function () {
        var getStart = {
            month: startOfMonth,
            week: startOfWeek,
            day: startOfDay
        }[this.view];
        var getEnd = {
            month: endOfMonth,
            week: endOfWeek,
            day: endOfDay
        }[this.view];
        var params = new HttpParams()
            .set('primary_release_date.gte', format(getStart(this.viewDate), 'YYYY-MM-DD'))
            .set('primary_release_date.lte', format(getEnd(this.viewDate), 'YYYY-MM-DD'))
            .set('api_key', '0ec33936a68018857d727958dca1424f');
        this.events$ = this.http
            .get('https://api.themoviedb.org/3/discover/movie', { params: params })
            .pipe(map(function (_a) {
            var results = _a.results;
            return results.map(function (film) {
                return {
                    title: film.title,
                    start: new Date(film.release_date + timezoneOffsetString),
                    color: colors.yellow,
                    meta: {
                        film: film
                    }
                };
            });
        }));
    };
    DemoComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (isSameMonth(date, this.viewDate)) {
            if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    DemoComponent.prototype.eventClicked = function (event) {
        window.open("https://www.themoviedb.org/movie/" + event.meta.film.id, '_blank');
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
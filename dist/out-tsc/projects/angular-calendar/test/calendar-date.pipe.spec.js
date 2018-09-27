var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, LOCALE_ID } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { spy } from 'sinon';
import moment from 'moment';
import { CalendarModule, CalendarMomentDateFormatter, CalendarDateFormatter, MOMENT } from '../src';
import { adapterFactory } from '../src/date-adapters/date-fns';
import { DateAdapter } from 'angular-calendar';
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        Component({
            template: '{{ date | calendarDate:method:locale:weekStartsOn:excludeDays:daysInWeek }}'
        })
    ], TestComponent);
    return TestComponent;
}());
describe('calendarDate pipe', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }, {
                    dateFormatter: {
                        provide: CalendarDateFormatter,
                        useClass: CalendarMomentDateFormatter
                    }
                })
            ],
            declarations: [TestComponent],
            providers: [{ provide: MOMENT, useValue: moment }]
        });
    });
    var dateFormatter;
    var defaultLocale;
    beforeEach(inject([CalendarDateFormatter, LOCALE_ID], function (_dateFormatter_, locale) {
        dateFormatter = _dateFormatter_;
        defaultLocale = locale;
    }));
    it('should use the date formatter to format the date', function () {
        var fixture = TestBed.createComponent(TestComponent);
        spy(dateFormatter, 'monthViewColumnHeader');
        fixture.componentInstance.date = new Date('2016-01-01');
        fixture.componentInstance.method = 'monthViewColumnHeader';
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).to.equal('Friday');
        expect(dateFormatter.monthViewColumnHeader).to.have.been.calledWith({
            date: fixture.componentInstance.date,
            locale: defaultLocale,
            daysInWeek: undefined,
            excludeDays: [],
            weekStartsOn: 0
        });
    });
    it('should allow the locale to be customised', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.locale = 'de';
        spy(dateFormatter, 'monthViewColumnHeader');
        fixture.componentInstance.date = new Date('2016-01-01');
        fixture.componentInstance.method = 'monthViewColumnHeader';
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).to.equal('Freitag');
        expect(dateFormatter.monthViewColumnHeader).to.have.been.calledWith({
            date: fixture.componentInstance.date,
            locale: 'de',
            daysInWeek: undefined,
            excludeDays: [],
            weekStartsOn: 0
        });
    });
});
//# sourceMappingURL=calendar-date.pipe.spec.js.map
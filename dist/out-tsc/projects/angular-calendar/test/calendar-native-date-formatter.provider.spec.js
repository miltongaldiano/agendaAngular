import { inject, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { startOfDay } from 'date-fns';
import { CalendarNativeDateFormatter, DateAdapter } from '../src';
import { adapterFactory } from '../src/date-adapters/date-fns';
describe('calendarNativeDateFormatter provider', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                CalendarNativeDateFormatter,
                {
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }
            ]
        });
    });
    var dateFormatter;
    beforeEach(inject([CalendarNativeDateFormatter], function (_dateFormatter_) {
        dateFormatter = _dateFormatter_;
    }));
    it('monthViewColumnHeader', function () {
        expect(dateFormatter.monthViewColumnHeader({
            date: new Date('2016-01-01'),
            locale: 'en'
        })).to.equal('Friday');
    });
    it('monthViewDayNumber', function () {
        expect(dateFormatter.monthViewDayNumber({
            date: new Date('2016-01-01'),
            locale: 'en'
        })).to.equal('1');
    });
    it('monthViewTitle', function () {
        expect(dateFormatter.monthViewTitle({
            date: new Date('2016-01-01'),
            locale: 'en'
        })).to.equal('January 2016');
    });
    it('weekViewColumnHeader', function () {
        expect(dateFormatter.weekViewColumnHeader({
            date: new Date('2016-01-01'),
            locale: 'en'
        })).to.equal('Friday');
    });
    it('weekViewColumnSubHeader', function () {
        expect(dateFormatter.weekViewColumnSubHeader({
            date: new Date('2016-01-01'),
            locale: 'en'
        })).to.equal('Jan 1');
    });
    it('weekViewTitle', function () {
        expect(dateFormatter.weekViewTitle({
            date: new Date('2016-01-04'),
            locale: 'en'
        })).to.equal('Jan 3 - Jan 9, 2016');
    });
    it('weekViewHour', function () {
        expect(dateFormatter.weekViewHour({
            date: startOfDay(new Date('2016-01-01')),
            locale: 'en'
        })).to.equal('12 AM');
    });
    it('dayViewHour', function () {
        expect(dateFormatter.dayViewHour({
            date: startOfDay(new Date('2016-01-01')),
            locale: 'en'
        })).to.equal('12 AM');
    });
    it('dayViewTitle', function () {
        expect(dateFormatter.dayViewTitle({ date: new Date('2016-01-01'), locale: 'en' })).to.equal('Friday, January 1, 2016');
    });
});
//# sourceMappingURL=calendar-native-date-formatter.provider.spec.js.map
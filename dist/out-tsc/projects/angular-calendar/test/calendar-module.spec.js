import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import moment from 'moment';
import { CalendarModule, CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT, DateAdapter } from '../src';
import { adapterFactory } from '../src/date-adapters/date-fns';
describe('calendar module', function () {
    it('should not require providers to be specified when using CalendarModule.forRoot()', function () {
        TestBed.configureTestingModule({
            imports: [
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                })
            ]
        });
        var dateFormatter = TestBed.get(CalendarDateFormatter);
        expect(dateFormatter).to.be.an.instanceOf(CalendarDateFormatter);
    });
    it('should allow the date formatter to be customsied via the forRoot method', function () {
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
            providers: [{ provide: MOMENT, useValue: moment }]
        });
        var dateFormatter = TestBed.get(CalendarDateFormatter);
        expect(dateFormatter).not.to.be.an.instanceOf(CalendarDateFormatter);
        expect(dateFormatter).to.be.an.instanceOf(CalendarMomentDateFormatter);
    });
});
//# sourceMappingURL=calendar-module.spec.js.map
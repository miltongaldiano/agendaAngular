import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import moment from 'moment';
import { CalendarCommonModule, CalendarMonthModule, CalendarDateFormatter, CalendarMomentDateFormatter, CalendarMonthViewComponent, CalendarWeekViewComponent, CalendarDayViewComponent, MOMENT, DateAdapter } from '../src';
import { adapterFactory } from '../src/date-adapters/date-fns';
describe('common module', function () {
    it('should not require providers to be specified when using CalendarCommonModule.forRoot()', function () {
        TestBed.configureTestingModule({
            imports: [
                CalendarCommonModule.forRoot({
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
                CalendarCommonModule.forRoot({
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
    it('should allow just the month view to be created', function () {
        TestBed.configureTestingModule({
            imports: [
                CalendarCommonModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                CalendarMonthModule
            ]
        });
        expect(function () {
            return TestBed.createComponent(CalendarMonthViewComponent);
        }).not.to.throw();
        expect(function () { return TestBed.createComponent(CalendarWeekViewComponent); }).to.throw();
        expect(function () { return TestBed.createComponent(CalendarDayViewComponent); }).to.throw();
    });
});
//# sourceMappingURL=common-module.spec.js.map
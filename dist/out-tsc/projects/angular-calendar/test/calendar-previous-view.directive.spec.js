var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { CalendarModule, DateAdapter } from '../src';
import { adapterFactory } from '../src/date-adapters/date-fns';
var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.excludeDays = [];
    }
    TestComponent = __decorate([
        Component({
            template: "<button\n      mwlCalendarPreviousView\n      [view]=\"view\"\n      [(viewDate)]=\"viewDate\"\n      [excludeDays]=\"excludeDays\"\n      [daysInWeek]=\"daysInWeek\"\n    >\n      Previous\n    </button>\n  "
        })
    ], TestComponent);
    return TestComponent;
}());
describe('calendarPreviousView directive', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                })
            ],
            declarations: [TestComponent]
        });
    });
    it('should decrease the view date by 1 month', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.view = 'month';
        fixture.componentInstance.viewDate = new Date('2017-02-28');
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
        expect(fixture.componentInstance.viewDate).to.deep.equal(new Date('2017-01-28'));
        fixture.destroy();
    });
    it('should decrease the view date by 1 week', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.view = 'week';
        fixture.componentInstance.viewDate = new Date('2017-01-28');
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
        expect(fixture.componentInstance.viewDate).to.deep.equal(new Date('2017-01-21'));
        fixture.destroy();
    });
    it('should decrease the view date by 1 day', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.view = 'day';
        fixture.componentInstance.viewDate = new Date('2017-01-28');
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
        expect(fixture.componentInstance.viewDate).to.deep.equal(new Date('2017-01-27'));
        fixture.destroy();
    });
    it('should decrease the view date by 1 day, skipping weekends', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.view = 'day';
        fixture.componentInstance.viewDate = new Date('2018-06-18');
        fixture.componentInstance.excludeDays = [0, 6];
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
        expect(fixture.componentInstance.viewDate).to.deep.equal(new Date('2018-06-15'));
        fixture.destroy();
    });
    it('should decrease the view date by 4 days, skipping weekends', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.view = 'week';
        fixture.componentInstance.viewDate = new Date('2018-08-02');
        fixture.componentInstance.excludeDays = [0, 6];
        fixture.componentInstance.daysInWeek = 4;
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
        expect(fixture.componentInstance.viewDate).to.deep.equal(new Date('2018-07-27'));
        fixture.destroy();
    });
});
//# sourceMappingURL=calendar-previous-view.directive.spec.js.map
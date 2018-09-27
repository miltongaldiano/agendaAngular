var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { startOfDay } from 'date-fns';
import { CalendarModule, DateAdapter } from '../src';
import { adapterFactory } from '../src/date-adapters/date-fns';
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        Component({
            template: '<button mwlCalendarToday [(viewDate)]="viewDate">Next</button>'
        })
    ], TestComponent);
    return TestComponent;
}());
describe('mwlCalendarNextView directive', function () {
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
    it('should set the view date to the start of today', function () {
        var fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.viewDate = new Date('2017-01-28');
        fixture.detectChanges();
        fixture.nativeElement.querySelector('button').click();
        fixture.detectChanges();
        expect(fixture.componentInstance.viewDate).to.deep.equal(startOfDay(new Date()));
        fixture.destroy();
    });
});
//# sourceMappingURL=calendar-today.directive.spec.js.map
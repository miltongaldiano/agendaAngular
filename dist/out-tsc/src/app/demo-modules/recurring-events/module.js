var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarDateFormatter, CalendarModule, CalendarMomentDateFormatter, DateAdapter, MOMENT } from 'angular-calendar';
import moment from 'moment-timezone';
import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './component';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
export function momentAdapterFactory() {
    return adapterFactory(moment);
}
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: momentAdapterFactory
                }, {
                    dateFormatter: {
                        provide: CalendarDateFormatter,
                        useClass: CalendarMomentDateFormatter
                    }
                }),
                DemoUtilsModule,
                RouterModule.forChild([{ path: '', component: DemoComponent }])
            ],
            declarations: [DemoComponent],
            exports: [DemoComponent],
            providers: [
                {
                    provide: MOMENT,
                    useValue: moment
                }
            ]
        })
    ], DemoModule);
    return DemoModule;
}());
export { DemoModule };
//# sourceMappingURL=module.js.map
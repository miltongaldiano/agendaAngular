var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './component';
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                CalendarModule.forRoot({
                    provide: DateAdapter,
                    useFactory: adapterFactory
                }),
                DemoUtilsModule,
                RouterModule.forChild([{ path: '', component: DemoComponent }])
            ],
            declarations: [DemoComponent],
            exports: [DemoComponent]
        })
    ], DemoModule);
    return DemoModule;
}());
export { DemoModule };
//# sourceMappingURL=module.js.map
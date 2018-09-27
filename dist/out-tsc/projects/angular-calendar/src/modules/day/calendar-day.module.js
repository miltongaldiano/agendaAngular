var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarDayViewComponent } from './calendar-day-view.component';
import { CalendarDayViewHourSegmentComponent } from './calendar-day-view-hour-segment.component';
import { CalendarDayViewEventComponent } from './calendar-day-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
export { CalendarDayViewComponent } from './calendar-day-view.component';
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    CalendarDayModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ResizableModule,
                DragAndDropModule,
                CalendarCommonModule
            ],
            declarations: [
                CalendarDayViewComponent,
                CalendarDayViewHourSegmentComponent,
                CalendarDayViewEventComponent
            ],
            exports: [
                ResizableModule,
                DragAndDropModule,
                CalendarDayViewComponent,
                CalendarDayViewHourSegmentComponent,
                CalendarDayViewEventComponent
            ]
        })
    ], CalendarDayModule);
    return CalendarDayModule;
}());
export { CalendarDayModule };
//# sourceMappingURL=calendar-day.module.js.map
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
import { CalendarWeekViewComponent } from './calendar-week-view.component';
import { CalendarWeekViewHeaderComponent } from './calendar-week-view-header.component';
import { CalendarWeekViewEventComponent } from './calendar-week-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarWeekViewHourSegmentComponent } from './calendar-week-view-hour-segment.component';
export { CalendarWeekViewComponent } from './calendar-week-view.component';
export { getWeekViewPeriod } from '../common/util';
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                ResizableModule,
                DragAndDropModule,
                CalendarCommonModule
            ],
            declarations: [
                CalendarWeekViewComponent,
                CalendarWeekViewHeaderComponent,
                CalendarWeekViewEventComponent,
                CalendarWeekViewHourSegmentComponent
            ],
            exports: [
                ResizableModule,
                DragAndDropModule,
                CalendarWeekViewComponent,
                CalendarWeekViewHeaderComponent,
                CalendarWeekViewEventComponent,
                CalendarWeekViewHourSegmentComponent
            ]
        })
    ], CalendarWeekModule);
    return CalendarWeekModule;
}());
export { CalendarWeekModule };
//# sourceMappingURL=calendar-week.module.js.map
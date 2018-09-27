var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarMonthViewComponent } from './calendar-month-view.component';
import { CalendarMonthViewHeaderComponent } from './calendar-month-view-header.component';
import { CalendarMonthCellComponent } from './calendar-month-cell.component';
import { CalendarOpenDayEventsComponent } from './calendar-open-day-events.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
export { CalendarMonthViewComponent } from './calendar-month-view.component';
export { collapseAnimation } from './calendar-open-day-events.component';
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    CalendarMonthModule = __decorate([
        NgModule({
            imports: [CommonModule, DragAndDropModule, CalendarCommonModule],
            declarations: [
                CalendarMonthViewComponent,
                CalendarMonthCellComponent,
                CalendarOpenDayEventsComponent,
                CalendarMonthViewHeaderComponent
            ],
            exports: [
                DragAndDropModule,
                CalendarMonthViewComponent,
                CalendarMonthCellComponent,
                CalendarOpenDayEventsComponent,
                CalendarMonthViewHeaderComponent
            ]
        })
    ], CalendarMonthModule);
    return CalendarMonthModule;
}());
export { CalendarMonthModule };
//# sourceMappingURL=calendar-month.module.js.map
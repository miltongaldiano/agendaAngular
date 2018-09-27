(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/context-menu/component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/context-menu/component.ts ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { Subject } from <span class=\"hljs-string\">'rxjs'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  styles: [\n    `\n      .fill-height {\n        flex: <span class=\"hljs-number\">1</span>;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }\n    `\n  ]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-string\">'month'</span>;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n\n  refresh: Subject&lt;<span class=\"hljs-built_in\">any</span>&gt; = <span class=\"hljs-keyword\">new</span> Subject();\n\n  addEvent(date: <span class=\"hljs-built_in\">Date</span>): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>.events.push({\n      start: date,\n      title: <span class=\"hljs-string\">'New event'</span>,\n      color: colors.red\n    });\n    <span class=\"hljs-keyword\">this</span>.refresh.next();\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/context-menu/module.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/context-menu/module.ts ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { ContextMenuModule } from <span class=\"hljs-string\">'ngx-contextmenu'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    ContextMenuModule.forRoot({\n      useBootstrap4: <span class=\"hljs-literal\">true</span>\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/context-menu/template.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/context-menu/template.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>\n  [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span>\n  [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">context-menu</span> #<span class=\"hljs-attribute\">basicMenu</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ng-template</span> <span class=\"hljs-attribute\">contextMenuItem</span> (<span class=\"hljs-attribute\">execute</span>)=<span class=\"hljs-value\">\"addEvent($event.item)\"</span>&gt;</span>\n    Add event\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ng-template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">context-menu</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ng-template</span>\n  #<span class=\"hljs-attribute\">monthCellTemplate</span>\n  <span class=\"hljs-attribute\">let-day</span>=<span class=\"hljs-value\">\"day\"</span>\n  <span class=\"hljs-attribute\">let-openDay</span>=<span class=\"hljs-value\">\"openDay\"</span>\n  <span class=\"hljs-attribute\">let-locale</span>=<span class=\"hljs-value\">\"locale\"</span>\n  <span class=\"hljs-attribute\">let-tooltipPlacement</span>=<span class=\"hljs-value\">\"tooltipPlacement\"</span>\n  <span class=\"hljs-attribute\">let-highlightDay</span>=<span class=\"hljs-value\">\"highlightDay\"</span>\n  <span class=\"hljs-attribute\">let-unhighlightDay</span>=<span class=\"hljs-value\">\"unhighlightDay\"</span>\n  <span class=\"hljs-attribute\">let-eventClicked</span>=<span class=\"hljs-value\">\"eventClicked\"</span>&gt;</span>\n\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"fill-height\"</span> [<span class=\"hljs-attribute\">contextMenu</span>]=<span class=\"hljs-value\">\"basicMenu\"</span> [<span class=\"hljs-attribute\">contextMenuSubject</span>]=<span class=\"hljs-value\">\"day.date\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-cell-top\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-day-badge\"</span> *<span class=\"hljs-attribute\">ngIf</span>=<span class=\"hljs-value\">\"day.badgeTotal &gt; 0\"</span>&gt;</span>{{ day.badgeTotal }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-day-number\"</span>&gt;</span>{{ day.date | calendarDate:'monthViewDayNumber':locale }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-events\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-event\"</span>\n        *<span class=\"hljs-attribute\">ngFor</span>=<span class=\"hljs-value\">\"let event of day.events\"</span>\n        [<span class=\"hljs-attribute\">style.backgroundColor</span>]=<span class=\"hljs-value\">\"event.color.primary\"</span>\n        [<span class=\"hljs-attribute\">ngClass</span>]=<span class=\"hljs-value\">\"event?.cssClass\"</span>\n        (<span class=\"hljs-attribute\">mouseenter</span>)=<span class=\"hljs-value\">\"highlightDay.emit({event: event})\"</span>\n        (<span class=\"hljs-attribute\">mouseleave</span>)=<span class=\"hljs-value\">\"unhighlightDay.emit({event: event})\"</span>\n        [<span class=\"hljs-attribute\">mwlCalendarTooltip</span>]=<span class=\"hljs-value\">\"event.title | calendarEventTitle:'monthTooltip':event\"</span>\n        [<span class=\"hljs-attribute\">tooltipPlacement</span>]=<span class=\"hljs-value\">\"tooltipPlacement\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"$event.stopPropagation(); eventClicked.emit({event: event})\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ng-template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ng-template</span> #<span class=\"hljs-attribute\">weekHeaderTemplate</span> <span class=\"hljs-attribute\">let-days</span>=<span class=\"hljs-value\">\"days\"</span> <span class=\"hljs-attribute\">let-locale</span>=<span class=\"hljs-value\">\"locale\"</span> <span class=\"hljs-attribute\">let-dayHeaderClicked</span>=<span class=\"hljs-value\">\"dayHeaderClicked\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-day-headers\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n      <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-header\"</span>\n      *<span class=\"hljs-attribute\">ngFor</span>=<span class=\"hljs-value\">\"let day of days\"</span>\n      [<span class=\"hljs-attribute\">class.cal-past</span>]=<span class=\"hljs-value\">\"day.isPast\"</span>\n      [<span class=\"hljs-attribute\">class.cal-today</span>]=<span class=\"hljs-value\">\"day.isToday\"</span>\n      [<span class=\"hljs-attribute\">class.cal-future</span>]=<span class=\"hljs-value\">\"day.isFuture\"</span>\n      [<span class=\"hljs-attribute\">class.cal-weekend</span>]=<span class=\"hljs-value\">\"day.isWeekend\"</span>\n      (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"dayHeaderClicked.emit({day: day})\"</span>\n      [<span class=\"hljs-attribute\">contextMenu</span>]=<span class=\"hljs-value\">\"basicMenu\"</span>\n      [<span class=\"hljs-attribute\">contextMenuSubject</span>]=<span class=\"hljs-value\">\"day.date\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">b</span>&gt;</span>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">b</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span>&gt;</span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ng-template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ng-template</span> #<span class=\"hljs-attribute\">dayHourSegmentTemplate</span> <span class=\"hljs-attribute\">let-segment</span>=<span class=\"hljs-value\">\"segment\"</span> <span class=\"hljs-attribute\">let-locale</span>=<span class=\"hljs-value\">\"locale\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n    <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-hour-segment\"</span>\n    [<span class=\"hljs-attribute\">ngClass</span>]=<span class=\"hljs-value\">\"segment.cssClass\"</span>\n    [<span class=\"hljs-attribute\">contextMenu</span>]=<span class=\"hljs-value\">\"basicMenu\"</span>\n    [<span class=\"hljs-attribute\">contextMenuSubject</span>]=<span class=\"hljs-value\">\"segment.date\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">hidden</span>]=<span class=\"hljs-value\">\"!segment.isStart\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-time\"</span>&gt;</span>\n      {{ segment.date | calendarDate:'dayViewHour':locale }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ng-template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n    [<span class=\"hljs-attribute\">cellTemplate</span>]=<span class=\"hljs-value\">\"monthCellTemplate\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n    [<span class=\"hljs-attribute\">headerTemplate</span>]=<span class=\"hljs-value\">\"weekHeaderTemplate\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">refresh</span>]=<span class=\"hljs-value\">\"refresh\"</span>\n    [<span class=\"hljs-attribute\">hourSegmentTemplate</span>]=<span class=\"hljs-value\">\"dayHourSegmentTemplate\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/context-menu/component.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/context-menu/component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { Subject } from 'rxjs';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  styles: [\n    `\n      .fill-height {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }\n    `\n  ]\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n\n  refresh: Subject<any> = new Subject();\n\n  addEvent(date: Date): void {\n    this.events.push({\n      start: date,\n      title: 'New event',\n      color: colors.red\n    });\n    this.refresh.next();\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/context-menu/module.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/context-menu/module.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { ContextMenuModule } from 'ngx-contextmenu';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    ContextMenuModule.forRoot({\n      useBootstrap4: true\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/context-menu/sources.ts":
/*!******************************************************!*\
  !*** ./src/app/demo-modules/context-menu/sources.ts ***!
  \******************************************************/
/*! exports provided: sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
var sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/context-menu/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/context-menu/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./src/app/demo-modules/context-menu/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/context-menu/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/context-menu/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/context-menu/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=6.js.map
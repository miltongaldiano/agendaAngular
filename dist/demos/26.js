(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/no-events-label/component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/no-events-label/component.ts ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> {\n  CalendarEvent,\n  CalendarViewPeriod,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarWeekViewBeforeRenderEvent,\n  CalendarDayViewBeforeRenderEvent\n} from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-string\">'month'</span>;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class=\"hljs-string\">'Event 1'</span>,\n      color: colors.yellow,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()\n    }\n  ];\n\n  period: CalendarViewPeriod;\n\n  <span class=\"hljs-constructor\"><span class=\"hljs-keyword\">constructor</span>(private cdr: ChangeDetectorRef) </span>{}\n\n  beforeViewRender(\n    event:\n      | CalendarMonthViewBeforeRenderEvent\n      | CalendarWeekViewBeforeRenderEvent\n      | CalendarDayViewBeforeRenderEvent\n  ) {\n    <span class=\"hljs-keyword\">this</span>.period = event.period;\n    <span class=\"hljs-keyword\">this</span>.cdr.detectChanges();\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/no-events-label/module.ts":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/no-events-label/module.ts ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/no-events-label/template.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/no-events-label/template.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>\n  [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span>\n  [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"alert alert-warning\"</span> *<span class=\"hljs-attribute\">ngIf</span>=<span class=\"hljs-value\">\"period?.events.length === 0\"</span>&gt;</span>\n  There are no events on this {{ view }}\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"true\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeViewRender($event)\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeViewRender($event)\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeViewRender($event)\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/no-events-label/component.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/no-events-label/component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {\n  Component,\n  ChangeDetectionStrategy,\n  ChangeDetectorRef\n} from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarViewPeriod,\n  CalendarMonthViewBeforeRenderEvent,\n  CalendarWeekViewBeforeRenderEvent,\n  CalendarDayViewBeforeRenderEvent\n} from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date()\n    }\n  ];\n\n  period: CalendarViewPeriod;\n\n  constructor(private cdr: ChangeDetectorRef) {}\n\n  beforeViewRender(\n    event:\n      | CalendarMonthViewBeforeRenderEvent\n      | CalendarWeekViewBeforeRenderEvent\n      | CalendarDayViewBeforeRenderEvent\n  ) {\n    this.period = event.period;\n    this.cdr.detectChanges();\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/no-events-label/module.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/no-events-label/module.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/no-events-label/sources.ts":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/no-events-label/sources.ts ***!
  \*********************************************************/
/*! exports provided: sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
var sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/no-events-label/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/no-events-label/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./src/app/demo-modules/no-events-label/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/no-events-label/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/no-events-label/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/no-events-label/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=26.js.map
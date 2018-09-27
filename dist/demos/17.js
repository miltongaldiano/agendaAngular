(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/exclude-days/component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/exclude-days/component.ts ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, DAYS_OF_WEEK } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-string\">'month'</span>;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-string\">'2016-01-05'</span>);\n\n  events: CalendarEvent[] = [\n    {\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-string\">'2016-01-08'</span>),\n      end: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-string\">'2016-01-10'</span>),\n      title: <span class=\"hljs-string\">'One day excluded event'</span>,\n      color: colors.red,\n      allDay: <span class=\"hljs-literal\">true</span>\n    },\n    {\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-string\">'2016-01-01'</span>),\n      end: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(<span class=\"hljs-string\">'2016-01-09'</span>),\n      title: <span class=\"hljs-string\">'Multiple weeks event'</span>,\n      allDay: <span class=\"hljs-literal\">true</span>\n    }\n  ];\n\n  <span class=\"hljs-comment\">// exclude weekends</span>\n  excludeDays: <span class=\"hljs-built_in\">number</span>[] = [<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">6</span>];\n\n  weekStartsOn = DAYS_OF_WEEK.SUNDAY;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/exclude-days/module.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/exclude-days/module.ts ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/exclude-days/template.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/exclude-days/template.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"row text-center\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-group\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        <span class=\"hljs-attribute\">mwlCalendarPreviousView</span>\n        [<span class=\"hljs-attribute\">view</span>]=<span class=\"hljs-value\">\"view\"</span>\n        [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>\n        [<span class=\"hljs-attribute\">excludeDays</span>]=<span class=\"hljs-value\">\"excludeDays\"</span>&gt;</span>\n        Previous\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-outline-secondary\"</span>\n        <span class=\"hljs-attribute\">mwlCalendarToday</span>\n        [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n        Today\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        <span class=\"hljs-attribute\">mwlCalendarNextView</span>\n        [<span class=\"hljs-attribute\">view</span>]=<span class=\"hljs-value\">\"view\"</span>\n        [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>\n        [<span class=\"hljs-attribute\">excludeDays</span>]=<span class=\"hljs-value\">\"excludeDays\"</span>&gt;</span>\n        Next\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en':weekStartsOn:excludeDays }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"col-md-4\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn-group\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"view = 'month'\"</span>\n        [<span class=\"hljs-attribute\">class.active</span>]=<span class=\"hljs-value\">\"view === 'month'\"</span>&gt;</span>\n        Month\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"view = 'week'\"</span>\n        [<span class=\"hljs-attribute\">class.active</span>]=<span class=\"hljs-value\">\"view === 'week'\"</span>&gt;</span>\n        Week\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>\n        <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>\n        (<span class=\"hljs-attribute\">click</span>)=<span class=\"hljs-value\">\"view = 'day'\"</span>\n        [<span class=\"hljs-attribute\">class.active</span>]=<span class=\"hljs-value\">\"view === 'day'\"</span>&gt;</span>\n        Day\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">excludeDays</span>]=<span class=\"hljs-value\">\"excludeDays\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">excludeDays</span>]=<span class=\"hljs-value\">\"excludeDays\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/exclude-days/component.ts":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/exclude-days/component.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {\n  Component,\n  ChangeDetectionStrategy,\n  ViewEncapsulation\n} from '@angular/core';\nimport { CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  encapsulation: ViewEncapsulation.None,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date('2016-01-05');\n\n  events: CalendarEvent[] = [\n    {\n      start: new Date('2016-01-08'),\n      end: new Date('2016-01-10'),\n      title: 'One day excluded event',\n      color: colors.red,\n      allDay: true\n    },\n    {\n      start: new Date('2016-01-01'),\n      end: new Date('2016-01-09'),\n      title: 'Multiple weeks event',\n      allDay: true\n    }\n  ];\n\n  // exclude weekends\n  excludeDays: number[] = [0, 6];\n\n  weekStartsOn = DAYS_OF_WEEK.SUNDAY;\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/exclude-days/module.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/exclude-days/module.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/exclude-days/sources.ts":
/*!******************************************************!*\
  !*** ./src/app/demo-modules/exclude-days/sources.ts ***!
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
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/exclude-days/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/exclude-days/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./src/app/demo-modules/exclude-days/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/exclude-days/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/exclude-days/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/exclude-days/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=17.js.map
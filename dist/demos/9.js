(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/customise-date-formats/component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/customise-date-formats/component.ts ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarDateFormatter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CustomDateFormatter } from <span class=\"hljs-string\">'./custom-date-formatter.provider'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter\n    }\n  ]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-string\">'month'</span>;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [];\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/customise-date-formats/custom-date-formatter.provider.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/customise-date-formats/custom-date-formatter.provider.ts ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { CalendarDateFormatter, DateFormatterParams } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DatePipe } from <span class=\"hljs-string\">'@angular/common'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> CustomDateFormatter extends CalendarDateFormatter {\n  <span class=\"hljs-comment\">// you can override any of the methods defined in the parent class</span>\n\n  <span class=\"hljs-keyword\">public</span> monthViewColumnHeader({ date, locale }: DateFormatterParams): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> DatePipe(locale).transform(date, <span class=\"hljs-string\">'EEE'</span>, locale);\n  }\n\n  <span class=\"hljs-keyword\">public</span> monthViewTitle({ date, locale }: DateFormatterParams): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> DatePipe(locale).transform(date, <span class=\"hljs-string\">'MMM y'</span>, locale);\n  }\n\n  <span class=\"hljs-keyword\">public</span> weekViewColumnHeader({ date, locale }: DateFormatterParams): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> DatePipe(locale).transform(date, <span class=\"hljs-string\">'EEE'</span>, locale);\n  }\n\n  <span class=\"hljs-keyword\">public</span> dayViewHour({ date, locale }: DateFormatterParams): <span class=\"hljs-built_in\">string</span> {\n    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> DatePipe(locale).transform(date, <span class=\"hljs-string\">'HH:mm'</span>, locale);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/customise-date-formats/module.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/customise-date-formats/module.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/customise-date-formats/template.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/customise-date-formats/template.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>\n  [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span>\n  [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/customise-date-formats/component.ts":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/customise-date-formats/component.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarDateFormatter } from 'angular-calendar';\nimport { CustomDateFormatter } from './custom-date-formatter.provider';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  providers: [\n    {\n      provide: CalendarDateFormatter,\n      useClass: CustomDateFormatter\n    }\n  ]\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [];\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/customise-date-formats/custom-date-formatter.provider.ts":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/customise-date-formats/custom-date-formatter.provider.ts ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';\nimport { DatePipe } from '@angular/common';\n\nexport class CustomDateFormatter extends CalendarDateFormatter {\n  // you can override any of the methods defined in the parent class\n\n  public monthViewColumnHeader({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'EEE', locale);\n  }\n\n  public monthViewTitle({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'MMM y', locale);\n  }\n\n  public weekViewColumnHeader({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'EEE', locale);\n  }\n\n  public dayViewHour({ date, locale }: DateFormatterParams): string {\n    return new DatePipe(locale).transform(date, 'HH:mm', locale);\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/customise-date-formats/module.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/customise-date-formats/module.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/customise-date-formats/sources.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo-modules/customise-date-formats/sources.ts ***!
  \****************************************************************/
/*! exports provided: sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
var sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/customise-date-formats/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/customise-date-formats/component.ts")
        }
    },
    {
        filename: 'custom-date-formatter.provider.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./custom-date-formatter.provider */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/customise-date-formats/custom-date-formatter.provider.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./custom-date-formatter.provider */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/customise-date-formats/custom-date-formatter.provider.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./src/app/demo-modules/customise-date-formats/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/customise-date-formats/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/customise-date-formats/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/customise-date-formats/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=9.js.map
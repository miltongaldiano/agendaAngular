(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/disable-slide-animation/component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/disable-slide-animation/component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { isSameDay, isSameMonth } from <span class=\"hljs-string\">'date-fns'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      title: <span class=\"hljs-string\">'An event'</span>,\n      color: colors.red\n    }\n  ];\n\n  activeDayIsOpen: <span class=\"hljs-built_in\">boolean</span>;\n\n  dayClicked({ date, events }: { date: <span class=\"hljs-built_in\">Date</span>; events: CalendarEvent[] }): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">if</span> (isSameMonth(date, <span class=\"hljs-keyword\">this</span>.viewDate)) {\n      <span class=\"hljs-keyword\">if</span> (\n        (isSameDay(<span class=\"hljs-keyword\">this</span>.viewDate, date) &amp;&amp; <span class=\"hljs-keyword\">this</span>.activeDayIsOpen === <span class=\"hljs-literal\">true</span>) ||\n        events.length === <span class=\"hljs-number\">0</span>\n      ) {\n        <span class=\"hljs-keyword\">this</span>.activeDayIsOpen = <span class=\"hljs-literal\">false</span>;\n      } <span class=\"hljs-keyword\">else</span> {\n        <span class=\"hljs-keyword\">this</span>.activeDayIsOpen = <span class=\"hljs-literal\">true</span>;\n        <span class=\"hljs-keyword\">this</span>.viewDate = date;\n      }\n    }\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/disable-slide-animation/module.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/disable-slide-animation/module.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/disable-slide-animation/template.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/disable-slide-animation/template.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n  [@<span class=\"hljs-attribute\">.disabled</span>]=<span class=\"hljs-value\">\"true\"</span>\n  [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n  [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"activeDayIsOpen\"</span>\n  (<span class=\"hljs-attribute\">dayClicked</span>)=<span class=\"hljs-value\">\"dayClicked($event.day)\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/disable-slide-animation/component.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/disable-slide-animation/component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { isSameDay, isSameMonth } from 'date-fns';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      start: new Date(),\n      title: 'An event',\n      color: colors.red\n    }\n  ];\n\n  activeDayIsOpen: boolean;\n\n  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {\n    if (isSameMonth(date, this.viewDate)) {\n      if (\n        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||\n        events.length === 0\n      ) {\n        this.activeDayIsOpen = false;\n      } else {\n        this.activeDayIsOpen = true;\n        this.viewDate = date;\n      }\n    }\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/disable-slide-animation/module.ts":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/disable-slide-animation/module.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { RouterModule } from '@angular/router';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/disable-slide-animation/sources.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo-modules/disable-slide-animation/sources.ts ***!
  \*****************************************************************/
/*! exports provided: sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
var sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/disable-slide-animation/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/disable-slide-animation/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./src/app/demo-modules/disable-slide-animation/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/disable-slide-animation/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/disable-slide-animation/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/disable-slide-animation/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=12.js.map
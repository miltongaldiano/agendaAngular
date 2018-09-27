(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/week-view-minute-precision/component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/week-view-minute-precision/component.ts ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { addDays, addHours, startOfDay } from <span class=\"hljs-string\">'date-fns'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      start: addHours(startOfDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()), <span class=\"hljs-number\">5</span>),\n      end: addHours(startOfDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()), <span class=\"hljs-number\">17</span>),\n      title: <span class=\"hljs-string\">'Event 1'</span>,\n      color: colors.red\n    },\n    {\n      start: addHours(startOfDay(addDays(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">1</span>)), <span class=\"hljs-number\">2</span>),\n      end: addHours(startOfDay(addDays(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(), <span class=\"hljs-number\">1</span>)), <span class=\"hljs-number\">18</span>),\n      title: <span class=\"hljs-string\">'Event 2'</span>,\n      color: colors.blue\n    },\n    {\n      start: addHours(startOfDay(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()), <span class=\"hljs-number\">8</span>),\n      title: <span class=\"hljs-string\">'Event 3'</span>,\n      color: colors.blue\n    }\n  ];\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/week-view-minute-precision/module.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/week-view-minute-precision/module.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/week-view-minute-precision/template.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/week-view-minute-precision/template.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n  <span class=\"hljs-attribute\">precision</span>=<span class=\"hljs-value\">\"minutes\"</span>\n  [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n  [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/week-view-minute-precision/component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/week-view-minute-precision/component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent } from 'angular-calendar';\nimport { addDays, addHours, startOfDay } from 'date-fns';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      start: addHours(startOfDay(new Date()), 5),\n      end: addHours(startOfDay(new Date()), 17),\n      title: 'Event 1',\n      color: colors.red\n    },\n    {\n      start: addHours(startOfDay(addDays(new Date(), 1)), 2),\n      end: addHours(startOfDay(addDays(new Date(), 1)), 18),\n      title: 'Event 2',\n      color: colors.blue\n    },\n    {\n      start: addHours(startOfDay(new Date()), 8),\n      title: 'Event 3',\n      color: colors.blue\n    }\n  ];\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/week-view-minute-precision/module.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/week-view-minute-precision/module.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/week-view-minute-precision/sources.ts":
/*!********************************************************************!*\
  !*** ./src/app/demo-modules/week-view-minute-precision/sources.ts ***!
  \********************************************************************/
/*! exports provided: sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
var sources = [
    {
        filename: 'component.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/week-view-minute-precision/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/week-view-minute-precision/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/week-view-minute-precision/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/week-view-minute-precision/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/week-view-minute-precision/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/week-view-minute-precision/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=33.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/month-view-badge-total/component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/month-view-badge-total/component.ts ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarMonthViewDay } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: <span class=\"hljs-built_in\">Array</span>&lt;CalendarEvent&lt;{ incrementsBadgeTotal: <span class=\"hljs-built_in\">boolean</span> }&gt;&gt; = [\n    {\n      title: <span class=\"hljs-string\">'Increments badge total on the day cell'</span>,\n      color: colors.yellow,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        incrementsBadgeTotal: <span class=\"hljs-literal\">true</span>\n      }\n    },\n    {\n      title: <span class=\"hljs-string\">'Does not increment the badge total on the day cell'</span>,\n      color: colors.blue,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        incrementsBadgeTotal: <span class=\"hljs-literal\">false</span>\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): <span class=\"hljs-built_in\">void</span> {\n    body.forEach(day =&gt; {\n      day.badgeTotal = day.events.filter(\n        event =&gt; event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/month-view-badge-total/module.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/month-view-badge-total/module.ts ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/month-view-badge-total/template.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/month-view-badge-total/template.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n  [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n  [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"true\"</span>\n  (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeMonthViewRender($event)\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/month-view-badge-total/component.ts":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/month-view-badge-total/component.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  viewDate: Date = new Date();\n\n  events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [\n    {\n      title: 'Increments badge total on the day cell',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: true\n      }\n    },\n    {\n      title: 'Does not increment the badge total on the day cell',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        incrementsBadgeTotal: false\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach(day => {\n      day.badgeTotal = day.events.filter(\n        event => event.meta.incrementsBadgeTotal\n      ).length;\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/month-view-badge-total/module.ts":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/month-view-badge-total/module.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/month-view-badge-total/sources.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo-modules/month-view-badge-total/sources.ts ***!
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
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/month-view-badge-total/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/month-view-badge-total/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/month-view-badge-total/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/month-view-badge-total/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/month-view-badge-total/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/month-view-badge-total/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=24.js.map
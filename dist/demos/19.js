(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/group-month-view-events/component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/group-month-view-events/component.ts ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { Component, ChangeDetectionStrategy } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarMonthViewDay } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  styles: [\n    `\n      .cell-totals {\n        margin: <span class=\"hljs-number\">5</span>px;\n        text-align: center;\n      }\n      .badge {\n        margin-right: <span class=\"hljs-number\">5</span>px;\n      }\n    `\n  ]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent {\n  view: <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-string\">'month'</span>;\n\n  viewDate: <span class=\"hljs-built_in\">Date</span> = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class=\"hljs-string\">'Event 1'</span>,\n      color: colors.yellow,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'warning'</span>\n      }\n    },\n    {\n      title: <span class=\"hljs-string\">'Event 2'</span>,\n      color: colors.yellow,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'warning'</span>\n      }\n    },\n    {\n      title: <span class=\"hljs-string\">'Event 3'</span>,\n      color: colors.blue,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'info'</span>\n      }\n    },\n    {\n      title: <span class=\"hljs-string\">'Event 4'</span>,\n      color: colors.red,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'danger'</span>\n      }\n    },\n    {\n      title: <span class=\"hljs-string\">'Event 5'</span>,\n      color: colors.red,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      meta: {\n        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-string\">'danger'</span>\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): <span class=\"hljs-built_in\">void</span> {\n    body.forEach(cell =&gt; {\n      <span class=\"hljs-keyword\">const</span> groups: <span class=\"hljs-built_in\">any</span> = {};\n      cell.events.forEach((event: CalendarEvent&lt;{ <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-built_in\">string</span> }&gt;) =&gt; {\n        groups[event.meta.type] = groups[event.meta.type] || [];\n        groups[event.meta.type].push(event);\n      });\n      cell[<span class=\"hljs-string\">'eventGroups'</span>] = <span class=\"hljs-built_in\">Object</span>.entries(groups);\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/group-month-view-events/module.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/group-month-view-events/module.ts ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/group-month-view-events/template.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=xml!./src/app/demo-modules/group-month-view-events/template.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>\n  [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span>\n  [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ng-template</span> #<span class=\"hljs-attribute\">customCellTemplate</span> <span class=\"hljs-attribute\">let-day</span>=<span class=\"hljs-value\">\"day\"</span> <span class=\"hljs-attribute\">let-locale</span>=<span class=\"hljs-value\">\"locale\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-cell-top\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-day-badge\"</span> *<span class=\"hljs-attribute\">ngIf</span>=<span class=\"hljs-value\">\"day.badgeTotal &gt; 0\"</span>&gt;</span>{{ day.badgeTotal }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cal-day-number\"</span>&gt;</span>{{ day.date | calendarDate:'monthViewDayNumber':locale }}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"cell-totals\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span>\n      *<span class=\"hljs-attribute\">ngFor</span>=<span class=\"hljs-value\">\"let group of day.eventGroups\"</span>\n      <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"badge badge-{{ group[0] }}\"</span>&gt;</span>\n      {{ group[1].length }}\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ng-template</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">cellTemplate</span>]=<span class=\"hljs-value\">\"customCellTemplate\"</span>\n    (<span class=\"hljs-attribute\">beforeViewRender</span>)=<span class=\"hljs-value\">\"beforeMonthViewRender($event)\"</span>\n    [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/group-month-view-events/component.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/group-month-view-events/component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  styles: [\n    `\n      .cell-totals {\n        margin: 5px;\n        text-align: center;\n      }\n      .badge {\n        margin-right: 5px;\n      }\n    `\n  ]\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        type: 'warning'\n      }\n    },\n    {\n      title: 'Event 2',\n      color: colors.yellow,\n      start: new Date(),\n      meta: {\n        type: 'warning'\n      }\n    },\n    {\n      title: 'Event 3',\n      color: colors.blue,\n      start: new Date(),\n      meta: {\n        type: 'info'\n      }\n    },\n    {\n      title: 'Event 4',\n      color: colors.red,\n      start: new Date(),\n      meta: {\n        type: 'danger'\n      }\n    },\n    {\n      title: 'Event 5',\n      color: colors.red,\n      start: new Date(),\n      meta: {\n        type: 'danger'\n      }\n    }\n  ];\n\n  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {\n    body.forEach(cell => {\n      const groups: any = {};\n      cell.events.forEach((event: CalendarEvent<{ type: string }>) => {\n        groups[event.meta.type] = groups[event.meta.type] || [];\n        groups[event.meta.type].push(event);\n      });\n      cell['eventGroups'] = Object.entries(groups);\n    });\n  }\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/group-month-view-events/module.ts":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/group-month-view-events/module.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"

/***/ }),

/***/ "./src/app/demo-modules/group-month-view-events/sources.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo-modules/group-month-view-events/sources.ts ***!
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
            raw: __webpack_require__(/*! !raw-loader!./component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/group-month-view-events/component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/group-month-view-events/component.ts")
        }
    },
    {
        filename: 'template.html',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./template.html */ "./src/app/demo-modules/group-month-view-events/template.html"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=xml!./template.html */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=xml!./src/app/demo-modules/group-month-view-events/template.html")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/group-month-view-events/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/group-month-view-events/module.ts")
        }
    }
];


/***/ })

}]);
//# sourceMappingURL=19.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/demo-utils/calendar-header.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    &lt;div class=\"row text-center\"&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"&gt;\n            Previous\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"&gt;\n            Today\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\"&gt;\n            Next\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;h3&gt;{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}&lt;/h3&gt;\n      &lt;/div&gt;\n      &lt;div class=\"col-md-4\"&gt;\n        &lt;div class=\"btn-group\"&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\"&gt;\n            Month\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\"&gt;\n            Week\n          &lt;/div&gt;\n          &lt;div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\"&gt;\n            Day\n          &lt;/div&gt;\n        &lt;/div&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;br&gt;\n  `\n})\nexport class CalendarHeaderComponent {\n  @Input()\n  view: string;\n\n  @Input()\n  viewDate: Date;\n\n  @Input()\n  locale: string = 'en';\n\n  @Output()\n  viewChange: EventEmitter&lt;string&gt; = new EventEmitter();\n\n  @Output()\n  viewDateChange: EventEmitter&lt;Date&gt; = new EventEmitter();\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/demo-utils/colors.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/demo-utils/colors.ts ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">const</span> colors: <span class=\"hljs-built_in\">any</span> = {\n  red: {\n    primary: <span class=\"hljs-string\">'#ad2121'</span>,\n    secondary: <span class=\"hljs-string\">'#FAE3E3'</span>\n  },\n  blue: {\n    primary: <span class=\"hljs-string\">'#1e90ff'</span>,\n    secondary: <span class=\"hljs-string\">'#D1E8FF'</span>\n  },\n  yellow: {\n    primary: <span class=\"hljs-string\">'#e3bc08'</span>,\n    secondary: <span class=\"hljs-string\">'#FDF1BA'</span>\n  }\n};\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/demo-utils/module.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/highlightjs-loader?lang=typescript!./src/app/demo-modules/demo-utils/module.ts ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { FormsModule } from <span class=\"hljs-string\">'@angular/forms'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarHeaderComponent } from <span class=\"hljs-string\">'./calendar-header.component'</span>;\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent]\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoUtilsModule {}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/demo-utils/calendar-header.component.ts":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'mwl-demo-utils-calendar-header',\n  template: `\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  `\n})\nexport class CalendarHeaderComponent {\n  @Input()\n  view: string;\n\n  @Input()\n  viewDate: Date;\n\n  @Input()\n  locale: string = 'en';\n\n  @Output()\n  viewChange: EventEmitter<string> = new EventEmitter();\n\n  @Output()\n  viewDateChange: EventEmitter<Date> = new EventEmitter();\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/demo-utils/colors.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/demo-utils/colors.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "export const colors: any = {\n  red: {\n    primary: '#ad2121',\n    secondary: '#FAE3E3'\n  },\n  blue: {\n    primary: '#1e90ff',\n    secondary: '#D1E8FF'\n  },\n  yellow: {\n    primary: '#e3bc08',\n    secondary: '#FDF1BA'\n  }\n};\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/demo-utils/module.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/demo-utils/module.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { CalendarModule } from 'angular-calendar';\nimport { CalendarHeaderComponent } from './calendar-header.component';\n\n@NgModule({\n  imports: [CommonModule, FormsModule, CalendarModule],\n  declarations: [CalendarHeaderComponent],\n  exports: [CalendarHeaderComponent]\n})\nexport class DemoUtilsModule {}\n"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, scripts, config, commitlint, repository, keywords, author, license, bugs, homepage, devDependencies, peerDependencies, dependencies, sideEffects, default */
/***/ (function(module) {

module.exports = {"name":"angular-calendar","version":"0.26.1","description":"A calendar component for angular 6.0+ that can display events on a month, week or day view","scripts":{"start":"node --max_old_space_size=8192 ./node_modules/.bin/ng serve --open","build:demos":"ng build --prod","build:lib":"copyfiles package.json projects/angular-calendar && ng build angular-calendar && npm run build:date-adapters && npm run build:styles && npm run copyfiles","build:date-adapters":"tsc -p tsconfig-date-adapters.json","build:styles":"node-sass projects/angular-calendar/src/angular-calendar.scss | postcss --output dist/angular-calendar/css/angular-calendar.css","build:clean":"rm -rf dist","copyfiles":"copyfiles CHANGELOG.md README.md LICENSE dist/angular-calendar && cp projects/angular-calendar/util/date-adapter-package.json dist/angular-calendar/date-adapters/date-fns/package.json && cp projects/angular-calendar/util/date-adapter-package.json dist/angular-calendar/date-adapters/moment/package.json && copyfiles -u 3 projects/angular-calendar/src/**/*.scss dist/angular-calendar/scss","test":"npm run lint && TZ=UTC ng test angular-calendar --watch=false --code-coverage && npm run build:lib && npm run build:clean","test:watch":"TZ=UTC ng test angular-calendar","lint":"ng lint && ng lint angular-calendar && stylelint \"{projects,src}/**/*.scss\" --fix","commit":"git-cz","commitmsg":"commitlint -e","precommit":"pretty-quick --staged","codecov":"cat coverage/lcov.info | codecov","compodoc":"compodoc -p tsconfig-compodoc.json -d dist/demos/docs --disableGraph --disableCoverage --disablePrivate --disableInternal --disableLifeCycleHooks --disableProtected --gaID UA-63367573-2","prerelease":"npm test","release:git":"git add package.json package-lock.json && git commit -m 'chore: bump version number' && standard-version --first-release && git push --follow-tags origin master","release:npm":"npm run build:lib && npm publish dist/angular-calendar","release":"npm run release:git && npm run release:npm","postrelease":"npm run gh-pages","gh-pages":"npm run build:clean && npm run build:demos && npm run compodoc && ngh --dir=dist/demos --no-silent && npm run build:clean"},"config":{"commitizen":{"path":"@commitlint/prompt"}},"commitlint":{"extends":["@commitlint/config-conventional"]},"repository":{"type":"git","url":"git+https://github.com/mattlewis92/angular-calendar.git"},"keywords":["angular","angular2","angular6","calendar"],"author":"Matt Lewis","license":"MIT","bugs":{"url":"https://github.com/mattlewis92/angular-calendar/issues"},"homepage":"https://github.com/mattlewis92/angular-calendar#readme","devDependencies":{"@angular-devkit/build-angular":"^0.8.2","@angular-devkit/build-ng-packagr":"^0.8.2","@angular/animations":"^6.1.7","@angular/cdk":"^6.4.7","@angular/cli":"^6.2.2","@angular/common":"^6.1.7","@angular/compiler":"^6.1.7","@angular/compiler-cli":"^6.1.7","@angular/core":"^6.1.7","@angular/forms":"^6.1.7","@angular/http":"^6.1.7","@angular/language-service":"^6.1.7","@angular/platform-browser":"^6.1.7","@angular/platform-browser-dynamic":"^6.1.7","@angular/router":"^6.1.7","@commitlint/cli":"^7.1.2","@commitlint/config-conventional":"^7.1.2","@commitlint/prompt":"^7.1.2","@compodoc/compodoc":"^1.1.5","@ng-bootstrap/ng-bootstrap":"^3.2.0","@stackblitz/sdk":"^1.2.0","@types/chai":"^4.1.4","@types/mocha":"^5.2.5","@types/moment-timezone":"^0.5.9","@types/node":"^10.10.1","@types/sinon":"^5.0.2","@types/sinon-chai":"^3.2.0","angular-cli-ghpages":"^0.5.3","angularx-flatpickr":"^6.1.0","autoprefixer":"^9.1.5","bootstrap-css-only":"^4.1.1","chai":"^4.1.2","codecov":"^3.1.0","codelyzer":"^4.4.4","commitizen":"^2.10.1","copyfiles":"^2.1.0","core-js":"^2.5.4","css-loader":"^1.0.0","date-fns":"^1.29.0","flatpickr":"^4.5.2","font-awesome":"^4.7.0","hammerjs":"^2.0.8","highlightjs-loader":"^0.2.3","husky":"^0.14.3","karma":"^3.0.0","karma-chrome-launcher":"^2.2.0","karma-coverage-istanbul-reporter":"^2.0.4","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","mocha":"^5.2.0","moment":"^2.22.2","moment-timezone":"^0.5.21","ng-packagr":"^4.1.1","ngx-contextmenu":"^5.0.3","node-sass":"^4.9.3","postcss-cli":"^6.0.0","postcss-flexibility":"^2.0.0","prettier":"^1.14.2","pretty-quick":"^1.6.0","rrule":"^2.5.5","rxjs":"^6.3.2","sinon":"^6.3.3","sinon-chai":"^3.2.0","standard-version":"^4.4.0","stylelint":"^9.5.0","stylelint-config-standard":"^18.2.0","ts-node":"^7.0.1","tsickle":"^0.33.0","tslib":"^1.9.0","tslint":"^5.11.0","tslint-config-mwl":"^0.5.2","typescript":"~2.9.2","zone.js":"^0.8.26"},"peerDependencies":{"@angular/animations":">=6.0.0 <8.0.0","@angular/common":">=6.0.0 <8.0.0","@angular/core":">=6.0.0 <8.0.0"},"dependencies":{"angular-draggable-droppable":"^4.0.2","angular-resizable-element":"^3.2.2","calendar-utils":"^0.2.1","positioning":"^1.4.0"},"sideEffects":["*.css","*.scss"]};

/***/ }),

/***/ "./projects/angular-calendar/src/date-adapters/date-adapter.ts":
/*!*********************************************************************!*\
  !*** ./projects/angular-calendar/src/date-adapters/date-adapter.ts ***!
  \*********************************************************************/
/*! exports provided: DateAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
var DateAdapter = /** @class */ (function () {
    function DateAdapter() {
    }
    return DateAdapter;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/date-adapters/date-fns/index.ts":
/*!***********************************************************************!*\
  !*** ./projects/angular-calendar/src/date-adapters/date-fns/index.ts ***!
  \***********************************************************************/
/*! exports provided: adapterFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapterFactory", function() { return adapterFactory; });
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils/date-adapters/date-fns */ "./node_modules/calendar-utils/date-adapters/date-fns/index.js");
/* harmony import */ var calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/add_weeks/index */ "./node_modules/date-fns/add_weeks/index.js");
/* harmony import */ var date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/add_months/index */ "./node_modules/date-fns/add_months/index.js");
/* harmony import */ var date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/sub_days/index */ "./node_modules/date-fns/sub_days/index.js");
/* harmony import */ var date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/sub_weeks/index */ "./node_modules/date-fns/sub_weeks/index.js");
/* harmony import */ var date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/sub_months/index */ "./node_modules/date-fns/sub_months/index.js");
/* harmony import */ var date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/get_iso_week/index */ "./node_modules/date-fns/get_iso_week/index.js");
/* harmony import */ var date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/set_date/index */ "./node_modules/date-fns/set_date/index.js");
/* harmony import */ var date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/set_month/index */ "./node_modules/date-fns/set_month/index.js");
/* harmony import */ var date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/set_year/index */ "./node_modules/date-fns/set_year/index.js");
/* harmony import */ var date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/get_date/index */ "./node_modules/date-fns/get_date/index.js");
/* harmony import */ var date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/get_year/index */ "./node_modules/date-fns/get_year/index.js");
/* harmony import */ var date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_11__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};












function adapterFactory() {
    return __assign({}, Object(calendar_utils_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_0__["adapterFactory"])(), { addWeeks: date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_1__,
        addMonths: date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_2__,
        subDays: date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_3__,
        subWeeks: date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_4__,
        subMonths: date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_5__,
        getISOWeek: date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_6__,
        setDate: date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_7__,
        setMonth: date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_8__,
        setYear: date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_9__,
        getDate: date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_10__,
        getYear: date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_11__ });
}


/***/ }),

/***/ "./projects/angular-calendar/src/index.ts":
/*!************************************************!*\
  !*** ./projects/angular-calendar/src/index.ts ***!
  \************************************************/
/*! exports provided: CalendarModule, CalendarUtils, DAYS_OF_WEEK, CalendarCommonModule, CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule, CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarEventTimesChangedEventType, DateAdapter, CalendarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calendar.module */ "./projects/angular-calendar/src/modules/calendar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["DAYS_OF_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarMonthViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["collapseAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarMonthModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarWeekViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["getWeekViewPeriod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarWeekModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarDayViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarDayModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarEventTitleFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["MOMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarMomentDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarNativeDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarAngularDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarEventTimesChangedEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["DateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return _modules_calendar_module__WEBPACK_IMPORTED_MODULE_0__["CalendarView"]; });

/*
 * Public API Surface of angular-calendar
 */



/***/ }),

/***/ "./projects/angular-calendar/src/modules/calendar.module.ts":
/*!******************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/calendar.module.ts ***!
  \******************************************************************/
/*! exports provided: CalendarModule, CalendarUtils, DAYS_OF_WEEK, CalendarCommonModule, CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule, CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarEventTimesChangedEventType, DateAdapter, CalendarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/calendar-common.module */ "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
/* harmony import */ var _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./month/calendar-month.module */ "./projects/angular-calendar/src/modules/month/calendar-month.module.ts");
/* harmony import */ var _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week/calendar-week.module */ "./projects/angular-calendar/src/modules/week/calendar-week.module.ts");
/* harmony import */ var _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day/calendar-day.module */ "./projects/angular-calendar/src/modules/day/calendar-day.module.ts");
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/calendar-utils.provider */ "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["MOMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarMomentDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarNativeDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarAngularDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTimesChangedEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["collapseAnimation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["getWeekViewPeriod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule_1 = CalendarModule;
    CalendarModule.forRoot = function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"],
                config.dateFormatter || _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"],
                config.utils || _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__["CalendarUtils"]
            ]
        };
    };
    var CalendarModule_1;
    CalendarModule = CalendarModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"],
                _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"],
                _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"],
                _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]
            ],
            exports: [
                _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_1__["CalendarCommonModule"],
                _month_calendar_month_module__WEBPACK_IMPORTED_MODULE_2__["CalendarMonthModule"],
                _week_calendar_week_module__WEBPACK_IMPORTED_MODULE_3__["CalendarWeekModule"],
                _day_calendar_day_module__WEBPACK_IMPORTED_MODULE_4__["CalendarDayModule"]
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts":
/*!**************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts ***!
  \**************************************************************************************************/
/*! exports provided: CalendarAngularDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return CalendarAngularDateFormatter; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
var CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'EEEE', null, locale);
    };
    /**
     * The month view cell day number
     */
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'd', null, locale);
    };
    /**
     * The month view title
     */
    CalendarAngularDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'MMMM y', null, locale);
    };
    /**
     * The week view header week day labels
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'EEEE', null, locale);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'MMM d', null, locale);
    };
    /**
     * The week view title
     */
    CalendarAngularDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getWeekViewPeriod"])(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        var format = function (dateToFormat, showYear) {
            return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(dateToFormat, 'MMM d' + (showYear ? ', yyyy' : ''), null, locale);
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    CalendarAngularDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'h a', null, locale);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarAngularDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'h a', null, locale);
    };
    /**
     * The day view title
     */
    CalendarAngularDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](locale).transform(date, 'EEEE, MMMM d, y', null, locale);
    };
    CalendarAngularDateFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]])
    ], CalendarAngularDateFormatter);
    return CalendarAngularDateFormatter;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-common.module.ts":
/*!********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-common.module.ts ***!
  \********************************************************************************/
/*! exports provided: CalendarUtils, DAYS_OF_WEEK, CalendarCommonModule, CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarEventTimesChangedEventType, DateAdapter, CalendarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return CalendarCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-event-actions.component */ "./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts");
/* harmony import */ var _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-event-title.component */ "./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts");
/* harmony import */ var _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-tooltip.directive */ "./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts");
/* harmony import */ var _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-previous-view.directive */ "./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts");
/* harmony import */ var _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-next-view.directive */ "./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts");
/* harmony import */ var _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar-today.directive */ "./projects/angular-calendar/src/modules/common/calendar-today.directive.ts");
/* harmony import */ var _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-date.pipe */ "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts");
/* harmony import */ var _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-event-title.pipe */ "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts");
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./click.directive */ "./projects/angular-calendar/src/modules/common/click.directive.ts");
/* harmony import */ var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-event-title-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts");
/* harmony import */ var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar-date-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts");
/* harmony import */ var _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar-utils.provider */ "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_11__["CalendarEventTitleFormatter"]; });

/* harmony import */ var _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calendar-moment-date-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_14__["MOMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return _calendar_moment_date_formatter_provider__WEBPACK_IMPORTED_MODULE_14__["CalendarMomentDateFormatter"]; });

/* harmony import */ var _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./calendar-native-date-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return _calendar_native_date_formatter_provider__WEBPACK_IMPORTED_MODULE_15__["CalendarNativeDateFormatter"]; });

/* harmony import */ var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./calendar-angular-date-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_16__["CalendarAngularDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_12__["CalendarDateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_13__["CalendarUtils"]; });

/* harmony import */ var _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./calendar-event-times-changed-event.interface */ "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return _calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_17__["CalendarEventTimesChangedEventType"]; });

/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"]; });

/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./calendar-view.enum */ "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return _calendar_view_enum__WEBPACK_IMPORTED_MODULE_19__["CalendarView"]; });

/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! calendar-utils */ "./node_modules/calendar-utils/calendar-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return calendar_utils__WEBPACK_IMPORTED_MODULE_20__["DAYS_OF_WEEK"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    CalendarCommonModule_1 = CalendarCommonModule;
    CalendarCommonModule.forRoot = function (dateAdapter, config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_11__["CalendarEventTitleFormatter"],
                config.dateFormatter || _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_12__["CalendarDateFormatter"],
                config.utils || _calendar_utils_provider__WEBPACK_IMPORTED_MODULE_13__["CalendarUtils"]
            ]
        };
    };
    var CalendarCommonModule_1;
    CalendarCommonModule = CalendarCommonModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__["CalendarEventActionsComponent"],
                _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTitleComponent"],
                _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"],
                _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"],
                _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"],
                _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarNextViewDirective"],
                _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarTodayDirective"],
                _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarDatePipe"],
                _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarEventTitlePipe"],
                _click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [
                _calendar_event_actions_component__WEBPACK_IMPORTED_MODULE_2__["CalendarEventActionsComponent"],
                _calendar_event_title_component__WEBPACK_IMPORTED_MODULE_3__["CalendarEventTitleComponent"],
                _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"],
                _calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipDirective"],
                _calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_5__["CalendarPreviousViewDirective"],
                _calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_6__["CalendarNextViewDirective"],
                _calendar_today_directive__WEBPACK_IMPORTED_MODULE_7__["CalendarTodayDirective"],
                _calendar_date_pipe__WEBPACK_IMPORTED_MODULE_8__["CalendarDatePipe"],
                _calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_9__["CalendarEventTitlePipe"],
                _click_directive__WEBPACK_IMPORTED_MODULE_10__["ClickDirective"]
            ],
            entryComponents: [_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarTooltipWindowComponent"]]
        })
    ], CalendarCommonModule);
    return CalendarCommonModule;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts":
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts ***!
  \******************************************************************************************/
/*! exports provided: CalendarDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* harmony import */ var _calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-angular-date-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-angular-date-formatter.provider.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { DatePipe } from '@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new DatePipe(locale).transform(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = /** @class */ (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarDateFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CalendarDateFormatter);
    return CalendarDateFormatter;
}(_calendar_angular_date_formatter_provider__WEBPACK_IMPORTED_MODULE_0__["CalendarAngularDateFormatter"]));



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-date.pipe.ts ***!
  \****************************************************************************/
/*! exports provided: CalendarDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDatePipe", function() { return CalendarDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-date-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-date-formatter.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale, weekStartsOn, excludeDays, daysInWeek) {
        if (locale === void 0) { locale = this.locale; }
        if (weekStartsOn === void 0) { weekStartsOn = 0; }
        if (excludeDays === void 0) { excludeDays = []; }
        return this.dateFormatter[method]({
            date: date,
            locale: locale,
            weekStartsOn: weekStartsOn,
            excludeDays: excludeDays,
            daysInWeek: daysInWeek
        });
    };
    CalendarDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'calendarDate'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_calendar_date_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarDateFormatter"], String])
    ], CalendarDatePipe);
    return CalendarDatePipe;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts":
/*!***************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts ***!
  \***************************************************************************************/
/*! exports provided: CalendarDragHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDragHelper", function() { return CalendarDragHelper; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");

var DRAG_THRESHOLD = 1;
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents;
        var isWithinThreshold = Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
        if (snapDraggedEvents) {
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + x,
                right: this.startPosition.right + x,
                top: this.startPosition.top + y,
                bottom: this.startPosition.bottom + y
            });
            return (isWithinThreshold &&
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["isInside"])(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold;
        }
    };
    return CalendarDragHelper;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-actions.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CalendarEventActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventActionsComponent", function() { return CalendarEventActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByIndex = _util__WEBPACK_IMPORTED_MODULE_1__["trackByIndex"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarEventActionsComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarEventActionsComponent.prototype, "customTemplate", void 0);
    CalendarEventActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-event-actions',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\">\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy:trackByIndex\"\n          (mwlClick)=\"action.onClick({event: event})\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\">\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarEventActionsComponent);
    return CalendarEventActionsComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts":
/*!******************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts ***!
  \******************************************************************************************************/
/*! exports provided: CalendarEventTimesChangedEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTimesChangedEventType", function() { return CalendarEventTimesChangedEventType; });
var CalendarEventTimesChangedEventType;
(function (CalendarEventTimesChangedEventType) {
    CalendarEventTimesChangedEventType["Drag"] = "drag";
    CalendarEventTimesChangedEventType["Drop"] = "drop";
    CalendarEventTimesChangedEventType["Resize"] = "resize";
})(CalendarEventTimesChangedEventType || (CalendarEventTimesChangedEventType = {}));


/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts ***!
  \*************************************************************************************************/
/*! exports provided: CalendarEventTitleFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    CalendarEventTitleFormatter.prototype.month = function (event, title) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event, title) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    CalendarEventTitleFormatter.prototype.week = function (event, title) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event, title) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    CalendarEventTitleFormatter.prototype.day = function (event, title) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event, title) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CalendarEventTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleComponent", function() { return CalendarEventTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarEventTitleComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarEventTitleComponent.prototype, "view", void 0);
    CalendarEventTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-event-title',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <span\n        class=\"cal-event-title\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarEventTitleComponent);
    return CalendarEventTitleComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts":
/*!***********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-event-title.pipe.ts ***!
  \***********************************************************************************/
/*! exports provided: CalendarEventTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitlePipe", function() { return CalendarEventTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-event-title-formatter.provider */ "./projects/angular-calendar/src/modules/common/calendar-event-title-formatter.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event, title);
    };
    CalendarEventTitlePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'calendarEventTitle'
        }),
        __metadata("design:paramtypes", [_calendar_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"]])
    ], CalendarEventTitlePipe);
    return CalendarEventTitlePipe;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-moment-date-formatter.provider.ts ***!
  \*************************************************************************************************/
/*! exports provided: MOMENT, CalendarMomentDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return CalendarMomentDateFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment, dateAdapter) {
        this.moment = moment;
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMM D');
    };
    /**
     * The week view title
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var _this = this;
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getWeekViewPeriod"])(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        var format = function (dateToFormat, showYear) {
            return _this.moment(dateToFormat)
                .locale(locale)
                .format('MMM D' + (showYear ? ', YYYY' : ''));
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    CalendarMomentDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(MOMENT)),
        __metadata("design:paramtypes", [Object, _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]])
    ], CalendarMomentDateFormatter);
    return CalendarMomentDateFormatter;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-native-date-formatter.provider.ts ***!
  \*************************************************************************************************/
/*! exports provided: CalendarNativeDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return CalendarNativeDateFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale, weekStartsOn = _a.weekStartsOn, excludeDays = _a.excludeDays, daysInWeek = _a.daysInWeek;
        var _b = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getWeekViewPeriod"])(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek), viewStart = _b.viewStart, viewEnd = _b.viewEnd;
        var format = function (dateToFormat, showYear) {
            return new Intl.DateTimeFormat(locale, {
                day: 'numeric',
                month: 'short',
                year: showYear ? 'numeric' : undefined
            }).format(dateToFormat);
        };
        return format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear()) + " - " + format(viewEnd, true);
    };
    /**
     * The time formatting down the left hand side of the week view
     */
    CalendarNativeDateFormatter.prototype.weekViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    CalendarNativeDateFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]])
    ], CalendarNativeDateFormatter);
    return CalendarNativeDateFormatter;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts":
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-next-view.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: CalendarNextViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNextViewDirective", function() { return CalendarNextViewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-view.enum */ "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going forward by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: this.dateAdapter.addDays,
            week: this.dateAdapter.addWeeks,
            month: this.dateAdapter.addMonths
        }[this.view];
        if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Day) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_3__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, 1, this.excludeDays));
        }
        else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Week && this.daysInWeek) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_3__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(addFn(this.viewDate, 1));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarNextViewDirective.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarNextViewDirective.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarNextViewDirective.prototype, "excludeDays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarNextViewDirective.prototype, "daysInWeek", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarNextViewDirective.prototype, "onClick", null);
    CalendarNextViewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mwlCalendarNextView]'
        }),
        __metadata("design:paramtypes", [_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]])
    ], CalendarNextViewDirective);
    return CalendarNextViewDirective;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts":
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-previous-view.directive.ts ***!
  \******************************************************************************************/
/*! exports provided: CalendarPreviousViewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPreviousViewDirective", function() { return CalendarPreviousViewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
/* harmony import */ var _calendar_view_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-view.enum */ "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Day) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_3__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === _calendar_view_enum__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Week && this.daysInWeek) {
            this.viewDateChange.emit(Object(_util__WEBPACK_IMPORTED_MODULE_3__["addDaysWithExclusions"])(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarPreviousViewDirective.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarPreviousViewDirective.prototype, "onClick", null);
    CalendarPreviousViewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mwlCalendarPreviousView]'
        }),
        __metadata("design:paramtypes", [_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]])
    ], CalendarPreviousViewDirective);
    return CalendarPreviousViewDirective;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts ***!
  \*****************************************************************************************/
/*! exports provided: CalendarResizeHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarResizeHelper", function() { return CalendarResizeHelper; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./projects/angular-calendar/src/modules/common/util.ts");

var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth &&
            Math.ceil(rectangle.width) < Math.ceil(this.minWidth)) {
            return false;
        }
        return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isInside"])(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-today.directive.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-today.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: CalendarTodayDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTodayDirective", function() { return CalendarTodayDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarTodayDirective.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarTodayDirective.prototype, "viewDateChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarTodayDirective.prototype, "onClick", null);
    CalendarTodayDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mwlCalendarToday]'
        }),
        __metadata("design:paramtypes", [_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]])
    ], CalendarTodayDirective);
    return CalendarTodayDirective;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts":
/*!************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-tooltip.directive.ts ***!
  \************************************************************************************/
/*! exports provided: CalendarTooltipWindowComponent, CalendarTooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTooltipWindowComponent", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarTooltipDirective", function() { return CalendarTooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! positioning */ "./node_modules/positioning/dist/positioning.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarTooltipWindowComponent.prototype, "contents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarTooltipWindowComponent.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarTooltipWindowComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
    CalendarTooltipWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-tooltip-window',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarTooltipWindowComponent);
    return CalendarTooltipWindowComponent;
}());

var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document //tslint:disable-line
         = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function (previousPosition) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = Object(positioning__WEBPACK_IMPORTED_MODULE_2__["positionElements"])(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPosition !== this.tooltipRef.instance.placement) {
                this.positionTooltip(this.tooltipRef.instance.placement);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mwlCalendarTooltip'),
        __metadata("design:type", String)
    ], CalendarTooltipDirective.prototype, "contents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltipPlacement'),
        __metadata("design:type", Object)
    ], CalendarTooltipDirective.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltipTemplate'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarTooltipDirective.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltipEvent'),
        __metadata("design:type", Object)
    ], CalendarTooltipDirective.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tooltipAppendToBody'),
        __metadata("design:type", Boolean)
    ], CalendarTooltipDirective.prototype, "appendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOut", null);
    CalendarTooltipDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mwlCalendarTooltip]'
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], Object])
    ], CalendarTooltipDirective);
    return CalendarTooltipDirective;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts":
/*!*********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts ***!
  \*********************************************************************************/
/*! exports provided: CalendarUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return CalendarUtils; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calendar-utils */ "./node_modules/calendar-utils/calendar-utils.js");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getMonthView"])(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekViewHeader"])(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekView"])(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getDayView"])(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getDayViewHourGrid"])(this.dateAdapter, args);
    };
    CalendarUtils = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"]])
    ], CalendarUtils);
    return CalendarUtils;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/calendar-view.enum.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/calendar-view.enum.ts ***!
  \****************************************************************************/
/*! exports provided: CalendarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return CalendarView; });
var CalendarView;
(function (CalendarView) {
    CalendarView["Month"] = "month";
    CalendarView["Week"] = "week";
    CalendarView["Day"] = "day";
})(CalendarView || (CalendarView = {}));


/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/click.directive.ts":
/*!*************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/click.directive.ts ***!
  \*************************************************************************/
/*! exports provided: ClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickDirective", function() { return ClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var clickElements = new Set();
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // tslint:disable-line
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        clickElements.add(this.elm.nativeElement);
        var eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            // prevent child click events from firing on parent elements that also have click events
            var nearestClickableParent = event.target;
            while (!clickElements.has(nearestClickableParent) &&
                nearestClickableParent !== _this.document.body) {
                nearestClickableParent = nearestClickableParent.parentElement;
            }
            var isThisClickableElement = _this.elm.nativeElement === nearestClickableParent;
            if (isThisClickableElement) {
                _this.click.next(event);
            }
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
        clickElements.delete(this.elm.nativeElement);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('mwlClick'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClickDirective.prototype, "click", void 0);
    ClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mwlClick]'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
    ], ClickDirective);
    return ClickDirective;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/common/util.ts":
/*!**************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/common/util.ts ***!
  \**************************************************************/
/*! exports provided: validateEvents, isInside, roundToNearest, trackByEventId, trackByWeekDayHeaderDate, trackByIndex, trackByHourSegment, trackByHour, trackByDayOrWeekEvent, getMinutesMoved, getMinimumEventHeightInMinutes, getDefaultEventEnd, addDaysWithExclusions, isDraggedWithinPeriod, shouldFireDroppedEvent, getWeekViewPeriod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEvents", function() { return validateEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInside", function() { return isInside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToNearest", function() { return roundToNearest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByEventId", function() { return trackByEventId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByWeekDayHeaderDate", function() { return trackByWeekDayHeaderDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByIndex", function() { return trackByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByHourSegment", function() { return trackByHourSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByHour", function() { return trackByHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackByDayOrWeekEvent", function() { return trackByDayOrWeekEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutesMoved", function() { return getMinutesMoved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinimumEventHeightInMinutes", function() { return getMinimumEventHeightInMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventEnd", function() { return getDefaultEventEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDaysWithExclusions", function() { return addDaysWithExclusions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraggedWithinPeriod", function() { return isDraggedWithinPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldFireDroppedEvent", function() { return shouldFireDroppedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return getWeekViewPeriod; });
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calendar-utils */ "./node_modules/calendar-utils/calendar-utils.js");

var validateEvents = function (events) {
    var warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, ['angular-calendar'].concat(args));
    };
    return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_0__["validateEvents"])(events, warn);
};
function isInside(outer, inner) {
    return (Math.ceil(outer.left) <= Math.ceil(inner.left) &&
        Math.ceil(inner.left) <= Math.ceil(outer.right) &&
        Math.ceil(outer.left) <= Math.ceil(inner.right) &&
        Math.ceil(inner.right) <= Math.ceil(outer.right) &&
        Math.ceil(outer.top) <= Math.ceil(inner.top) &&
        Math.ceil(inner.top) <= Math.ceil(outer.bottom) &&
        Math.ceil(outer.top) <= Math.ceil(inner.bottom) &&
        Math.ceil(inner.bottom) <= Math.ceil(outer.bottom));
}
function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
var trackByEventId = function (index, event) {
    return event.id ? event.id : event;
};
var trackByWeekDayHeaderDate = function (index, day) {
    return day.date.toISOString();
};
var trackByIndex = function (index) { return index; };
var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
var trackByHour = function (index, hour) {
    return hour.segments[0].date.toISOString();
};
var trackByDayOrWeekEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
var MINUTES_IN_HOUR = 60;
function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return (MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight)) * 30;
}
function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    var daysCounter = 0;
    var daysToAdd = 0;
    var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    var result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        var day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
function isDraggedWithinPeriod(newStart, newEnd, period) {
    var end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
    if (excluded === void 0) { excluded = []; }
    var viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    if (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1) {
        viewStart = dateAdapter.subDays(addDaysWithExclusions(dateAdapter, viewStart, 1, excluded), 1);
    }
    if (daysInWeek) {
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
    else {
        var viewEnd = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        if (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1) {
            viewEnd = dateAdapter.addDays(addDaysWithExclusions(dateAdapter, viewEnd, -1, excluded), 1);
        }
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
}


/***/ }),

/***/ "./projects/angular-calendar/src/modules/day/calendar-day-view-event.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day-view-event.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CalendarDayViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewEventComponent", function() { return CalendarDayViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewEventComponent.prototype, "dayEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewEventComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarDayViewEventComponent.prototype, "eventClicked", void 0);
    CalendarDayViewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-day-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color?.secondary\"\n        [style.borderColor]=\"dayEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        (mwlClick)=\"eventClicked.emit()\">\n        <mwl-calendar-event-actions\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\">\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarDayViewEventComponent);
    return CalendarDayViewEventComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/day/calendar-day-view-hour-segment.component.ts":
/*!***********************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day-view-hour-segment.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CalendarDayViewHourSegmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewHourSegmentComponent", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewHourSegmentComponent.prototype, "segment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewHourSegmentComponent.prototype, "segmentHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarDayViewHourSegmentComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewHourSegmentComponent.prototype, "customTemplate", void 0);
    CalendarDayViewHourSegmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-day-view-hour-segment',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarDayViewHourSegmentComponent);
    return CalendarDayViewHourSegmentComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CalendarDayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return CalendarDayViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-drag-helper.provider */ "./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts");
/* harmony import */ var _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-resize-helper.provider */ "./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts");
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-utils.provider */ "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar day view id');
        /**
         * @hidden
         */
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByEventId"];
        /**
         * @hidden
         */
        this.trackByHour = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByHour"];
        /**
         * @hidden
         */
        this.trackByHourSegment = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByHourSegment"];
        /**
         * @hidden
         */
        this.trackByDayEvent = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByDayOrWeekEvent"];
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
        if (Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["shouldFireDroppedEvent"])(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayEventsContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_3__["CalendarResizeHelper"](dayEventsContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var resizingBeforeStart = currentResize.edge === 'top';
        var pixelsMoved;
        if (resizingBeforeStart) {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var minutesMoved = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinutesMoved"])(pixelsMoved, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
        var newStart = dayEvent.event.start;
        var newEnd = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getDefaultEventEnd"])(this.dateAdapter, dayEvent.event, Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinimumEventHeightInMinutes"])(this.hourSegments, this.hourSegmentHeight));
        if (resizingBeforeStart) {
            newStart = this.dateAdapter.addMinutes(newStart, minutesMoved);
        }
        else {
            newEnd = this.dateAdapter.addMinutes(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: dayEvent.event,
            type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Resize
        });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStarted = function (event, dayEventsContainer) {
        var _this = this;
        var dragHelper = new _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_2__["CalendarDragHelper"](dayEventsContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents
                });
        };
        this.eventDragEnter = 0;
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.dragEnded = function (dayEvent, dragEndEvent) {
        if (this.eventDragEnter > 0) {
            var minutesMoved = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinutesMoved"])(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            var newStart = this.dateAdapter.addMinutes(dayEvent.event.start, minutesMoved);
            if (dragEndEvent.y < 0 && newStart < this.view.period.start) {
                minutesMoved += this.dateAdapter.differenceInMinutes(this.view.period.start, newStart);
                newStart = this.view.period.start;
            }
            var newEnd = void 0;
            if (dayEvent.event.end) {
                newEnd = this.dateAdapter.addMinutes(dayEvent.event.end, minutesMoved);
            }
            if (Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["isDraggedWithinPeriod"])(newStart, newEnd, this.view.period)) {
                this.eventTimesChanged.emit({
                    newStart: newStart,
                    newEnd: newEnd,
                    event: dayEvent.event,
                    type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Drag
                });
            }
        }
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.emitBeforeViewRender();
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
        this.emitBeforeViewRender();
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    CalendarDayViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours,
                    allDayEvents: this.view.allDayEvents
                },
                period: this.view.period
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarDayViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarDayViewComponent.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegmentHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], CalendarDayViewComponent.prototype, "refresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarDayViewComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "snapDraggedEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
    CalendarDayViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-day-view',
            template: "\n    <div class=\"cal-day-view\">\n      <div\n        class=\"cal-all-day-events\"\n        mwlDroppable\n        dragOverClass=\"cal-drag-over\"\n        dragActiveClass=\"cal-drag-active\"\n        (drop)=\"eventDropped($event, view.period.start, true)\">\n        <mwl-calendar-day-view-event\n          *ngFor=\"let event of view.allDayEvents; trackBy:trackByEventId\"\n          [dayEvent]=\"{event: event}\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          [customTemplate]=\"eventTemplate\"\n          [eventTitleTemplate]=\"eventTitleTemplate\"\n          [eventActionsTemplate]=\"eventActionsTemplate\"\n          (eventClicked)=\"eventClicked.emit({event: event})\"\n          [class.cal-draggable]=\"!snapDraggedEvents && event.draggable\"\n          mwlDraggable\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event, calendarId: calendarId}\"\n          [dragAxis]=\"{x: !snapDraggedEvents && event.draggable, y: !snapDraggedEvents && event.draggable}\">\n        </mwl-calendar-day-view-event>\n      </div>\n      <div\n        class=\"cal-hour-rows\"\n        #dayEventsContainer\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy:trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeSnapGrid]=\"{top: eventSnapSize || hourSegmentHeight, bottom: eventSnapSize || hourSegmentHeight}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayEventsContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{event: dayEvent.event, calendarId: calendarId}\"\n            [dragAxis]=\"{x: !snapDraggedEvents && dayEvent.event.draggable && currentResizes.size === 0, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"snapDraggedEvents ? {y: eventSnapSize || hourSegmentHeight} : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStarted(event, dayEventsContainer)\"\n            (dragEnd)=\"dragEnded(dayEvent, $event)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"dayEvent.event?.resizable?.beforeStart && !dayEvent.startsBeforeDay\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ top: true }\">\n            </div>\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"dayEvent.event?.resizable?.afterEnd && !dayEvent.endsAfterDay\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ bottom: true }\">\n            </div>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours; trackBy:trackByHour\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            dragActiveClass=\"cal-drag-active\"\n            (drop)=\"eventDropped($event, segment.date, false)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__["CalendarUtils"], String, _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"]])
    ], CalendarDayViewComponent);
    return CalendarDayViewComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/day/calendar-day.module.ts":
/*!**************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/day/calendar-day.module.ts ***!
  \**************************************************************************/
/*! exports provided: CalendarDayViewComponent, CalendarDayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return CalendarDayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-day-view.component */ "./projects/angular-calendar/src/modules/day/calendar-day-view.component.ts");
/* harmony import */ var _calendar_day_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-day-view-hour-segment.component */ "./projects/angular-calendar/src/modules/day/calendar-day-view-hour-segment.component.ts");
/* harmony import */ var _calendar_day_view_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-day-view-event.component */ "./projects/angular-calendar/src/modules/day/calendar-day-view-event.component.ts");
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-common.module */ "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarDayViewComponent"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    CalendarDayModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"],
                _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]
            ],
            declarations: [
                _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarDayViewComponent"],
                _calendar_day_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_5__["CalendarDayViewHourSegmentComponent"],
                _calendar_day_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarDayViewEventComponent"]
            ],
            exports: [
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"],
                _calendar_day_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarDayViewComponent"],
                _calendar_day_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_5__["CalendarDayViewHourSegmentComponent"],
                _calendar_day_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarDayViewEventComponent"]
            ]
        })
    ], CalendarDayModule);
    return CalendarDayModule;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CalendarMonthCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthCellComponent", function() { return CalendarMonthCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_1__["trackByEventId"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "day", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "openDay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarMonthCellComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
    CalendarMonthCellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-month-cell',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy:trackByEventId\"\n          [style.backgroundColor]=\"event.color?.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
            host: {
                class: 'cal-cell cal-day-cell',
                '[class.cal-past]': 'day.isPast',
                '[class.cal-today]': 'day.isToday',
                '[class.cal-future]': 'day.isFuture',
                '[class.cal-weekend]': 'day.isWeekend',
                '[class.cal-in-month]': 'day.inMonth',
                '[class.cal-out-month]': '!day.inMonth',
                '[class.cal-has-events]': 'day.events.length > 0',
                '[class.cal-open]': 'day === openDay',
                '[class.cal-event-highlight]': '!!day.backgroundColor',
                '[style.backgroundColor]': 'day.backgroundColor'
            }
        })
    ], CalendarMonthCellComponent);
    return CalendarMonthCellComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CalendarMonthViewHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewHeaderComponent", function() { return CalendarMonthViewHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__["trackByWeekDayHeaderDate"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
    CalendarMonthViewHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-month-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
        })
    ], CalendarMonthViewHeaderComponent);
    return CalendarMonthViewHeaderComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CalendarMonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return CalendarMonthViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-utils.provider */ "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.trackByIndex = _common_util__WEBPACK_IMPORTED_MODULE_4__["trackByIndex"];
        /**
         * @hidden
         */
        this.trackByDate = function (index, day) { return day.date.toISOString(); };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            Object(_common_util__WEBPACK_IMPORTED_MODULE_4__["validateEvents"])(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = this.dateAdapter.getYear(day.date);
        var month = this.dateAdapter.getMonth(day.date);
        var date = this.dateAdapter.getDate(day.date);
        var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
            newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({
            event: event,
            newStart: newStart,
            newEnd: newEnd,
            day: day,
            type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_2__["CalendarEventTimesChangedEventType"].Drop
        });
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return _this.dateAdapter.isSameDay(day.date, _this.viewDate);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], CalendarMonthViewComponent.prototype, "refresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarMonthViewComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarMonthViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-month-view',
            template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets; trackByIndex\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of (view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)); trackBy:trackByDate\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (mwlClick)=\"dayClicked.emit({ day: day })\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped(openDay, $event.dropData.event)\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_3__["CalendarUtils"], String, _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_5__["DateAdapter"]])
    ], CalendarMonthViewComponent);
    return CalendarMonthViewComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/month/calendar-month.module.ts":
/*!******************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-month.module.ts ***!
  \******************************************************************************/
/*! exports provided: CalendarMonthViewComponent, collapseAnimation, CalendarMonthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return CalendarMonthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-month-view.component */ "./projects/angular-calendar/src/modules/month/calendar-month-view.component.ts");
/* harmony import */ var _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-month-view-header.component */ "./projects/angular-calendar/src/modules/month/calendar-month-view-header.component.ts");
/* harmony import */ var _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-month-cell.component */ "./projects/angular-calendar/src/modules/month/calendar-month-cell.component.ts");
/* harmony import */ var _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-open-day-events.component */ "./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts");
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-common.module */ "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["collapseAnimation"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    CalendarMonthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"], _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]],
            declarations: [
                _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"],
                _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthCellComponent"],
                _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["CalendarOpenDayEventsComponent"],
                _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewHeaderComponent"]
            ],
            exports: [
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_2__["DragAndDropModule"],
                _calendar_month_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarMonthViewComponent"],
                _calendar_month_cell_component__WEBPACK_IMPORTED_MODULE_5__["CalendarMonthCellComponent"],
                _calendar_open_day_events_component__WEBPACK_IMPORTED_MODULE_6__["CalendarOpenDayEventsComponent"],
                _calendar_month_view_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarMonthViewHeaderComponent"]
            ]
        })
    ], CalendarMonthModule);
    return CalendarMonthModule;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/month/calendar-open-day-events.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: collapseAnimation, CalendarOpenDayEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseAnimation", function() { return collapseAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarOpenDayEventsComponent", function() { return CalendarOpenDayEventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var collapseAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('collapse', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0, overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: 0 }))
    ])
]);
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByEventId = _common_util__WEBPACK_IMPORTED_MODULE_2__["trackByEventId"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarOpenDayEventsComponent.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
    CalendarOpenDayEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-open-day-events',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\">\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy:trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n          <span\n            class=\"cal-event\"\n            [style.backgroundColor]=\"event.color?.primary\">\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({event: event})\">\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\">\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen\n      }\">\n    </ng-template>\n  ",
            animations: [collapseAnimation]
        })
    ], CalendarOpenDayEventsComponent);
    return CalendarOpenDayEventsComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CalendarWeekViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewEventComponent", function() { return CalendarWeekViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewEventComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
    CalendarWeekViewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-week-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\"\n      let-tooltipDisabled=\"tooltipDisabled\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color?.secondary\"\n        [style.borderColor]=\"weekEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"!tooltipDisabled ? (weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event) : ''\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\"\n        (mwlClick)=\"eventClicked.emit()\">\n        <mwl-calendar-event-actions\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventActionsTemplate\">\n        </mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody,\n        tooltipDisabled: tooltipDisabled\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewEventComponent);
    return CalendarWeekViewEventComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts":
/*!*******************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CalendarWeekViewHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewHeaderComponent", function() { return CalendarWeekViewHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_1__["trackByWeekDayHeaderDate"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
    CalendarWeekViewHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-week-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewHeaderComponent);
    return CalendarWeekViewHeaderComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CalendarWeekViewHourSegmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewHourSegmentComponent", function() { return CalendarWeekViewHourSegmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarWeekViewHourSegmentComponent = /** @class */ (function () {
    function CalendarWeekViewHourSegmentComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewHourSegmentComponent.prototype, "segment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewHourSegmentComponent.prototype, "segmentHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarWeekViewHourSegmentComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewHourSegmentComponent.prototype, "isTimeLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewHourSegmentComponent.prototype, "customTemplate", void 0);
    CalendarWeekViewHourSegmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-week-view-hour-segment',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\"\n      let-segmentHeight=\"segmentHeight\"\n      let-isTimeLabel=\"isTimeLabel\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\" *ngIf=\"isTimeLabel\">\n          {{ segment.date | calendarDate:'weekViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale,\n        segmentHeight: segmentHeight,\n        isTimeLabel: isTimeLabel\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewHourSegmentComponent);
    return CalendarWeekViewHourSegmentComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts":
/*!************************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts ***!
  \************************************************************************************/
/*! exports provided: CalendarWeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return CalendarWeekViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/calendar-drag-helper.provider */ "./projects/angular-calendar/src/modules/common/calendar-drag-helper.provider.ts");
/* harmony import */ var _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/calendar-resize-helper.provider */ "./projects/angular-calendar/src/modules/common/calendar-resize-helper.provider.ts");
/* harmony import */ var _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/calendar-event-times-changed-event.interface */ "./projects/angular-calendar/src/modules/common/calendar-event-times-changed-event.interface.ts");
/* harmony import */ var _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/calendar-utils.provider */ "./projects/angular-calendar/src/modules/common/calendar-utils.provider.ts");
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
/* harmony import */ var _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../date-adapters/date-adapter */ "./projects/angular-calendar/src/date-adapters/date-adapter.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};








/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale, dateAdapter) {
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Whether to snap events to a grid when dragging
         */
        this.snapDraggedEvents = true;
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @hidden
         */
        this.allDayEventResizes = new Map();
        /**
         * @hidden
         */
        this.timeEventResizes = new Map();
        /**
         * @hidden
         */
        this.eventDragEnter = 0;
        /**
         * @hidden
         */
        this.dragActive = false;
        /**
         * @hidden
         */
        this.calendarId = Symbol('angular calendar week view id');
        /**
         * @hidden
         */
        this.trackByIndex = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByIndex"];
        /**
         * @hidden
         */
        this.trackByWeekDayHeaderDate = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByWeekDayHeaderDate"];
        /**
         * @hidden
         */
        this.trackByHourSegment = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByHourSegment"];
        /**
         * @hidden
         */
        this.trackByHour = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByHour"];
        /**
         * @hidden
         */
        this.trackByDayOrWeekEvent = _common_util__WEBPACK_IMPORTED_MODULE_6__["trackByDayOrWeekEvent"];
        /**
         * @hidden
         */
        this.trackByHourColumn = function (index, column) {
            return column.hours[0] ? column.hours[0].segments[0].date.toISOString() : column;
        };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.excludeDays ||
            changes.weekendDays ||
            changes.daysInWeek) {
            this.refreshHeader();
        }
        if (changes.events) {
            Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["validateEvents"])(this.events);
        }
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments ||
            changes.weekStartsOn ||
            changes.weekendDays ||
            changes.excludeDays ||
            changes.hourSegmentHeight ||
            changes.events ||
            changes.daysInWeek) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    CalendarWeekViewComponent.prototype.resizeStarted = function (eventsContainer, minWidth) {
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        var resizeHelper = new _common_calendar_resize_helper_provider__WEBPACK_IMPORTED_MODULE_3__["CalendarResizeHelper"](eventsContainer, minWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.timeEventResizeStarted = function (eventsContainer, timeEvent, resizeEvent) {
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        this.resizeStarted(eventsContainer);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.timeEventResizing = function (timeEvent, resizeEvent) {
        var _this = this;
        this.timeEventResizes.set(timeEvent.event, resizeEvent);
        var adjustedEvents = new Map();
        var tempEvents = this.events.slice();
        this.timeEventResizes.forEach(function (lastResizeEvent, event) {
            var newEventDates = _this.getTimeEventResizedDates(event, lastResizeEvent);
            var adjustedEvent = __assign({}, event, newEventDates);
            adjustedEvents.set(adjustedEvent, event);
            var eventIndex = tempEvents.indexOf(event);
            tempEvents[eventIndex] = adjustedEvent;
        });
        this.restoreOriginalEvents(tempEvents, adjustedEvents);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.timeEventResizeEnded = function (timeEvent) {
        this.view = this.getWeekView(this.events);
        var lastResizeEvent = this.timeEventResizes.get(timeEvent.event);
        this.timeEventResizes.delete(timeEvent.event);
        var newEventDates = this.getTimeEventResizedDates(timeEvent.event, lastResizeEvent);
        this.eventTimesChanged.emit({
            newStart: newEventDates.start,
            newEnd: newEventDates.end,
            event: timeEvent.event,
            type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Resize
        });
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeStarted = function (allDayEventsContainer, allDayEvent, resizeEvent) {
        this.allDayEventResizes.set(allDayEvent, {
            originalOffset: allDayEvent.offset,
            originalSpan: allDayEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.resizeStarted(allDayEventsContainer, this.getDayColumnWidth(allDayEventsContainer));
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.allDayEventResizing = function (allDayEvent, resizeEvent, dayWidth) {
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            allDayEvent.offset = currentResize.originalOffset + diff;
            allDayEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            allDayEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.allDayEventResizeEnded = function (allDayEvent) {
        var currentResize = this.allDayEventResizes.get(allDayEvent);
        var allDayEventResizingBeforeStart = currentResize.edge === 'left';
        var daysDiff;
        if (allDayEventResizingBeforeStart) {
            daysDiff = allDayEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = allDayEvent.span - currentResize.originalSpan;
        }
        allDayEvent.offset = currentResize.originalOffset;
        allDayEvent.span = currentResize.originalSpan;
        var newStart = allDayEvent.event.start;
        var newEnd = allDayEvent.event.end || allDayEvent.event.start;
        if (allDayEventResizingBeforeStart) {
            newStart = this.dateAdapter.addDays(newStart, daysDiff);
        }
        else {
            newEnd = this.dateAdapter.addDays(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({
            newStart: newStart,
            newEnd: newEnd,
            event: allDayEvent.event,
            type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Resize
        });
        this.allDayEventResizes.delete(allDayEvent);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.eventDropped = function (dropEvent, date, allDay) {
        if (Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["shouldFireDroppedEvent"])(dropEvent, date, allDay, this.calendarId)) {
            this.eventTimesChanged.emit({
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Drop,
                event: dropEvent.dropData.event,
                newStart: date,
                allDay: allDay
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragStarted = function (eventsContainer, event, dayEvent) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(eventsContainer);
        var dragHelper = new _common_calendar_drag_helper_provider__WEBPACK_IMPORTED_MODULE_2__["CalendarDragHelper"](eventsContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.allDayEventResizes.size === 0 &&
                _this.timeEventResizes.size === 0 &&
                dragHelper.validateDrag({
                    x: x,
                    y: y,
                    snapDraggedEvents: _this.snapDraggedEvents
                });
        };
        this.dragActive = true;
        this.eventDragEnter = 0;
        if (!this.snapDraggedEvents && dayEvent) {
            this.view.hourColumns.forEach(function (column) {
                var linkedEvent = column.events.find(function (columnEvent) {
                    return columnEvent.event === dayEvent.event && columnEvent !== dayEvent;
                });
                // hide any linked events while dragging
                if (linkedEvent) {
                    linkedEvent.width = 0;
                    linkedEvent.height = 0;
                }
            });
        }
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragMove = function (dayEvent, dragEvent) {
        if (this.snapDraggedEvents) {
            var newEventTimes = this.getDragMovedEventTimes(dayEvent, dragEvent, this.dayColumnWidth, true);
            var originalEvent_1 = dayEvent.event;
            var adjustedEvent_1 = __assign({}, originalEvent_1, newEventTimes);
            var tempEvents = this.events.map(function (event) {
                if (event === originalEvent_1) {
                    return adjustedEvent_1;
                }
                return event;
            });
            this.restoreOriginalEvents(tempEvents, new Map([[adjustedEvent_1, originalEvent_1]]));
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragEnded = function (weekEvent, dragEndEvent, dayWidth, useY) {
        if (useY === void 0) { useY = false; }
        this.view = this.getWeekView(this.events);
        this.dragActive = false;
        var _a = this.getDragMovedEventTimes(weekEvent, dragEndEvent, dayWidth, useY), start = _a.start, end = _a.end;
        if (this.eventDragEnter > 0 &&
            Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["isDraggedWithinPeriod"])(start, end, this.view.period)) {
            this.eventTimesChanged.emit({
                newStart: start,
                newEnd: end,
                event: weekEvent.event,
                type: _common_calendar_event_times_changed_event_interface__WEBPACK_IMPORTED_MODULE_4__["CalendarEventTimesChangedEventType"].Drag,
                allDay: !useY
            });
        }
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader(__assign({ viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, weekendDays: this.weekendDays }, Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getWeekViewPeriod"])(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
        this.emitBeforeViewRender();
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.view = this.getWeekView(this.events);
        this.emitBeforeViewRender();
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit(__assign({ header: this.days }, this.view));
        }
    };
    CalendarWeekViewComponent.prototype.getWeekView = function (events) {
        return this.utils.getWeekView(__assign({ events: events, viewDate: this.viewDate, weekStartsOn: this.weekStartsOn, excluded: this.excludeDays, precision: this.precision, absolutePositionedEvents: true, hourSegments: this.hourSegments, dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            }, dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }, segmentHeight: this.hourSegmentHeight, weekendDays: this.weekendDays }, Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getWeekViewPeriod"])(this.dateAdapter, this.viewDate, this.weekStartsOn, this.excludeDays, this.daysInWeek)));
    };
    CalendarWeekViewComponent.prototype.getDragMovedEventTimes = function (weekEvent, dragEndEvent, dayWidth, useY) {
        var daysDragged = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["roundToNearest"])(dragEndEvent.x, dayWidth) / dayWidth;
        var minutesMoved = useY
            ? Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinutesMoved"])(dragEndEvent.y, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize)
            : 0;
        var start = this.dateAdapter.addMinutes(this.dateAdapter.addDays(weekEvent.event.start, daysDragged), minutesMoved);
        var end;
        if (weekEvent.event.end) {
            end = this.dateAdapter.addMinutes(this.dateAdapter.addDays(weekEvent.event.end, daysDragged), minutesMoved);
        }
        return { start: start, end: end };
    };
    CalendarWeekViewComponent.prototype.restoreOriginalEvents = function (tempEvents, adjustedEvents) {
        this.view = this.getWeekView(tempEvents);
        var adjustedEventsArray = tempEvents.filter(function (event) {
            return adjustedEvents.has(event);
        });
        this.view.hourColumns.forEach(function (column) {
            adjustedEventsArray.forEach(function (adjustedEvent) {
                var originalEvent = adjustedEvents.get(adjustedEvent);
                var existingColumnEvent = column.events.find(function (columnEvent) { return columnEvent.event === adjustedEvent; });
                if (existingColumnEvent) {
                    // restore the original event so trackBy kicks in and the dom isn't changed
                    existingColumnEvent.event = originalEvent;
                }
                else {
                    // add a dummy event to the drop so if the event was removed from the original column the drag doesn't end early
                    column.events.push({
                        event: originalEvent,
                        left: 0,
                        top: 0,
                        height: 0,
                        width: 0,
                        startsBeforeDay: false,
                        endsAfterDay: false
                    });
                }
            });
        });
        adjustedEvents.clear();
    };
    CalendarWeekViewComponent.prototype.getTimeEventResizedDates = function (calendarEvent, resizeEvent) {
        var minimumEventHeight = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinimumEventHeightInMinutes"])(this.hourSegments, this.hourSegmentHeight);
        var newEventDates = {
            start: calendarEvent.start,
            end: Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getDefaultEventEnd"])(this.dateAdapter, calendarEvent, minimumEventHeight)
        };
        var end = calendarEvent.end, eventWithoutEnd = __rest(calendarEvent, ["end"]);
        var smallestResizes = {
            start: this.dateAdapter.addMinutes(newEventDates.end, minimumEventHeight * -1),
            end: Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getDefaultEventEnd"])(this.dateAdapter, eventWithoutEnd, minimumEventHeight)
        };
        if (resizeEvent.edges.left) {
            var daysDiff = Math.round(+resizeEvent.edges.left / this.dayColumnWidth);
            var newStart = this.dateAdapter.addDays(newEventDates.start, daysDiff);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (resizeEvent.edges.right) {
            var daysDiff = Math.round(+resizeEvent.edges.right / this.dayColumnWidth);
            var newEnd = this.dateAdapter.addDays(newEventDates.end, daysDiff);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        if (resizeEvent.edges.top) {
            var minutesMoved = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinutesMoved"])(resizeEvent.edges.top, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            var newStart = this.dateAdapter.addMinutes(newEventDates.start, minutesMoved);
            if (newStart < smallestResizes.start) {
                newEventDates.start = newStart;
            }
            else {
                newEventDates.start = smallestResizes.start;
            }
        }
        else if (resizeEvent.edges.bottom) {
            var minutesMoved = Object(_common_util__WEBPACK_IMPORTED_MODULE_6__["getMinutesMoved"])(resizeEvent.edges.bottom, this.hourSegments, this.hourSegmentHeight, this.eventSnapSize);
            var newEnd = this.dateAdapter.addMinutes(newEventDates.end, minutesMoved);
            if (newEnd > smallestResizes.end) {
                newEventDates.end = newEnd;
            }
            else {
                newEventDates.end = smallestResizes.end;
            }
        }
        return newEventDates;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], CalendarWeekViewComponent.prototype, "refresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "eventActionsTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "precision", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "snapDraggedEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "hourSegments", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "hourSegmentHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayStartHour", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayStartMinute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayEndHour", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "dayEndMinute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "hourSegmentTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "eventSnapSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "allDayEventsLabelTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "daysInWeek", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CalendarWeekViewComponent.prototype, "hourSegmentClicked", void 0);
    CalendarWeekViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-calendar-week-view',
            template: "\n    <div class=\"cal-week-view\">\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventDropped({dropData: $event}, $event.newStart, true)\">\n      </mwl-calendar-week-view-header>\n      <div\n        class=\"cal-all-day-events\"\n        #allDayEventsContainer\n        *ngIf=\"view.allDayEventRows.length > 0\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-day-columns\">\n          <div\n            class=\"cal-time-label-column\"\n            [ngTemplateOutlet]=\"allDayEventsLabelTemplate\">\n          </div>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"eventDropped($event, day.date, true)\">\n          </div>\n        </div>\n        <div\n          *ngFor=\"let eventRow of view.allDayEventRows; trackBy:trackByIndex\"\n          #eventRowContainer\n          class=\"cal-events-row\">\n          <div\n            *ngFor=\"let allDayEvent of eventRow.row; trackBy:trackByDayOrWeekEvent\"\n            #event\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"allDayEvent.event.draggable && allDayEventResizes.size === 0\"\n            [class.cal-starts-within-week]=\"!allDayEvent.startsBeforeWeek\"\n            [class.cal-ends-within-week]=\"!allDayEvent.endsAfterWeek\"\n            [ngClass]=\"allDayEvent.event?.cssClass\"\n            [style.width.%]=\"(100 / days.length) * allDayEvent.span\"\n            [style.marginLeft.%]=\"(100 / days.length) * allDayEvent.offset\"\n            mwlResizable\n            [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"allDayEventResizeStarted(eventRowContainer, allDayEvent, $event)\"\n            (resizing)=\"allDayEventResizing(allDayEvent, $event, dayColumnWidth)\"\n            (resizeEnd)=\"allDayEventResizeEnded(allDayEvent)\"\n            mwlDraggable\n            dragActiveClass=\"cal-drag-active\"\n            [dropData]=\"{event: allDayEvent.event, calendarId: calendarId}\"\n            [dragAxis]=\"{\n              x: allDayEvent.event.draggable && allDayEventResizes.size === 0,\n              y: !snapDraggedEvents && allDayEvent.event.draggable && allDayEventResizes.size === 0\n            }\"\n            [dragSnapGrid]=\"snapDraggedEvents ? {x: dayColumnWidth} : {}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStarted(eventRowContainer, event)\"\n            (dragEnd)=\"dragEnded(allDayEvent, $event, dayColumnWidth)\">\n            <div\n              class=\"cal-resize-handle cal-resize-handle-before-start\"\n              *ngIf=\"allDayEvent.event?.resizable?.beforeStart && !allDayEvent.startsBeforeWeek\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ left: true }\">\n            </div>\n            <mwl-calendar-week-view-event\n              [weekEvent]=\"allDayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              [eventActionsTemplate]=\"eventActionsTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: allDayEvent.event})\">\n            </mwl-calendar-week-view-event>\n            <div\n              class=\"cal-resize-handle cal-resize-handle-after-end\"\n              *ngIf=\"allDayEvent.event?.resizable?.afterEnd && !allDayEvent.endsAfterWeek\"\n              mwlResizeHandle\n              [resizeEdges]=\"{ right: true }\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"cal-time-events\"\n        mwlDroppable\n        (dragEnter)=\"eventDragEnter = eventDragEnter + 1\"\n        (dragLeave)=\"eventDragEnter = eventDragEnter - 1\">\n        <div class=\"cal-time-label-column\" *ngIf=\"view.hourColumns.length > 0\">\n          <div\n            *ngFor=\"let hour of view.hourColumns[0].hours; trackBy:trackByHour; let odd = odd\"\n            class=\"cal-hour\"\n            [class.cal-hour-odd]=\"odd\">\n            <mwl-calendar-week-view-hour-segment\n              *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n              [style.height.px]=\"hourSegmentHeight\"\n              [segment]=\"segment\"\n              [segmentHeight]=\"hourSegmentHeight\"\n              [locale]=\"locale\"\n              [customTemplate]=\"hourSegmentTemplate\"\n              [isTimeLabel]=\"true\">\n            </mwl-calendar-week-view-hour-segment>\n          </div>\n        </div>\n        <div\n          class=\"cal-day-columns\"\n          [class.cal-resize-active]=\"timeEventResizes.size > 0\"\n          #dayColumns>\n          <div\n            class=\"cal-day-column\"\n            *ngFor=\"let column of view.hourColumns; trackBy:trackByHourColumn\">\n            <div\n              *ngFor=\"let timeEvent of column.events; trackBy:trackByDayOrWeekEvent\"\n              #event\n              class=\"cal-event-container\"\n              [class.cal-draggable]=\"timeEvent.event.draggable && timeEventResizes.size === 0\"\n              [class.cal-starts-within-day]=\"!timeEvent.startsBeforeDay\"\n              [class.cal-ends-within-day]=\"!timeEvent.endsAfterDay\"\n              [ngClass]=\"timeEvent.event.cssClass\"\n              [hidden]=\"timeEvent.height === 0 && timeEvent.width === 0\"\n              [style.top.px]=\"timeEvent.top\"\n              [style.height.px]=\"timeEvent.height\"\n              [style.left.%]=\"timeEvent.left\"\n              [style.width.%]=\"timeEvent.width\"\n              mwlResizable\n              [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth, top: eventSnapSize || hourSegmentHeight, bottom: eventSnapSize || hourSegmentHeight}\"\n              [validateResize]=\"validateResize\"\n              [allowNegativeResizes]=\"true\"\n              (resizeStart)=\"timeEventResizeStarted(dayColumns, timeEvent, $event)\"\n              (resizing)=\"timeEventResizing(timeEvent, $event)\"\n              (resizeEnd)=\"timeEventResizeEnded(timeEvent)\"\n              mwlDraggable\n              dragActiveClass=\"cal-drag-active\"\n              [dropData]=\"{event: timeEvent.event, calendarId: calendarId}\"\n              [dragAxis]=\"{\n                x: timeEvent.event.draggable && timeEventResizes.size === 0,\n                y: timeEvent.event.draggable && timeEventResizes.size === 0\n              }\"\n              [dragSnapGrid]=\"snapDraggedEvents ? {x: dayColumnWidth, y: eventSnapSize || hourSegmentHeight} : {}\"\n              [ghostDragEnabled]=\"!snapDraggedEvents\"\n              [validateDrag]=\"validateDrag\"\n              (dragPointerDown)=\"dragStarted(dayColumns, event, timeEvent)\"\n              (dragging)=\"dragMove(timeEvent, $event)\"\n              (dragEnd)=\"dragEnded(timeEvent, $event, dayColumnWidth, true)\">\n              <div\n                class=\"cal-resize-handle cal-resize-handle-before-start\"\n                *ngIf=\"timeEvent.event?.resizable?.beforeStart && !timeEvent.startsBeforeDay\"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  left: true,\n                  top: true\n                }\">\n              </div>\n              <mwl-calendar-week-view-event\n                [weekEvent]=\"timeEvent\"\n                [tooltipPlacement]=\"tooltipPlacement\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                [tooltipAppendToBody]=\"tooltipAppendToBody\"\n                [tooltipDisabled]=\"dragActive || timeEventResizes.size > 0\"\n                [customTemplate]=\"eventTemplate\"\n                [eventTitleTemplate]=\"eventTitleTemplate\"\n                [eventActionsTemplate]=\"eventActionsTemplate\"\n                (eventClicked)=\"eventClicked.emit({event: timeEvent.event})\">\n              </mwl-calendar-week-view-event>\n              <div\n                class=\"cal-resize-handle cal-resize-handle-after-end\"\n                *ngIf=\"timeEvent.event?.resizable?.afterEnd && !timeEvent.endsAfterDay\"\n                mwlResizeHandle\n                [resizeEdges]=\"{\n                  right: true,\n                  bottom: true\n                }\">\n              </div>\n            </div>\n\n            <div\n              *ngFor=\"let hour of column.hours; trackBy:trackByHour; let odd = odd\"\n              class=\"cal-hour\"\n              [class.cal-hour-odd]=\"odd\">\n              <mwl-calendar-week-view-hour-segment\n                *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n                [style.height.px]=\"hourSegmentHeight\"\n                [segment]=\"segment\"\n                [segmentHeight]=\"hourSegmentHeight\"\n                [locale]=\"locale\"\n                [customTemplate]=\"hourSegmentTemplate\"\n                (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n                mwlDroppable\n                [dragOverClass]=\"!dragActive || !snapDraggedEvents ? 'cal-drag-over' : null\"\n                dragActiveClass=\"cal-drag-active\"\n                (drop)=\"eventDropped($event, segment.date, false)\">\n              </mwl-calendar-week-view-hour-segment>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _common_calendar_utils_provider__WEBPACK_IMPORTED_MODULE_5__["CalendarUtils"], String, _date_adapters_date_adapter__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"]])
    ], CalendarWeekViewComponent);
    return CalendarWeekViewComponent;
}());



/***/ }),

/***/ "./projects/angular-calendar/src/modules/week/calendar-week.module.ts":
/*!****************************************************************************!*\
  !*** ./projects/angular-calendar/src/modules/week/calendar-week.module.ts ***!
  \****************************************************************************/
/*! exports provided: CalendarWeekViewComponent, getWeekViewPeriod, CalendarWeekModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return CalendarWeekModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-week-view.component */ "./projects/angular-calendar/src/modules/week/calendar-week-view.component.ts");
/* harmony import */ var _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-week-view-header.component */ "./projects/angular-calendar/src/modules/week/calendar-week-view-header.component.ts");
/* harmony import */ var _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-week-view-event.component */ "./projects/angular-calendar/src/modules/week/calendar-week-view-event.component.ts");
/* harmony import */ var _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/calendar-common.module */ "./projects/angular-calendar/src/modules/common/calendar-common.module.ts");
/* harmony import */ var _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-week-view-hour-segment.component */ "./projects/angular-calendar/src/modules/week/calendar-week-view-hour-segment.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"]; });

/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/util */ "./projects/angular-calendar/src/modules/common/util.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWeekViewPeriod", function() { return _common_util__WEBPACK_IMPORTED_MODULE_9__["getWeekViewPeriod"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"],
                _common_calendar_common_module__WEBPACK_IMPORTED_MODULE_7__["CalendarCommonModule"]
            ],
            declarations: [
                _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"],
                _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewHeaderComponent"],
                _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarWeekViewEventComponent"],
                _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__["CalendarWeekViewHourSegmentComponent"]
            ],
            exports: [
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_2__["ResizableModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_3__["DragAndDropModule"],
                _calendar_week_view_component__WEBPACK_IMPORTED_MODULE_4__["CalendarWeekViewComponent"],
                _calendar_week_view_header_component__WEBPACK_IMPORTED_MODULE_5__["CalendarWeekViewHeaderComponent"],
                _calendar_week_view_event_component__WEBPACK_IMPORTED_MODULE_6__["CalendarWeekViewEventComponent"],
                _calendar_week_view_hour_segment_component__WEBPACK_IMPORTED_MODULE_8__["CalendarWeekViewHourSegmentComponent"]
            ]
        })
    ], CalendarWeekModule);
    return CalendarWeekModule;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./demo-modules/additional-event-properties/module": [
		"./src/app/demo-modules/additional-event-properties/module.ts",
		"common",
		"demo-modules-additional-event-properties-module"
	],
	"./demo-modules/all-day-events/module": [
		"./src/app/demo-modules/all-day-events/module.ts",
		"common",
		"demo-modules-all-day-events-module"
	],
	"./demo-modules/async-events/module": [
		"./src/app/demo-modules/async-events/module.ts",
		"common",
		"demo-modules-async-events-module"
	],
	"./demo-modules/before-view-render/module": [
		"./src/app/demo-modules/before-view-render/module.ts",
		"common",
		"demo-modules-before-view-render-module"
	],
	"./demo-modules/clickable-days/module": [
		"./src/app/demo-modules/clickable-days/module.ts",
		"common",
		"demo-modules-clickable-days-module"
	],
	"./demo-modules/clickable-events/module": [
		"./src/app/demo-modules/clickable-events/module.ts",
		"common",
		"demo-modules-clickable-events-module"
	],
	"./demo-modules/context-menu/module": [
		"./src/app/demo-modules/context-menu/module.ts",
		"common",
		"demo-modules-context-menu-module"
	],
	"./demo-modules/custom-event-class/module": [
		"./src/app/demo-modules/custom-event-class/module.ts",
		"common",
		"demo-modules-custom-event-class-module"
	],
	"./demo-modules/custom-templates/module": [
		"./src/app/demo-modules/custom-templates/module.ts",
		"common",
		"demo-modules-custom-templates-module"
	],
	"./demo-modules/customise-date-formats/module": [
		"./src/app/demo-modules/customise-date-formats/module.ts",
		"common",
		"demo-modules-customise-date-formats-module"
	],
	"./demo-modules/day-view-hour-split/module": [
		"./src/app/demo-modules/day-view-hour-split/module.ts",
		"common",
		"demo-modules-day-view-hour-split-module"
	],
	"./demo-modules/day-view-start-end/module": [
		"./src/app/demo-modules/day-view-start-end/module.ts",
		"common",
		"demo-modules-day-view-start-end-module"
	],
	"./demo-modules/disable-slide-animation/module": [
		"./src/app/demo-modules/disable-slide-animation/module.ts",
		"common",
		"demo-modules-disable-slide-animation-module"
	],
	"./demo-modules/disable-tooltips/module": [
		"./src/app/demo-modules/disable-tooltips/module.ts",
		"common",
		"demo-modules-disable-tooltips-module"
	],
	"./demo-modules/draggable-events/module": [
		"./src/app/demo-modules/draggable-events/module.ts",
		"common",
		"demo-modules-draggable-events-module"
	],
	"./demo-modules/draggable-external-events/module": [
		"./src/app/demo-modules/draggable-external-events/module.ts",
		"common",
		"demo-modules-draggable-external-events-module"
	],
	"./demo-modules/editable-deletable-events/module": [
		"./src/app/demo-modules/editable-deletable-events/module.ts",
		"common",
		"demo-modules-editable-deletable-events-module"
	],
	"./demo-modules/exclude-days/module": [
		"./src/app/demo-modules/exclude-days/module.ts",
		"common",
		"demo-modules-exclude-days-module"
	],
	"./demo-modules/extra-month-view-weeks/module": [
		"./src/app/demo-modules/extra-month-view-weeks/module.ts",
		"common",
		"demo-modules-extra-month-view-weeks-module"
	],
	"./demo-modules/group-month-view-events/module": [
		"./src/app/demo-modules/group-month-view-events/module.ts",
		"common",
		"demo-modules-group-month-view-events-module"
	],
	"./demo-modules/i18n/module": [
		"./src/app/demo-modules/i18n/module.ts",
		"common",
		"demo-modules-i18n-module"
	],
	"./demo-modules/min-max-date/module": [
		"./src/app/demo-modules/min-max-date/module.ts",
		"common",
		"demo-modules-min-max-date-module"
	],
	"./demo-modules/moment/module": [
		"./src/app/demo-modules/moment/module.ts",
		"default~demo-modules-moment-module~demo-modules-recurring-events-module",
		"common",
		"demo-modules-moment-module"
	],
	"./demo-modules/month-view-badge-total/module": [
		"./src/app/demo-modules/month-view-badge-total/module.ts",
		"common",
		"demo-modules-month-view-badge-total-module"
	],
	"./demo-modules/navigating-between-views/module": [
		"./src/app/demo-modules/navigating-between-views/module.ts",
		"common",
		"demo-modules-navigating-between-views-module"
	],
	"./demo-modules/no-events-label/module": [
		"./src/app/demo-modules/no-events-label/module.ts",
		"common",
		"demo-modules-no-events-label-module"
	],
	"./demo-modules/optional-event-end-dates/module": [
		"./src/app/demo-modules/optional-event-end-dates/module.ts",
		"common",
		"demo-modules-optional-event-end-dates-module"
	],
	"./demo-modules/recurring-events/module": [
		"./src/app/demo-modules/recurring-events/module.ts",
		"default~demo-modules-moment-module~demo-modules-recurring-events-module",
		"common",
		"demo-modules-recurring-events-module"
	],
	"./demo-modules/refreshing-the-view/module": [
		"./src/app/demo-modules/refreshing-the-view/module.ts",
		"common",
		"demo-modules-refreshing-the-view-module"
	],
	"./demo-modules/resizable-events/module": [
		"./src/app/demo-modules/resizable-events/module.ts",
		"common",
		"demo-modules-resizable-events-module"
	],
	"./demo-modules/selectable-period/module": [
		"./src/app/demo-modules/selectable-period/module.ts",
		"common",
		"demo-modules-selectable-period-module"
	],
	"./demo-modules/show-dates-on-titles/module": [
		"./src/app/demo-modules/show-dates-on-titles/module.ts",
		"common",
		"demo-modules-show-dates-on-titles-module"
	],
	"./demo-modules/week-view-minute-precision/module": [
		"./src/app/demo-modules/week-view-minute-precision/module.ts",
		"common",
		"demo-modules-week-view-minute-precision-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/demo-app.component.ts":
/*!***************************************!*\
  !*** ./src/app/demo-app.component.ts ***!
  \***************************************/
/*! exports provided: DemoAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAppComponent", function() { return DemoAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackblitz/sdk */ "./node_modules/@stackblitz/sdk/bundles/sdk.m.js");
/* harmony import */ var _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo-modules/demo-utils/sources */ "./src/app/demo-modules/demo-utils/sources.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






function getSources(folder) {
    return __awaiter(this, void 0, void 0, function () {
        var sources;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __webpack_require__("./src/app/demo-modules lazy recursive ^\\.\\/.*\\/sources\\.ts$")("./" + folder + '/sources.ts')];
                case 1:
                    sources = (_a.sent()).sources;
                    return [2 /*return*/, sources.map(function (_a) {
                            var filename = _a.filename, contents = _a.contents;
                            var _b = filename.match(/^.+\.(.+)$/), extension = _b[1];
                            var languages = {
                                ts: 'typescript',
                                html: 'html',
                                css: 'css'
                            };
                            return {
                                filename: filename,
                                contents: {
                                    raw: contents.raw
                                        .replace(",\n    RouterModule.forChild([{ path: '', component: DemoComponent }])", '')
                                        .replace("\nimport { RouterModule } from '@angular/router';", ''),
                                    highlighted: contents.highlighted // TODO - move this into a regexp replace for both
                                        .replace(',\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])', '')
                                        .replace('\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;', '')
                                },
                                language: languages[extension]
                            };
                        })];
            }
        });
    });
}
var dependencyVersions = {
    angular: __webpack_require__(/*! @angular/core/package.json */ "./node_modules/@angular/core/package.json").version,
    angularRouter: __webpack_require__(/*! @angular/router/package.json */ "./node_modules/@angular/router/package.json").version,
    angularCalendar: __webpack_require__(/*! ../../package.json */ "./package.json").version,
    calendarUtils: __webpack_require__(/*! calendar-utils/package.json */ "./node_modules/calendar-utils/package.json").version,
    angularResizableElement: __webpack_require__(/*! angular-resizable-element/package.json */ "./node_modules/angular-resizable-element/package.json")
        .version,
    angularDraggableDroppable: __webpack_require__(/*! angular-draggable-droppable/package.json */ "./node_modules/angular-draggable-droppable/package.json")
        .version,
    dateFns: __webpack_require__(/*! date-fns/package.json */ "./node_modules/date-fns/package.json").version,
    rxjs: __webpack_require__(/*! rxjs/package.json */ "./node_modules/rxjs/package.json").version,
    bootstrap: __webpack_require__(/*! bootstrap-css-only/package.json */ "./node_modules/bootstrap-css-only/package.json").version,
    zoneJs: __webpack_require__(/*! zone.js/package.json */ "./node_modules/zone.js/package.json").version,
    ngBootstrap: __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/package.json */ "./node_modules/@ng-bootstrap/ng-bootstrap/package.json").version,
    rrule: __webpack_require__(/*! rrule/package.json */ "./node_modules/rrule/package.json").version,
    fontAwesome: __webpack_require__(/*! font-awesome/package.json */ "./node_modules/font-awesome/package.json").version,
    positioning: __webpack_require__(/*! positioning/package.json */ "./node_modules/positioning/package.json").version,
    flatpickr: __webpack_require__(/*! flatpickr/package.json */ "./node_modules/flatpickr/package.json").version,
    angularxFlatpickr: __webpack_require__(/*! angularx-flatpickr/package.json */ "./node_modules/angularx-flatpickr/package.json").version
};
var DemoAppComponent = /** @class */ (function () {
    function DemoAppComponent(router, http) {
        this.router = router;
        this.http = http;
        this.demos = [];
        this.isMenuVisible = false;
        this.firstDemoLoaded = false;
        window.sessionStorage.clear();
        /*http
          .post('https://api.agenda/oauth/token', {
            grant_type: 'password',
            client_id: 2,
            client_secret: '5X1Cq0c4zJTkDFKxJiN2OVWHaSd4f7WqTqDDDFuV',
            username: 'milton@gmail.com',
            password: '123456'
          })
          .toPromise()
          .then(response => {
            console.log(response.json());
            window.sessionStorage.setItem('token', JSON.stringify(response.json()));
          })
          .catch(responseError => {
            console.error(responseError.status);
          });*/
    }
    DemoAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var defaultRoute = this.router.config.find(function (route) { return route.path === '**'; });
        this.demos = this.router.config
            .filter(function (route) { return route.path !== '**'; })
            .map(function (route) { return ({
            path: route.path,
            label: route.data['label']
        }); });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function () { return (_this.firstDemoLoaded = true); });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
            if (event.url === '/') {
                return { url: "/" + defaultRoute.redirectTo };
            }
            return event;
        }))
            .subscribe(function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.activeDemo = this.demos.find(function (demo) { return "/" + demo.path === event.url; });
                        _a = this.activeDemo;
                        return [4 /*yield*/, getSources(this.activeDemo.path)];
                    case 1:
                        _a.sources = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DemoAppComponent.prototype.editInStackblitz = function (demo) {
        var files = {
            'index.html': ("\n<link href=\"https://unpkg.com/bootstrap-css-only@" + dependencyVersions.bootstrap + "/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/font-awesome@" + dependencyVersions.fontAwesome + "/css/font-awesome.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/angular-calendar@" + dependencyVersions.angularCalendar + "/css/angular-calendar.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/flatpickr@" + dependencyVersions.flatpickr + "/dist/flatpickr.css\" rel=\"stylesheet\">\n<mwl-demo-component>Loading...</mwl-demo-component>\n").trim(),
            'main.ts': "\nimport 'core-js/es6/reflect';\nimport 'core-js/es7/reflect';\nimport 'zone.js/dist/zone';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { NgModule } from '@angular/core';\nimport { DemoModule } from './demo/module';\nimport { DemoComponent } from './demo/component';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    DemoModule\n  ],\n  bootstrap: [DemoComponent]\n})\nexport class BootstrapModule {}\n\nplatformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));\n".trim()
        };
        _demo_modules_demo_utils_sources__WEBPACK_IMPORTED_MODULE_4__["sources"].forEach(function (source) {
            files["demo-utils/" + source.filename] = source.contents.raw;
        });
        demo.sources.forEach(function (source) {
            files["demo/" + source.filename] = source.contents.raw;
        });
        _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_3__["default"].openProject({
            title: 'Angular Calendar Demo',
            description: demo.label,
            template: 'angular-cli',
            tags: ['angular-calendar'],
            files: files,
            dependencies: {
                '@angular/core': dependencyVersions.angular,
                '@angular/common': dependencyVersions.angular,
                '@angular/compiler': dependencyVersions.angular,
                '@angular/platform-browser': dependencyVersions.angular,
                '@angular/platform-browser-dynamic': dependencyVersions.angular,
                '@angular/router': dependencyVersions.angular,
                '@angular/forms': dependencyVersions.angular,
                '@angular/animations': dependencyVersions.angular,
                rxjs: dependencyVersions.rxjs,
                'zone.js': dependencyVersions.zoneJs,
                'angular-draggable-droppable': dependencyVersions.angularDraggableDroppable,
                'angular-resizable-element': dependencyVersions.angularResizableElement,
                'date-fns': dependencyVersions.dateFns,
                'angular-calendar': dependencyVersions.angularCalendar,
                '@ng-bootstrap/ng-bootstrap': dependencyVersions.ngBootstrap,
                rrule: dependencyVersions.rrule,
                'calendar-utils': dependencyVersions.calendarUtils,
                flatpickr: dependencyVersions.flatpickr,
                'angularx-flatpickr': dependencyVersions.angularxFlatpickr
            }
        }, {
            openFile: 'demo/component.ts'
        });
    };
    DemoAppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-app',
            styles: [__webpack_require__(/*! ./demo-app.css */ "./src/app/demo-app.css")],
            template: __webpack_require__(/*! ./demo-app.html */ "./src/app/demo-app.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], DemoAppComponent);
    return DemoAppComponent;
}());



/***/ }),

/***/ "./src/app/demo-app.css":
/*!******************************!*\
  !*** ./src/app/demo-app.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0;\n}\n\n.container-fluid {\n  padding-top: 70px;\n  padding-bottom: 50px;\n}\n\n.spacer-top {\n  margin-top: 15px;\n}\n\n.sidebar-nav h4 {\n  margin-bottom: 20px;\n}\n\n.sidebar-nav ul {\n  margin-bottom: 0;\n}\n\n.sidebar-nav li {\n  margin-bottom: 10px;\n  font-size: 90%;\n}\n\n.sidebar-nav a:not(.active) {\n  color: #777;\n}\n\n.sidebar-nav a:hover {\n  color: #0275d8;\n  text-decoration: none;\n}\n\n.sidebar-nav a.active {\n  color: #373a3c;\n  font-weight: 700;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}"

/***/ }),

/***/ "./src/app/demo-app.html":
/*!*******************************!*\
  !*** ./src/app/demo-app.html ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template  #loading>\n  <div class=\"card\">\n    <div class=\"card-body text-center\">\n      <i class=\"fa fa-spin fa-spinner fa-5x\"></i>\n      <br>\n      Aguarde...\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"card\" *ngIf=\"firstDemoLoaded; else loading\">\n        <div class=\"card-body\">\n\n          <ngb-tabset [destroyOnHide]=\"false\">\n\n            <ngb-tab>\n              <ng-template ngbTabTitle>\n                <i class=\"fa fa-fw fa-laptop\"></i> Agenda Médica\n              </ng-template>\n              <ng-template ngbTabContent>\n                <div class=\"spacer-top\"><router-outlet></router-outlet></div>\n              </ng-template>\n            </ngb-tab>\n\n\n          </ngb-tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-app.module.ts":
/*!************************************!*\
  !*** ./src/app/demo-app.module.ts ***!
  \************************************/
/*! exports provided: DemoAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoAppModule", function() { return DemoAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _demo_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-app.component */ "./src/app/demo-app.component.ts");
/* harmony import */ var _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo-modules/kitchen-sink/component */ "./src/app/demo-modules/kitchen-sink/component.ts");
/* harmony import */ var _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-modules/kitchen-sink/module */ "./src/app/demo-modules/kitchen-sink/module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DemoAppModule = /** @class */ (function () {
    function DemoAppModule() {
    }
    DemoAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_demo_app_component__WEBPACK_IMPORTED_MODULE_5__["DemoAppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
                _demo_modules_kitchen_sink_module__WEBPACK_IMPORTED_MODULE_7__["DemoModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        path: 'kitchen-sink',
                        component: _demo_modules_kitchen_sink_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
                        data: {
                            label: 'Kitchen sink'
                        }
                    },
                    {
                        path: 'async-events',
                        loadChildren: './demo-modules/async-events/module#DemoModule',
                        data: {
                            label: 'Async events'
                        }
                    },
                    {
                        path: 'optional-event-end-dates',
                        loadChildren: './demo-modules/optional-event-end-dates/module#DemoModule',
                        data: {
                            label: 'Optional event end dates'
                        }
                    },
                    {
                        path: 'editable-deletable-events',
                        loadChildren: './demo-modules/editable-deletable-events/module#DemoModule',
                        data: {
                            label: 'Editable / deletable events'
                        }
                    },
                    {
                        path: 'draggable-events',
                        loadChildren: './demo-modules/draggable-events/module#DemoModule',
                        data: {
                            label: 'Draggable events'
                        }
                    },
                    {
                        path: 'resizable-events',
                        loadChildren: './demo-modules/resizable-events/module#DemoModule',
                        data: {
                            label: 'Resizable events'
                        }
                    },
                    {
                        path: 'month-view-badge-total',
                        loadChildren: './demo-modules/month-view-badge-total/module#DemoModule',
                        data: {
                            label: 'Month view badge total'
                        }
                    },
                    {
                        path: 'recurring-events',
                        loadChildren: './demo-modules/recurring-events/module#DemoModule',
                        data: {
                            label: 'Recurring events'
                        }
                    },
                    {
                        path: 'custom-event-class',
                        loadChildren: './demo-modules/custom-event-class/module#DemoModule',
                        data: {
                            label: 'Custom event class'
                        }
                    },
                    {
                        path: 'clickable-events',
                        loadChildren: './demo-modules/clickable-events/module#DemoModule',
                        data: {
                            label: 'Clickable events'
                        }
                    },
                    {
                        path: 'clickable-days',
                        loadChildren: './demo-modules/clickable-days/module#DemoModule',
                        data: {
                            label: 'Clickable days'
                        }
                    },
                    {
                        path: 'day-view-start-end',
                        loadChildren: './demo-modules/day-view-start-end/module#DemoModule',
                        data: {
                            label: 'Day view start / end time'
                        }
                    },
                    {
                        path: 'day-view-hour-split',
                        loadChildren: './demo-modules/day-view-hour-split/module#DemoModule',
                        data: {
                            label: 'Day view hour split'
                        }
                    },
                    {
                        path: 'navigating-between-views',
                        loadChildren: './demo-modules/navigating-between-views/module#DemoModule',
                        data: {
                            label: 'Navigating between views'
                        }
                    },
                    {
                        path: 'before-view-render',
                        loadChildren: './demo-modules/before-view-render/module#DemoModule',
                        data: {
                            label: 'Before view render'
                        }
                    },
                    {
                        path: 'exclude-days',
                        loadChildren: './demo-modules/exclude-days/module#DemoModule',
                        data: {
                            label: 'Exclude Weekends'
                        }
                    },
                    {
                        path: 'i18n',
                        loadChildren: './demo-modules/i18n/module#DemoModule',
                        data: {
                            label: 'Internationalisation'
                        }
                    },
                    {
                        path: 'draggable-external-events',
                        loadChildren: './demo-modules/draggable-external-events/module#DemoModule',
                        data: {
                            label: 'Draggable external events'
                        }
                    },
                    {
                        path: 'all-day-events',
                        loadChildren: './demo-modules/all-day-events/module#DemoModule',
                        data: {
                            label: 'All day events'
                        }
                    },
                    {
                        path: 'customise-date-formats',
                        loadChildren: './demo-modules/customise-date-formats/module#DemoModule',
                        data: {
                            label: 'Customise date formats'
                        }
                    },
                    {
                        path: 'show-dates-on-titles',
                        loadChildren: './demo-modules/show-dates-on-titles/module#DemoModule',
                        data: {
                            label: 'Show dates on title'
                        }
                    },
                    {
                        path: 'disable-tooltips',
                        loadChildren: './demo-modules/disable-tooltips/module#DemoModule',
                        data: {
                            label: 'Disable tooltips'
                        }
                    },
                    {
                        path: 'additional-event-properties',
                        loadChildren: './demo-modules/additional-event-properties/module#DemoModule',
                        data: {
                            label: 'Additional event properties'
                        }
                    },
                    {
                        path: 'selectable-period',
                        loadChildren: './demo-modules/selectable-period/module#DemoModule',
                        data: {
                            label: 'Selectable period'
                        }
                    },
                    {
                        path: 'min-max-date',
                        loadChildren: './demo-modules/min-max-date/module#DemoModule',
                        data: {
                            label: 'Min max date'
                        }
                    },
                    {
                        path: 'refreshing-the-view',
                        loadChildren: './demo-modules/refreshing-the-view/module#DemoModule',
                        data: {
                            label: 'Refreshing the view'
                        }
                    },
                    {
                        path: 'custom-templates',
                        loadChildren: './demo-modules/custom-templates/module#DemoModule',
                        data: {
                            label: 'Custom templates'
                        }
                    },
                    {
                        path: 'group-month-view-events',
                        loadChildren: './demo-modules/group-month-view-events/module#DemoModule',
                        data: {
                            label: 'Group month view events'
                        }
                    },
                    {
                        path: 'context-menu',
                        loadChildren: './demo-modules/context-menu/module#DemoModule',
                        data: {
                            label: 'Context menu'
                        }
                    },
                    {
                        path: 'week-view-minute-precision',
                        loadChildren: './demo-modules/week-view-minute-precision/module#DemoModule',
                        data: {
                            label: 'Week view minute precision'
                        }
                    },
                    {
                        path: 'extra-month-view-weeks',
                        loadChildren: './demo-modules/extra-month-view-weeks/module#DemoModule',
                        data: {
                            label: 'Extra month view weeks'
                        }
                    },
                    {
                        path: 'disable-slide-animation',
                        loadChildren: './demo-modules/disable-slide-animation/module#DemoModule',
                        data: {
                            label: 'Disable slide animation'
                        }
                    },
                    {
                        path: 'no-events-label',
                        loadChildren: './demo-modules/no-events-label/module#DemoModule',
                        data: {
                            label: 'No events label'
                        }
                    },
                    {
                        path: 'moment',
                        loadChildren: './demo-modules/moment/module#DemoModule',
                        data: {
                            label: 'Use moment'
                        }
                    },
                    {
                        path: '**',
                        redirectTo: 'kitchen-sink'
                    }
                ], {
                    useHash: true
                })
            ],
            bootstrap: [_demo_app_component__WEBPACK_IMPORTED_MODULE_5__["DemoAppComponent"]]
        })
    ], DemoAppModule);
    return DemoAppModule;
}());



/***/ }),

/***/ "./src/app/demo-modules lazy recursive ^\\.\\/.*\\/sources\\.ts$":
/*!**************************************************************************!*\
  !*** ./src/app/demo-modules lazy ^\.\/.*\/sources\.ts$ namespace object ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./additional-event-properties/sources.ts": [
		"./src/app/demo-modules/additional-event-properties/sources.ts",
		"common",
		0
	],
	"./all-day-events/sources.ts": [
		"./src/app/demo-modules/all-day-events/sources.ts",
		"common",
		1
	],
	"./async-events/sources.ts": [
		"./src/app/demo-modules/async-events/sources.ts",
		"common",
		2
	],
	"./before-view-render/sources.ts": [
		"./src/app/demo-modules/before-view-render/sources.ts",
		"common",
		3
	],
	"./clickable-days/sources.ts": [
		"./src/app/demo-modules/clickable-days/sources.ts",
		"common",
		4
	],
	"./clickable-events/sources.ts": [
		"./src/app/demo-modules/clickable-events/sources.ts",
		"common",
		5
	],
	"./context-menu/sources.ts": [
		"./src/app/demo-modules/context-menu/sources.ts",
		"common",
		6
	],
	"./custom-event-class/sources.ts": [
		"./src/app/demo-modules/custom-event-class/sources.ts",
		"common",
		7
	],
	"./custom-templates/sources.ts": [
		"./src/app/demo-modules/custom-templates/sources.ts",
		"common",
		8
	],
	"./customise-date-formats/sources.ts": [
		"./src/app/demo-modules/customise-date-formats/sources.ts",
		"common",
		9
	],
	"./day-view-hour-split/sources.ts": [
		"./src/app/demo-modules/day-view-hour-split/sources.ts",
		"common",
		10
	],
	"./day-view-start-end/sources.ts": [
		"./src/app/demo-modules/day-view-start-end/sources.ts",
		"common",
		11
	],
	"./demo-utils/sources.ts": [
		"./src/app/demo-modules/demo-utils/sources.ts"
	],
	"./disable-slide-animation/sources.ts": [
		"./src/app/demo-modules/disable-slide-animation/sources.ts",
		"common",
		12
	],
	"./disable-tooltips/sources.ts": [
		"./src/app/demo-modules/disable-tooltips/sources.ts",
		"common",
		13
	],
	"./draggable-events/sources.ts": [
		"./src/app/demo-modules/draggable-events/sources.ts",
		"common",
		14
	],
	"./draggable-external-events/sources.ts": [
		"./src/app/demo-modules/draggable-external-events/sources.ts",
		"common",
		15
	],
	"./editable-deletable-events/sources.ts": [
		"./src/app/demo-modules/editable-deletable-events/sources.ts",
		"common",
		16
	],
	"./exclude-days/sources.ts": [
		"./src/app/demo-modules/exclude-days/sources.ts",
		"common",
		17
	],
	"./extra-month-view-weeks/sources.ts": [
		"./src/app/demo-modules/extra-month-view-weeks/sources.ts",
		"common",
		18
	],
	"./group-month-view-events/sources.ts": [
		"./src/app/demo-modules/group-month-view-events/sources.ts",
		"common",
		19
	],
	"./i18n/sources.ts": [
		"./src/app/demo-modules/i18n/sources.ts",
		"common",
		20
	],
	"./kitchen-sink/sources.ts": [
		"./src/app/demo-modules/kitchen-sink/sources.ts",
		21
	],
	"./min-max-date/sources.ts": [
		"./src/app/demo-modules/min-max-date/sources.ts",
		"common",
		22
	],
	"./moment/sources.ts": [
		"./src/app/demo-modules/moment/sources.ts",
		"common",
		23
	],
	"./month-view-badge-total/sources.ts": [
		"./src/app/demo-modules/month-view-badge-total/sources.ts",
		"common",
		24
	],
	"./navigating-between-views/sources.ts": [
		"./src/app/demo-modules/navigating-between-views/sources.ts",
		"common",
		25
	],
	"./no-events-label/sources.ts": [
		"./src/app/demo-modules/no-events-label/sources.ts",
		"common",
		26
	],
	"./optional-event-end-dates/sources.ts": [
		"./src/app/demo-modules/optional-event-end-dates/sources.ts",
		"common",
		27
	],
	"./recurring-events/sources.ts": [
		"./src/app/demo-modules/recurring-events/sources.ts",
		"common",
		28
	],
	"./refreshing-the-view/sources.ts": [
		"./src/app/demo-modules/refreshing-the-view/sources.ts",
		"common",
		29
	],
	"./resizable-events/sources.ts": [
		"./src/app/demo-modules/resizable-events/sources.ts",
		"common",
		30
	],
	"./selectable-period/sources.ts": [
		"./src/app/demo-modules/selectable-period/sources.ts",
		"common",
		31
	],
	"./show-dates-on-titles/sources.ts": [
		"./src/app/demo-modules/show-dates-on-titles/sources.ts",
		"common",
		32
	],
	"./week-view-minute-precision/sources.ts": [
		"./src/app/demo-modules/week-view-minute-precision/sources.ts",
		"common",
		33
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/app/demo-modules lazy recursive ^\\.\\/.*\\/sources\\.ts$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/demo-modules/demo-utils/sources.ts":
/*!****************************************************!*\
  !*** ./src/app/demo-modules/demo-utils/sources.ts ***!
  \****************************************************/
/*! exports provided: sources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sources", function() { return sources; });
var sources = [
    {
        filename: 'calendar-header.component.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./calendar-header.component */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/demo-utils/calendar-header.component.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./calendar-header.component */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/demo-utils/calendar-header.component.ts")
        }
    },
    {
        filename: 'colors.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./colors */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/demo-utils/colors.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./colors */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/demo-utils/colors.ts")
        }
    },
    {
        filename: 'module.ts',
        contents: {
            raw: __webpack_require__(/*! !raw-loader!./module */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/demo-utils/module.ts"),
            highlighted: __webpack_require__(/*! !raw-loader!highlightjs-loader?lang=typescript!./module */ "./node_modules/raw-loader/index.js!./node_modules/highlightjs-loader/index.js?lang=typescript!./src/app/demo-modules/demo-utils/module.ts")
        }
    }
];


/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/component.ts ***!
  \********************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var DemoComponent = /** @class */ (function () {
    function DemoComponent(modal, http) {
        var _this = this;
        this.modal = modal;
        this.http = http;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.alertNew = false;
        this.events = [
        // {
        //   start: subDays(startOfDay(new Date()), 1),
        //   end: addDays(new Date(), 1),
        //   title: 'A 3 day event',
        //   color: colors.red,
        //   actions: this.actions,
        //   allDay: true,
        //   resizable: {
        //     beforeStart: true,
        //     afterEnd: true
        //   },
        //   draggable: true
        // },
        // {
        //   start: startOfDay(new Date()),
        //   title: 'An event with no end date',
        //   color: colors.yellow,
        //   actions: this.actions
        // },
        // {
        //   start: subDays(endOfMonth(new Date()), 3),
        //   end: addDays(endOfMonth(new Date()), 3),
        //   title: 'A long event that spans 2 months',
        //   color: colors.blue,
        //   allDay: true
        // },
        // {
        //   start: addHours(startOfDay(new Date()), 2),
        //   end: new Date(),
        //   title: 'A draggable and resizable event',
        //   color: colors.yellow,
        //   actions: this.actions,
        //   resizable: {
        //     beforeStart: true,
        //     afterEnd: true
        //   },
        //   draggable: true
        // }
        ];
        this.activeDayIsOpen = true;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.doctors();
        this.commitments();
        this.patients();
        document.getElementById('today').click();
    };
    DemoComponent.prototype.doctors = function () {
        var _this = this;
        this.http
            .get('http://ec2-54-145-167-89.compute-1.amazonaws.com/api/medicos')
            .toPromise()
            .then(function (resp) {
            _this.doctorss = resp.json().data.map(function (element) {
                return { id: element.id, name: element.nome_medico };
            });
        })
            .catch(function (error) {
            console.error(error.status);
        });
    };
    DemoComponent.prototype.patients = function () {
        var _this = this;
        this.http
            .get("http://ec2-54-145-167-89.compute-1.amazonaws.com/api/pacientes")
            .toPromise()
            .then(function (resp) {
            _this.patientss = resp.json().data.map(function (element) {
                return { id: element.id, name: element.nome };
            });
            console.log(_this.patientss);
        })
            .catch(function (error) {
            console.error(error.status);
        });
    };
    DemoComponent.prototype.commitments = function () {
        var _this = this;
        this.events = [];
        this.http
            .get("http://ec2-54-145-167-89.compute-1.amazonaws.com/api/agendas?medico_id=" + this.doctor1)
            .toPromise()
            .then(function (resp) {
            resp.json().data.forEach(function (element) {
                _this.events.push({
                    id: element.id,
                    title: element.paciente.nome,
                    start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(element.datahora),
                    end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(element.datahora),
                    color: colors.red,
                    draggable: true,
                    resizable: {
                        beforeStart: true,
                        afterEnd: true
                    }
                });
            });
            _this.alertNew = false;
            _this.refresh.next();
        })
            .catch(function (error) {
        });
    };
    DemoComponent.prototype.delete = function (id) {
        var _this = this;
        this.http
            .delete("http://ec2-54-145-167-89.compute-1.amazonaws.com/api/agendas/" + id)
            .toPromise()
            .then(function (resp) {
            _this.commitments();
        })
            .catch(function (error) {
            console.error(error.status);
        });
    };
    DemoComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    DemoComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    DemoComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    DemoComponent.prototype.addEvent = function () {
        var _this = this;
        if (!this.dateEvent || !this.doctor1 || !this.patient1) {
            this.alertNew = true;
        }
        else {
            this.http
                .post("http://ec2-54-145-167-89.compute-1.amazonaws.com/api/agendas", {
                datahora: this.dateEvent,
                medico_id: this.doctor1,
                paciente_id: this.patient1
            })
                .toPromise()
                .then(function (resp) {
                _this.commitments();
            })
                .catch(function (error) {
                console.error(error.status);
            });
        }
        /*this.events.push({
          title: 'New event',
          start: startOfDay(new Date()),
          end: endOfDay(new Date()),
          color: colors.red,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
        });
        this.refresh.next();*/
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], DemoComponent.prototype, "modalContent", void 0);
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./styles.css */ "./src/app/demo-modules/kitchen-sink/styles.css")],
            template: __webpack_require__(/*! ./template.html */ "./src/app/demo-modules/kitchen-sink/template.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/module.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/module.ts ***!
  \*****************************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./projects/angular-calendar/src/date-adapters/date-fns/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component */ "./src/app/demo-modules/kitchen-sink/component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_3__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_5__["adapterFactory"]
                })
            ],
            declarations: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]],
            exports: [_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/styles.css":
/*!******************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/styles.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n.doctor {\n  margin-bottom: 20px;\n}\n\n.alertNew {\n  margin-bottom: 50px;\n}\n"

/***/ }),

/***/ "./src/app/demo-modules/kitchen-sink/template.html":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/kitchen-sink/template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div>\n      Action:\n      <pre>{{ modalData?.action }}</pre>\n    </div>\n    <div>\n      Event:\n      <pre>{{ modalData?.event | json }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n\n<div class=\"row text-center pre\">\n  <div class=\"col-md-4\">\n    <label>Médico:</label>\n    <select class=\"form-control\" name=\"doctor\" id=\"doctor\" [(ngModel)]=\"doctor1\" (change)=\"commitments()\">\n      <option *ngFor=\"let doctor of doctorss\" value=\"{{ doctor.id }}\">{{ doctor.name }}</option>\n    </select>\n  </div>\n</div>\n<br>\n\n<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Anterior\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        id=\"today\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Hoje\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        Próximo\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Month\"\n        [class.active]=\"view === CalendarView.Month\">\n        Mês\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Week\"\n        [class.active]=\"view === CalendarView.Week\">\n        Semana\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = CalendarView.Day\"\n        [class.active]=\"view === CalendarView.Day\">\n        Dia\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n\n<br><br><br>\n\n<div *ngIf=\"alertNew\" class=\"col-md-12\">\n  <span class=\"alert alert-danger\">Selecione a data, o médico e o paciente que irá consultar.</span>\n  <br><br>\n</div>\n\n<h3>\n  Consultas\n\n  <table class=\"table table-bordered\">\n    <tr>\n      <td>\n        <label>Data da Consulta</label>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"dateEvent\"\n          [altInput]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-d H:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Selecione a data\">\n      </td>\n      <td>\n        <label>Paciente</label>\n        <select class=\"form-control\" name=\"patient\" id=\"patient\" [(ngModel)]=\"patient1\" [disabled]=\"!dateEvent\">\n          <option *ngFor=\"let patientt of patientss\" value=\"{{ patientt.id }}\">{{ patientt.name }}</option>\n        </select>\n      </td>\n      <td>\n        <button\n          class=\"btn btn-primary pull-center\"\n          (click)=\"addEvent()\" style=\"margin-top: 40px\">\n          Add nova\n        </button>\n      </td>\n    </tr>\n  </table>\n\n\n  <div class=\"clearfix\"></div>\n</h3>\n\n<table class=\"table table-bordered\">\n\n  <thead>\n    <tr>\n      <th>Paciente</th>\n      <th>Data</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let event of events; let index = index\">\n      <td>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"event.title\"\n          (keyup)=\"refresh.next()\">\n      </td>\n      <td>\n        <input\n          class=\"form-control\"\n          type=\"text\"\n          mwlFlatpickr\n          [(ngModel)]=\"event.start\"\n          (ngModelChange)=\"event.start\"\n          [altInput]=\"true\"\n          [convertModelValue]=\"true\"\n          [enableTime]=\"true\"\n          dateFormat=\"Y-m-dTH:i\"\n          altFormat=\"F j, Y H:i\"\n          placeholder=\"Not set\">\n      </td>\n      <td>\n        <button\n          class=\"btn btn-danger\"\n          (click)=\"delete(event.id)\">\n          Delete\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_demo_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/demo-app.module */ "./src/app/demo-app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_demo_app_module__WEBPACK_IMPORTED_MODULE_2__["DemoAppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/agenda-medica2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
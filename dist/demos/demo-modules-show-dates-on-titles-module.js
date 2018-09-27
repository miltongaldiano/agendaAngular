(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-modules-show-dates-on-titles-module"],{

/***/ "./src/app/demo-modules/demo-utils/calendar-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function() { return CalendarHeaderComponent; });
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

var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarHeaderComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarHeaderComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
    CalendarHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-utils-calendar-header',
            template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "
        })
    ], CalendarHeaderComponent);
    return CalendarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/demo-utils/module.ts":
/*!***************************************************!*\
  !*** ./src/app/demo-modules/demo-utils/module.ts ***!
  \***************************************************/
/*! exports provided: DemoUtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function() { return DemoUtilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-header.component */ "./src/app/demo-modules/demo-utils/calendar-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoUtilsModule = /** @class */ (function () {
    function DemoUtilsModule() {
    }
    DemoUtilsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
            declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
            exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
        })
    ], DemoUtilsModule);
    return DemoUtilsModule;
}());



/***/ }),

/***/ "./src/app/demo-modules/show-dates-on-titles/component.ts":
/*!****************************************************************!*\
  !*** ./src/app/demo-modules/show-dates-on-titles/component.ts ***!
  \****************************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var _custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-event-title-formatter.provider */ "./src/app/demo-modules/show-dates-on-titles/custom-event-title-formatter.provider.ts");
/* harmony import */ var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../demo-utils/colors */ "./src/app/demo-modules/demo-utils/colors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'An event',
                start: new Date(),
                color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__["colors"].red
            }
        ];
    }
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./template.html */ "./node_modules/raw-loader/index.js!./src/app/demo-modules/show-dates-on-titles/template.html"),
            providers: [
                {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"],
                    useClass: _custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_2__["CustomEventTitleFormatter"]
                }
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/show-dates-on-titles/custom-event-title-formatter.provider.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/demo-modules/show-dates-on-titles/custom-event-title-formatter.provider.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomEventTitleFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventTitleFormatter", function() { return CustomEventTitleFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CustomEventTitleFormatter = /** @class */ (function (_super) {
    __extends(CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter(locale) {
        var _this = _super.call(this) || this;
        _this.locale = locale;
        return _this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.month = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.week = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter.prototype.day = function (event) {
        return "<b>" + new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"](this.locale).transform(event.start, 'h:m a', this.locale) + "</b> " + event.title;
    };
    CustomEventTitleFormatter = __decorate([
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String])
    ], CustomEventTitleFormatter);
    return CustomEventTitleFormatter;
}(angular_calendar__WEBPACK_IMPORTED_MODULE_1__["CalendarEventTitleFormatter"]));



/***/ }),

/***/ "./src/app/demo-modules/show-dates-on-titles/module.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo-modules/show-dates-on-titles/module.ts ***!
  \*************************************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../demo-utils/module */ "./src/app/demo-modules/demo-utils/module.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component */ "./src/app/demo-modules/show-dates-on-titles/component.ts");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./projects/angular-calendar/src/date-adapters/date-fns/index.ts");
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
                angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_6__["adapterFactory"]
                }),
                _demo_utils_module__WEBPACK_IMPORTED_MODULE_4__["DemoUtilsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"] }])
            ],
            declarations: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]],
            exports: [_component__WEBPACK_IMPORTED_MODULE_5__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-modules-show-dates-on-titles-module.js.map
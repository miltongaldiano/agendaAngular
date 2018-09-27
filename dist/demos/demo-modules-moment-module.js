(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-modules-moment-module"],{

/***/ "./src/app/demo-modules/moment/component.ts":
/*!**************************************************!*\
  !*** ./src/app/demo-modules/moment/component.ts ***!
  \**************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// weekStartsOn option is ignored when using moment, as it needs to be configured globally for the moment locale
moment__WEBPACK_IMPORTED_MODULE_2___default.a.updateLocale('en', {
    week: {
        dow: angular_calendar__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"].MONDAY,
        doy: 0
    }
});
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
    }
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./template.html */ "./src/app/demo-modules/moment/template.html")
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/moment/module.ts":
/*!***********************************************!*\
  !*** ./src/app/demo-modules/moment/module.ts ***!
  \***********************************************/
/*! exports provided: momentAdapterFactory, DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "momentAdapterFactory", function() { return momentAdapterFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/module */ "./src/app/demo-modules/demo-utils/module.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component */ "./src/app/demo-modules/moment/component.ts");
/* harmony import */ var angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/moment */ "./projects/angular-calendar/src/date-adapters/moment/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function momentAdapterFactory() {
    return Object(angular_calendar_date_adapters_moment__WEBPACK_IMPORTED_MODULE_7__["adapterFactory"])(moment__WEBPACK_IMPORTED_MODULE_4___default.a);
}
var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
                    useFactory: momentAdapterFactory
                }, {
                    dateFormatter: {
                        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarDateFormatter"],
                        useClass: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarMomentDateFormatter"]
                    }
                }),
                _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__["DemoUtilsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"] }])
            ],
            declarations: [_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]],
            exports: [_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]],
            providers: [
                {
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["MOMENT"],
                    useValue: moment__WEBPACK_IMPORTED_MODULE_4___default.a
                }
            ]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-modules-moment-module.js.map
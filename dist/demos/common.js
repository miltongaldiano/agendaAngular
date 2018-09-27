(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/month-view-badge-total/template.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/month-view-badge-total/template.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-month-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [activeDayIsOpen]=\"true\"\n  (beforeViewRender)=\"beforeMonthViewRender($event)\">\n</mwl-calendar-month-view>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/optional-event-end-dates/template.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/optional-event-end-dates/template.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/recurring-events/template.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/recurring-events/template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"calendarEvents\"\n    (beforeViewRender)=\"updateCalendarEvents($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"calendarEvents\"\n    (beforeViewRender)=\"updateCalendarEvents($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"calendarEvents\"\n    (beforeViewRender)=\"updateCalendarEvents($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/refreshing-the-view/template.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/refreshing-the-view/template.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"text-center\">\n  <button class=\"btn btn-primary\" (click)=\"refreshView()\">Refresh + re-render the current view</button>\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (beforeViewRender)=\"beforeMonthViewRender($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/resizable-events/template.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/resizable-events/template.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/selectable-period/template.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/selectable-period/template.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-info\">Click on a month view day or a day view hour to select it</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeMonthViewRender($event)\"\n    (dayClicked)=\"dayClicked($event.day)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeDayViewRender($event.body.hourGrid)\"\n    (hourSegmentClicked)=\"hourSegmentClicked($event.date)\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/show-dates-on-titles/template.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/show-dates-on-titles/template.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo-modules/week-view-minute-precision/template.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo-modules/week-view-minute-precision/template.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-week-view\n  precision=\"minutes\"\n  [viewDate]=\"viewDate\"\n  [events]=\"events\">\n</mwl-calendar-week-view>"

/***/ }),

/***/ "./src/app/demo-modules/additional-event-properties/template.html":
/*!************************************************************************!*\
  !*** ./src/app/demo-modules/additional-event-properties/template.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/all-day-events/template.html":
/*!***********************************************************!*\
  !*** ./src/app/demo-modules/all-day-events/template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-day-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\">\n</mwl-calendar-day-view>"

/***/ }),

/***/ "./src/app/demo-modules/async-events/template.html":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/async-events/template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\"\n  (viewDateChange)=\"fetchEvents()\"\n  (viewChange)=\"fetchEvents()\">\n</mwl-demo-utils-calendar-header>\n\n<ng-template #loading>\n  <div class=\"text-center\">\n    <i class=\"fa fa-spin fa-spinner fa-5x\"></i>\n    <br>\n    Loading events...\n  </div>\n</ng-template>\n\n<div *ngIf=\"events$ | async; else loading; let events\">\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"'month'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [activeDayIsOpen]=\"activeDayIsOpen\"\n      (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"eventClicked($event.event)\">\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"'week'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      (eventClicked)=\"eventClicked($event.event)\">\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"'day'\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      (eventClicked)=\"eventClicked($event.event)\">\n    </mwl-calendar-day-view>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/before-view-render/template.html":
/*!***************************************************************!*\
  !*** ./src/app/demo-modules/before-view-render/template.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeMonthViewRender($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-modules/clickable-days/template.html":
/*!***********************************************************!*\
  !*** ./src/app/demo-modules/clickable-days/template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-info\">\n  Click on a day on the view.\n  <strong *ngIf=\"clickedDate\">You clicked on this day: {{ clickedDate | date:'medium' }}</strong>\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayClicked)=\"clickedDate = $event.day.date\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayHeaderClicked)=\"clickedDate = $event.day.date\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/clickable-events/template.html":
/*!*************************************************************!*\
  !*** ./src/app/demo-modules/clickable-events/template.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n    (eventClicked)=\"eventClicked($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (eventClicked)=\"eventClicked($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (eventClicked)=\"eventClicked($event)\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/context-menu/template.html":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/context-menu/template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<context-menu #basicMenu>\n  <ng-template contextMenuItem (execute)=\"addEvent($event.item)\">\n    Add event\n  </ng-template>\n</context-menu>\n\n<ng-template\n  #monthCellTemplate\n  let-day=\"day\"\n  let-openDay=\"openDay\"\n  let-locale=\"locale\"\n  let-tooltipPlacement=\"tooltipPlacement\"\n  let-highlightDay=\"highlightDay\"\n  let-unhighlightDay=\"unhighlightDay\"\n  let-eventClicked=\"eventClicked\">\n\n  <div class=\"fill-height\" [contextMenu]=\"basicMenu\" [contextMenuSubject]=\"day.date\">\n    <div class=\"cal-cell-top\">\n      <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n      <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n    </div>\n    <div class=\"cal-events\">\n      <div\n        class=\"cal-event\"\n        *ngFor=\"let event of day.events\"\n        [style.backgroundColor]=\"event.color.primary\"\n        [ngClass]=\"event?.cssClass\"\n        (mouseenter)=\"highlightDay.emit({event: event})\"\n        (mouseleave)=\"unhighlightDay.emit({event: event})\"\n        [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        (click)=\"$event.stopPropagation(); eventClicked.emit({event: event})\">\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #weekHeaderTemplate let-days=\"days\" let-locale=\"locale\" let-dayHeaderClicked=\"dayHeaderClicked\">\n  <div class=\"cal-day-headers\">\n    <div\n      class=\"cal-header\"\n      *ngFor=\"let day of days\"\n      [class.cal-past]=\"day.isPast\"\n      [class.cal-today]=\"day.isToday\"\n      [class.cal-future]=\"day.isFuture\"\n      [class.cal-weekend]=\"day.isWeekend\"\n      (click)=\"dayHeaderClicked.emit({day: day})\"\n      [contextMenu]=\"basicMenu\"\n      [contextMenuSubject]=\"day.date\">\n      <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n      <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #dayHourSegmentTemplate let-segment=\"segment\" let-locale=\"locale\">\n  <div\n    class=\"cal-hour-segment\"\n    [ngClass]=\"segment.cssClass\"\n    [contextMenu]=\"basicMenu\"\n    [contextMenuSubject]=\"segment.date\">\n    <div [hidden]=\"!segment.isStart\" class=\"cal-time\">\n      {{ segment.date | calendarDate:'dayViewHour':locale }}\n    </div>\n  </div>\n</ng-template>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [cellTemplate]=\"monthCellTemplate\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [headerTemplate]=\"weekHeaderTemplate\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [hourSegmentTemplate]=\"dayHourSegmentTemplate\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-modules/custom-event-class/template.html":
/*!***************************************************************!*\
  !*** ./src/app/demo-modules/custom-event-class/template.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/custom-templates/template.html":
/*!*************************************************************!*\
  !*** ./src/app/demo-modules/custom-templates/template.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div class=\"cal-cell-top\">\n    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n    <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n  <small style=\"margin: 5px\">There are {{ day.events.length }} events on this day</small>\n</ng-template>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [cellTemplate]=\"customCellTemplate\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/customise-date-formats/template.html":
/*!*******************************************************************!*\
  !*** ./src/app/demo-modules/customise-date-formats/template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/day-view-hour-split/template.html":
/*!****************************************************************!*\
  !*** ./src/app/demo-modules/day-view-hour-split/template.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-day-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [hourSegments]=\"6\">\n</mwl-calendar-day-view>"

/***/ }),

/***/ "./src/app/demo-modules/day-view-start-end/template.html":
/*!***************************************************************!*\
  !*** ./src/app/demo-modules/day-view-start-end/template.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-day-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [dayStartHour]=\"9\"\n  [dayEndHour]=\"17\">\n</mwl-calendar-day-view>"

/***/ }),

/***/ "./src/app/demo-modules/demo-utils/colors.ts":
/*!***************************************************!*\
  !*** ./src/app/demo-modules/demo-utils/colors.ts ***!
  \***************************************************/
/*! exports provided: colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
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


/***/ }),

/***/ "./src/app/demo-modules/disable-slide-animation/template.html":
/*!********************************************************************!*\
  !*** ./src/app/demo-modules/disable-slide-animation/template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-month-view\n  [@.disabled]=\"true\"\n  [viewDate]=\"viewDate\"\n  [events]=\"events\"\n  [activeDayIsOpen]=\"activeDayIsOpen\"\n  (dayClicked)=\"dayClicked($event.day)\">\n</mwl-calendar-month-view>"

/***/ }),

/***/ "./src/app/demo-modules/disable-tooltips/template.html":
/*!*************************************************************!*\
  !*** ./src/app/demo-modules/disable-tooltips/template.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/draggable-events/template.html":
/*!*************************************************************!*\
  !*** ./src/app/demo-modules/draggable-events/template.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/draggable-external-events/template.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo-modules/draggable-external-events/template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n    <div\n      class=\"card\"\n      mwlDroppable\n      (drop)=\"externalDrop($event.dropData.event)\"\n      dragOverClass=\"drag-over\">\n      <div class=\"card-body\">\n        <p *ngIf=\"externalEvents.length === 0\"><em>No events added</em></p>\n        <ul>\n          <li\n            *ngFor=\"let event of externalEvents\"\n            mwlDraggable\n            [dropData]=\"{event: event}\"\n            dragActiveClass=\"drag-active\">\n            <a\n              href=\"javascript:;\"\n              [style.color]=\"event.color.primary\">\n              {{ event.title }}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-9\">\n    <mwl-demo-utils-calendar-header\n      [(view)]=\"view\"\n      [(viewDate)]=\"viewDate\">\n    </mwl-demo-utils-calendar-header>\n\n    <div [ngSwitch]=\"view\">\n      <mwl-calendar-month-view\n        *ngSwitchCase=\"CalendarView.Month\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [activeDayIsOpen]=\"activeDayIsOpen\"\n        [refresh]=\"refresh\"\n        (eventTimesChanged)=\"eventDropped($event)\">\n      </mwl-calendar-month-view>\n      <mwl-calendar-week-view\n        *ngSwitchCase=\"CalendarView.Week\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [snapDraggedEvents]=\"false\"\n        (eventTimesChanged)=\"eventDropped($event)\">\n      </mwl-calendar-week-view>\n      <mwl-calendar-day-view\n        *ngSwitchCase=\"CalendarView.Day\"\n        [viewDate]=\"viewDate\"\n        [events]=\"events\"\n        [refresh]=\"refresh\"\n        [snapDraggedEvents]=\"false\"\n        (eventTimesChanged)=\"eventDropped($event)\">\n      </mwl-calendar-day-view>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/demo-modules/editable-deletable-events/template.html":
/*!**********************************************************************!*\
  !*** ./src/app/demo-modules/editable-deletable-events/template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/exclude-days/template.html":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/exclude-days/template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        [excludeDays]=\"excludeDays\">\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        [excludeDays]=\"excludeDays\">\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en':weekStartsOn:excludeDays }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'month'\"\n        [class.active]=\"view === 'month'\">\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'week'\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"view = 'day'\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [excludeDays]=\"excludeDays\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [excludeDays]=\"excludeDays\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-modules/extra-month-view-weeks/template.html":
/*!*******************************************************************!*\
  !*** ./src/app/demo-modules/extra-month-view-weeks/template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-month-view\n  [viewDate]=\"viewDate\"\n  [events]=\"events\">\n</mwl-calendar-month-view>"

/***/ }),

/***/ "./src/app/demo-modules/group-month-view-events/template.html":
/*!********************************************************************!*\
  !*** ./src/app/demo-modules/group-month-view-events/template.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div class=\"cal-cell-top\">\n    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n    <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n  <div class=\"cell-totals\">\n    <span\n      *ngFor=\"let group of day.eventGroups\"\n      class=\"badge badge-{{ group[0] }}\">\n      {{ group[1].length }}\n    </span>\n  </div>\n</ng-template>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [cellTemplate]=\"customCellTemplate\"\n    (beforeViewRender)=\"beforeMonthViewRender($event)\"\n    [activeDayIsOpen]=\"true\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/i18n/template.html":
/*!*************************************************!*\
  !*** ./src/app/demo-modules/i18n/template.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\"\n  [locale]=\"locale\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [locale]=\"locale\"\n    [weekStartsOn]=\"weekStartsOn\"\n    [weekendDays]=\"weekendDays\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [locale]=\"locale\"\n    [weekStartsOn]=\"weekStartsOn\"\n    [weekendDays]=\"weekendDays\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [locale]=\"locale\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-modules/min-max-date/template.html":
/*!*********************************************************!*\
  !*** ./src/app/demo-modules/min-max-date/template.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" (click)=\"decrement()\" [disabled]=\"prevBtnDisabled\">\n        Previous\n      </button>\n      <button class=\"btn btn-outline-secondary\" (click)=\"today()\">\n        Today\n      </button>\n      <button class=\"btn btn-primary\" (click)=\"increment()\" [disabled]=\"nextBtnDisabled\">\n        Next\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div class=\"btn btn-primary\" (click)=\"changeView('month')\" [class.active]=\"view === 'month'\">Month</div>\n      <div class=\"btn btn-primary\" (click)=\"changeView('week')\" [class.active]=\"view === 'week'\">Week</div>\n      <div class=\"btn btn-primary\" (click)=\"changeView('day')\" [class.active]=\"view === 'day'\">Day</div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeMonthViewRender($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/moment/template.html":
/*!***************************************************!*\
  !*** ./src/app/demo-modules/moment/template.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\">\n  Use this if you're already using moment heavily in your app and don't want to include date-fns in your bundle, or you need to be able to adjust dates to be in a different timezone than the users browser via moment-locale\n</div>\n\n<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ }),

/***/ "./src/app/demo-modules/navigating-between-views/template.html":
/*!*********************************************************************!*\
  !*** ./src/app/demo-modules/navigating-between-views/template.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-info\">\n  <div [ngSwitch]=\"view\">\n    <span *ngSwitchCase=\"'month'\">Click on a month label to change the view to that month.</span>\n    <span *ngSwitchCase=\"'week'\">Click on a day header to change the view to that day.</span>\n    <span *ngSwitchCase=\"'day'\">There is no other view to navigate to.</span>\n  </div>\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayClicked)=\"viewDate = $event.day.date; view = 'day'\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (dayHeaderClicked)=\"viewDate = $event.day.date; view = 'day'\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./src/app/demo-modules/no-events-label/template.html":
/*!************************************************************!*\
  !*** ./src/app/demo-modules/no-events-label/template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mwl-demo-utils-calendar-header\n  [(view)]=\"view\"\n  [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div class=\"alert alert-warning\" *ngIf=\"period?.events.length === 0\">\n  There are no events on this {{ view }}\n</div>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n    (beforeViewRender)=\"beforeViewRender($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeViewRender($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    (beforeViewRender)=\"beforeViewRender($event)\">\n  </mwl-calendar-day-view>\n</div>\n"

/***/ })

}]);
//# sourceMappingURL=common.js.map
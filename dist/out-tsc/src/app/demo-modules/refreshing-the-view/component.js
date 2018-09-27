var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
var RED_CELL = 'red-cell';
var BLUE_CELL = 'blue-cell';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
        this.refresh = new Subject();
        this.cssClass = RED_CELL;
    }
    DemoComponent.prototype.refreshView = function () {
        this.cssClass = this.cssClass === RED_CELL ? BLUE_CELL : RED_CELL;
        this.refresh.next();
    };
    DemoComponent.prototype.beforeMonthViewRender = function (_a) {
        var _this = this;
        var body = _a.body;
        body.forEach(function (day) {
            if (day.date.getDate() % 2 === 1) {
                day.cssClass = _this.cssClass;
            }
        });
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            templateUrl: 'template.html',
            styles: [
                "\n      .red-cell {\n        background-color: red !important;\n      }\n      .blue-cell {\n        background-color: blue !important;\n      }\n    "
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
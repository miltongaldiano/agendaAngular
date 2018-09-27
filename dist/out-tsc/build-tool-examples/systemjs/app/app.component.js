var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { startOfDay } from 'date-fns';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.viewDate = new Date();
        this.events = [];
    }
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            template: "\n    <mwl-calendar-month-view\n      [viewDate]=\"viewDate\"\n      [events]=\"events\">\n    </mwl-calendar-month-view>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
console.log(startOfDay);
//# sourceMappingURL=app.component.js.map
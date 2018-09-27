var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent(cdr) {
        this.cdr = cdr;
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Event 1',
                color: colors.yellow,
                start: new Date()
            }
        ];
    }
    DemoComponent.prototype.beforeViewRender = function (event) {
        this.period = event.period;
        this.cdr.detectChanges();
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html'
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
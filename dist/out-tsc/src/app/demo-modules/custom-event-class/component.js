var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Has custom class',
                color: colors.yellow,
                start: new Date(),
                cssClass: 'my-custom-class'
            }
        ];
    }
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            templateUrl: 'template.html',
            // you should really include this CSS in your global stylesheet
            styles: [
                "\n      .my-custom-class a {\n        color: #ff3d7f !important;\n      }\n    "
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
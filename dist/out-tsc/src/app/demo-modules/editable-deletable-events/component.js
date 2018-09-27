var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { colors } from '../demo-utils/colors';
var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        var _this = this;
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Editable event',
                color: colors.yellow,
                start: new Date(),
                actions: [
                    {
                        label: '<i class="fa fa-fw fa-pencil"></i>',
                        onClick: function (_a) {
                            var event = _a.event;
                            console.log('Edit event', event);
                        }
                    }
                ]
            },
            {
                title: 'Deletable event',
                color: colors.blue,
                start: new Date(),
                actions: [
                    {
                        label: '<i class="fa fa-fw fa-times"></i>',
                        onClick: function (_a) {
                            var event = _a.event;
                            _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                            console.log('Event deleted', event);
                        }
                    }
                ]
            },
            {
                title: 'Non editable and deletable event',
                color: colors.red,
                start: new Date()
            }
        ];
    }
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html'
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
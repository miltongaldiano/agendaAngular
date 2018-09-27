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
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [
            {
                title: 'Event 1',
                color: colors.yellow,
                start: new Date(),
                meta: {
                    type: 'warning'
                }
            },
            {
                title: 'Event 2',
                color: colors.yellow,
                start: new Date(),
                meta: {
                    type: 'warning'
                }
            },
            {
                title: 'Event 3',
                color: colors.blue,
                start: new Date(),
                meta: {
                    type: 'info'
                }
            },
            {
                title: 'Event 4',
                color: colors.red,
                start: new Date(),
                meta: {
                    type: 'danger'
                }
            },
            {
                title: 'Event 5',
                color: colors.red,
                start: new Date(),
                meta: {
                    type: 'danger'
                }
            }
        ];
    }
    DemoComponent.prototype.beforeMonthViewRender = function (_a) {
        var body = _a.body;
        body.forEach(function (cell) {
            var groups = {};
            cell.events.forEach(function (event) {
                groups[event.meta.type] = groups[event.meta.type] || [];
                groups[event.meta.type].push(event);
            });
            cell['eventGroups'] = Object.entries(groups);
        });
    };
    DemoComponent = __decorate([
        Component({
            selector: 'mwl-demo-component',
            changeDetection: ChangeDetectionStrategy.OnPush,
            templateUrl: 'template.html',
            styles: [
                "\n      .cell-totals {\n        margin: 5px;\n        text-align: center;\n      }\n      .badge {\n        margin-right: 5px;\n      }\n    "
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());
export { DemoComponent };
//# sourceMappingURL=component.js.map
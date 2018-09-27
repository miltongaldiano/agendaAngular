var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
export function triggerDomEvent(eventType, target, eventData) {
    if (eventData === void 0) { eventData = {}; }
    var event = document.createEvent('Event');
    Object.assign(event, eventData);
    event.initEvent(eventType, true, true);
    target.dispatchEvent(event);
}
var ExternalEventComponent = /** @class */ (function () {
    function ExternalEventComponent() {
        this.event = {
            title: 'foo',
            start: new Date(),
            draggable: true,
            color: {
                primary: 'blue',
                secondary: 'lightblue'
            }
        };
    }
    ExternalEventComponent = __decorate([
        Component({
            template: '<div class="external-event" mwlDraggable [dropData]="{event: event}">{{ event.title }}</div>',
            styles: [
                "\n      .external-event {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 10px;\n        height: 10px;\n      }\n    "
            ]
        })
    ], ExternalEventComponent);
    return ExternalEventComponent;
}());
export { ExternalEventComponent };
//# sourceMappingURL=util.js.map
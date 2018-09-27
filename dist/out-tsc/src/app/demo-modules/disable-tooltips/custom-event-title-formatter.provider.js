var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { CalendarEventTitleFormatter } from 'angular-calendar';
var CustomEventTitleFormatter = /** @class */ (function (_super) {
    __extends(CustomEventTitleFormatter, _super);
    function CustomEventTitleFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // you can override any of the methods defined in the parent class
    CustomEventTitleFormatter.prototype.monthTooltip = function (event) {
        return;
    };
    CustomEventTitleFormatter.prototype.weekTooltip = function (event) {
        return;
    };
    CustomEventTitleFormatter.prototype.dayTooltip = function (event) {
        return;
    };
    return CustomEventTitleFormatter;
}(CalendarEventTitleFormatter));
export { CustomEventTitleFormatter };
//# sourceMappingURL=custom-event-title-formatter.provider.js.map
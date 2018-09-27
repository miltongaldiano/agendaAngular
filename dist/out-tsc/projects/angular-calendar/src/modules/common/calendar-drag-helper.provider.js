import { isInside } from './util';
var DRAG_THRESHOLD = 1;
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents;
        var isWithinThreshold = Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
        if (snapDraggedEvents) {
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + x,
                right: this.startPosition.right + x,
                top: this.startPosition.top + y,
                bottom: this.startPosition.bottom + y
            });
            return (isWithinThreshold &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold;
        }
    };
    return CalendarDragHelper;
}());
export { CalendarDragHelper };
//# sourceMappingURL=calendar-drag-helper.provider.js.map
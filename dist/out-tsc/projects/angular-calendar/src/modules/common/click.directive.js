var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, Renderer2, ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var clickElements = new Set();
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.click = new EventEmitter(); // tslint:disable-line
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        clickElements.add(this.elm.nativeElement);
        var eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            // prevent child click events from firing on parent elements that also have click events
            var nearestClickableParent = event.target;
            while (!clickElements.has(nearestClickableParent) &&
                nearestClickableParent !== _this.document.body) {
                nearestClickableParent = nearestClickableParent.parentElement;
            }
            var isThisClickableElement = _this.elm.nativeElement === nearestClickableParent;
            if (isThisClickableElement) {
                _this.click.next(event);
            }
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
        clickElements.delete(this.elm.nativeElement);
    };
    __decorate([
        Output('mwlClick'),
        __metadata("design:type", EventEmitter)
    ], ClickDirective.prototype, "click", void 0);
    ClickDirective = __decorate([
        Directive({
            selector: '[mwlClick]'
        }),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Renderer2,
            ElementRef, Object])
    ], ClickDirective);
    return ClickDirective;
}());
export { ClickDirective };
//# sourceMappingURL=click.directive.js.map
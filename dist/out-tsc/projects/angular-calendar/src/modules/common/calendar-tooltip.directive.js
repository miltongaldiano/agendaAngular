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
import { Directive, Component, HostListener, Input, Injector, ComponentFactoryResolver, ViewContainerRef, ElementRef, Inject, Renderer2, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { positionElements } from 'positioning';
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarTooltipWindowComponent.prototype, "contents", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CalendarTooltipWindowComponent.prototype, "placement", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CalendarTooltipWindowComponent.prototype, "event", void 0);
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef)
    ], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
    CalendarTooltipWindowComponent = __decorate([
        Component({
            selector: 'mwl-calendar-tooltip-window',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarTooltipWindowComponent);
    return CalendarTooltipWindowComponent;
}());
export { CalendarTooltipWindowComponent };
var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document //tslint:disable-line
         = document;
        this.placement = 'auto'; // tslint:disable-line no-input-rename
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function (previousPosition) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPosition !== this.tooltipRef.instance.placement) {
                this.positionTooltip(this.tooltipRef.instance.placement);
            }
        }
    };
    __decorate([
        Input('mwlCalendarTooltip'),
        __metadata("design:type", String)
    ], CalendarTooltipDirective.prototype, "contents", void 0);
    __decorate([
        Input('tooltipPlacement'),
        __metadata("design:type", Object)
    ], CalendarTooltipDirective.prototype, "placement", void 0);
    __decorate([
        Input('tooltipTemplate'),
        __metadata("design:type", TemplateRef)
    ], CalendarTooltipDirective.prototype, "customTemplate", void 0);
    __decorate([
        Input('tooltipEvent'),
        __metadata("design:type", Object)
    ], CalendarTooltipDirective.prototype, "event", void 0);
    __decorate([
        Input('tooltipAppendToBody'),
        __metadata("design:type", Boolean)
    ], CalendarTooltipDirective.prototype, "appendToBody", void 0);
    __decorate([
        HostListener('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOver", null);
    __decorate([
        HostListener('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOut", null);
    CalendarTooltipDirective = __decorate([
        Directive({
            selector: '[mwlCalendarTooltip]'
        }),
        __param(5, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef,
            Injector,
            Renderer2,
            ComponentFactoryResolver,
            ViewContainerRef, Object])
    ], CalendarTooltipDirective);
    return CalendarTooltipDirective;
}());
export { CalendarTooltipDirective };
//# sourceMappingURL=calendar-tooltip.directive.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-modules-context-menu-module"],{

/***/ "./node_modules/@angular/cdk/esm5/a11y.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/a11y.es5.js ***!
  \****************************************************/
/*! exports provided: MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER_FACTORY, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LiveAnnouncer, CdkAriaLive, LIVE_ANNOUNCER_PROVIDER_FACTORY, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER_FACTORY, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function() { return ARIA_DESCRIBER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function() { return ARIA_DESCRIBER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAriaLive", function() { return CdkAriaLive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function() { return LIVE_ANNOUNCER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function() { return FOCUS_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function() { return FOCUS_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * IDs are deliminated by an empty space, as per the spec.
 */
var /** @type {?} */ ID_DELIMINATOR = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    var /** @type {?} */ ids = getAriaReferenceIds(el, attr);
    if (ids.some(function (existingId) { return existingId.trim() == id.trim(); })) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMINATOR));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    var /** @type {?} */ ids = getAriaReferenceIds(el, attr);
    var /** @type {?} */ filteredIds = ids.filter(function (val) { return val != id.trim(); });
    el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace deliminated) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * ID used for the body container where all messages are appended.
 */
var /** @type {?} */ MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 */
var /** @type {?} */ CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 */
var /** @type {?} */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 */
var /** @type {?} */ nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 */
var /** @type {?} */ messageRegistry = new Map();
/**
 * Container for all registered messages.
 */
var /** @type {?} */ messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 * \@docs-private
 */
var AriaDescriber = /** @class */ (function () {
    function AriaDescriber(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.describe = /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    };
    /** Removes the host element's aria-describedby reference to the message element. */
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.removeDescription = /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(message);
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    };
    /** Unregisters all created message elements and removes the message container. */
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    AriaDescriber.prototype.ngOnDestroy = /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    function () {
        var /** @type {?} */ describedElements = this._document.querySelectorAll("[" + CDK_DESCRIBEDBY_HOST_ATTRIBUTE + "]");
        for (var /** @type {?} */ i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    };
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._createMessageElement = /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ messageElement = this._document.createElement('div');
        messageElement.setAttribute('id', CDK_DESCRIBEDBY_ID_PREFIX + "-" + nextId++);
        messageElement.appendChild(/** @type {?} */ ((this._document.createTextNode(message))));
        this._createMessagesContainer(); /** @type {?} */
        ((messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement: messageElement, referenceCount: 0 });
    };
    /**
     * Deletes the message element from the global messages container.
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessageElement = /**
     * Deletes the message element from the global messages container.
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        var /** @type {?} */ messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    };
    /**
     * Creates the global container for all aria-describedby messages.
     * @return {?}
     */
    AriaDescriber.prototype._createMessagesContainer = /**
     * Creates the global container for all aria-describedby messages.
     * @return {?}
     */
    function () {
        if (!messagesContainer) {
            var /** @type {?} */ preExistingContainer = this._document.getElementById(MESSAGES_CONTAINER_ID);
            // When going from the server to the client, we may end up in a situation where there's
            // already a container on the page, but we don't have a reference to it. Clear the
            // old container so we don't get duplicates. Doing this, instead of emptying the previous
            // container, should be slightly faster.
            if (preExistingContainer) {
                /** @type {?} */ ((preExistingContainer.parentNode)).removeChild(preExistingContainer);
            }
            messagesContainer = this._document.createElement('div');
            messagesContainer.id = MESSAGES_CONTAINER_ID;
            messagesContainer.setAttribute('aria-hidden', 'true');
            messagesContainer.style.display = 'none';
            this._document.body.appendChild(messagesContainer);
        }
    };
    /**
     * Deletes the global messages container.
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessagesContainer = /**
     * Deletes the global messages container.
     * @return {?}
     */
    function () {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    };
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @param {?} element
     * @return {?}
     */
    AriaDescriber.prototype._removeCdkDescribedByReferenceIds = /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        var /** @type {?} */ originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(function (id) { return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0; });
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    };
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._addMessageReference = /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ registeredMessage = /** @type {?} */ ((messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    };
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._removeMessageReference = /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ registeredMessage = /** @type {?} */ ((messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    };
    /**
     * Returns true if the element has been described by the provided message ID.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._isElementDescribedByMessage = /**
     * Returns true if the element has been described by the provided message ID.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        var /** @type {?} */ messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    };
    /**
     * Determines whether a message can be described on a particular element.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._canBeDescribed = /**
     * Determines whether a message can be described on a particular element.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        return element.nodeType === this._document.ELEMENT_NODE && message != null &&
            !!("" + message).trim();
    };
    AriaDescriber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    AriaDescriber.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
    return AriaDescriber;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */
function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
    return parentDispatcher || new AriaDescriber(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ ARIA_DESCRIBER_PROVIDER = {
    // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
    provide: AriaDescriber,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])
    ],
    useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// unsupported: template constraints.
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
var  
// unsupported: template constraints.
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
ListKeyManager = /** @class */ (function () {
    function ListKeyManager(_items) {
        var _this = this;
        this._items = _items;
        this._activeItemIndex = -1;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = function (item) { return item.disabled; };
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
                if (_this._activeItem) {
                    var /** @type {?} */ itemArray = newItems.toArray();
                    var /** @type {?} */ newIndex = itemArray.indexOf(_this._activeItem);
                    if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                        _this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {?}
     */
    ListKeyManager.prototype.skipPredicate = /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {?}
     */
    function (predicate) {
        this._skipPredicateFn = predicate;
        return this;
    };
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param shouldWrap Whether the list should wrap when reaching the end.
     */
    /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {?}
     */
    ListKeyManager.prototype.withWrap = /**
     * Configures wrapping mode, which determines whether the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @param {?=} shouldWrap Whether the list should wrap when reaching the end.
     * @return {?}
     */
    function (shouldWrap) {
        if (shouldWrap === void 0) { shouldWrap = true; }
        this._wrap = shouldWrap;
        return this;
    };
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {?}
     */
    ListKeyManager.prototype.withVerticalOrientation = /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {?}
     */
    function (enabled) {
        if (enabled === void 0) { enabled = true; }
        this._vertical = enabled;
        return this;
    };
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param {?} direction Direction in which the selection can be moved.
     * @return {?}
     */
    ListKeyManager.prototype.withHorizontalOrientation = /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param {?} direction Direction in which the selection can be moved.
     * @return {?}
     */
    function (direction) {
        this._horizontal = direction;
        return this;
    };
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {?}
     */
    ListKeyManager.prototype.withTypeAhead = /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {?}
     */
    function (debounceInterval) {
        var _this = this;
        if (debounceInterval === void 0) { debounceInterval = 200; }
        if (this._items.length && this._items.some(function (item) { return typeof item.getLabel !== 'function'; })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (keyCode) { return _this._pressedLetters.push(keyCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return _this._pressedLetters.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this._pressedLetters.join(''); })).subscribe(function (inputString) {
            var /** @type {?} */ items = _this._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (var /** @type {?} */ i = 1; i < items.length + 1; i++) {
                var /** @type {?} */ index = (_this._activeItemIndex + i) % items.length;
                var /** @type {?} */ item = items[index];
                if (!_this._skipPredicateFn(item) && /** @type {?} */ ((item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    _this.setActiveItem(index);
                    break;
                }
            }
            _this._pressedLetters = [];
        });
        return this;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    ListKeyManager.prototype.onKeydown = /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal === 'ltr') {
                    this.setNextItemActive();
                    break;
                }
                else if (this._horizontal === 'rtl') {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal === 'ltr') {
                    this.setPreviousItemActive();
                    break;
                }
                else if (this._horizontal === 'rtl') {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                }
                else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Index of the currently active item. */
        get: /**
         * Index of the currently active item.
         * @return {?}
         */
        function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** The active item. */
        get: /**
         * The active item.
         * @return {?}
         */
        function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active item to the first enabled item in the list. */
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setFirstItemActive = /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setLastItemActive = /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setNextItemActive = /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setPreviousItemActive = /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ itemArray = this._getItemsArray();
        var /** @type {?} */ index = typeof item === 'number' ? item : itemArray.indexOf(item);
        this._activeItemIndex = index;
        this._activeItem = itemArray[index];
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     * @deprecated Use `updateActiveItem` instead.
     * @breaking-change 7.0.0
     */
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 7.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItemIndex = /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@breaking-change 7.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    function (index) {
        this.updateActiveItem(index);
    };
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByDelta = /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInWrapMode = /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        var /** @type {?} */ items = this._getItemsArray();
        for (var /** @type {?} */ i = 1; i <= items.length; i++) {
            var /** @type {?} */ index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            var /** @type {?} */ item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInDefaultMode = /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByIndex = /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    function (index, fallbackDelta) {
        var /** @type {?} */ items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    /**
     * Returns the items as an array.
     * @return {?}
     */
    ListKeyManager.prototype._getItemsArray = /**
     * Returns the items as an array.
     * @return {?}
     */
    function () {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    };
    return ListKeyManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ActiveDescendantKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ActiveDescendantKeyManager, _super);
    function ActiveDescendantKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ActiveDescendantKeyManager.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    };
    return ActiveDescendantKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
FocusKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(FocusKeyManager, _super);
    function FocusKeyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._origin = 'program';
        return _this;
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {?}
     */
    FocusKeyManager.prototype.setFocusOrigin = /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {?}
     */
    function (origin) {
        this._origin = origin;
        return this;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FocusKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.setActiveItem.call(this, item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    };
    return FocusKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /** @class */ (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    function (element) {
        // Nothing is tabbable on the the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        var /** @type {?} */ frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            var /** @type {?} */ frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
        var /** @type {?} */ tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    InteractivityChecker.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], },
    ]; };
    /** @nocollapse */ InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
    return InteractivityChecker;
}());
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return /** @type {?} */ (window.frameElement);
    }
    catch (/** @type {?} */ e) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var /** @type {?} */ tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var /** @type {?} */ tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    var /** @type {?} */ inputType = nodeName === 'input' && (/** @type {?} */ (element)).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
var  /**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._hasAttached = false;
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._enabled = val;
            if (this._startAnchor && this._endAnchor) {
                this._startAnchor.tabIndex = this._endAnchor.tabIndex = this._enabled ? 0 : -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    FocusTrap.prototype.destroy = /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    function () {
        if (this._startAnchor && this._startAnchor.parentNode) {
            this._startAnchor.parentNode.removeChild(this._startAnchor);
        }
        if (this._endAnchor && this._endAnchor.parentNode) {
            this._endAnchor.parentNode.removeChild(this._endAnchor);
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @returns Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    FocusTrap.prototype.attachAnchors = /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?} Whether the focus trap managed to attach successfuly. This may not be the case
     * if the target element isn't currently in the DOM.
     */
    function () {
        var _this = this;
        // If we're not on the browser, there can be no focus to trap.
        if (this._hasAttached) {
            return true;
        }
        this._ngZone.runOutsideAngular(function () {
            if (!_this._startAnchor) {
                _this._startAnchor = _this._createAnchor(); /** @type {?} */
                ((_this._startAnchor)).addEventListener('focus', function () { return _this.focusLastTabbableElement(); });
            }
            if (!_this._endAnchor) {
                _this._endAnchor = _this._createAnchor(); /** @type {?} */
                ((_this._endAnchor)).addEventListener('focus', function () { return _this.focusFirstTabbableElement(); });
            }
        });
        if (this._element.parentNode) {
            this._element.parentNode.insertBefore(/** @type {?} */ ((this._startAnchor)), this._element);
            this._element.parentNode.insertBefore(/** @type {?} */ ((this._endAnchor)), this._element.nextSibling);
            this._hasAttached = true;
        }
        return this._hasAttached;
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ markers = /** @type {?} */ (this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]")));
        for (var /** @type {?} */ i = 0; i < markers.length; i++) {
            // @breaking-change 7.0.0
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated ") +
                    "attribute will be removed in 7.0.0.", markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated attribute ") +
                    "will be removed in 7.0.0.", markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ redirectToElement = /** @type {?} */ (this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]"));
        if (redirectToElement) {
            // @breaking-change 7.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " +
                    "use 'cdkFocusInitial' instead. The deprecated attribute " +
                    "will be removed in 7.0.0", redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Checks whether the focus trap has successfuly been attached.
     */
    /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    FocusTrap.prototype.hasAttached = /**
     * Checks whether the focus trap has successfuly been attached.
     * @return {?}
     */
    function () {
        return this._hasAttached;
    };
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getFirstTabbableElement = /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getLastTabbableElement = /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = children.length - 1; i >= 0; i--) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Creates an anchor element.
     * @return {?}
     */
    FocusTrap.prototype._createAnchor = /**
     * Creates an anchor element.
     * @return {?}
     */
    function () {
        var /** @type {?} */ anchor = this._document.createElement('div');
        anchor.tabIndex = this._enabled ? 0 : -1;
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    };
    /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    FocusTrap.prototype._executeOnStable = /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
/**
 * Factory that allows easy instantiation of focus traps.
 */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    FocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
    return FocusTrapFactory;
}());
/**
 * Directive for trapping focus within a region.
 */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this.focusTrap.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        get: /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */
        function () { return this._autoCapture; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = /** @type {?} */ (this._document.activeElement);
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (!this.focusTrap.hasAttached()) {
            this.focusTrap.attachAnchors();
        }
    };
    CdkTrapFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkTrapFocus]',
                    exportAs: 'cdkTrapFocus',
                },] },
    ];
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: FocusTrapFactory, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    CdkTrapFocus.propDecorators = {
        "enabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocus',] },],
        "autoCapture": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocusAutoCapture',] },],
    };
    return CdkTrapFocus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// The token for the live announcer element is defined in a separate file from LiveAnnouncer
// as a workaround for https://github.com/angular/angular/issues/22559
var /** @type {?} */ LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LiveAnnouncer = /** @class */ (function () {
    function LiveAnnouncer(elementToken, _document) {
        // We inject the live element and document as `any` because the constructor signature cannot
        // reference browser globals (HTMLElement, Document) on non-browser environments, since having
        // a class decorator causes TypeScript to preserve the constructor signature types.
        this._document = _document;
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?} Promise that will be resolved when the message is added to the DOM.
     */
    LiveAnnouncer.prototype.announce = /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?} Promise that will be resolved when the message is added to the DOM.
     */
    function (message, politeness) {
        var _this = this;
        if (politeness === void 0) { politeness = 'polite'; }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this._liveElement.textContent = message;
                resolve();
            }, 100);
        });
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype._createLiveElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ elementClass = 'cdk-live-announcer-element';
        var /** @type {?} */ previousElements = this._document.getElementsByClassName(elementClass);
        // Remove any old containers. This can happen when coming in from a server-side-rendered page.
        for (var /** @type {?} */ i = 0; i < previousElements.length; i++) {
            /** @type {?} */ ((previousElements[i].parentNode)).removeChild(previousElements[i]);
        }
        var /** @type {?} */ liveEl = this._document.createElement('div');
        liveEl.classList.add(elementClass);
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    };
    LiveAnnouncer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LiveAnnouncer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: LiveAnnouncer, providedIn: "root" });
    return LiveAnnouncer;
}());
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */
var CdkAriaLive = /** @class */ (function () {
    function CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
        this._elementRef = _elementRef;
        this._liveAnnouncer = _liveAnnouncer;
        this._contentObserver = _contentObserver;
        this._ngZone = _ngZone;
        this._politeness = 'off';
    }
    Object.defineProperty(CdkAriaLive.prototype, "politeness", {
        get: /**
         * The aria-live politeness level to use when announcing messages.
         * @return {?}
         */
        function () { return this._politeness; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._politeness = value === 'polite' || value === 'assertive' ? value : 'off';
            if (this._politeness === 'off') {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                    this._subscription = null;
                }
            }
            else if (!this._subscription) {
                this._subscription = this._ngZone.runOutsideAngular(function () {
                    return _this._contentObserver
                        .observe(_this._elementRef)
                        .subscribe(function () {
                        // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                        var /** @type {?} */ element = _this._elementRef.nativeElement;
                        _this._liveAnnouncer.announce(element.textContent, _this._politeness);
                    });
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkAriaLive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    };
    CdkAriaLive.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkAriaLive]',
                    exportAs: 'cdkAriaLive',
                },] },
    ];
    /** @nocollapse */
    CdkAriaLive.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: LiveAnnouncer, },
        { type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ContentObserver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    CdkAriaLive.propDecorators = {
        "politeness": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAriaLive',] },],
    };
    return CdkAriaLive;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} parentDispatcher
 * @param {?} liveElement
 * @param {?} _document
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentDispatcher, liveElement, _document) {
    return parentDispatcher || new LiveAnnouncer(liveElement, _document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
var /** @type {?} */ TOUCH_BUFFER_MS = 650;
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
var FocusMonitor = /** @class */ (function () {
    function FocusMonitor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * A map of global objects to lists of current listeners.
         */
        this._unregisterGlobalListeners = function () { };
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
    }
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param {?} element The element to monitor
     * @param {?=} checkChildren Whether to count the element as focused when its children are focused.
     * @return {?} An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    FocusMonitor.prototype.monitor = /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param {?} element The element to monitor
     * @param {?=} checkChildren Whether to count the element as focused when its children are focused.
     * @return {?} An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    function (element, checkChildren) {
        var _this = this;
        if (checkChildren === void 0) { checkChildren = false; }
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(element)) {
            var /** @type {?} */ cachedInfo = this._elementInfo.get(element); /** @type {?} */
            ((cachedInfo)).checkChildren = checkChildren;
            return /** @type {?} */ ((cachedInfo)).subject.asObservable();
        }
        // Create monitored element info.
        var /** @type {?} */ info = {
            unlisten: function () { },
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this._elementInfo.set(element, info);
        this._incrementMonitoredElementCount();
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        var /** @type {?} */ focusListener = function (event) { return _this._onFocus(event, element); };
        var /** @type {?} */ blurListener = function (event) { return _this._onBlur(event, element); };
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('focus', focusListener, true);
            element.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = function () {
            element.removeEventListener('focus', focusListener, true);
            element.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    };
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param {?} element The element to stop monitoring.
     * @return {?}
     */
    FocusMonitor.prototype.stopMonitoring = /**
     * Stops monitoring an element and removes all focus classes.
     * @param {?} element The element to stop monitoring.
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(element);
            this._elementInfo.delete(element);
            this._decrementMonitoredElementCount();
        }
    };
    /**
     * Focuses the element via the specified focus origin.
     * @param element Element to focus.
     * @param origin Focus origin.
     * @param options Options that can be used to configure the focus behavior.
     */
    /**
     * Focuses the element via the specified focus origin.
     * @param {?} element Element to focus.
     * @param {?} origin Focus origin.
     * @param {?=} options Options that can be used to configure the focus behavior.
     * @return {?}
     */
    FocusMonitor.prototype.focusVia = /**
     * Focuses the element via the specified focus origin.
     * @param {?} element Element to focus.
     * @param {?} origin Focus origin.
     * @param {?=} options Options that can be used to configure the focus behavior.
     * @return {?}
     */
    function (element, origin, options) {
        this._setOriginForCurrentEventQueue(origin);
        // `focus` isn't available on the server
        if (typeof element.focus === 'function') {
            // Cast the element to `any`, because the TS typings don't have the `options` parameter yet.
            (/** @type {?} */ (element)).focus(options);
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementInfo.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    /**
     * Register necessary event listeners on the document and window.
     * @return {?}
     */
    FocusMonitor.prototype._registerGlobalListeners = /**
     * Register necessary event listeners on the document and window.
     * @return {?}
     */
    function () {
        var _this = this;
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return;
        }
        // On keydown record the origin and clear any touch event that may be in progress.
        var /** @type {?} */ documentKeydownListener = function () {
            _this._lastTouchTarget = null;
            _this._setOriginForCurrentEventQueue('keyboard');
        };
        // On mousedown record the origin only if there is not touch target, since a mousedown can
        // happen as a result of a touch event.
        var /** @type {?} */ documentMousedownListener = function () {
            if (!_this._lastTouchTarget) {
                _this._setOriginForCurrentEventQueue('mouse');
            }
        };
        // When the touchstart event fires the focus event is not yet in the event queue. This means
        // we can't rely on the trick used above (setting timeout of 1ms). Instead we wait 650ms to
        // see if a focus happens.
        var /** @type {?} */ documentTouchstartListener = function (event) {
            if (_this._touchTimeoutId != null) {
                clearTimeout(_this._touchTimeoutId);
            }
            _this._lastTouchTarget = event.target;
            _this._touchTimeoutId = setTimeout(function () { return _this._lastTouchTarget = null; }, TOUCH_BUFFER_MS);
        };
        // Make a note of when the window regains focus, so we can restore the origin info for the
        // focused element.
        var /** @type {?} */ windowFocusListener = function () {
            _this._windowFocused = true;
            _this._windowFocusTimeoutId = setTimeout(function () { return _this._windowFocused = false; });
        };
        // Note: we listen to events in the capture phase so we can detect them even if the user stops
        // propagation.
        this._ngZone.runOutsideAngular(function () {
            document.addEventListener('keydown', documentKeydownListener, true);
            document.addEventListener('mousedown', documentMousedownListener, true);
            document.addEventListener('touchstart', documentTouchstartListener, Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true, capture: true })) : true);
            window.addEventListener('focus', windowFocusListener);
        });
        this._unregisterGlobalListeners = function () {
            document.removeEventListener('keydown', documentKeydownListener, true);
            document.removeEventListener('mousedown', documentMousedownListener, true);
            document.removeEventListener('touchstart', documentTouchstartListener, Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true, capture: true })) : true);
            window.removeEventListener('focus', windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(_this._windowFocusTimeoutId);
            clearTimeout(_this._touchTimeoutId);
            clearTimeout(_this._originTimeoutId);
        };
    };
    /**
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    FocusMonitor.prototype._toggleClass = /**
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    function (element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    };
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype._setClasses = /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
    };
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param {?} origin The origin to set.
     * @return {?}
     */
    FocusMonitor.prototype._setOriginForCurrentEventQueue = /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param {?} origin The origin to set.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._origin = origin;
            // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.
            // Sometimes the focus origin won't be valid in Firefox because Firefox seems to focus *one*
            // tick after the interaction event fired. To ensure the focus origin is always correct,
            // the focus origin will be determined at the beginning of the next tick.
            _this._originTimeoutId = setTimeout(function () { return _this._origin = null; }, 1);
        });
    };
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    FocusMonitor.prototype._wasCausedByTouch = /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    function (event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        var /** @type {?} */ focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    };
    /**
     * Handles focus events on a registered element.
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onFocus = /**
     * Handles focus events on a registered element.
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== event.target)) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        var /** @type {?} */ origin = this._origin;
        if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                origin = 'touch';
            }
            else {
                origin = 'program';
            }
        }
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    };
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onBlur = /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    };
    /**
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    FocusMonitor.prototype._emitOrigin = /**
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    function (subject, origin) {
        this._ngZone.run(function () { return subject.next(origin); });
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype._incrementMonitoredElementCount = /**
     * @return {?}
     */
    function () {
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1) {
            this._registerGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype._decrementMonitoredElementCount = /**
     * @return {?}
     */
    function () {
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            this._unregisterGlobalListeners();
            this._unregisterGlobalListeners = function () { };
        }
    };
    FocusMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusMonitor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], },
    ]; };
    /** @nocollapse */ FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: FocusMonitor, providedIn: "root" });
    return FocusMonitor;
}());
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
var CdkMonitorFocus = /** @class */ (function () {
    function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef.nativeElement, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(function (origin) { return _this.cdkFocusChange.emit(origin); });
    }
    /**
     * @return {?}
     */
    CdkMonitorFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
        this._monitorSubscription.unsubscribe();
    };
    CdkMonitorFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
                },] },
    ];
    /** @nocollapse */
    CdkMonitorFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: FocusMonitor, },
    ]; };
    CdkMonitorFocus.propDecorators = {
        "cdkFocusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CdkMonitorFocus;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusMonitor(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ FOCUS_MONITOR_PROVIDER = {
    // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
    provide: FocusMonitor,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]],
    useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var A11yModule = /** @class */ (function () {
    function A11yModule() {
    }
    A11yModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"]],
                    declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
                },] },
    ];
    return A11yModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=a11y.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 */
var /** @type {?} */ DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var /** @type {?} */ bodyDir = _document.body ? _document.body.dir : null;
            var /** @type {?} */ htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var /** @type {?} */ value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] },] },
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ old = this._dir;
            this._dir = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[dir]': 'dir' },
                    exportAs: 'dir',
                },] },
    ];
    /** @nocollapse */
    Dir.propDecorators = {
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] },],
        "dir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/keycodes.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/keycodes.es5.js ***!
  \********************************************************/
/*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAC_ENTER = 3;
var /** @type {?} */ BACKSPACE = 8;
var /** @type {?} */ TAB = 9;
var /** @type {?} */ NUM_CENTER = 12;
var /** @type {?} */ ENTER = 13;
var /** @type {?} */ SHIFT = 16;
var /** @type {?} */ CONTROL = 17;
var /** @type {?} */ ALT = 18;
var /** @type {?} */ PAUSE = 19;
var /** @type {?} */ CAPS_LOCK = 20;
var /** @type {?} */ ESCAPE = 27;
var /** @type {?} */ SPACE = 32;
var /** @type {?} */ PAGE_UP = 33;
var /** @type {?} */ PAGE_DOWN = 34;
var /** @type {?} */ END = 35;
var /** @type {?} */ HOME = 36;
var /** @type {?} */ LEFT_ARROW = 37;
var /** @type {?} */ UP_ARROW = 38;
var /** @type {?} */ RIGHT_ARROW = 39;
var /** @type {?} */ DOWN_ARROW = 40;
var /** @type {?} */ PLUS_SIGN = 43;
var /** @type {?} */ PRINT_SCREEN = 44;
var /** @type {?} */ INSERT = 45;
var /** @type {?} */ DELETE = 46;
var /** @type {?} */ ZERO = 48;
var /** @type {?} */ ONE = 49;
var /** @type {?} */ TWO = 50;
var /** @type {?} */ THREE = 51;
var /** @type {?} */ FOUR = 52;
var /** @type {?} */ FIVE = 53;
var /** @type {?} */ SIX = 54;
var /** @type {?} */ SEVEN = 55;
var /** @type {?} */ EIGHT = 56;
var /** @type {?} */ NINE = 57;
var /** @type {?} */ FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
var /** @type {?} */ FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
var /** @type {?} */ QUESTION_MARK = 63;
var /** @type {?} */ AT_SIGN = 64;
var /** @type {?} */ A = 65;
var /** @type {?} */ B = 66;
var /** @type {?} */ C = 67;
var /** @type {?} */ D = 68;
var /** @type {?} */ E = 69;
var /** @type {?} */ F = 70;
var /** @type {?} */ G = 71;
var /** @type {?} */ H = 72;
var /** @type {?} */ I = 73;
var /** @type {?} */ J = 74;
var /** @type {?} */ K = 75;
var /** @type {?} */ L = 76;
var /** @type {?} */ M = 77;
var /** @type {?} */ N = 78;
var /** @type {?} */ O = 79;
var /** @type {?} */ P = 80;
var /** @type {?} */ Q = 81;
var /** @type {?} */ R = 82;
var /** @type {?} */ S = 83;
var /** @type {?} */ T = 84;
var /** @type {?} */ U = 85;
var /** @type {?} */ V = 86;
var /** @type {?} */ W = 87;
var /** @type {?} */ X = 88;
var /** @type {?} */ Y = 89;
var /** @type {?} */ Z = 90;
var /** @type {?} */ META = 91; // WIN_KEY_LEFT
var /** @type {?} */ MAC_WK_CMD_LEFT = 91;
var /** @type {?} */ MAC_WK_CMD_RIGHT = 93;
var /** @type {?} */ CONTEXT_MENU = 93;
var /** @type {?} */ NUMPAD_ZERO = 96;
var /** @type {?} */ NUMPAD_ONE = 97;
var /** @type {?} */ NUMPAD_TWO = 98;
var /** @type {?} */ NUMPAD_THREE = 99;
var /** @type {?} */ NUMPAD_FOUR = 100;
var /** @type {?} */ NUMPAD_FIVE = 101;
var /** @type {?} */ NUMPAD_SIX = 102;
var /** @type {?} */ NUMPAD_SEVEN = 103;
var /** @type {?} */ NUMPAD_EIGHT = 104;
var /** @type {?} */ NUMPAD_NINE = 105;
var /** @type {?} */ NUMPAD_MULTIPLY = 106;
var /** @type {?} */ NUMPAD_PLUS = 107;
var /** @type {?} */ NUMPAD_MINUS = 109;
var /** @type {?} */ NUMPAD_PERIOD = 110;
var /** @type {?} */ NUMPAD_DIVIDE = 111;
var /** @type {?} */ F1 = 112;
var /** @type {?} */ F2 = 113;
var /** @type {?} */ F3 = 114;
var /** @type {?} */ F4 = 115;
var /** @type {?} */ F5 = 116;
var /** @type {?} */ F6 = 117;
var /** @type {?} */ F7 = 118;
var /** @type {?} */ F8 = 119;
var /** @type {?} */ F9 = 120;
var /** @type {?} */ F10 = 121;
var /** @type {?} */ F11 = 122;
var /** @type {?} */ F12 = 123;
var /** @type {?} */ NUM_LOCK = 144;
var /** @type {?} */ SCROLL_LOCK = 145;
var /** @type {?} */ FIRST_MEDIA = 166;
var /** @type {?} */ FF_MINUS = 173;
var /** @type {?} */ MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
var /** @type {?} */ VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
var /** @type {?} */ VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
var /** @type {?} */ FF_MUTE = 181;
var /** @type {?} */ FF_VOLUME_DOWN = 182;
var /** @type {?} */ LAST_MEDIA = 183;
var /** @type {?} */ FF_VOLUME_UP = 183;
var /** @type {?} */ SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
var /** @type {?} */ EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
var /** @type {?} */ COMMA = 188;
var /** @type {?} */ DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
var /** @type {?} */ SLASH = 191;
var /** @type {?} */ APOSTROPHE = 192;
var /** @type {?} */ TILDE = 192;
var /** @type {?} */ OPEN_SQUARE_BRACKET = 219;
var /** @type {?} */ BACKSLASH = 220;
var /** @type {?} */ CLOSE_SQUARE_BRACKET = 221;
var /** @type {?} */ SINGLE_QUOTE = 222;
var /** @type {?} */ MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/observers.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/observers.es5.js ***!
  \*********************************************************/
/*! exports provided: MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory", function() { return MutationObserverFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentObserver", function() { return ContentObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkObserveContent", function() { return CdkObserveContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserversModule", function() { return ObserversModule; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
var MutationObserverFactory = /** @class */ (function () {
    function MutationObserverFactory() {
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    MutationObserverFactory.prototype.create = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    };
    MutationObserverFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MutationObserverFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
    return MutationObserverFactory;
}());
/**
 * An injectable service that allows watching elements for changes to their content.
 */
var ContentObserver = /** @class */ (function () {
    function ContentObserver(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ContentObserver.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._observedElements.forEach(function (_, element) { return _this._cleanupObserver(element); });
    };
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    ContentObserver.prototype.observe = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        var _this = this;
        var /** @type {?} */ element = elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            var /** @type {?} */ stream = _this._observeElement(element);
            var /** @type {?} */ subscription = stream.subscribe(observer);
            return function () {
                subscription.unsubscribe();
                _this._unobserveElement(element);
            };
        });
    };
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._observeElement = /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!this._observedElements.has(element)) {
            var /** @type {?} */ stream_1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            var /** @type {?} */ observer = this._mutationObserverFactory.create(function (mutations) { return stream_1.next(mutations); });
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer: observer, stream: stream_1, count: 1 });
        }
        else {
            /** @type {?} */ ((this._observedElements.get(element))).count++;
        }
        return /** @type {?} */ ((this._observedElements.get(element))).stream;
    };
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._unobserveElement = /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._observedElements.has(element)) {
            /** @type {?} */ ((this._observedElements.get(element))).count--;
            if (!/** @type {?} */ ((this._observedElements.get(element))).count) {
                this._cleanupObserver(element);
            }
        }
    };
    /**
     * Clean up the underlying MutationObserver for the specified element.
     * @param {?} element
     * @return {?}
     */
    ContentObserver.prototype._cleanupObserver = /**
     * Clean up the underlying MutationObserver for the specified element.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (this._observedElements.has(element)) {
            var _a = /** @type {?} */ ((this._observedElements.get(element))), observer = _a.observer, stream = _a.stream;
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    };
    ContentObserver.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ContentObserver.ctorParameters = function () { return [
        { type: MutationObserverFactory, },
    ]; };
    /** @nocollapse */ ContentObserver.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ContentObserver_Factory() { return new ContentObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
    return ContentObserver;
}());
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
var CdkObserveContent = /** @class */ (function () {
    function CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._disabled = false;
        this._currentSubscription = null;
    }
    Object.defineProperty(CdkObserveContent.prototype, "disabled", {
        get: /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
            if (this._disabled) {
                this._unsubscribe();
            }
            else {
                this._subscribe();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkObserveContent.prototype, "debounce", {
        get: /**
         * Debounce interval for emitting the changes.
         * @return {?}
         */
        function () { return this._debounce; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._debounce = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
            this._subscribe();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._unsubscribe();
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype._subscribe = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._unsubscribe();
        var /** @type {?} */ stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular(function () {
            _this._currentSubscription =
                (_this.debounce ? stream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(_this.debounce)) : stream).subscribe(_this.event);
        });
    };
    /**
     * @return {?}
     */
    CdkObserveContent.prototype._unsubscribe = /**
     * @return {?}
     */
    function () {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    };
    CdkObserveContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkObserveContent]',
                    exportAs: 'cdkObserveContent',
                },] },
    ];
    /** @nocollapse */
    CdkObserveContent.ctorParameters = function () { return [
        { type: ContentObserver, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    CdkObserveContent.propDecorators = {
        "event": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['cdkObserveContent',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkObserveContentDisabled',] },],
        "debounce": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return CdkObserveContent;
}());
var ObserversModule = /** @class */ (function () {
    function ObserversModule() {
    }
    ObserversModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkObserveContent],
                    declarations: [CdkObserveContent],
                    providers: [MutationObserverFactory]
                },] },
    ];
    return ObserversModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=observers.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/overlay.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/overlay.es5.js ***!
  \*******************************************************/
/*! exports provided: ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkScrollable, ScrollDispatcher, Overlay, OverlayContainer, CdkOverlayOrigin, CdkConnectedOverlay, FullscreenOverlayContainer, OverlayRef, OverlayKeyboardDispatcher, OverlayPositionBuilder, GlobalPositionStrategy, ConnectedPositionStrategy, FlexibleConnectedPositionStrategy, OverlayConfig, ConnectionPositionPair, ScrollingVisibility, ConnectedOverlayPositionChange, validateVerticalPosition, validateHorizontalPosition, ScrollStrategyOptions, RepositionScrollStrategy, CloseScrollStrategy, NoopScrollStrategy, BlockScrollStrategy, OverlayModule, OVERLAY_PROVIDERS, ɵg, ɵf, ɵb, ɵa, ɵc, ɵe, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function() { return CdkOverlayOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function() { return CdkConnectedOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function() { return FullscreenOverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function() { return OverlayKeyboardDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function() { return OverlayPositionBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function() { return GlobalPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function() { return ConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function() { return FlexibleConnectedPositionStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayConfig", function() { return OverlayConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function() { return ConnectionPositionPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function() { return ScrollingVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function() { return ConnectedOverlayPositionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function() { return validateVerticalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function() { return validateHorizontalPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function() { return ScrollStrategyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function() { return RepositionScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function() { return CloseScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function() { return NoopScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function() { return BlockScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function() { return OVERLAY_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return OVERLAY_CONTAINER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return OVERLAY_CONTAINER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["VIEWPORT_RULER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkScrollable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Scroll strategy that doesn't do anything.
 */
var  /**
 * Scroll strategy that doesn't do anything.
 */
NoopScrollStrategy = /** @class */ (function () {
    function NoopScrollStrategy() {
    }
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.enable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.disable = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    /** Does nothing, as this scroll strategy is a no-op. */
    /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    NoopScrollStrategy.prototype.attach = /**
     * Does nothing, as this scroll strategy is a no-op.
     * @return {?}
     */
    function () { };
    return NoopScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Initial configuration used when creating an overlay.
 */
var  /**
 * Initial configuration used when creating an overlay.
 */
OverlayConfig = /** @class */ (function () {
    function OverlayConfig(config) {
        var _this = this;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = new NoopScrollStrategy();
        /**
         * Custom class to add to the overlay pane.
         */
        this.panelClass = '';
        /**
         * Whether the overlay has a backdrop.
         */
        this.hasBackdrop = false;
        /**
         * Custom class to add to the backdrop
         */
        this.backdropClass = 'cdk-overlay-dark-backdrop';
        if (config) {
            Object.keys(config)
                .filter(function (key) { return typeof config[key] !== 'undefined'; })
                .forEach(function (key) { return _this[key] = config[key]; });
        }
    }
    return OverlayConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The points of the origin element and the overlay element to connect.
 */
var  /**
 * The points of the origin element and the overlay element to connect.
 */
ConnectionPositionPair = /** @class */ (function () {
    function ConnectionPositionPair(origin, overlay, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  \@docs-private
 */
var  /**
 * Set of properties regarding the position of the origin and overlay relative to the viewport
 * with respect to the containing Scrollable elements.
 *
 * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
 * bounds of any one of the strategy's Scrollable's bounding client rectangle.
 *
 * The overlay and origin are outside view if there is no overlap between their bounding client
 * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
 *
 *       -----------                    -----------
 *       | outside |                    | clipped |
 *       |  view   |              --------------------------
 *       |         |              |     |         |        |
 *       ----------               |     -----------        |
 *  --------------------------    |                        |
 *  |                        |    |      Scrollable        |
 *  |                        |    |                        |
 *  |                        |     --------------------------
 *  |      Scrollable        |
 *  |                        |
 *  --------------------------
 *
 *  \@docs-private
 */
ScrollingVisibility = /** @class */ (function () {
    function ScrollingVisibility() {
    }
    return ScrollingVisibility;
}());
/**
 * The change event emitted by the strategy when a fallback position is used.
 */
var ConnectedOverlayPositionChange = /** @class */ (function () {
    function ConnectedOverlayPositionChange(connectionPair, /** @docs-private */
    scrollableViewProperties) {
        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
    }
    /** @nocollapse */
    ConnectedOverlayPositionChange.ctorParameters = function () { return [
        { type: ConnectionPositionPair, },
        { type: ScrollingVisibility, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    return ConnectedOverlayPositionChange;
}());
/**
 * Validates whether a vertical position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateVerticalPosition(property, value) {
    if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"top\", \"bottom\" or \"center\".");
    }
}
/**
 * Validates whether a horizontal position property matches the expected values.
 * \@docs-private
 * @param {?} property Name of the property being validated.
 * @param {?} value Value of the property being validated.
 * @return {?}
 */
function validateHorizontalPosition(property, value) {
    if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid " + property + " \"" + value + "\". " +
            "Expected \"start\", \"end\" or \"center\".");
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
var  /**
 * Strategy that will prevent the user from scrolling while the overlay is visible.
 */
BlockScrollStrategy = /** @class */ (function () {
    function BlockScrollStrategy(_viewportRuler, document) {
        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = { top: '', left: '' };
        this._isEnabled = false;
        this._document = document;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    BlockScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @return {?}
     */
    function () { };
    /** Blocks page-level scroll while the attached overlay is open. */
    /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.enable = /**
     * Blocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._canBeEnabled()) {
            var /** @type {?} */ root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
            // Cache the previous inline styles in case the user had set them.
            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || '';
            // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.
            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
        }
    };
    /** Unblocks page-level scroll while the attached overlay is open. */
    /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    BlockScrollStrategy.prototype.disable = /**
     * Unblocks page-level scroll while the attached overlay is open.
     * @return {?}
     */
    function () {
        if (this._isEnabled) {
            var /** @type {?} */ html = this._document.documentElement;
            var /** @type {?} */ body = this._document.body;
            var /** @type {?} */ previousHtmlScrollBehavior = html.style['scrollBehavior'] || '';
            var /** @type {?} */ previousBodyScrollBehavior = body.style['scrollBehavior'] || '';
            this._isEnabled = false;
            html.style.left = this._previousHTMLStyles.left;
            html.style.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock');
            // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
            html.style['scrollBehavior'] = body.style['scrollBehavior'] = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            html.style['scrollBehavior'] = previousHtmlScrollBehavior;
            body.style['scrollBehavior'] = previousBodyScrollBehavior;
        }
    };
    /**
     * @return {?}
     */
    BlockScrollStrategy.prototype._canBeEnabled = /**
     * @return {?}
     */
    function () {
        // Since the scroll strategies can't be singletons, we have to use a global CSS class
        // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
        // scrolling multiple times.
        var /** @type {?} */ html = this._document.documentElement;
        if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
        }
        var /** @type {?} */ body = this._document.body;
        var /** @type {?} */ viewport = this._viewportRuler.getViewportSize();
        return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
    };
    return BlockScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
 * @return {?}
 */
function getMatScrollStrategyAlreadyAttachedError() {
    return Error("Scroll strategy has already been attached.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
var  /**
 * Strategy that will close the overlay as soon as the user starts scrolling.
 */
CloseScrollStrategy = /** @class */ (function () {
    function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /**
         * Detaches the overlay ref and disables the scroll strategy.
         */
        this._detach = function () {
            _this.disable();
            if (_this._overlayRef.hasAttached()) {
                _this._ngZone.run(function () { return _this._overlayRef.detach(); });
            }
        };
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    CloseScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables the closing of the attached overlay on scroll. */
    /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.enable = /**
     * Enables the closing of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._scrollSubscription) {
            return;
        }
        var /** @type {?} */ stream = this._scrollDispatcher.scrolled(0);
        if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
                var /** @type {?} */ scrollPosition = _this._viewportRuler.getViewportScrollPosition().top;
                if (Math.abs(scrollPosition - _this._initialScrollPosition) > /** @type {?} */ ((/** @type {?} */ ((_this._config)).threshold))) {
                    _this._detach();
                }
                else {
                    _this._overlayRef.updatePosition();
                }
            });
        }
        else {
            this._scrollSubscription = stream.subscribe(this._detach);
        }
    };
    /** Disables the closing the attached overlay on scroll. */
    /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    CloseScrollStrategy.prototype.disable = /**
     * Disables the closing the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return CloseScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

// TODO(jelbourn): move this to live with the rest of the scrolling code
// TODO(jelbourn): someday replace this with IntersectionObservers
/**
 * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is scrolled out of view
 */
function isElementScrolledOutsideView(element, scrollContainers) {
    return scrollContainers.some(function (containerBounds) {
        var /** @type {?} */ outsideAbove = element.bottom < containerBounds.top;
        var /** @type {?} */ outsideBelow = element.top > containerBounds.bottom;
        var /** @type {?} */ outsideLeft = element.right < containerBounds.left;
        var /** @type {?} */ outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    });
}
/**
 * Gets whether an element is clipped by any of its scrolling containers.
 * \@docs-private
 * @param {?} element Dimensions of the element (from getBoundingClientRect)
 * @param {?} scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
 * @return {?} Whether the element is clipped
 */
function isElementClippedByScrolling(element, scrollContainers) {
    return scrollContainers.some(function (scrollContainerRect) {
        var /** @type {?} */ clippedAbove = element.top < scrollContainerRect.top;
        var /** @type {?} */ clippedBelow = element.bottom > scrollContainerRect.bottom;
        var /** @type {?} */ clippedLeft = element.left < scrollContainerRect.left;
        var /** @type {?} */ clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Strategy that will update the element position as the user is scrolling.
 */
var  /**
 * Strategy that will update the element position as the user is scrolling.
 */
RepositionScrollStrategy = /** @class */ (function () {
    function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
    }
    /** Attaches this scroll strategy to an overlay. */
    /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    RepositionScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        if (this._overlayRef) {
            throw getMatScrollStrategyAlreadyAttachedError();
        }
        this._overlayRef = overlayRef;
    };
    /** Enables repositioning of the attached overlay on scroll. */
    /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.enable = /**
     * Enables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._scrollSubscription) {
            var /** @type {?} */ throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this._overlayRef.updatePosition();
                // TODO(crisbeto): make `close` on by default once all components can handle it.
                if (_this._config && _this._config.autoClose) {
                    var /** @type {?} */ overlayRect = _this._overlayRef.overlayElement.getBoundingClientRect();
                    var _a = _this._viewportRuler.getViewportSize(), width = _a.width, height = _a.height;
                    // TODO(crisbeto): include all ancestor scroll containers here once
                    // we have a way of exposing the trigger element to the scroll strategy.
                    var /** @type {?} */ parentRects = [{ width: width, height: height, bottom: height, right: width, top: 0, left: 0 }];
                    if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                        _this.disable();
                        _this._ngZone.run(function () { return _this._overlayRef.detach(); });
                    }
                }
            });
        }
    };
    /** Disables repositioning of the attached overlay on scroll. */
    /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    RepositionScrollStrategy.prototype.disable = /**
     * Disables repositioning of the attached overlay on scroll.
     * @return {?}
     */
    function () {
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
            this._scrollSubscription = null;
        }
    };
    return RepositionScrollStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Options for how an overlay will handle scrolling.
 *
 * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
 * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
 */
var ScrollStrategyOptions = /** @class */ (function () {
    function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this = this;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /**
         * Do nothing on scroll.
         */
        this.noop = function () { return new NoopScrollStrategy(); };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */
        this.close = function (config) {
            return new CloseScrollStrategy(_this._scrollDispatcher, _this._ngZone, _this._viewportRuler, config);
        };
        /**
         * Block scrolling.
         */
        this.block = function () { return new BlockScrollStrategy(_this._viewportRuler, _this._document); };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */
        this.reposition = function (config) {
            return new RepositionScrollStrategy(_this._scrollDispatcher, _this._viewportRuler, _this._ngZone, config);
        };
        this._document = document;
    }
    ScrollStrategyOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollStrategyOptions.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"], },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ ScrollStrategyOptions.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ScrollStrategyOptions_Factory() { return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: ScrollStrategyOptions, providedIn: "root" });
    return ScrollStrategyOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
var OverlayKeyboardDispatcher = /** @class */ (function () {
    function OverlayKeyboardDispatcher(document) {
        var _this = this;
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */
        this._keydownListener = function (event) {
            var /** @type {?} */ overlays = _this._attachedOverlays;
            for (var /** @type {?} */ i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEventSubscriptions > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        };
        this._document = document;
    }
    /**
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._detach();
    };
    /** Add a new overlay to the list of attached overlay refs. */
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.add = /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener, true);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    };
    /** Remove an overlay from the list of attached overlay refs. */
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype.remove = /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    };
    /**
     * Detaches the global keyboard event listener.
     * @return {?}
     */
    OverlayKeyboardDispatcher.prototype._detach = /**
     * Detaches the global keyboard event listener.
     * @return {?}
     */
    function () {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener, true);
            this._isAttached = false;
        }
    };
    OverlayKeyboardDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayKeyboardDispatcher.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ OverlayKeyboardDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
    return OverlayKeyboardDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), OverlayKeyboardDispatcher],
        /** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Container inside which all overlays will render.
 */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    /**
     * @return {?}
     */
    OverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    function () {
        var /** @type {?} */ container = this._document.createElement('div');
        container.classList.add('cdk-overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
    return OverlayContainer;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} parentContainer
 * @param {?} _document
 * @return {?}
 */
function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
    return parentContainer || new OverlayContainer(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ OVERLAY_CONTAINER_PROVIDER = {
    // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
    provide: OverlayContainer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), OverlayContainer],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
        ) // We need to use the InjectionToken somewhere to keep TS happy
    ],
    useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var  /**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document) {
        var _this = this;
        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._keydownEventsObservable = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            var /** @type {?} */ subscription = _this._keydownEvents.subscribe(observer);
            _this._keydownEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._keydownEventSubscriptions--;
            };
        });
        /**
         * Stream of keydown events dispatched to this overlay.
         */
        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Amount of subscriptions to the keydown events.
         */
        this._keydownEventSubscriptions = 0;
        if (_config.scrollStrategy) {
            _config.scrollStrategy.attach(this);
        }
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: /**
         * The overlay's HTML element
         * @return {?}
         */
        function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "backdropElement", {
        /** The overlay's backdrop HTML element. */
        get: /**
         * The overlay's backdrop HTML element.
         * @return {?}
         */
        function () {
            return this._backdropElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverlayRef.prototype, "hostElement", {
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */
        get: /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         * @return {?}
         */
        function () {
            return this._host;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param portal Portal instance to which to attach the overlay.
     * @returns The portal attachment result.
     */
    /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    OverlayRef.prototype.attach = /**
     * Attaches content, given via a Portal, to the overlay.
     * If the overlay is configured to have a backdrop, it will be created.
     *
     * @param {?} portal Portal instance to which to attach the overlay.
     * @return {?} The portal attachment result.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ attachResult = this._portalOutlet.attach(portal);
        if (this._config.positionStrategy) {
            this._config.positionStrategy.attach(this);
        }
        // Update the pane element with the given configuration.
        if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
        }
        this._updateStackingOrder();
        this._updateElementSize();
        this._updateElementDirection();
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.enable();
        }
        // Update the position once the zone is stable so that the overlay will be fully rendered
        // before attempting to position it, as the position may depend on the size of the rendered
        // content.
        this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this.hasAttached()) {
                _this.updatePosition();
            }
        });
        // Enable pointer events for the overlay pane element.
        this._togglePointerEvents(true);
        if (this._config.hasBackdrop) {
            this._attachBackdrop();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
        }
        // Only emit the `attachments` event once all other setup is done.
        this._attachments.next();
        // Track this overlay by the keyboard dispatcher
        this._keyboardDispatcher.add(this);
        return attachResult;
    };
    /**
     * Detaches an overlay from a portal.
     * @returns The portal detachment result.
     */
    /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    OverlayRef.prototype.detach = /**
     * Detaches an overlay from a portal.
     * @return {?} The portal detachment result.
     */
    function () {
        var _this = this;
        if (!this.hasAttached()) {
            return;
        }
        this.detachBackdrop();
        // When the overlay is detached, the pane element should disable pointer events.
        // This is necessary because otherwise the pane element will cover the page and disable
        // pointer events therefore. Depends on the position strategy and the applied pane boundaries.
        this._togglePointerEvents(false);
        if (this._config.positionStrategy && this._config.positionStrategy.detach) {
            this._config.positionStrategy.detach();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
        }
        var /** @type {?} */ detachmentResult = this._portalOutlet.detach();
        // Only emit after everything is detached.
        this._detachments.next();
        // Remove this overlay from keyboard dispatcher tracking.
        this._keyboardDispatcher.remove(this);
        // Keeping the host element in DOM the can cause scroll jank, because it still gets rendered,
        // even though it's transparent and unclickable. We can't remove the host here immediately,
        // because the overlay pane's content might still be animating. This stream helps us avoid
        // interrupting the animation by waiting for the pane to become empty.
        var /** @type {?} */ subscription = this._ngZone.onStable
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(this._attachments, this._detachments)))
            .subscribe(function () {
            // Needs a couple of checks for the pane and host, because
            // they may have been removed by the time the zone stabilizes.
            if (!_this._pane || !_this._host || _this._pane.children.length === 0) {
                if (_this._host && _this._host.parentElement) {
                    _this._previousHostParent = _this._host.parentElement;
                    _this._previousHostParent.removeChild(_this._host);
                }
                subscription.unsubscribe();
            }
        });
        return detachmentResult;
    };
    /** Cleans up the overlay from the DOM. */
    /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    OverlayRef.prototype.dispose = /**
     * Cleans up the overlay from the DOM.
     * @return {?}
     */
    function () {
        var /** @type {?} */ isAttached = this.hasAttached();
        if (this._config.positionStrategy) {
            this._config.positionStrategy.dispose();
        }
        if (this._config.scrollStrategy) {
            this._config.scrollStrategy.disable();
        }
        this.detachBackdrop();
        this._keyboardDispatcher.remove(this);
        this._portalOutlet.dispose();
        this._attachments.complete();
        this._backdropClick.complete();
        this._keydownEvents.complete();
        if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);
            this._host = /** @type {?} */ ((null));
        }
        this._previousHostParent = this._pane = /** @type {?} */ ((null));
        if (isAttached) {
            this._detachments.next();
        }
        this._detachments.complete();
    };
    /** Whether the overlay has attached content. */
    /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    OverlayRef.prototype.hasAttached = /**
     * Whether the overlay has attached content.
     * @return {?}
     */
    function () {
        return this._portalOutlet.hasAttached();
    };
    /** Gets an observable that emits when the backdrop has been clicked. */
    /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    OverlayRef.prototype.backdropClick = /**
     * Gets an observable that emits when the backdrop has been clicked.
     * @return {?}
     */
    function () {
        return this._backdropClick.asObservable();
    };
    /** Gets an observable that emits when the overlay has been attached. */
    /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    OverlayRef.prototype.attachments = /**
     * Gets an observable that emits when the overlay has been attached.
     * @return {?}
     */
    function () {
        return this._attachments.asObservable();
    };
    /** Gets an observable that emits when the overlay has been detached. */
    /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    OverlayRef.prototype.detachments = /**
     * Gets an observable that emits when the overlay has been detached.
     * @return {?}
     */
    function () {
        return this._detachments.asObservable();
    };
    /** Gets an observable of keydown events targeted to this overlay. */
    /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    OverlayRef.prototype.keydownEvents = /**
     * Gets an observable of keydown events targeted to this overlay.
     * @return {?}
     */
    function () {
        return this._keydownEventsObservable;
    };
    /** Gets the the current overlay configuration, which is immutable. */
    /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    OverlayRef.prototype.getConfig = /**
     * Gets the the current overlay configuration, which is immutable.
     * @return {?}
     */
    function () {
        return this._config;
    };
    /** Updates the position of the overlay based on the position strategy. */
    /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    OverlayRef.prototype.updatePosition = /**
     * Updates the position of the overlay based on the position strategy.
     * @return {?}
     */
    function () {
        if (this._config.positionStrategy) {
            this._config.positionStrategy.apply();
        }
    };
    /** Update the size properties of the overlay. */
    /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    OverlayRef.prototype.updateSize = /**
     * Update the size properties of the overlay.
     * @param {?} sizeConfig
     * @return {?}
     */
    function (sizeConfig) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, sizeConfig);
        this._updateElementSize();
    };
    /** Sets the LTR/RTL direction for the overlay. */
    /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    OverlayRef.prototype.setDirection = /**
     * Sets the LTR/RTL direction for the overlay.
     * @param {?} dir
     * @return {?}
     */
    function (dir) {
        this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__assign"])({}, this._config, { direction: dir });
        this._updateElementDirection();
    };
    /**
     * Returns the layout direction of the overlay panel.
     */
    /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype.getDirection = /**
     * Returns the layout direction of the overlay panel.
     * @return {?}
     */
    function () {
        var /** @type {?} */ direction = this._config.direction;
        if (!direction) {
            return 'ltr';
        }
        return typeof direction === 'string' ? direction : direction.value;
    };
    /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    OverlayRef.prototype._updateElementDirection = /**
     * Updates the text direction of the overlay panel.
     * @return {?}
     */
    function () {
        this._host.setAttribute('dir', this.getDirection());
    };
    /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    OverlayRef.prototype._updateElementSize = /**
     * Updates the size of the overlay element based on the overlay config.
     * @return {?}
     */
    function () {
        var /** @type {?} */ style = this._pane.style;
        style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.width);
        style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.height);
        style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.minWidth);
        style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.minHeight);
        style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.maxWidth);
        style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(this._config.maxHeight);
    };
    /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    OverlayRef.prototype._togglePointerEvents = /**
     * Toggles the pointer events for the overlay pane element.
     * @param {?} enablePointer
     * @return {?}
     */
    function (enablePointer) {
        this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
    };
    /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    OverlayRef.prototype._attachBackdrop = /**
     * Attaches a backdrop for this overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ showingClass = 'cdk-overlay-backdrop-showing';
        this._backdropElement = this._document.createElement('div');
        this._backdropElement.classList.add('cdk-overlay-backdrop');
        if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
        } /** @type {?} */
        ((
        // Insert the backdrop before the pane in the DOM order,
        // in order to handle stacked overlays properly.
        this._host.parentElement)).insertBefore(this._backdropElement, this._host);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function (event) { return _this._backdropClick.next(event); });
        // Add class to fade-in the backdrop after one frame.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    if (_this._backdropElement) {
                        _this._backdropElement.classList.add(showingClass);
                    }
                });
            });
        }
        else {
            this._backdropElement.classList.add(showingClass);
        }
    };
    /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    OverlayRef.prototype._updateStackingOrder = /**
     * Updates the stacking order of the element, moving it to the top if necessary.
     * This is required in cases where one overlay was detached, while another one,
     * that should be behind it, was destroyed. The next time both of them are opened,
     * the stacking will be wrong, because the detached element's pane will still be
     * in its original DOM position.
     * @return {?}
     */
    function () {
        if (this._host.nextSibling) {
            /** @type {?} */ ((this._host.parentNode)).appendChild(this._host);
        }
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    OverlayRef.prototype.detachBackdrop = /**
     * Detaches the backdrop (if any) associated with the overlay.
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var /** @type {?} */ timeoutId_1;
            var /** @type {?} */ finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
                clearTimeout(timeoutId_1);
            };
            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');
            if (this._config.backdropClass) {
                this._toggleClasses(backdropToDetach, this._config.backdropClass, false);
            }
            this._ngZone.runOutsideAngular(function () {
                /** @type {?} */ ((backdropToDetach)).addEventListener('transitionend', finishDetach_1);
            });
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            timeoutId_1 = this._ngZone.runOutsideAngular(function () { return setTimeout(finishDetach_1, 500); });
        }
    };
    /**
     * Toggles a single CSS class or an array of classes on an element.
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    OverlayRef.prototype._toggleClasses = /**
     * Toggles a single CSS class or an array of classes on an element.
     * @param {?} element
     * @param {?} cssClasses
     * @param {?} isAdd
     * @return {?}
     */
    function (element, cssClasses, isAdd) {
        var /** @type {?} */ classList = element.classList;
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            isAdd ? classList.add(cssClass) : classList.remove(cssClass);
        });
    };
    return OverlayRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
FlexibleConnectedPositionStrategy = /** @class */ (function () {
    function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        var _this = this;
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /**
         * Whether we're performing the very first positioning of the overlay.
         */
        this._isInitialRender = true;
        /**
         * Last size used for the bounding box. Used to avoid resizing the overlay after open.
         */
        this._lastBoundingBoxSize = { width: 0, height: 0 };
        /**
         * Whether the overlay was pushed in a previous positioning.
         */
        this._isPushed = false;
        /**
         * Whether the overlay can be pushed on-screen on the initial open.
         */
        this._canPush = true;
        /**
         * Whether the overlay can grow via flexible width/height after the initial open.
         */
        this._growAfterOpen = false;
        /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         */
        this._hasFlexibleDimensions = true;
        /**
         * Whether the overlay position is locked.
         */
        this._positionLocked = false;
        /**
         * Amount of space that must be maintained between the overlay and the edge of the viewport.
         */
        this._viewportMargin = 0;
        /**
         * The Scrollable containers used to check scrollable view properties on position change.
         */
        this.scrollables = [];
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        /**
         * Subject that emits whenever the position changes.
         */
        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        /**
         * Subscription to viewport size changes.
         */
        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Default offset for the overlay along the x axis.
         */
        this._offsetX = 0;
        /**
         * Default offset for the overlay along the y axis.
         */
        this._offsetY = 0;
        /**
         * Amount of subscribers to the `positionChanges` stream.
         */
        this._positionChangeSubscriptions = 0;
        /**
         * Observable sequence of position changes.
         */
        this.positionChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
            var /** @type {?} */ subscription = _this._positionChanges.subscribe(observer);
            _this._positionChangeSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._positionChangeSubscriptions--;
            };
        });
        this.setOrigin(connectedTo);
    }
    Object.defineProperty(FlexibleConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attaches this position strategy to an overlay. */
    /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.attach = /**
     * Attaches this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var _this = this;
        if (this._overlayRef && overlayRef !== this._overlayRef) {
            throw Error('This position strategy is already attached to an overlay');
        }
        this._validatePositions();
        overlayRef.hostElement.classList.add('cdk-overlay-connected-position-bounding-box');
        this._overlayRef = overlayRef;
        this._boundingBox = overlayRef.hostElement;
        this._pane = overlayRef.overlayElement;
        this._resizeSubscription.unsubscribe();
        this._resizeSubscription = this._viewportRuler.change().subscribe(function () { return _this.apply(); });
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin best fits on-screen.
     *
     * The selection of a position goes as follows:
     *  - If any positions fit completely within the viewport as-is,
     *      choose the first position that does so.
     *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
     *      choose the position with the greatest available size modified by the positions' weight.
     *  - If pushing is enabled, take the position that went off-screen the least and push it
     *      on-screen.
     *  - If none of the previous criteria were met, use the position that goes off-screen the least.
     * \@docs-private
     * @return {?}
     */
    function () {
        // We shouldn't do anything if the strategy was disposed or we're on the server.
        // @breaking-change 7.0.0 Remove `_platform` null check once it's guaranteed to be defined.
        if (this._isDisposed || (this._platform && !this._platform.isBrowser)) {
            return;
        }
        // If the position has been applied already (e.g. when the overlay was opened) and the
        // consumer opted into locking in the position, re-use the old position, in order to
        // prevent the overlay from jumping around.
        if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
        }
        this._resetOverlayElementStyles();
        this._resetBoundingBoxStyles();
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        // We use the viewport rect to determine whether a position would go off-screen.
        this._viewportRect = this._getNarrowedViewportRect();
        this._originRect = this._origin.getBoundingClientRect();
        this._overlayRect = this._pane.getBoundingClientRect();
        var /** @type {?} */ originRect = this._originRect;
        var /** @type {?} */ overlayRect = this._overlayRect;
        var /** @type {?} */ viewportRect = this._viewportRect;
        // Positions where the overlay will fit with flexible dimensions.
        var /** @type {?} */ flexibleFits = [];
        // Fallback if none of the preferred positions fit within the viewport.
        var /** @type {?} */ fallback;
        // Go through each of the preferred positions looking for a good fit.
        // If a good fit is found, it will be applied immediately.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
            var /** @type {?} */ originPoint = this._getOriginPoint(originRect, pos);
            // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
            // overlay in this position. We use the top-left corner for calculations and later translate
            // this into an appropriate (top, left, bottom, right) style.
            var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            // Calculate how well the overlay would fit into the viewport with this point.
            var /** @type {?} */ overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
            // If the overlay, without any further work, fits into the viewport, use this position.
            if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;
                this._applyPosition(pos, originPoint);
                return;
            }
            // If the overlay has flexible dimensions, we can use this position
            // so long as there's enough space for the minimum dimensions.
            if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
            }
            // If the current preferred position does not fit on the screen, remember the position
            // if it has more visible area on-screen than we've seen and move onto the next preferred
            // position.
            if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = { overlayFit: overlayFit, overlayPoint: overlayPoint, originPoint: originPoint, position: pos, overlayRect: overlayRect };
            }
        }
        // If there are any positions where the overlay would fit with flexible dimensions, choose the
        // one that has the greatest area available modified by the position's weight
        if (flexibleFits.length) {
            var /** @type {?} */ bestFit = null;
            var /** @type {?} */ bestScore = -1;
            for (var _b = 0, flexibleFits_1 = flexibleFits; _b < flexibleFits_1.length; _b++) {
                var fit_1 = flexibleFits_1[_b];
                var /** @type {?} */ score = fit_1.boundingBoxRect.width * fit_1.boundingBoxRect.height * (fit_1.position.weight || 1);
                if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit_1;
                }
            }
            this._isPushed = false;
            this._applyPosition(/** @type {?} */ ((bestFit)).position, /** @type {?} */ ((bestFit)).origin);
            return;
        }
        // When none of the preferred positions fit within the viewport, take the position
        // that went off-screen the least and attempt to push it on-screen.
        if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;
            this._applyPosition(/** @type {?} */ ((fallback)).position, /** @type {?} */ ((fallback)).originPoint);
            return;
        }
        // All options for getting the overlay within the viewport have been exhausted, so go with the
        // position that went off-screen the least.
        this._applyPosition(/** @type {?} */ ((fallback)).position, /** @type {?} */ ((fallback)).originPoint);
    };
    /**
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.detach = /**
     * @return {?}
     */
    function () {
        this._resizeSubscription.unsubscribe();
    };
    /** Cleanup after the element gets destroyed. */
    /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.dispose = /**
     * Cleanup after the element gets destroyed.
     * @return {?}
     */
    function () {
        if (!this._isDisposed) {
            this.detach();
            this._boundingBox = null;
            this._positionChanges.complete();
            this._isDisposed = true;
        }
    };
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.reapplyLastPosition = /**
     * This re-aligns the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._origin.getBoundingClientRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            var /** @type {?} */ lastPosition = this._lastPosition || this._preferredPositions[0];
            var /** @type {?} */ originPoint = this._getOriginPoint(this._originRect, lastPosition);
            this._applyPosition(lastPosition, originPoint);
        }
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this.scrollables = scrollables;
    };
    /**
     * Adds new preferred positions.
     * @param positions List of positions options for this overlay.
     */
    /**
     * Adds new preferred positions.
     * @param {?} positions List of positions options for this overlay.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withPositions = /**
     * Adds new preferred positions.
     * @param {?} positions List of positions options for this overlay.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions;
        // If the last calculated position object isn't part of the positions anymore, clear
        // it in order to avoid it being picked up if the consumer tries to re-apply.
        if (positions.indexOf(/** @type {?} */ ((this._lastPosition))) === -1) {
            this._lastPosition = null;
        }
        this._validatePositions();
        return this;
    };
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param margin Required margin between the overlay and the viewport edge in pixels.
     */
    /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withViewportMargin = /**
     * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
     * @param {?} margin Required margin between the overlay and the viewport edge in pixels.
     * @return {?}
     */
    function (margin) {
        this._viewportMargin = margin;
        return this;
    };
    /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
    /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @param {?=} flexibleDimensions
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withFlexibleDimensions = /**
     * Sets whether the overlay's width and height can be constrained to fit within the viewport.
     * @param {?=} flexibleDimensions
     * @return {?}
     */
    function (flexibleDimensions) {
        if (flexibleDimensions === void 0) { flexibleDimensions = true; }
        this._hasFlexibleDimensions = flexibleDimensions;
        return this;
    };
    /** Sets whether the overlay can grow after the initial open via flexible width/height. */
    /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @param {?=} growAfterOpen
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withGrowAfterOpen = /**
     * Sets whether the overlay can grow after the initial open via flexible width/height.
     * @param {?=} growAfterOpen
     * @return {?}
     */
    function (growAfterOpen) {
        if (growAfterOpen === void 0) { growAfterOpen = true; }
        this._growAfterOpen = growAfterOpen;
        return this;
    };
    /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
    /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @param {?=} canPush
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withPush = /**
     * Sets whether the overlay can be pushed on-screen if none of the provided positions fit.
     * @param {?=} canPush
     * @return {?}
     */
    function (canPush) {
        if (canPush === void 0) { canPush = true; }
        this._canPush = canPush;
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?=} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        if (isLocked === void 0) { isLocked = true; }
        this._positionLocked = isLocked;
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._origin = origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? origin.nativeElement : origin;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param offset New offset in the X axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetX = /**
     * Sets the default offset for the overlay's connection point on the x-axis.
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._offsetX = offset;
        return this;
    };
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param offset New offset in the Y axis.
     */
    /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withDefaultOffsetY = /**
     * Sets the default offset for the overlay's connection point on the y-axis.
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     */
    /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype.withTransformOriginOn = /**
     * Configures that the position strategy should set a `transform-origin` on some elements
     * inside the overlay, depending on the current position that is being applied. This is
     * useful for the cases where the origin of an animation can change depending on the
     * alignment of the overlay.
     * @param {?} selector CSS selector that will be used to find the target
     *    elements onto which to set the transform origin.
     * @return {?}
     */
    function (selector) {
        this._transformOriginSelector = selector;
        return this;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOriginPoint = /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param {?} originRect
     * @param {?} pos
     * @return {?}
     */
    function (originRect, pos) {
        var /** @type {?} */ x;
        if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + (originRect.width / 2);
        }
        else {
            var /** @type {?} */ startX = this._isRtl() ? originRect.right : originRect.left;
            var /** @type {?} */ endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
        }
        var /** @type {?} */ y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayPoint = /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param {?} originPoint
     * @param {?} overlayRect
     * @param {?} pos
     * @return {?}
     */
    function (originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the
        // potential overlay position relative to the origin point.
        var /** @type {?} */ overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
        }
        var /** @type {?} */ overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        // The (x, y) coordinates of the overlay.
        return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY,
        };
    };
    /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOverlayFit = /**
     * Gets how well an overlay at the given point will fit within the viewport.
     * @param {?} point
     * @param {?} overlay
     * @param {?} viewport
     * @param {?} position
     * @return {?}
     */
    function (point, overlay, viewport, position) {
        var x = point.x, y = point.y;
        var /** @type {?} */ offsetX = this._getOffset(position, 'x');
        var /** @type {?} */ offsetY = this._getOffset(position, 'y');
        // Account for the offsets since they could push the overlay out of the viewport.
        if (offsetX) {
            x += offsetX;
        }
        if (offsetY) {
            y += offsetY;
        }
        // How much the overlay would overflow at this position, on each side.
        var /** @type {?} */ leftOverflow = 0 - x;
        var /** @type {?} */ rightOverflow = (x + overlay.width) - viewport.width;
        var /** @type {?} */ topOverflow = 0 - y;
        var /** @type {?} */ bottomOverflow = (y + overlay.height) - viewport.height;
        // Visible parts of the element on each axis.
        var /** @type {?} */ visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
        var /** @type {?} */ visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
        var /** @type {?} */ visibleArea = visibleWidth * visibleHeight;
        return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: (overlay.width * overlay.height) === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width,
        };
    };
    /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._canFitWithFlexibleDimensions = /**
     * Whether the overlay can fit within the viewport when it may resize either its width or height.
     * @param {?} fit How well the overlay fits in the viewport at some position.
     * @param {?} point The (x, y) coordinates of the overlat at some position.
     * @param {?} viewport The geometry of the viewport.
     * @return {?}
     */
    function (fit, point, viewport) {
        if (this._hasFlexibleDimensions) {
            var /** @type {?} */ availableHeight = viewport.bottom - point.y;
            var /** @type {?} */ availableWidth = viewport.right - point.x;
            var /** @type {?} */ minHeight = this._overlayRef.getConfig().minHeight;
            var /** @type {?} */ minWidth = this._overlayRef.getConfig().minWidth;
            var /** @type {?} */ verticalFit = fit.fitsInViewportVertically ||
                (minHeight != null && minHeight <= availableHeight);
            var /** @type {?} */ horizontalFit = fit.fitsInViewportHorizontally ||
                (minWidth != null && minWidth <= availableWidth);
            return verticalFit && horizontalFit;
        }
    };
    /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param {?} start The starting point from which the overlay is pushed.
     * @param {?} overlay The overlay dimensions.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    FlexibleConnectedPositionStrategy.prototype._pushOverlayOnScreen = /**
     * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
     * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
     * right and bottom).
     *
     * @param {?} start The starting point from which the overlay is pushed.
     * @param {?} overlay The overlay dimensions.
     * @return {?} The point at which to position the overlay after pushing. This is effectively a new
     *     originPoint.
     */
    function (start, overlay) {
        var /** @type {?} */ viewport = this._viewportRect;
        // Determine how much the overlay goes outside the viewport on each side, which we'll use to
        // decide which direction to push it.
        var /** @type {?} */ overflowRight = Math.max(start.x + overlay.width - viewport.right, 0);
        var /** @type {?} */ overflowBottom = Math.max(start.y + overlay.height - viewport.bottom, 0);
        var /** @type {?} */ overflowTop = Math.max(viewport.top - start.y, 0);
        var /** @type {?} */ overflowLeft = Math.max(viewport.left - start.x, 0);
        // Amount by which to push the overlay in each direction such that it remains on-screen.
        var /** @type {?} */ pushX, /** @type {?} */ pushY = 0;
        // If the overlay fits completely within the bounds of the viewport, push it from whichever
        // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
        // viewport and allow for the trailing end of the overlay to go out of bounds.
        if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
        }
        else {
            pushX = viewport.left - start.x;
        }
        if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
        }
        else {
            pushY = viewport.top - start.y;
        }
        return {
            x: start.x + pushX,
            y: start.y + pushY,
        };
    };
    /**
     * Applies a computed position to the overlay and emits a position change.
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._applyPosition = /**
     * Applies a computed position to the overlay and emits a position change.
     * @param {?} position The position preference
     * @param {?} originPoint The point on the origin element where the overlay is connected.
     * @return {?}
     */
    function (position, originPoint) {
        this._setTransformOrigin(position);
        this._setOverlayElementStyles(originPoint, position);
        this._setBoundingBoxStyles(originPoint, position);
        // Save the last connected position in case the position needs to be re-calculated.
        this._lastPosition = position;
        // Notify that the position has been changed along with its change properties.
        // We only emit if we've got any subscriptions, because the scroll visibility
        // calculcations can be somewhat expensive.
        if (this._positionChangeSubscriptions > 0) {
            var /** @type {?} */ scrollableViewProperties = this._getScrollVisibility();
            var /** @type {?} */ changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);
            this._positionChanges.next(changeEvent);
        }
        this._isInitialRender = false;
    };
    /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setTransformOrigin = /**
     * Sets the transform origin based on the configured selector and the passed-in position.
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (!this._transformOriginSelector) {
            return;
        }
        var /** @type {?} */ elements = /** @type {?} */ ((this._boundingBox)).querySelectorAll(this._transformOriginSelector);
        var /** @type {?} */ xOrigin;
        var /** @type {?} */ yOrigin = position.overlayY;
        if (position.overlayX === 'center') {
            xOrigin = 'center';
        }
        else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
        }
        else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
        }
        for (var /** @type {?} */ i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = xOrigin + " " + yOrigin;
        }
    };
    /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._calculateBoundingBoxRect = /**
     * Gets the position and size of the overlay's sizing container.
     *
     * This method does no measuring and applies no styles so that we can cheaply compute the
     * bounds for all positions and choose the best fit based on these results.
     * @param {?} origin
     * @param {?} position
     * @return {?}
     */
    function (origin, position) {
        var /** @type {?} */ viewport = this._viewportRect;
        var /** @type {?} */ isRtl = this._isRtl();
        var /** @type {?} */ height, /** @type {?} */ top, /** @type {?} */ bottom;
        if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.bottom - origin.y;
        }
        else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
        }
        else {
            // If neither top nor bottom, it means that the overlay
            // is vertically centered on the origin point.
            var /** @type {?} */ smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y, origin.y - viewport.left);
            var /** @type {?} */ previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;
            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - (previousHeight / 2);
            }
        }
        // The overlay is opening 'right-ward' (the content flows to the right).
        var /** @type {?} */ isBoundedByRightViewportEdge = (position.overlayX === 'start' && !isRtl) ||
            (position.overlayX === 'end' && isRtl);
        // The overlay is opening 'left-ward' (the content flows to the left).
        var /** @type {?} */ isBoundedByLeftViewportEdge = (position.overlayX === 'end' && !isRtl) ||
            (position.overlayX === 'start' && isRtl);
        var /** @type {?} */ width, /** @type {?} */ left, /** @type {?} */ right;
        if (isBoundedByLeftViewportEdge) {
            right = viewport.right - origin.x + this._viewportMargin;
            width = origin.x - viewport.left;
        }
        else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
        }
        else {
            // If neither start nor end, it means that the overlay
            // is horizontally centered on the origin point.
            var /** @type {?} */ smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x, origin.x - viewport.top);
            var /** @type {?} */ previousWidth = this._lastBoundingBoxSize.width;
            width = smallestDistanceToViewportEdge * 2;
            left = origin.x - smallestDistanceToViewportEdge;
            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - (previousWidth / 2);
            }
        }
        return { top: top, left: left, bottom: bottom, right: right, width: width, height: height };
    };
    /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setBoundingBoxStyles = /**
     * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
     * origin's connection point and stetches to the bounds of the viewport.
     *
     * @param {?} origin The point on the origin element where the overlay is connected.
     * @param {?} position The position preference
     * @return {?}
     */
    function (origin, position) {
        var /** @type {?} */ boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
        // It's weird if the overlay *grows* while scrolling, so we take the last size into account
        // when applying a new size.
        if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
        }
        var /** @type {?} */ styles = /** @type {?} */ ({});
        if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = '';
            styles.width = styles.height = '100%';
        }
        else {
            var /** @type {?} */ maxHeight = this._overlayRef.getConfig().maxHeight;
            var /** @type {?} */ maxWidth = this._overlayRef.getConfig().maxWidth;
            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(boundingBoxRect.right);
            // Push the pane content towards the proper direction.
            if (position.overlayX === 'center') {
                styles.alignItems = 'center';
            }
            else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }
            if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
            }
            else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }
            if (maxHeight) {
                styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(maxHeight);
            }
            if (maxWidth) {
                styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(maxWidth);
            }
        }
        this._lastBoundingBoxSize = boundingBoxRect;
        extendStyles(/** @type {?} */ ((this._boundingBox)).style, styles);
    };
    /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetBoundingBoxStyles = /**
     * Resets the styles for the bounding box so that a new positioning can be computed.
     * @return {?}
     */
    function () {
        extendStyles(/** @type {?} */ ((this._boundingBox)).style, /** @type {?} */ ({
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: '',
        }));
    };
    /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._resetOverlayElementStyles = /**
     * Resets the styles for the overlay pane so that a new positioning can be computed.
     * @return {?}
     */
    function () {
        extendStyles(this._pane.style, /** @type {?} */ ({
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
        }));
    };
    /**
     * Sets positioning styles to the overlay element.
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._setOverlayElementStyles = /**
     * Sets positioning styles to the overlay element.
     * @param {?} originPoint
     * @param {?} position
     * @return {?}
     */
    function (originPoint, position) {
        var /** @type {?} */ styles = /** @type {?} */ ({});
        if (this._hasExactPosition()) {
            extendStyles(styles, this._getExactOverlayY(position, originPoint));
            extendStyles(styles, this._getExactOverlayX(position, originPoint));
        }
        else {
            styles.position = 'static';
        }
        // Use a transform to apply the offsets. We do this because the `center` positions rely on
        // being in the normal flex flow and setting a `top` / `left` at all will completely throw
        // off the position. We also can't use margins, because they won't have an effect in some
        // cases where the element doesn't have anything to "push off of". Finally, this works
        // better both with flexible and non-flexible positioning.
        var /** @type {?} */ transformString = '';
        var /** @type {?} */ offsetX = this._getOffset(position, 'x');
        var /** @type {?} */ offsetY = this._getOffset(position, 'y');
        if (offsetX) {
            transformString += "translateX(" + offsetX + "px) ";
        }
        if (offsetY) {
            transformString += "translateY(" + offsetY + "px)";
        }
        styles.transform = transformString.trim();
        // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
        // we need these values to both be set to "100%" for the automatic flexible sizing to work.
        // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxHeight) {
            styles.maxHeight = '';
        }
        if (this._hasFlexibleDimensions && this._overlayRef.getConfig().maxWidth) {
            styles.maxWidth = '';
        }
        extendStyles(this._pane.style, styles);
    };
    /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayY = /**
     * Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    function (position, originPoint) {
        // Reset any existing styles. This is necessary in case the
        // preferred position has changed since the last `apply`.
        var /** @type {?} */ styles = /** @type {?} */ ({ top: null, bottom: null });
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect);
        }
        // @breaking-change 7.0.0 Currently the `_overlayContainer` is optional in order to avoid a
        // breaking change. The null check here can be removed once the `_overlayContainer` becomes
        // a required parameter.
        var /** @type {?} */ virtualKeyboardOffset = this._overlayContainer ?
            this._overlayContainer.getContainerElement().getBoundingClientRect().top : 0;
        // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
        // autocomplete), mobile browsers will shift everything in order to put the input in the middle
        // of the screen and to make space for the virtual keyboard. We need to account for this offset,
        // otherwise our positioning will be thrown off.
        overlayPoint.y -= virtualKeyboardOffset;
        // We want to set either `top` or `bottom` based on whether the overlay wants to appear
        // above or below the origin and the direction in which the element will expand.
        if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            var /** @type {?} */ documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = documentHeight - (overlayPoint.y + this._overlayRect.height) + "px";
        }
        else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(overlayPoint.y);
        }
        return styles;
    };
    /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getExactOverlayX = /**
     * Gets the exact left/right for the overlay when not using flexible sizing or when pushing.
     * @param {?} position
     * @param {?} originPoint
     * @return {?}
     */
    function (position, originPoint) {
        // Reset any existing styles. This is necessary in case the preferred position has
        // changed since the last `apply`.
        var /** @type {?} */ styles = /** @type {?} */ ({ left: null, right: null });
        var /** @type {?} */ overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
        if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect);
        }
        // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
        // or "after" the origin, which determines the direction in which the element will expand.
        // For the horizontal axis, the meaning of "before" and "after" change based on whether the
        // page is in RTL or LTR.
        var /** @type {?} */ horizontalStyleProperty;
        if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
        }
        else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
        }
        // When we're setting `right`, we adjust the x position such that it is the distance
        // from the right edge of the viewport rather than the left edge.
        if (horizontalStyleProperty === 'right') {
            var /** @type {?} */ documentWidth = this._document.documentElement.clientWidth;
            styles.right = documentWidth - (overlayPoint.x + this._overlayRect.width) + "px";
        }
        else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceCssPixelValue"])(overlayPoint.x);
        }
        return styles;
    };
    /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getScrollVisibility = /**
     * Gets the view properties of the trigger and overlay, including whether they are clipped
     * or completely outside the view of any of the strategy's scrollables.
     * @return {?}
     */
    function () {
        // Note: needs fresh rects since the position could've changed.
        var /** @type {?} */ originBounds = this._origin.getBoundingClientRect();
        var /** @type {?} */ overlayBounds = this._pane.getBoundingClientRect();
        // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
        // every time, we should be able to use the scrollTop of the containers if the size of those
        // containers hasn't changed.
        var /** @type {?} */ scrollContainerBounds = this.scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
        });
        return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds),
        };
    };
    /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._subtractOverflows = /**
     * Subtracts the amount that an element is overflowing on an axis from it's length.
     * @param {?} length
     * @param {...?} overflows
     * @return {?}
     */
    function (length) {
        var overflows = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            overflows[_i - 1] = arguments[_i];
        }
        return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
        }, length);
    };
    /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getNarrowedViewportRect = /**
     * Narrows the given viewport rect by the current _viewportMargin.
     * @return {?}
     */
    function () {
        // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
        // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
        // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
        // and `innerHeight` that do. This is necessary, because the overlay container uses
        // 100% `width` and `height` which don't include the scrollbar either.
        var /** @type {?} */ width = this._document.documentElement.clientWidth;
        var /** @type {?} */ height = this._document.documentElement.clientHeight;
        var /** @type {?} */ scrollPosition = this._viewportRuler.getViewportScrollPosition();
        return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - (2 * this._viewportMargin),
            height: height - (2 * this._viewportMargin),
        };
    };
    /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._isRtl = /**
     * Whether the we're dealing with an RTL context
     * @return {?}
     */
    function () {
        return this._overlayRef.getDirection() === 'rtl';
    };
    /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._hasExactPosition = /**
     * Determines whether the overlay uses exact or flexible positioning.
     * @return {?}
     */
    function () {
        return !this._hasFlexibleDimensions || this._isPushed;
    };
    /**
     * Retrieves the offset of a position along the x or y axis.
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._getOffset = /**
     * Retrieves the offset of a position along the x or y axis.
     * @param {?} position
     * @param {?} axis
     * @return {?}
     */
    function (position, axis) {
        if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
        }
        return position.offsetY == null ? this._offsetY : position.offsetY;
    };
    /**
     * Validates that the current position match the expected values.
     * @return {?}
     */
    FlexibleConnectedPositionStrategy.prototype._validatePositions = /**
     * Validates that the current position match the expected values.
     * @return {?}
     */
    function () {
        if (!this._preferredPositions.length) {
            throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
        }
        // TODO(crisbeto): remove these once Angular's template type
        // checking is advanced enough to catch these cases.
        this._preferredPositions.forEach(function (pair) {
            validateHorizontalPosition('originX', pair.originX);
            validateVerticalPosition('originY', pair.originY);
            validateHorizontalPosition('overlayX', pair.overlayX);
            validateVerticalPosition('overlayY', pair.overlayY);
        });
    };
    return FlexibleConnectedPositionStrategy;
}());
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var /** @type {?} */ key in source) {
        if (source.hasOwnProperty(key)) {
            dest[key] = source[key];
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 7.0.0
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative to some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
 * \@breaking-change 7.0.0
 */
ConnectedPositionStrategy = /** @class */ (function () {
    function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, 
    // @breaking-change 7.0.0 `platform` parameter to be made required.
    // @breaking-change 7.0.0 `platform` parameter to be made required.
    platform) {
        /**
         * Ordered list of preferred positions, from most to least desirable.
         */
        this._preferredPositions = [];
        // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.
        this._positionStrategy =
            new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform)
                .withFlexibleDimensions(false)
                .withPush(false)
                .withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: /**
         * Whether the we're dealing with an RTL context
         * @return {?}
         */
        function () {
            return this._overlayRef.getDirection() === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: /**
         * Emits an event when the connection point changes.
         * @return {?}
         */
        function () {
            return this._positionStrategy.positionChanges;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        /** Ordered list of preferred positions, from most to least desirable. */
        get: /**
         * Ordered list of preferred positions, from most to least desirable.
         * @return {?}
         */
        function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /** Attach this position strategy to an overlay. */
    /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.attach = /**
     * Attach this position strategy to an overlay.
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        this._overlayRef = overlayRef;
        this._positionStrategy.attach(overlayRef);
        if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
        }
    };
    /** Disposes all resources used by the position strategy. */
    /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.dispose = /**
     * Disposes all resources used by the position strategy.
     * @return {?}
     */
    function () {
        this._positionStrategy.dispose();
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.detach = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.detach();
    };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * @docs-private
     */
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.apply = /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * \@docs-private
     * @return {?}
     */
    function () {
        this._positionStrategy.apply();
    };
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     */
    /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.recalculateLastPosition = /**
     * Re-positions the overlay element with the trigger in its last calculated position,
     * even if a position higher in the "preferred positions" list would now fit. This
     * allows one to re-align the panel without changing the orientation of the panel.
     * @return {?}
     */
    function () {
        this._positionStrategy.reapplyLastPosition();
    };
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     */
    /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withScrollableContainers = /**
     * Sets the list of Scrollable containers that host the origin element so that
     * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
     * Scrollable must be an ancestor element of the strategy's origin element.
     * @param {?} scrollables
     * @return {?}
     */
    function (scrollables) {
        this._positionStrategy.withScrollableContainers(scrollables);
    };
    /**
     * Adds a new preferred fallback position.
     * @param originPos
     * @param overlayPos
     */
    /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withFallbackPosition = /**
     * Adds a new preferred fallback position.
     * @param {?} originPos
     * @param {?} overlayPos
     * @param {?=} offsetX
     * @param {?=} offsetY
     * @return {?}
     */
    function (originPos, overlayPos, offsetX, offsetY) {
        var /** @type {?} */ position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);
        this._preferredPositions.push(position);
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param dir New layout direction.
     */
    /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withDirection = /**
     * Sets the layout direction so the overlay's position can be adjusted to match.
     * @param {?} dir New layout direction.
     * @return {?}
     */
    function (dir) {
        // Since the direction might be declared before the strategy is attached,
        // we save the value in a temporary property and we'll transfer it to the
        // overlay ref on attachment.
        if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
        }
        else {
            this._direction = dir;
        }
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param offset New offset in the X axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetX = /**
     * Sets an offset for the overlay's connection point on the x-axis
     * @param {?} offset New offset in the X axis.
     * @return {?}
     */
    function (offset) {
        this._positionStrategy.withDefaultOffsetX(offset);
        return this;
    };
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param  offset New offset in the Y axis.
     */
    /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withOffsetY = /**
     * Sets an offset for the overlay's connection point on the y-axis
     * @param {?} offset New offset in the Y axis.
     * @return {?}
     */
    function (offset) {
        this._positionStrategy.withDefaultOffsetY(offset);
        return this;
    };
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param isLocked Whether the overlay should locked in.
     */
    /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withLockedPosition = /**
     * Sets whether the overlay's position should be locked in after it is positioned
     * initially. When an overlay is locked in, it won't attempt to reposition itself
     * when the position is re-applied (e.g. when the user scrolls away).
     * @param {?} isLocked Whether the overlay should locked in.
     * @return {?}
     */
    function (isLocked) {
        this._positionStrategy.withLockedPosition(isLocked);
        return this;
    };
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param positions Position pairs to be set on the strategy.
     */
    /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.withPositions = /**
     * Overwrites the current set of positions with an array of new ones.
     * @param {?} positions Position pairs to be set on the strategy.
     * @return {?}
     */
    function (positions) {
        this._preferredPositions = positions.slice();
        this._positionStrategy.withPositions(this._preferredPositions);
        return this;
    };
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param origin Reference to the new origin element.
     */
    /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    ConnectedPositionStrategy.prototype.setOrigin = /**
     * Sets the origin element, relative to which to position the overlay.
     * @param {?} origin Reference to the new origin element.
     * @return {?}
     */
    function (origin) {
        this._positionStrategy.setOrigin(origin);
        return this;
    };
    return ConnectedPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var  /**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
GlobalPositionStrategy = /** @class */ (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    GlobalPositionStrategy.prototype.attach = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ config = overlayRef.getConfig();
        this._overlayRef = overlayRef;
        if (this._width && !config.width) {
            overlayRef.updateSize({ width: this._width });
        }
        if (this._height && !config.height) {
            overlayRef.updateSize({ height: this._height });
        }
        overlayRef.hostElement.classList.add('cdk-global-overlay-wrapper');
    };
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param value New top offset.
     */
    /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.top = /**
     * Sets the top position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New top offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param value New left offset.
     */
    /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.left = /**
     * Sets the left position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New left offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param value New bottom offset.
     */
    /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.bottom = /**
     * Sets the bottom position of the overlay. Clears any previously set vertical position.
     * @param {?=} value New bottom offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param value New right offset.
     */
    /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.right = /**
     * Sets the right position of the overlay. Clears any previously set horizontal position.
     * @param {?=} value New right offset.
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /**
     * Sets the overlay width and clears any previously set width.
     * @param value New width for the overlay
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * @breaking-change 7.0.0
     */
    /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.width = /**
     * Sets the overlay width and clears any previously set width.
     * @deprecated Pass the `width` through the `OverlayConfig`.
     * \@breaking-change 7.0.0
     * @param {?=} value New width for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ width: value });
        }
        else {
            this._width = value;
        }
        return this;
    };
    /**
     * Sets the overlay height and clears any previously set height.
     * @param value New height for the overlay
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * @breaking-change 7.0.0
     */
    /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    GlobalPositionStrategy.prototype.height = /**
     * Sets the overlay height and clears any previously set height.
     * @deprecated Pass the `height` through the `OverlayConfig`.
     * \@breaking-change 7.0.0
     * @param {?=} value New height for the overlay
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        if (this._overlayRef) {
            this._overlayRef.updateSize({ height: value });
        }
        else {
            this._height = value;
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param offset Overlay offset from the horizontal center.
     */
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerHorizontally = /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     *
     * @param {?=} offset Overlay offset from the horizontal center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param offset Overlay offset from the vertical center.
     */
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    GlobalPositionStrategy.prototype.centerVertically = /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     *
     * @param {?=} offset Overlay offset from the vertical center.
     * @return {?}
     */
    function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * @docs-private
     */
    /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.apply = /**
     * Apply the position to the element.
     * \@docs-private
     * @return {?}
     */
    function () {
        // Since the overlay ref applies the strategy asynchronously, it could
        // have been disposed before it ends up being applied. If that is the
        // case, we shouldn't do anything.
        if (!this._overlayRef.hasAttached()) {
            return;
        }
        var /** @type {?} */ styles = this._overlayRef.overlayElement.style;
        var /** @type {?} */ parentStyles = this._overlayRef.hostElement.style;
        var /** @type {?} */ config = this._overlayRef.getConfig();
        styles.position = this._cssPosition;
        styles.marginLeft = config.width === '100%' ? '0' : this._leftOffset;
        styles.marginTop = config.height === '100%' ? '0' : this._topOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        if (config.width === '100%') {
            parentStyles.justifyContent = 'flex-start';
        }
        else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
        }
        else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
            }
            else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
            }
        }
        else {
            parentStyles.justifyContent = this._justifyContent;
        }
        parentStyles.alignItems = config.height === '100%' ? 'flex-start' : this._alignItems;
    };
    /**
     * Noop implemented as a part of the PositionStrategy interface.
     * @docs-private
     */
    /**
     * Noop implemented as a part of the PositionStrategy interface.
     * \@docs-private
     * @return {?}
     */
    GlobalPositionStrategy.prototype.dispose = /**
     * Noop implemented as a part of the PositionStrategy interface.
     * \@docs-private
     * @return {?}
     */
    function () { };
    return GlobalPositionStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Builder for overlay position strategy.
 */
var OverlayPositionBuilder = /** @class */ (function () {
    function OverlayPositionBuilder(_viewportRuler, _document, 
    // @breaking-change 7.0.0 `_platform` and `_overlayContainer` parameters to be made required.
    _platform, _overlayContainer) {
        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
    }
    /**
     * Creates a global position strategy.
     */
    /**
     * Creates a global position strategy.
     * @return {?}
     */
    OverlayPositionBuilder.prototype.global = /**
     * Creates a global position strategy.
     * @return {?}
     */
    function () {
        return new GlobalPositionStrategy();
    };
    /**
     * Creates a relative position strategy.
     * @param elementRef
     * @param originPos
     * @param overlayPos
     * @deprecated Use `flexibleConnectedTo` instead.
     * @breaking-change 7.0.0
     */
    /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 7.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    OverlayPositionBuilder.prototype.connectedTo = /**
     * Creates a relative position strategy.
     * @deprecated Use `flexibleConnectedTo` instead.
     * \@breaking-change 7.0.0
     * @param {?} elementRef
     * @param {?} originPos
     * @param {?} overlayPos
     * @return {?}
     */
    function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document);
    };
    /**
     * Creates a flexible position strategy.
     * @param elementRef
     */
    /**
     * Creates a flexible position strategy.
     * @param {?} elementRef
     * @return {?}
     */
    OverlayPositionBuilder.prototype.flexibleConnectedTo = /**
     * Creates a flexible position strategy.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        return new FlexibleConnectedPositionStrategy(elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
    };
    OverlayPositionBuilder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    OverlayPositionBuilder.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
        { type: OverlayContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    /** @nocollapse */ OverlayPositionBuilder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function OverlayPositionBuilder_Factory() { return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(OverlayContainer, 8)); }, token: OverlayPositionBuilder, providedIn: "root" });
    return OverlayPositionBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Next overlay unique ID.
 */
var /** @type {?} */ nextUniqueId = 0;
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality) {
        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
    }
    /**
     * Creates an overlay.
     * @param config Configuration applied to the overlay.
     * @returns Reference to the created overlay.
     */
    /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    Overlay.prototype.create = /**
     * Creates an overlay.
     * @param {?=} config Configuration applied to the overlay.
     * @return {?} Reference to the created overlay.
     */
    function (config) {
        var /** @type {?} */ host = this._createHostElement();
        var /** @type {?} */ pane = this._createPaneElement(host);
        var /** @type {?} */ portalOutlet = this._createPortalOutlet(pane);
        var /** @type {?} */ overlayConfig = new OverlayConfig(config);
        overlayConfig.direction = overlayConfig.direction || this._directionality.value;
        return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document);
    };
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @returns An overlay position builder.
     */
    /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    Overlay.prototype.position = /**
     * Gets a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     * @return {?} An overlay position builder.
     */
    function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} host
     * @return {?} Newly-created pane element
     */
    function (host) {
        var /** @type {?} */ pane = this._document.createElement('div');
        pane.id = "cdk-overlay-" + nextUniqueId++;
        pane.classList.add('cdk-overlay-pane');
        host.appendChild(pane);
        return pane;
    };
    /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @return {?} Newly-create host element.
     */
    Overlay.prototype._createHostElement = /**
     * Creates the host element that wraps around an overlay
     * and can be used for advanced positioning.
     * @return {?} Newly-create host element.
     */
    function () {
        var /** @type {?} */ host = this._document.createElement('div');
        this._overlayContainer.getContainerElement().appendChild(host);
        return host;
    };
    /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    Overlay.prototype._createPortalOutlet = /**
     * Create a DomPortalOutlet into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal outlet.
     * @return {?} A portal outlet for the given DOM element.
     */
    function (pane) {
        // We have to resolve the ApplicationRef later in order to allow people
        // to use overlay-based providers during app initialization.
        if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
        }
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    Overlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: ScrollStrategyOptions, },
        { type: OverlayContainer, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
        { type: OverlayPositionBuilder, },
        { type: OverlayKeyboardDispatcher, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], },
    ]; };
    return Overlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default set of positions for the overlay. Follows the behavior of a dropdown.
 */
var /** @type {?} */ defaultPositionList = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
    }
];
/**
 * Injection token that determines the scroll handling while the connected overlay is open.
 */
var /** @type {?} */ CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var CdkOverlayOrigin = /** @class */ (function () {
    function CdkOverlayOrigin(elementRef) {
        this.elementRef = elementRef;
    }
    CdkOverlayOrigin.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
                    exportAs: 'cdkOverlayOrigin',
                },] },
    ];
    /** @nocollapse */
    CdkOverlayOrigin.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    return CdkOverlayOrigin;
}());
/**
 * Directive to facilitate declarative creation of an
 * Overlay using a FlexibleConnectedPositionStrategy.
 */
var CdkConnectedOverlay = /** @class */ (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, _scrollStrategy, _dir) {
        this._overlay = _overlay;
        this._scrollStrategy = _scrollStrategy;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"].EMPTY;
        /**
         * Margin between the overlay and the viewport edges.
         */
        this.viewportMargin = 0;
        /**
         * Strategy to be used when handling scroll events while the overlay is open.
         */
        this.scrollStrategy = this._scrollStrategy();
        /**
         * Whether the overlay is open.
         */
        this.open = false;
        /**
         * Event emitted when the backdrop is clicked.
         */
        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the position has changed.
         */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been attached.
         */
        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the overlay has been detached.
         */
        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when there are keyboard events that are targeted at the overlay.
         */
        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["TemplatePortal"](templateRef, viewContainerRef);
    }
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetX", {
        get: /**
         * The offset in pixels for the overlay connection point on the x-axis
         * @return {?}
         */
        function () { return this._offsetX; },
        set: /**
         * @param {?} offsetX
         * @return {?}
         */
        function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._setPositions(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "offsetY", {
        get: /**
         * The offset in pixels for the overlay connection point on the y-axis
         * @return {?}
         */
        function () { return this._offsetY; },
        set: /**
         * @param {?} offsetY
         * @return {?}
         */
        function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._setPositions(this._position);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "hasBackdrop", {
        get: /**
         * Whether or not the overlay should attach a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "lockPosition", {
        get: /**
         * Whether or not the overlay should be locked when scrolling.
         * @return {?}
         */
        function () { return this._lockPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "flexibleDiemsions", {
        get: /**
         * Whether the overlay's width and height can be constrained to fit within the viewport.
         * @return {?}
         */
        function () { return this._flexibleDimensions; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "growAfterOpen", {
        get: /**
         * Whether the overlay can grow after the initial open when flexible positioning is turned on.
         * @return {?}
         */
        function () { return this._growAfterOpen; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "push", {
        get: /**
         * Whether the overlay can be pushed on-screen if none of the provided positions fit.
         * @return {?}
         */
        function () { return this._push; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "overlayRef", {
        /** The associated overlay reference. */
        get: /**
         * The associated overlay reference.
         * @return {?}
         */
        function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkConnectedOverlay.prototype, "dir", {
        /** The element's layout direction. */
        get: /**
         * The element's layout direction.
         * @return {?}
         */
        function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyOverlay();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkConnectedOverlay.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._position) {
            if (changes['positions']) {
                this._position.withPositions(this.positions);
            }
            if (changes['lockPosition']) {
                this._position.withLockedPosition(this.lockPosition);
            }
            if (changes['origin']) {
                this._position.setOrigin(this.origin.elementRef);
                if (this.open) {
                    this._position.apply();
                }
            }
        }
        if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
        }
    };
    /**
     * Creates an overlay
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createOverlay = /**
     * Creates an overlay
     * @return {?}
     */
    function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    CdkConnectedOverlay.prototype._buildConfig = /**
     * Builds the overlay config based on the directive's inputs
     * @return {?}
     */
    function () {
        var /** @type {?} */ positionStrategy = this._position = this._createPositionStrategy();
        var /** @type {?} */ overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
        });
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        return overlayConfig;
    };
    /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    CdkConnectedOverlay.prototype._createPositionStrategy = /**
     * Returns the position strategy of the overlay to be set on the overlay config
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ strategy = this._overlay.position()
            .flexibleConnectedTo(this.origin.elementRef)
            .withFlexibleDimensions(this.flexibleDiemsions)
            .withPush(this.push)
            .withGrowAfterOpen(this.growAfterOpen)
            .withViewportMargin(this.viewportMargin)
            .withLockedPosition(this.lockPosition);
        this._setPositions(strategy);
        strategy.positionChanges.subscribe(function (p) { return _this.positionChange.emit(p); });
        return strategy;
    };
    /**
     * Sets the primary and fallback positions of a positions strategy,
     * based on the current directive inputs.
     * @param {?} positionStrategy
     * @return {?}
     */
    CdkConnectedOverlay.prototype._setPositions = /**
     * Sets the primary and fallback positions of a positions strategy,
     * based on the current directive inputs.
     * @param {?} positionStrategy
     * @return {?}
     */
    function (positionStrategy) {
        var _this = this;
        var /** @type {?} */ positions = this.positions.map(function (pos) {
            return ({
                originX: pos.originX,
                originY: pos.originY,
                overlayX: pos.overlayX,
                overlayY: pos.overlayY,
                offsetX: pos.offsetX || _this.offsetX,
                offsetY: pos.offsetY || _this.offsetY
            });
        });
        positionStrategy.withPositions(positions);
    };
    /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._attachOverlay = /**
     * Attaches the overlay and subscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay(); /** @type {?} */
            ((this._overlayRef)).keydownEvents().subscribe(function (event) {
                _this.overlayKeydown.next(event);
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]) {
                    _this._detachOverlay();
                }
            });
        }
        else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight,
            });
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this.backdropClick.emit(event);
            });
        }
    };
    /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    CdkConnectedOverlay.prototype._detachOverlay = /**
     * Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        this._backdropSubscription.unsubscribe();
    };
    /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    CdkConnectedOverlay.prototype._destroyOverlay = /**
     * Destroys the overlay created by this directive.
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this._backdropSubscription.unsubscribe();
    };
    CdkConnectedOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
                    exportAs: 'cdkConnectedOverlay'
                },] },
    ];
    /** @nocollapse */
    CdkConnectedOverlay.ctorParameters = function () { return [
        { type: Overlay, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,] },] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    CdkConnectedOverlay.propDecorators = {
        "origin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOrigin',] },],
        "positions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayPositions',] },],
        "offsetX": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOffsetX',] },],
        "offsetY": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOffsetY',] },],
        "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayWidth',] },],
        "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayHeight',] },],
        "minWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayMinWidth',] },],
        "minHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayMinHeight',] },],
        "backdropClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayBackdropClass',] },],
        "viewportMargin": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayViewportMargin',] },],
        "scrollStrategy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayScrollStrategy',] },],
        "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayOpen',] },],
        "hasBackdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayHasBackdrop',] },],
        "lockPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayLockPosition',] },],
        "flexibleDiemsions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayFlexibleDimensions',] },],
        "growAfterOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayGrowAfterOpen',] },],
        "push": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cdkConnectedOverlayPush',] },],
        "backdropClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "positionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "attach": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "detach": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "overlayKeydown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CdkConnectedOverlay;
}());
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 */
var /** @type {?} */ CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
    provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatchModule"]],
                    exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollDispatchModule"]],
                    declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
                    providers: [
                        Overlay,
                        CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
                    ],
                },] },
    ];
    return OverlayModule;
}());
/**
 * @deprecated Use `OverlayModule` instead.
 * \@breaking-change 7.0.0
 */
var /** @type {?} */ OVERLAY_PROVIDERS = [
    Overlay,
    OverlayPositionBuilder,
    OVERLAY_KEYBOARD_DISPATCHER_PROVIDER,
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["VIEWPORT_RULER_PROVIDER"],
    OVERLAY_CONTAINER_PROVIDER,
    CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Alternative to OverlayContainer that supports correct displaying of overlay elements in
 * Fullscreen mode
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
 *
 * Should be provided in the root component.
 */
var FullscreenOverlayContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(FullscreenOverlayContainer, _super);
    function FullscreenOverlayContainer(_document) {
        return _super.call(this, _document) || this;
    }
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
        }
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._createContainer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype._createContainer.call(this);
        this._adjustParentForFullscreenChange();
        this._addFullscreenChangeListener(function () { return _this._adjustParentForFullscreenChange(); });
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._adjustParentForFullscreenChange = /**
     * @return {?}
     */
    function () {
        if (!this._containerElement) {
            return;
        }
        var /** @type {?} */ fullscreenElement = this.getFullscreenElement();
        var /** @type {?} */ parent = fullscreenElement || this._document.body;
        parent.appendChild(this._containerElement);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._addFullscreenChangeListener = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        var /** @type {?} */ eventName = this._getEventName();
        if (eventName) {
            if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
            }
            this._document.addEventListener(eventName, fn);
            this._fullScreenListener = fn;
        }
    };
    /**
     * @return {?}
     */
    FullscreenOverlayContainer.prototype._getEventName = /**
     * @return {?}
     */
    function () {
        if (!this._fullScreenEventName) {
            if (this._document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
            }
            else if (this._document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
            }
            else if ((/** @type {?} */ (this._document)).mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
            }
            else if ((/** @type {?} */ (this._document)).msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
            }
        }
        return this._fullScreenEventName;
    };
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     */
    /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    FullscreenOverlayContainer.prototype.getFullscreenElement = /**
     * When the page is put into fullscreen mode, a specific element is specified.
     * Only that element and its children are visible when in fullscreen mode.
     * @return {?}
     */
    function () {
        return this._document.fullscreenElement ||
            this._document.webkitFullscreenElement ||
            (/** @type {?} */ (this._document)).mozFullScreenElement ||
            (/** @type {?} */ (this._document)).msFullscreenElement ||
            null;
    };
    FullscreenOverlayContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    FullscreenOverlayContainer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    return FullscreenOverlayContainer;
}(OverlayContainer));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=overlay.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, supportsPassiveEventListeners, supportsScrollBehavior, getSupportedInputTypes, PlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var /** @type {?} */ hasV8BreakIterator = (typeof Intl !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change v7.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!((/** @type {?} */ (window)).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(/** @type {?} */ (window)).MSStream;
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 */
var /** @type {?} */ supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', /** @type {?} */ ((null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(document && document.documentElement && document.documentElement.style &&
        'scrollBehavior' in document.documentElement.style);
}
/**
 * Cached result Set of input types support by the current browser.
 */
var /** @type {?} */ supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 */
var /** @type {?} */ candidateInputTypes = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var /** @type {?} */ featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/portal.es5.js":
/*!******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/portal.es5.js ***!
  \******************************************************/
/*! exports provided: DomPortalHost, PortalHostDirective, TemplatePortalDirective, BasePortalHost, Portal, ComponentPortal, TemplatePortal, BasePortalOutlet, DomPortalOutlet, CdkPortal, CdkPortalOutlet, PortalModule, PortalInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalHost", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portal", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePortal", function() { return TemplatePortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function() { return BasePortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function() { return DomPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortal", function() { return CdkPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function() { return CdkPortalOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalInjector", function() { return PortalInjector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Throws an exception when attempting to attach a null portal to a host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalError() {
    throw Error('Must provide a portal to attach');
}
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * \@docs-private
 * @return {?}
 */
function throwPortalAlreadyAttachedError() {
    throw Error('Host already has a portal attached');
}
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * \@docs-private
 * @return {?}
 */
function throwPortalOutletAlreadyDisposedError() {
    throw Error('This PortalOutlet has already been disposed');
}
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * \@docs-private
 * @return {?}
 */
function throwUnknownPortalTypeError() {
    throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' +
        'a ComponentPortal or a TemplatePortal.');
}
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * \@docs-private
 * @return {?}
 */
function throwNullPortalOutletError() {
    throw Error('Attempting to attach a portal to a null PortalOutlet');
}
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * \@docs-private
 * @return {?}
 */
function throwNoPortalAttachedError() {
    throw Error('Attempting to detach a portal that is not attached to a host');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
var  /**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalOutlet`.
 * @abstract
 * @template T
 */
Portal = /** @class */ (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.attach = /**
     * Attach this portal to a host.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        if (host == null) {
            throwNullPortalOutletError();
        }
        if (host.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return /** @type {?} */ (host.attach(this));
    };
    /** Detach this portal from its host */
    /**
     * Detach this portal from its host
     * @return {?}
     */
    Portal.prototype.detach = /**
     * Detach this portal from its host
     * @return {?}
     */
    function () {
        var /** @type {?} */ host = this._attachedHost;
        if (host == null) {
            throwNoPortalAttachedError();
        }
        else {
            this._attachedHost = null;
            host.detach();
        }
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     */
    /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    Portal.prototype.setAttachedHost = /**
     * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
     * the PortalOutlet when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
var  /**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
ComponentPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
var  /**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 * @template C
 */
TemplatePortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef, context) {
        var _this = _super.call(this) || this;
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        _this.context = context;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: /**
         * @return {?}
         */
        function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     */
    /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    TemplatePortal.prototype.attach = /**
     * Attach the the portal to the provided `PortalOutlet`.
     * When a context is provided it will override the `context` property of the `TemplatePortal`
     * instance.
     * @param {?} host
     * @param {?=} context
     * @return {?}
     */
    function (host, context) {
        if (context === void 0) { context = this.context; }
        this.context = context;
        return _super.prototype.attach.call(this, host);
    };
    /**
     * @return {?}
     */
    TemplatePortal.prototype.detach = /**
     * @return {?}
     */
    function () {
        this.context = undefined;
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
var  /**
 * Partial implementation of PortalOutlet that handles attaching
 * ComponentPortal and TemplatePortal.
 * @abstract
 */
BasePortalOutlet = /** @class */ (function () {
    function BasePortalOutlet() {
        /**
         * Whether this host has already been permanently disposed.
         */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.hasAttached = /**
     * Whether this host has an attached portal.
     * @return {?}
     */
    function () {
        return !!this._attachedPortal;
    };
    /** Attaches a portal. */
    /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    BasePortalOutlet.prototype.attach = /**
     * Attaches a portal.
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        if (!portal) {
            throwNullPortalError();
        }
        if (this.hasAttached()) {
            throwPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throwPortalOutletAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throwUnknownPortalTypeError();
    };
    /** Detaches a previously attached portal. */
    /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    BasePortalOutlet.prototype.detach = /**
     * Detaches a previously attached portal.
     * @return {?}
     */
    function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
            this._attachedPortal = null;
        }
        this._invokeDisposeFn();
    };
    /** Permanently dispose of this portal host. */
    /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    BasePortalOutlet.prototype.dispose = /**
     * Permanently dispose of this portal host.
     * @return {?}
     */
    function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._invokeDisposeFn();
        this._isDisposed = true;
    };
    /** @docs-private */
    /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    BasePortalOutlet.prototype.setDisposeFn = /**
     * \@docs-private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._disposeFn = fn;
    };
    /**
     * @return {?}
     */
    BasePortalOutlet.prototype._invokeDisposeFn = /**
     * @return {?}
     */
    function () {
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    return BasePortalOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
var  /**
 * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 */
DomPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalOutlet, _super);
    function DomPortalOutlet(outletElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this.outletElement = outletElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    DomPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @return {?} Reference to the created component.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the view to the application.
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this.outletElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    DomPortalOutlet.prototype.attachTemplatePortal = /**
     * Attaches a template portal to the DOM as an embedded view.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        var /** @type {?} */ viewContainer = portal.viewContainerRef;
        var /** @type {?} */ viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context);
        viewRef.detectChanges();
        // The method `createEmbeddedView` will add the view as a child of the viewContainer.
        // But for the DomPortalOutlet the view can be added everywhere in the DOM
        // (e.g Overlay Container) To move the view to the specified host element. We just
        // re-append the existing root nodes.
        viewRef.rootNodes.forEach(function (rootNode) { return _this.outletElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var /** @type {?} */ index = viewContainer.indexOf(viewRef);
            if (index !== -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return viewRef;
    };
    /**
     * Clears out a portal from the DOM.
     */
    /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    DomPortalOutlet.prototype.dispose = /**
     * Clears out a portal from the DOM.
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
        }
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalOutlet.prototype._getComponentRootNode = /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    function (componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalOutlet;
}(BasePortalOutlet));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
 * the directive instance itself can be attached to a host, enabling declarative use of portals.
 */
var CdkPortal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortal, _super);
    function CdkPortal(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    CdkPortal.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-portal], [cdkPortal], [portal]',
                    exportAs: 'cdkPortal',
                },] },
    ];
    /** @nocollapse */
    CdkPortal.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    return CdkPortal;
}(TemplatePortal));
/**
 * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
 * directly attached to it, enabling declarative use.
 *
 * Usage:
 * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
 */
var CdkPortalOutlet = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CdkPortalOutlet, _super);
    function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        /**
         * Whether the portal component is initialized.
         */
        _this._isInitialized = false;
        _this.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(CdkPortalOutlet.prototype, "portal", {
        /** Portal associated with the Portal outlet. */
        get: /**
         * Portal associated with the Portal outlet.
         * @return {?}
         */
        function () {
            return this._attachedPortal;
        },
        set: /**
         * @param {?} portal
         * @return {?}
         */
        function (portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
                return;
            }
            if (this.hasAttached()) {
                _super.prototype.detach.call(this);
            }
            if (portal) {
                _super.prototype.attach.call(this, portal);
            }
            this._attachedPortal = portal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkPortalOutlet.prototype, "attachedRef", {
        /** Component or view reference that is attached to the portal. */
        get: /**
         * Component or view reference that is attached to the portal.
         * @return {?}
         */
        function () {
            return this._attachedRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    CdkPortalOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.dispose.call(this);
        this._attachedPortal = null;
        this._attachedRef = null;
    };
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @param portal Portal to be attached to the portal outlet.
     * @returns Reference to the created component.
     */
    /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    CdkPortalOutlet.prototype.attachComponentPortal = /**
     * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
     *
     * @template T
     * @param {?} portal Portal to be attached to the portal outlet.
     * @return {?} Reference to the created component.
     */
    function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalOutlet.
        var /** @type {?} */ viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        _super.prototype.setDisposeFn.call(this, function () { return ref.destroy(); });
        this._attachedPortal = portal;
        this._attachedRef = ref;
        this.attached.emit(ref);
        return ref;
    };
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @param portal Portal to be attached.
     * @returns Reference to the created embedded view.
     */
    /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    CdkPortalOutlet.prototype.attachTemplatePortal = /**
     * Attach the given TemplatePortal to this PortlHost as an embedded View.
     * @template C
     * @param {?} portal Portal to be attached.
     * @return {?} Reference to the created embedded view.
     */
    function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        var /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);
        _super.prototype.setDisposeFn.call(this, function () { return _this._viewContainerRef.clear(); });
        this._attachedPortal = portal;
        this._attachedRef = viewRef;
        this.attached.emit(viewRef);
        return viewRef;
    };
    CdkPortalOutlet.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkPortalOutlet], [cdkPortalHost], [portalHost]',
                    exportAs: 'cdkPortalOutlet, cdkPortalHost',
                    inputs: ['portal: cdkPortalOutlet']
                },] },
    ];
    /** @nocollapse */
    CdkPortalOutlet.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    ]; };
    CdkPortalOutlet.propDecorators = {
        "attached": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CdkPortalOutlet;
}(BasePortalOutlet));
var PortalModule = /** @class */ (function () {
    function PortalModule() {
    }
    PortalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [CdkPortal, CdkPortalOutlet],
                    declarations: [CdkPortal, CdkPortalOutlet],
                },] },
    ];
    return PortalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
var  /**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * \@docs-private
 */
PortalInjector = /** @class */ (function () {
    function PortalInjector(_parentInjector, _customTokens) {
        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    PortalInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        var /** @type {?} */ value = this._customTokens.get(token);
        if (typeof value !== 'undefined') {
            return value;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return PortalInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=portal.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER_FACTORY, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER_FACTORY, VIEWPORT_RULER_PROVIDER, ScrollDispatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 */
var /** @type {?} */ DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        var /** @type {?} */ scrollSubscription = scrollable.elementScrolled()
            .subscribe(function () { return _this._scrolled.next(scrollable); });
        this.scrollContainers.set(scrollable, scrollSubscription);
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        var /** @type {?} */ scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        return this._platform.isBrowser ? rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            var /** @type {?} */ subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            };
        }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach(function (_, container) { return _this.deregister(container); });
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        var /** @type {?} */ ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
        }));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        var /** @type {?} */ scrollingContainers = [];
        this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        });
        return scrollingContainers;
    };
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        var /** @type {?} */ element = elementRef.nativeElement;
        var /** @type {?} */ scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = /** @type {?} */ ((element)).parentElement);
        return false;
    };
    /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () { return _this._scrolled.next(); });
        });
    };
    /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"], },
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(_elementRef, _scroll, _ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._scroll = _scroll;
        this._ngZone = _ngZone;
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._scrollListener = function (event) { return _this._elementScrolled.next(event); };
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this.getElementRef().nativeElement.addEventListener('scroll', _this._scrollListener);
        });
        this._scroll.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._scroll.deregister(this);
        if (this._scrollListener) {
            this.getElementRef().nativeElement.removeEventListener('scroll', this._scrollListener);
        }
        this._elementScrolled.complete();
    };
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled.asObservable();
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this._elementRef;
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: ScrollDispatcher, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 */
var /** @type {?} */ DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        this._change = _platform.isBrowser ? ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange'));
        }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        this._invalidateCache = this.change().subscribe(function () { return _this._updateViewportSize(); });
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        var /** @type {?} */ output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = /** @type {?} */ ((null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var /** @type {?} */ scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var /** @type {?} */ documentRect = document.documentElement.getBoundingClientRect();
        var /** @type {?} */ top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            document.documentElement.scrollTop || 0;
        var /** @type {?} */ left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            document.documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /**
     * Updates the cached viewport size.
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 7.0.0
 */
var /** @type {?} */ VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                    exports: [CdkScrollable],
                    declarations: [CdkScrollable],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js":
/*!***************************************************************!*\
  !*** ./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js ***!
  \***************************************************************/
/*! exports provided: ContextMenuModule, ContextMenuComponent, ContextMenuService, ɵa, ɵb, ɵc, ɵd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ContextMenuAttachDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ContextMenuItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CONTEXT_MENU_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ContextMenuContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuItemDirective = /** @class */ (function () {
    function ContextMenuItemDirective(template, elementRef) {
        this.template = template;
        this.elementRef = elementRef;
        this.divider = false;
        this.enabled = true;
        this.passive = false;
        this.visible = true;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = false;
    }
    Object.defineProperty(ContextMenuItemDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.passive ||
                this.divider ||
                !this.evaluateIfFunction(this.enabled, this.currentItem);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    ContextMenuItemDirective.prototype.evaluateIfFunction = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        if (value instanceof Function) {
            return value(item);
        }
        return value;
    };
    /**
     * @return {?}
     */
    ContextMenuItemDirective.prototype.setActiveStyles = /**
     * @return {?}
     */
    function () {
        this.isActive = true;
    };
    /**
     * @return {?}
     */
    ContextMenuItemDirective.prototype.setInactiveStyles = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
    };
    /**
     * @param {?} item
     * @param {?=} $event
     * @return {?}
     */
    ContextMenuItemDirective.prototype.triggerExecute = /**
     * @param {?} item
     * @param {?=} $event
     * @return {?}
     */
    function (item, $event) {
        if (!this.evaluateIfFunction(this.enabled, item)) {
            return;
        }
        this.execute.emit({ event: $event, item: item });
    };
    ContextMenuItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    /* tslint:disable:directive-selector-type */
                    selector: '[contextMenuItem]',
                },] },
    ];
    /** @nocollapse */
    ContextMenuItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ContextMenuItemDirective.propDecorators = {
        subMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        divider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        passive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ContextMenuItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ CONTEXT_MENU_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CONTEXT_MENU_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ARROW_LEFT_KEYCODE = 37;
var ContextMenuContentComponent = /** @class */ (function () {
    function ContextMenuContentComponent(changeDetector, elementRef, options, renderer) {
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.renderer = renderer;
        this.menuItems = [];
        this.isLeaf = false;
        this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeLeafMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeAllMenus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
    }
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuItems.forEach(function (menuItem) {
            menuItem.currentItem = _this.item;
            _this.subscription.add(menuItem.execute.subscribe(function (event) { return _this.execute.emit(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, event, { menuItem: menuItem })); }));
        });
        var /** @type {?} */ queryList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        queryList.reset(this.menuItems);
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["ActiveDescendantKeyManager"](queryList).withWrap();
    };
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoFocus) {
            setTimeout(function () { return _this.focus(); });
        }
        this.overlay.updatePosition();
    };
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    ContextMenuContentComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            this.menuElement.nativeElement.focus();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.stopEvent = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    ContextMenuContentComponent.prototype.isMenuItemEnabled = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.enabled);
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    ContextMenuContentComponent.prototype.isMenuItemVisible = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        return this.evaluateIfFunction(menuItem && menuItem.visible);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ContextMenuContentComponent.prototype.evaluateIfFunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    ContextMenuContentComponent.prototype.isDisabled = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        return link.enabled && !link.enabled(this.item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onKeyEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this._keyManager.onKeydown(event);
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.keyboardOpenSubMenu = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        var /** @type {?} */ menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onOpenSubMenu(menuItem);
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.keyboardMenuItemSelect = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        var /** @type {?} */ menuItem = this.menuItems[this._keyManager.activeItemIndex];
        if (menuItem) {
            this.onMenuItemSelect(menuItem, event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onCloseLeafMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isLeaf) {
            return;
        }
        this.cancelEvent(event);
        this.closeLeafMenu.emit({ exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE, event: event });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.closeMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.type === 'click' && event.button === 2) {
            return;
        }
        this.closeAllMenus.emit({ event: event });
    };
    /**
     * @param {?} menuItem
     * @param {?=} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onOpenSubMenu = /**
     * @param {?} menuItem
     * @param {?=} event
     * @return {?}
     */
    function (menuItem, event) {
        var /** @type {?} */ anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];
        var /** @type {?} */ anchorElement = anchorElementRef && anchorElementRef.nativeElement;
        this.openSubMenu.emit({
            anchorElement: anchorElement,
            contextMenu: menuItem.subMenu,
            event: event,
            item: this.item,
            parentContextMenu: this,
        });
    };
    /**
     * @param {?} menuItem
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.onMenuItemSelect = /**
     * @param {?} menuItem
     * @param {?} event
     * @return {?}
     */
    function (menuItem, event) {
        event.preventDefault();
        event.stopPropagation();
        this.onOpenSubMenu(menuItem, event);
        if (!menuItem.subMenu) {
            menuItem.triggerExecute(this.item, event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuContentComponent.prototype.cancelEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!event) {
            return;
        }
        var /** @type {?} */ target = event.target;
        if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
    };
    ContextMenuContentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'context-menu-content',
                    styles: [
                        ".passive {\n       display: block;\n       padding: 3px 20px;\n       clear: both;\n       font-weight: normal;\n       line-height: @line-height-base;\n       white-space: nowrap;\n     }\n    .hasSubMenu:before {\n      content: \"\u25B6\";\n      float: right;\n    }",
                    ],
                    template: "<div class=\"dropdown open show ngx-contextmenu\" [ngClass]=\"menuClass\" tabindex=\"0\">\n      <ul #menu class=\"dropdown-menu show\" style=\"position: static; float: none;\" tabindex=\"0\">\n        <li #li *ngFor=\"let menuItem of menuItems; let i = index\" [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n            [class.divider]=\"menuItem.divider\" [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [attr.role]=\"menuItem.divider ? 'separator' : undefined\">\n          <a *ngIf=\"!menuItem.divider && !menuItem.passive\" href [class.dropdown-item]=\"useBootstrap4\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\" [class.hasSubMenu]=\"!!menuItem.subMenu\"\n            (click)=\"onMenuItemSelect(menuItem, $event)\" (mouseenter)=\"onOpenSubMenu(menuItem, $event)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </a>\n\n          <span (click)=\"stopEvent($event)\" (contextmenu)=\"stopEvent($event)\" class=\"passive\"\n                *ngIf=\"!menuItem.divider && menuItem.passive\" [class.dropdown-item]=\"useBootstrap4\"\n                [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\">\n            <ng-template [ngTemplateOutlet]=\"menuItem.template\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
                },] },
    ];
    /** @nocollapse */
    ContextMenuContentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"] }
    ]; };
    ContextMenuContentComponent.propDecorators = {
        menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        parentContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        execute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        openSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closeLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        closeAllMenus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['menu',] }],
        menuItemElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ['li',] }],
        onKeyEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowDown', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowUp', ['$event'],] }],
        keyboardOpenSubMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowRight', ['$event'],] }],
        keyboardMenuItemSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Enter', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Space', ['$event'],] }],
        onCloseLeafMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.Escape', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.ArrowLeft', ['$event'],] }],
        closeMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:contextmenu', ['$event'],] }]
    };
    return ContextMenuContentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuService = /** @class */ (function () {
    function ContextMenuService(overlay, scrollStrategy) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this.isDestroyingLeafMenu = false;
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.triggerClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.close = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.overlays = [];
        this.fakeElement = {
            getBoundingClientRect: function () { return ({
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
            }); }
        };
    }
    /**
     * @param {?} context
     * @return {?}
     */
    ContextMenuService.prototype.openContextMenu = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        var anchorElement = context.anchorElement, event = context.event, parentContextMenu = context.parentContextMenu;
        if (!parentContextMenu) {
            var /** @type {?} */ mouseEvent_1 = /** @type {?} */ (event);
            this.fakeElement.getBoundingClientRect = function () { return ({
                bottom: mouseEvent_1.clientY,
                height: 0,
                left: mouseEvent_1.clientX,
                right: mouseEvent_1.clientX,
                top: mouseEvent_1.clientY,
                width: 0,
            }); };
            this.closeAllContextMenus({ eventType: 'cancel', event: event });
            var /** @type {?} */ positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](anchorElement || this.fakeElement), { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' })
                .withFallbackPosition({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' });
            this.overlays = [this.overlay.create({
                    positionStrategy: positionStrategy,
                    panelClass: 'ngx-contextmenu',
                    scrollStrategy: this.scrollStrategy.close(),
                })];
            this.attachContextMenu(this.overlays[0], context);
        }
        else {
            var /** @type {?} */ positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"](event ? event.target : anchorElement), { originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' })
                .withFallbackPosition({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' })
                .withFallbackPosition({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' })
                .withFallbackPosition({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' });
            var /** @type {?} */ newOverlay = this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close(),
            });
            this.destroySubMenus(parentContextMenu);
            this.overlays = this.overlays.concat(newOverlay);
            this.attachContextMenu(newOverlay, context);
        }
    };
    /**
     * @param {?} overlay
     * @param {?} context
     * @return {?}
     */
    ContextMenuService.prototype.attachContextMenu = /**
     * @param {?} overlay
     * @param {?} context
     * @return {?}
     */
    function (overlay, context) {
        var _this = this;
        var event = context.event, item = context.item, menuItems = context.menuItems, menuClass = context.menuClass;
        var /** @type {?} */ contextMenuContent = overlay.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["ComponentPortal"](ContextMenuContentComponent));
        contextMenuContent.instance.event = event;
        contextMenuContent.instance.item = item;
        contextMenuContent.instance.menuItems = menuItems;
        contextMenuContent.instance.overlay = overlay;
        contextMenuContent.instance.isLeaf = true;
        contextMenuContent.instance.menuClass = menuClass;
        (/** @type {?} */ (overlay)).contextMenu = contextMenuContent.instance;
        var /** @type {?} */ subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        subscriptions.add(contextMenuContent.instance.execute.asObservable()
            .subscribe(function (executeEvent) { return _this.closeAllContextMenus(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ eventType: 'execute' }, executeEvent)); }));
        subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable()
            .subscribe(function (closeAllEvent) { return _this.closeAllContextMenus(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({ eventType: 'cancel' }, closeAllEvent)); }));
        subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable()
            .subscribe(function (closeLeafMenuEvent) { return _this.destroyLeafMenu(closeLeafMenuEvent); }));
        subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable()
            .subscribe(function (subMenuEvent) {
            _this.destroySubMenus(contextMenuContent.instance);
            if (!subMenuEvent.contextMenu) {
                contextMenuContent.instance.isLeaf = true;
                return;
            }
            contextMenuContent.instance.isLeaf = false;
            _this.show.next(subMenuEvent);
        }));
        contextMenuContent.onDestroy(function () {
            menuItems.forEach(function (menuItem) { return menuItem.isActive = false; });
            subscriptions.unsubscribe();
        });
        contextMenuContent.changeDetectorRef.detectChanges();
    };
    /**
     * @param {?} closeEvent
     * @return {?}
     */
    ContextMenuService.prototype.closeAllContextMenus = /**
     * @param {?} closeEvent
     * @return {?}
     */
    function (closeEvent) {
        if (this.overlays) {
            this.close.next(closeEvent);
            this.overlays.forEach(function (overlay, index) {
                overlay.detach();
                overlay.dispose();
            });
        }
        this.overlays = [];
    };
    /**
     * @return {?}
     */
    ContextMenuService.prototype.getLastAttachedOverlay = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ overlay = this.overlays[this.overlays.length - 1];
        while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
            overlay.detach();
            overlay.dispose();
            this.overlays = this.overlays.slice(0, -1);
            overlay = this.overlays[this.overlays.length - 1];
        }
        return overlay;
    };
    /**
     * @param {?=} __0
     * @return {?}
     */
    ContextMenuService.prototype.destroyLeafMenu = /**
     * @param {?=} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, exceptRootMenu = _b.exceptRootMenu, event = _b.event;
        if (this.isDestroyingLeafMenu) {
            return;
        }
        this.isDestroyingLeafMenu = true;
        setTimeout(function () {
            var /** @type {?} */ overlay = _this.getLastAttachedOverlay();
            if (_this.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
            }
            if (!exceptRootMenu && _this.overlays.length > 0 && overlay) {
                _this.close.next({ eventType: 'cancel', event: event });
                overlay.detach();
                overlay.dispose();
            }
            var /** @type {?} */ newLeaf = _this.getLastAttachedOverlay();
            if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
            }
            _this.isDestroyingLeafMenu = false;
        });
    };
    /**
     * @param {?} contextMenu
     * @return {?}
     */
    ContextMenuService.prototype.destroySubMenus = /**
     * @param {?} contextMenu
     * @return {?}
     */
    function (contextMenu) {
        var /** @type {?} */ overlay = contextMenu.overlay;
        var /** @type {?} */ index = this.overlays.indexOf(overlay);
        this.overlays.slice(index + 1).forEach(function (subMenuOverlay) {
            subMenuOverlay.detach();
            subMenuOverlay.dispose();
        });
    };
    /**
     * @param {?} contextMenuContent
     * @return {?}
     */
    ContextMenuService.prototype.isLeafMenu = /**
     * @param {?} contextMenuContent
     * @return {?}
     */
    function (contextMenuContent) {
        var /** @type {?} */ overlay = this.getLastAttachedOverlay();
        return contextMenuContent.overlay === overlay;
    };
    ContextMenuService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ContextMenuService.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ScrollStrategyOptions"] }
    ]; };
    return ContextMenuService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuComponent = /** @class */ (function () {
    function ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options) {
        var _this = this;
        this._contextMenuService = _contextMenuService;
        this.changeDetector = changeDetector;
        this.elementRef = elementRef;
        this.options = options;
        this.menuClass = "";
        this.autoFocus = false;
        this.useBootstrap4 = false;
        this.disabled = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleMenuItems = [];
        this.links = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
        }
        this.subscription.add(_contextMenuService.show.subscribe(function (menuEvent) {
            _this.onMenuEvent(menuEvent);
        }));
    }
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} menuEvent
     * @return {?}
     */
    ContextMenuComponent.prototype.onMenuEvent = /**
     * @param {?} menuEvent
     * @return {?}
     */
    function (menuEvent) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var contextMenu = menuEvent.contextMenu, event = menuEvent.event, item = menuEvent.item;
        if (contextMenu && contextMenu !== this) {
            return;
        }
        this.event = event;
        this.item = item;
        this.setVisibleMenuItems();
        this._contextMenuService.openContextMenu(Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__assign"])({}, menuEvent, { menuItems: this.visibleMenuItems, menuClass: this.menuClass }));
        this._contextMenuService.close.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (closeEvent) { return _this.close.emit(closeEvent); });
        this.open.next(menuEvent);
    };
    /**
     * @param {?} menuItem
     * @return {?}
     */
    ContextMenuComponent.prototype.isMenuItemVisible = /**
     * @param {?} menuItem
     * @return {?}
     */
    function (menuItem) {
        return this.evaluateIfFunction(menuItem.visible);
    };
    /**
     * @return {?}
     */
    ContextMenuComponent.prototype.setVisibleMenuItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.visibleMenuItems = this.menuItems.filter(function (menuItem) { return _this.isMenuItemVisible(menuItem); });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ContextMenuComponent.prototype.evaluateIfFunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof Function) {
            return value(this.item);
        }
        return value;
    };
    ContextMenuComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    selector: 'context-menu',
                    styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "],
                    template: " ",
                },] },
    ];
    /** @nocollapse */
    ContextMenuComponent.ctorParameters = function () { return [
        { type: ContextMenuService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CONTEXT_MENU_OPTIONS,] }] }
    ]; };
    ContextMenuComponent.propDecorators = {
        menuClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        useBootstrap4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        menuItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [ContextMenuItemDirective,] }],
        menuElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['menu',] }]
    };
    return ContextMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuAttachDirective = /** @class */ (function () {
    function ContextMenuAttachDirective(contextMenuService) {
        this.contextMenuService = contextMenuService;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ContextMenuAttachDirective.prototype.onContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.contextMenu.disabled) {
            this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: event,
                item: this.contextMenuSubject,
            });
            event.preventDefault();
            event.stopPropagation();
        }
    };
    ContextMenuAttachDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[contextMenu]',
                },] },
    ];
    /** @nocollapse */
    ContextMenuAttachDirective.ctorParameters = function () { return [
        { type: ContextMenuService }
    ]; };
    ContextMenuAttachDirective.propDecorators = {
        contextMenuSubject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        contextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
    };
    return ContextMenuAttachDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    ContextMenuModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: ContextMenuModule,
            providers: [
                ContextMenuService,
                {
                    provide: CONTEXT_MENU_OPTIONS,
                    useValue: options,
                },
            ],
        };
    };
    ContextMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        ContextMenuAttachDirective,
                        ContextMenuComponent,
                        ContextMenuContentComponent,
                        ContextMenuItemDirective,
                    ],
                    entryComponents: [
                        ContextMenuContentComponent,
                    ],
                    exports: [
                        ContextMenuAttachDirective,
                        ContextMenuComponent,
                        ContextMenuItemDirective,
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    ],
                },] },
    ];
    return ContextMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbnRleHRtZW51LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51Lml0ZW0uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51LnRva2Vucy50cyIsIm5nOi8vbmd4LWNvbnRleHRtZW51L2xpYi9jb250ZXh0TWVudUNvbnRlbnQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51LnNlcnZpY2UudHMiLCJuZzovL25neC1jb250ZXh0bWVudS9saWIvY29udGV4dE1lbnUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtY29udGV4dG1lbnUvbGliL2NvbnRleHRNZW51LmF0dGFjaC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1jb250ZXh0bWVudS9saWIvbmd4LWNvbnRleHRtZW51LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhpZ2hsaWdodGFibGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3Rvci10eXBlICovXG4gIHNlbGVjdG9yOiAnW2NvbnRleHRNZW51SXRlbV0nLFxuICAvKiB0c2xpbnQ6ZW5hYmxlOmRpcmVjdGl2ZS1zZWxlY3Rvci10eXBlICovXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIEhpZ2hsaWdodGFibGUge1xuICBASW5wdXQoKSBwdWJsaWMgc3ViTWVudTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgZGl2aWRlciA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbiB8ICgoaXRlbTogYW55KSA9PiBib29sZWFuKSA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXNzaXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuIHwgKChpdGVtOiBhbnkpID0+IGJvb2xlYW4pID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBleGVjdXRlOiBFdmVudEVtaXR0ZXI8eyBldmVudDogRXZlbnQsIGl0ZW06IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgY3VycmVudEl0ZW06IGFueTtcbiAgcHVibGljIGlzQWN0aXZlID0gZmFsc2U7XG4gIHB1YmxpYyBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFzc2l2ZSB8fFxuICAgICAgdGhpcy5kaXZpZGVyIHx8XG4gICAgICAhdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24odGhpcy5lbmFibGVkLCB0aGlzLmN1cnJlbnRJdGVtKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBpdGVtOiBhbnkgfT4sIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cblxuICBwdWJsaWMgZXZhbHVhdGVJZkZ1bmN0aW9uKHZhbHVlOiBhbnksIGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHJldHVybiB2YWx1ZShpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBwdWJsaWMgc2V0SW5hY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJFeGVjdXRlKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKHRoaXMuZW5hYmxlZCwgaXRlbSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5leGVjdXRlLmVtaXQoeyBldmVudDogJGV2ZW50LCBpdGVtIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9NRU5VX09QVElPTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NPTlRFWFRfTUVOVV9PUFRJT05TJyk7XG4iLCJpbXBvcnQgeyBDbG9zZUxlYWZNZW51RXZlbnQsIElDb250ZXh0TWVudUNsaWNrRXZlbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbmplY3QsXG4gICAgSW5wdXQsXG4gICAgT3B0aW9uYWwsXG4gICAgUmVuZGVyZXIsXG4gICAgVmlld0NoaWxkLFxuICAgIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0TWVudS5pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ29udGV4dE1lbnVPcHRpb25zIH0gZnJvbSAnLi9jb250ZXh0TWVudS5vcHRpb25zJztcbmltcG9ydCB7IENPTlRFWFRfTUVOVV9PUFRJT05TIH0gZnJvbSAnLi9jb250ZXh0TWVudS50b2tlbnMnO1xuaW1wb3J0IHsgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtDb25maWcge1xuICBjbGljazogKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgZW5hYmxlZD86IChpdGVtOiBhbnkpID0+IGJvb2xlYW47XG4gIGh0bWw6IChpdGVtOiBhbnkpID0+IHN0cmluZztcbn1cblxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFID0gMzc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRleHQtbWVudS1jb250ZW50JyxcbiAgc3R5bGVzOiBbXG4gICAgYC5wYXNzaXZlIHtcbiAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICBwYWRkaW5nOiAzcHggMjBweDtcbiAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgIGxpbmUtaGVpZ2h0OiBAbGluZS1oZWlnaHQtYmFzZTtcbiAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICB9XG4gICAgLmhhc1N1Yk1lbnU6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXFx1MjVCNlwiO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1gLFxuICBdLFxuICB0ZW1wbGF0ZTpcbiAgYDxkaXYgY2xhc3M9XCJkcm9wZG93biBvcGVuIHNob3cgbmd4LWNvbnRleHRtZW51XCIgW25nQ2xhc3NdPVwibWVudUNsYXNzXCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8dWwgI21lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3dcIiBzdHlsZT1cInBvc2l0aW9uOiBzdGF0aWM7IGZsb2F0OiBub25lO1wiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgICA8bGkgI2xpICpuZ0Zvcj1cImxldCBtZW51SXRlbSBvZiBtZW51SXRlbXM7IGxldCBpID0gaW5kZXhcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiXG4gICAgICAgICAgICBbY2xhc3MuZGl2aWRlcl09XCJtZW51SXRlbS5kaXZpZGVyXCIgW2NsYXNzLmRyb3Bkb3duLWRpdmlkZXJdPVwidXNlQm9vdHN0cmFwNCAmJiBtZW51SXRlbS5kaXZpZGVyXCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWVudUl0ZW0uaXNBY3RpdmUgJiYgaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCJcbiAgICAgICAgICAgIFthdHRyLnJvbGVdPVwibWVudUl0ZW0uZGl2aWRlciA/ICdzZXBhcmF0b3InIDogdW5kZWZpbmVkXCI+XG4gICAgICAgICAgPGEgKm5nSWY9XCIhbWVudUl0ZW0uZGl2aWRlciAmJiAhbWVudUl0ZW0ucGFzc2l2ZVwiIGhyZWYgW2NsYXNzLmRyb3Bkb3duLWl0ZW1dPVwidXNlQm9vdHN0cmFwNFwiXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1lbnVJdGVtLmlzQWN0aXZlICYmIGlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiXG4gICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidXNlQm9vdHN0cmFwNCAmJiAhaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW0pXCIgW2NsYXNzLmhhc1N1Yk1lbnVdPVwiISFtZW51SXRlbS5zdWJNZW51XCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbk1lbnVJdGVtU2VsZWN0KG1lbnVJdGVtLCAkZXZlbnQpXCIgKG1vdXNlZW50ZXIpPVwib25PcGVuU3ViTWVudShtZW51SXRlbSwgJGV2ZW50KVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm1lbnVJdGVtLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJzdG9wRXZlbnQoJGV2ZW50KVwiIChjb250ZXh0bWVudSk9XCJzdG9wRXZlbnQoJGV2ZW50KVwiIGNsYXNzPVwicGFzc2l2ZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhbWVudUl0ZW0uZGl2aWRlciAmJiBtZW51SXRlbS5wYXNzaXZlXCIgW2NsYXNzLmRyb3Bkb3duLWl0ZW1dPVwidXNlQm9vdHN0cmFwNFwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInVzZUJvb3RzdHJhcDQgJiYgIWlzTWVudUl0ZW1FbmFibGVkKG1lbnVJdGVtKVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm1lbnVJdGVtLnRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIG1lbnVJdGVtczogQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlW10gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIGl0ZW06IGFueTtcbiAgQElucHV0KCkgcHVibGljIGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgQElucHV0KCkgcHVibGljIHBhcmVudENvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbnRlbnRDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHB1YmxpYyBtZW51Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIG92ZXJsYXk6IE92ZXJsYXlSZWY7XG4gIEBJbnB1dCgpIHB1YmxpYyBpc0xlYWYgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBleGVjdXRlOiBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQsIGl0ZW06IGFueSwgbWVudUl0ZW06IENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSB9PlxuICAgID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW5TdWJNZW51OiBFdmVudEVtaXR0ZXI8SUNvbnRleHRNZW51Q2xpY2tFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VMZWFmTWVudTogRXZlbnRFbWl0dGVyPENsb3NlTGVhZk1lbnVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgY2xvc2VBbGxNZW51czogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBwdWJsaWMgbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGRyZW4oJ2xpJykgcHVibGljIG1lbnVJdGVtRWxlbWVudHM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBwdWJsaWMgYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHB1YmxpYyB1c2VCb290c3RyYXA0ID0gZmFsc2U7XG4gIHByaXZhdGUgX2tleU1hbmFnZXI6IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPENvbnRleHRNZW51SXRlbURpcmVjdGl2ZT47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09OVEVYVF9NRU5VX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogSUNvbnRleHRNZW51T3B0aW9ucyxcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyLFxuICApIHtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy5hdXRvRm9jdXMgPSBvcHRpb25zLmF1dG9Gb2N1cztcbiAgICAgIHRoaXMudXNlQm9vdHN0cmFwNCA9IG9wdGlvbnMudXNlQm9vdHN0cmFwNDtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVJdGVtcy5mb3JFYWNoKG1lbnVJdGVtID0+IHtcbiAgICAgIG1lbnVJdGVtLmN1cnJlbnRJdGVtID0gdGhpcy5pdGVtO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKG1lbnVJdGVtLmV4ZWN1dGUuc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuZXhlY3V0ZS5lbWl0KHsgLi4uZXZlbnQsIG1lbnVJdGVtIH0pKSk7XG4gICAgfSk7XG4gICAgY29uc3QgcXVlcnlMaXN0ID0gbmV3IFF1ZXJ5TGlzdDxDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG4gICAgcXVlcnlMaXN0LnJlc2V0KHRoaXMubWVudUl0ZW1zKTtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPENvbnRleHRNZW51SXRlbURpcmVjdGl2ZT4ocXVlcnlMaXN0KS53aXRoV3JhcCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCkpO1xuICAgIH1cbiAgICB0aGlzLm92ZXJsYXkudXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMubWVudUVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3BFdmVudCgkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgaXNNZW51SXRlbUVuYWJsZWQobWVudUl0ZW06IENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2YWx1YXRlSWZGdW5jdGlvbihtZW51SXRlbSAmJiBtZW51SXRlbS5lbmFibGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBpc01lbnVJdGVtVmlzaWJsZShtZW51SXRlbTogQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVJZkZ1bmN0aW9uKG1lbnVJdGVtICYmIG1lbnVJdGVtLnZpc2libGUpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0Rpc2FibGVkKGxpbms6IElMaW5rQ29uZmlnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGxpbmsuZW5hYmxlZCAmJiAhbGluay5lbmFibGVkKHRoaXMuaXRlbSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd0Rvd24nLCBbJyRldmVudCddKVxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5BcnJvd1VwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uS2V5RXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2tleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5Ym9hcmRPcGVuU3ViTWVudShldmVudD86IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIGNvbnN0IG1lbnVJdGVtID0gdGhpcy5tZW51SXRlbXNbdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXhdO1xuICAgIGlmIChtZW51SXRlbSkge1xuICAgICAgdGhpcy5vbk9wZW5TdWJNZW51KG1lbnVJdGVtKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bi5FbnRlcicsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLlNwYWNlJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleWJvYXJkTWVudUl0ZW1TZWxlY3QoZXZlbnQ/OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNhbmNlbEV2ZW50KGV2ZW50KTtcbiAgICBjb25zdCBtZW51SXRlbSA9IHRoaXMubWVudUl0ZW1zW3RoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbUluZGV4XTtcbiAgICBpZiAobWVudUl0ZW0pIHtcbiAgICAgIHRoaXMub25NZW51SXRlbVNlbGVjdChtZW51SXRlbSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkVzY2FwZScsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duLkFycm93TGVmdCcsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsb3NlTGVhZk1lbnUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNMZWFmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuY2xvc2VMZWFmTWVudS5lbWl0KHsgZXhjZXB0Um9vdE1lbnU6IGV2ZW50LmtleUNvZGUgPT09IEFSUk9XX0xFRlRfS0VZQ09ERSwgZXZlbnQgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgcHVibGljIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsb3NlQWxsTWVudXMuZW1pdCh7ZXZlbnR9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9wZW5TdWJNZW51KG1lbnVJdGVtOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUsIGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBhbmNob3JFbGVtZW50UmVmID0gdGhpcy5tZW51SXRlbUVsZW1lbnRzLnRvQXJyYXkoKVt0aGlzLl9rZXlNYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleF07XG4gICAgY29uc3QgYW5jaG9yRWxlbWVudCA9IGFuY2hvckVsZW1lbnRSZWYgJiYgYW5jaG9yRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMub3BlblN1Yk1lbnUuZW1pdCh7XG4gICAgICBhbmNob3JFbGVtZW50LFxuICAgICAgY29udGV4dE1lbnU6IG1lbnVJdGVtLnN1Yk1lbnUsXG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIHBhcmVudENvbnRleHRNZW51OiB0aGlzLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uTWVudUl0ZW1TZWxlY3QobWVudUl0ZW06IENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSwgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9uT3BlblN1Yk1lbnUobWVudUl0ZW0sIGV2ZW50KTtcbiAgICBpZiAoIW1lbnVJdGVtLnN1Yk1lbnUpIHtcbiAgICAgIG1lbnVJdGVtLnRyaWdnZXJFeGVjdXRlKHRoaXMuaXRlbSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsRXZlbnQoZXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoWydJTlBVVCcsICdURVhUQVJFQScsICdTRUxFQ1QnXS5pbmRleE9mKHRhcmdldC50YWdOYW1lKSA+IC0xIHx8IHRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYsIFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVmLCBJbmplY3RhYmxlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRleHRNZW51Lml0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dE1lbnVDb250ZW50LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHRNZW51Q2xpY2tFdmVudCB7XG4gIGFuY2hvckVsZW1lbnQ/OiBFbGVtZW50IHwgRXZlbnRUYXJnZXQ7XG4gIGNvbnRleHRNZW51PzogQ29udGV4dE1lbnVDb21wb25lbnQ7XG4gIGV2ZW50PzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gIHBhcmVudENvbnRleHRNZW51PzogQ29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50O1xuICBpdGVtOiBhbnk7XG4gIGFjdGl2ZU1lbnVJdGVtSW5kZXg/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDb250ZXh0TWVudUNvbnRleHQgZXh0ZW5kcyBJQ29udGV4dE1lbnVDbGlja0V2ZW50IHtcbiAgbWVudUl0ZW1zOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmVbXTtcbiAgbWVudUNsYXNzOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIENsb3NlTGVhZk1lbnVFdmVudCB7XG4gIGV4Y2VwdFJvb3RNZW51PzogYm9vbGVhbjtcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgT3ZlcmxheVJlZldpdGhDb250ZXh0TWVudSBleHRlbmRzIE92ZXJsYXlSZWYge1xuICBjb250ZXh0TWVudT86IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxDb250ZXh0TWVudUV2ZW50IHtcbiAgZXZlbnRUeXBlOiAnY2FuY2VsJztcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRXhlY3V0ZUNvbnRleHRNZW51RXZlbnQge1xuICBldmVudFR5cGU6ICdleGVjdXRlJztcbiAgZXZlbnQ/OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudDtcbiAgaXRlbTogYW55O1xuICBtZW51SXRlbTogQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlO1xufVxuZXhwb3J0IHR5cGUgQ2xvc2VDb250ZXh0TWVudUV2ZW50ID0gRXhlY3V0ZUNvbnRleHRNZW51RXZlbnQgfCBDYW5jZWxDb250ZXh0TWVudUV2ZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVTZXJ2aWNlIHtcbiAgcHVibGljIGlzRGVzdHJveWluZ0xlYWZNZW51ID0gZmFsc2U7XG5cbiAgcHVibGljIHNob3c6IFN1YmplY3Q8SUNvbnRleHRNZW51Q2xpY2tFdmVudD4gPSBuZXcgU3ViamVjdDxJQ29udGV4dE1lbnVDbGlja0V2ZW50PigpO1xuICBwdWJsaWMgdHJpZ2dlckNsb3NlOiBTdWJqZWN0PENvbnRleHRNZW51Q29udGVudENvbXBvbmVudD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgY2xvc2U6IFN1YmplY3Q8Q2xvc2VDb250ZXh0TWVudUV2ZW50PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0TWVudUNvbnRlbnQ6IENvbXBvbmVudFJlZjxDb250ZXh0TWVudUNvbnRlbnRDb21wb25lbnQ+O1xuICBwcml2YXRlIG92ZXJsYXlzOiBPdmVybGF5UmVmW10gPSBbXTtcbiAgcHJpdmF0ZSBmYWtlRWxlbWVudDogYW55ID0ge1xuICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogKCk6IENsaWVudFJlY3QgPT4gKHtcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdpZHRoOiAwLFxuICAgIH0pXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgc2Nyb2xsU3RyYXRlZ3k6IFNjcm9sbFN0cmF0ZWd5T3B0aW9ucyxcbiAgKSB7IH1cblxuICBwdWJsaWMgb3BlbkNvbnRleHRNZW51KGNvbnRleHQ6IElDb250ZXh0TWVudUNvbnRleHQpIHtcbiAgICBjb25zdCB7IGFuY2hvckVsZW1lbnQsIGV2ZW50LCBwYXJlbnRDb250ZXh0TWVudSB9ID0gY29udGV4dDtcblxuICAgIGlmICghcGFyZW50Q29udGV4dE1lbnUpIHtcbiAgICAgIGNvbnN0IG1vdXNlRXZlbnQgPSBldmVudCBhcyBNb3VzZUV2ZW50O1xuICAgICAgdGhpcy5mYWtlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPSAoKTogQ2xpZW50UmVjdCA9PiAoe1xuICAgICAgICBib3R0b206IG1vdXNlRXZlbnQuY2xpZW50WSxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBsZWZ0OiBtb3VzZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHJpZ2h0OiBtb3VzZUV2ZW50LmNsaWVudFgsXG4gICAgICAgIHRvcDogbW91c2VFdmVudC5jbGllbnRZLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jbG9zZUFsbENvbnRleHRNZW51cyh7IGV2ZW50VHlwZTogJ2NhbmNlbCcsIGV2ZW50IH0pO1xuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmNvbm5lY3RlZFRvKFxuICAgICAgICBuZXcgRWxlbWVudFJlZihhbmNob3JFbGVtZW50IHx8IHRoaXMuZmFrZUVsZW1lbnQpLFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KVxuICAgICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXG4gICAgICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfSxcbiAgICAgICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInIH0pXG4gICAgICAgIDtcbiAgICAgIHRoaXMub3ZlcmxheXMgPSBbdGhpcy5vdmVybGF5LmNyZWF0ZSh7XG4gICAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXG4gICAgICAgIHBhbmVsQ2xhc3M6ICduZ3gtY29udGV4dG1lbnUnLFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5zY3JvbGxTdHJhdGVneS5jbG9zZSgpLFxuICAgICAgfSldO1xuICAgICAgdGhpcy5hdHRhY2hDb250ZXh0TWVudSh0aGlzLm92ZXJsYXlzWzBdLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmNvbm5lY3RlZFRvKFxuICAgICAgICBuZXcgRWxlbWVudFJlZihldmVudCA/IGV2ZW50LnRhcmdldCA6IGFuY2hvckVsZW1lbnQpLFxuICAgICAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ3RvcCcgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxuICAgICAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxuICAgICAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICAgICAgLndpdGhGYWxsYmFja1Bvc2l0aW9uKFxuICAgICAgICB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sXG4gICAgICAgIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSlcbiAgICAgICAgO1xuICAgICAgY29uc3QgbmV3T3ZlcmxheSA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5LFxuICAgICAgICBwYW5lbENsYXNzOiAnbmd4LWNvbnRleHRtZW51JyxcbiAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuc2Nyb2xsU3RyYXRlZ3kuY2xvc2UoKSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kZXN0cm95U3ViTWVudXMocGFyZW50Q29udGV4dE1lbnUpO1xuICAgICAgdGhpcy5vdmVybGF5cyA9IHRoaXMub3ZlcmxheXMuY29uY2F0KG5ld092ZXJsYXkpO1xuICAgICAgdGhpcy5hdHRhY2hDb250ZXh0TWVudShuZXdPdmVybGF5LCBjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXR0YWNoQ29udGV4dE1lbnUob3ZlcmxheTogT3ZlcmxheVJlZiwgY29udGV4dDogSUNvbnRleHRNZW51Q29udGV4dCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZXZlbnQsIGl0ZW0sIG1lbnVJdGVtcywgbWVudUNsYXNzIH0gPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY29udGV4dE1lbnVDb250ZW50OiBDb21wb25lbnRSZWY8Q29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50PiA9IG92ZXJsYXkuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoQ29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50KSk7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLmV2ZW50ID0gZXZlbnQ7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLml0ZW0gPSBpdGVtO1xuICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5tZW51SXRlbXMgPSBtZW51SXRlbXM7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLm92ZXJsYXkgPSBvdmVybGF5O1xuICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSB0cnVlO1xuICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5tZW51Q2xhc3MgPSBtZW51Q2xhc3M7XG4gICAgKDxPdmVybGF5UmVmV2l0aENvbnRleHRNZW51Pm92ZXJsYXkpLmNvbnRleHRNZW51ID0gY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlO1xuXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgIHN1YnNjcmlwdGlvbnMuYWRkKGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5leGVjdXRlLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAuc3Vic2NyaWJlKChleGVjdXRlRXZlbnQpID0+IHRoaXMuY2xvc2VBbGxDb250ZXh0TWVudXMoeyBldmVudFR5cGU6ICdleGVjdXRlJywgLi4uZXhlY3V0ZUV2ZW50IH0pKSk7XG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLmNsb3NlQWxsTWVudXMuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKGNsb3NlQWxsRXZlbnQpID0+IHRoaXMuY2xvc2VBbGxDb250ZXh0TWVudXMoeyBldmVudFR5cGU6ICdjYW5jZWwnLCAuLi5jbG9zZUFsbEV2ZW50IH0pKSk7XG4gICAgc3Vic2NyaXB0aW9ucy5hZGQoY29udGV4dE1lbnVDb250ZW50Lmluc3RhbmNlLmNsb3NlTGVhZk1lbnUuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoY2xvc2VMZWFmTWVudUV2ZW50ID0+IHRoaXMuZGVzdHJveUxlYWZNZW51KGNsb3NlTGVhZk1lbnVFdmVudCkpKTtcbiAgICBzdWJzY3JpcHRpb25zLmFkZChjb250ZXh0TWVudUNvbnRlbnQuaW5zdGFuY2Uub3BlblN1Yk1lbnUuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5zdWJzY3JpYmUoKHN1Yk1lbnVFdmVudDogSUNvbnRleHRNZW51Q29udGV4dCkgPT4ge1xuICAgICAgICB0aGlzLmRlc3Ryb3lTdWJNZW51cyhjb250ZXh0TWVudUNvbnRlbnQuaW5zdGFuY2UpO1xuICAgICAgICBpZiAoIXN1Yk1lbnVFdmVudC5jb250ZXh0TWVudSkge1xuICAgICAgICAgIGNvbnRleHRNZW51Q29udGVudC5pbnN0YW5jZS5pc0xlYWYgPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0TWVudUNvbnRlbnQuaW5zdGFuY2UuaXNMZWFmID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvdy5uZXh0KHN1Yk1lbnVFdmVudCk7XG4gICAgICB9KSk7XG4gICAgY29udGV4dE1lbnVDb250ZW50Lm9uRGVzdHJveSgoKSA9PiB7XG4gICAgICBtZW51SXRlbXMuZm9yRWFjaChtZW51SXRlbSA9PiBtZW51SXRlbS5pc0FjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIHN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgICBjb250ZXh0TWVudUNvbnRlbnQuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlQWxsQ29udGV4dE1lbnVzKGNsb3NlRXZlbnQ6IENsb3NlQ29udGV4dE1lbnVFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlzKSB7XG4gICAgICB0aGlzLmNsb3NlLm5leHQoY2xvc2VFdmVudCk7XG4gICAgICB0aGlzLm92ZXJsYXlzLmZvckVhY2goKG92ZXJsYXksIGluZGV4KSA9PiB7XG4gICAgICAgIG92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICAgIG92ZXJsYXkuZGlzcG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMub3ZlcmxheXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMYXN0QXR0YWNoZWRPdmVybGF5KCk6IE92ZXJsYXlSZWZXaXRoQ29udGV4dE1lbnUge1xuICAgIGxldCBvdmVybGF5OiBPdmVybGF5UmVmID0gdGhpcy5vdmVybGF5c1t0aGlzLm92ZXJsYXlzLmxlbmd0aCAtIDFdO1xuICAgIHdoaWxlICh0aGlzLm92ZXJsYXlzLmxlbmd0aCA+IDEgJiYgb3ZlcmxheSAmJiAhb3ZlcmxheS5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBvdmVybGF5LmRldGFjaCgpO1xuICAgICAgb3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlzID0gdGhpcy5vdmVybGF5cy5zbGljZSgwLCAtMSk7XG4gICAgICBvdmVybGF5ID0gdGhpcy5vdmVybGF5c1t0aGlzLm92ZXJsYXlzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95TGVhZk1lbnUoeyBleGNlcHRSb290TWVudSwgZXZlbnQgfTogQ2xvc2VMZWFmTWVudUV2ZW50ID0ge30pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0Rlc3Ryb3lpbmdMZWFmTWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzRGVzdHJveWluZ0xlYWZNZW51ID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZ2V0TGFzdEF0dGFjaGVkT3ZlcmxheSgpO1xuICAgICAgaWYgKHRoaXMub3ZlcmxheXMubGVuZ3RoID4gMSAmJiBvdmVybGF5KSB7XG4gICAgICAgIG92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICAgIG92ZXJsYXkuZGlzcG9zZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFleGNlcHRSb290TWVudSAmJiB0aGlzLm92ZXJsYXlzLmxlbmd0aCA+IDAgJiYgb3ZlcmxheSkge1xuICAgICAgICB0aGlzLmNsb3NlLm5leHQoeyBldmVudFR5cGU6ICdjYW5jZWwnLCBldmVudCB9KTtcbiAgICAgICAgb3ZlcmxheS5kZXRhY2goKTtcbiAgICAgICAgb3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0xlYWYgPSB0aGlzLmdldExhc3RBdHRhY2hlZE92ZXJsYXkoKTtcbiAgICAgIGlmIChuZXdMZWFmKSB7XG4gICAgICAgIG5ld0xlYWYuY29udGV4dE1lbnUuaXNMZWFmID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pc0Rlc3Ryb3lpbmdMZWFmTWVudSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3lTdWJNZW51cyhjb250ZXh0TWVudTogQ29udGV4dE1lbnVDb250ZW50Q29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGNvbnRleHRNZW51Lm92ZXJsYXk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm92ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgdGhpcy5vdmVybGF5cy5zbGljZShpbmRleCArIDEpLmZvckVhY2goc3ViTWVudU92ZXJsYXkgPT4ge1xuICAgICAgc3ViTWVudU92ZXJsYXkuZGV0YWNoKCk7XG4gICAgICBzdWJNZW51T3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaXNMZWFmTWVudShjb250ZXh0TWVudUNvbnRlbnQ6IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSB0aGlzLmdldExhc3RBdHRhY2hlZE92ZXJsYXkoKTtcbiAgICByZXR1cm4gY29udGV4dE1lbnVDb250ZW50Lm92ZXJsYXkgPT09IG92ZXJsYXk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSW5qZWN0LFxuICAgIElucHV0LFxuICAgIE9uRGVzdHJveSxcbiAgICBPcHRpb25hbCxcbiAgICBPdXRwdXQsXG4gICAgUXVlcnlMaXN0LFxuICAgIFZpZXdDaGlsZCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL2NvbnRleHRNZW51Lml0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IElDb250ZXh0TWVudU9wdGlvbnMgfSBmcm9tICcuL2NvbnRleHRNZW51Lm9wdGlvbnMnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVTZXJ2aWNlLCBJQ29udGV4dE1lbnVDbGlja0V2ZW50LCBDbG9zZUNvbnRleHRNZW51RXZlbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ09OVEVYVF9NRU5VX09QVElPTlMgfSBmcm9tICcuL2NvbnRleHRNZW51LnRva2Vucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtDb25maWcge1xuICBjbGljazogKGl0ZW06IGFueSwgJGV2ZW50PzogTW91c2VFdmVudCkgPT4gdm9pZDtcbiAgZW5hYmxlZD86IChpdGVtOiBhbnkpID0+IGJvb2xlYW47XG4gIGh0bWw6IChpdGVtOiBhbnkpID0+IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTW91c2VMb2NhdGlvbiB7XG4gIGxlZnQ/OiBzdHJpbmc7XG4gIG1hcmdpbkxlZnQ/OiBzdHJpbmc7XG4gIG1hcmdpblRvcD86IHN0cmluZztcbiAgdG9wPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdjb250ZXh0LW1lbnUnLFxuICBzdHlsZXM6IFtgXG4gICAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5uZ3gtY29udGV4dG1lbnUuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICBgXSxcbiAgdGVtcGxhdGU6IGAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwdWJsaWMgbWVudUNsYXNzID0gXCJcIjtcbiAgQElucHV0KCkgcHVibGljIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgdXNlQm9vdHN0cmFwNCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHB1YmxpYyBjbG9zZTogRXZlbnRFbWl0dGVyPENsb3NlQ29udGV4dE1lbnVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgb3BlbjogRXZlbnRFbWl0dGVyPElDb250ZXh0TWVudUNsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAQ29udGVudENoaWxkcmVuKENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSkgcHVibGljIG1lbnVJdGVtczogUXVlcnlMaXN0PENvbnRleHRNZW51SXRlbURpcmVjdGl2ZT47XG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBwdWJsaWMgbWVudUVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyB2aXNpYmxlTWVudUl0ZW1zOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuXG4gIHB1YmxpYyBsaW5rczogSUxpbmtDb25maWdbXSA9IFtdO1xuICBwdWJsaWMgaXRlbTogYW55O1xuICBwdWJsaWMgZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NvbnRleHRNZW51U2VydmljZTogQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09OVEVYVF9NRU5VX09QVElPTlMpIHByaXZhdGUgb3B0aW9uczogSUNvbnRleHRNZW51T3B0aW9ucyxcbiAgKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuYXV0b0ZvY3VzID0gb3B0aW9ucy5hdXRvRm9jdXM7XG4gICAgICB0aGlzLnVzZUJvb3RzdHJhcDQgPSBvcHRpb25zLnVzZUJvb3RzdHJhcDQ7XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChfY29udGV4dE1lbnVTZXJ2aWNlLnNob3cuc3Vic2NyaWJlKG1lbnVFdmVudCA9PiB7XG4gICAgICB0aGlzLm9uTWVudUV2ZW50KG1lbnVFdmVudCk7XG4gICAgfSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwdWJsaWMgb25NZW51RXZlbnQobWVudUV2ZW50OiBJQ29udGV4dE1lbnVDbGlja0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBjb250ZXh0TWVudSwgZXZlbnQsIGl0ZW0gfSA9IG1lbnVFdmVudDtcbiAgICBpZiAoY29udGV4dE1lbnUgJiYgY29udGV4dE1lbnUgIT09IHRoaXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgdGhpcy5zZXRWaXNpYmxlTWVudUl0ZW1zKCk7XG4gICAgdGhpcy5fY29udGV4dE1lbnVTZXJ2aWNlLm9wZW5Db250ZXh0TWVudSh7IC4uLm1lbnVFdmVudCwgbWVudUl0ZW1zOiB0aGlzLnZpc2libGVNZW51SXRlbXMsIG1lbnVDbGFzczogdGhpcy5tZW51Q2xhc3MgfSk7XG4gICAgdGhpcy5fY29udGV4dE1lbnVTZXJ2aWNlLmNsb3NlLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlyc3QoKSkuc3Vic2NyaWJlKGNsb3NlRXZlbnQgPT4gdGhpcy5jbG9zZS5lbWl0KGNsb3NlRXZlbnQpKTtcbiAgICB0aGlzLm9wZW4ubmV4dChtZW51RXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGlzTWVudUl0ZW1WaXNpYmxlKG1lbnVJdGVtOiBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZUlmRnVuY3Rpb24obWVudUl0ZW0udmlzaWJsZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0VmlzaWJsZU1lbnVJdGVtcygpOiB2b2lkIHtcbiAgICB0aGlzLnZpc2libGVNZW51SXRlbXMgPSB0aGlzLm1lbnVJdGVtcy5maWx0ZXIobWVudUl0ZW0gPT4gdGhpcy5pc01lbnVJdGVtVmlzaWJsZShtZW51SXRlbSkpO1xuICB9XG5cbiAgcHVibGljIGV2YWx1YXRlSWZGdW5jdGlvbih2YWx1ZTogYW55KTogYW55IHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHZhbHVlKHRoaXMuaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbnRleHRNZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0TWVudVNlcnZpY2UgfSBmcm9tICcuL2NvbnRleHRNZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb250ZXh0TWVudV0nLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudUF0dGFjaERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb250ZXh0TWVudVN1YmplY3Q6IGFueTtcbiAgQElucHV0KCkgcHVibGljIGNvbnRleHRNZW51OiBDb250ZXh0TWVudUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRleHRNZW51U2VydmljZTogQ29udGV4dE1lbnVTZXJ2aWNlKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNvbnRleHRNZW51LmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNvbnRleHRNZW51U2VydmljZS5zaG93Lm5leHQoe1xuICAgICAgICBjb250ZXh0TWVudTogdGhpcy5jb250ZXh0TWVudSxcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIGl0ZW06IHRoaXMuY29udGV4dE1lbnVTdWJqZWN0LFxuICAgICAgfSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRleHRNZW51QXR0YWNoRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0TWVudS5hdHRhY2guZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZXh0TWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGV4dE1lbnVJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9jb250ZXh0TWVudS5pdGVtLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJQ29udGV4dE1lbnVPcHRpb25zIH0gZnJvbSAnLi9jb250ZXh0TWVudS5vcHRpb25zJztcbmltcG9ydCB7IENvbnRleHRNZW51U2VydmljZSB9IGZyb20gJy4vY29udGV4dE1lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBDT05URVhUX01FTlVfT1BUSU9OUyB9IGZyb20gJy4vY29udGV4dE1lbnUudG9rZW5zJztcbmltcG9ydCB7IENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGV4dE1lbnVDb250ZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRleHRNZW51QXR0YWNoRGlyZWN0aXZlLFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCxcbiAgICBDb250ZXh0TWVudUl0ZW1EaXJlY3RpdmUsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIENvbnRleHRNZW51Q29udGVudENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbnRleHRNZW51QXR0YWNoRGlyZWN0aXZlLFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIENvbnRleHRNZW51SXRlbURpcmVjdGl2ZSxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChvcHRpb25zPzogSUNvbnRleHRNZW51T3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ09OVEVYVF9NRU5VX09QVElPTlMsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7SUF1QkUsa0NBQW1CLFFBQW9DLEVBQVMsVUFBc0I7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBNEI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFZO3VCQWQ1RCxLQUFLO3VCQUMrQixJQUFJO3VCQUN4QyxLQUFLO3VCQUMrQixJQUFJO3VCQUNJLElBQUksWUFBWSxFQUFFO3dCQUd0RSxLQUFLO0tBT29FOzBCQU5oRiw4Q0FBUTs7Ozs7WUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTztnQkFDakIsSUFBSSxDQUFDLE9BQU87Z0JBQ1osQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUFLdEQscURBQWtCOzs7OztjQUFDLEtBQVUsRUFBRSxJQUFTO1FBQzdDLElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sS0FBSyxDQUFDOzs7OztJQUdSLGtEQUFlOzs7O1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzs7OztJQUVoQixvREFBaUI7Ozs7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7SUFHakIsaURBQWM7Ozs7O2NBQUMsSUFBUyxFQUFFLE1BQW1DO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDOzs7Z0JBekM5QyxTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxtQkFBbUI7aUJBRTlCOzs7O2dCQU40RCxXQUFXO2dCQUFwRCxVQUFVOzs7MEJBUTNCLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxNQUFNOzttQ0FkVDs7Ozs7OztBQ0FBLHFCQUVhLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDOzs7Ozs7QUMwQjlFLHFCQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQzs7SUE4RDVCLHFDQUNVLGdCQUNBLFlBRThCLE9BQTRCLEVBQzNEO1FBSkMsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsZUFBVSxHQUFWLFVBQVU7UUFFb0IsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDM0QsYUFBUSxHQUFSLFFBQVE7eUJBeEJ1QyxFQUFFO3NCQU1qQyxLQUFLO3VCQUUxQixJQUFJLFlBQVksRUFBRTsyQkFDK0MsSUFBSSxZQUFZLEVBQUU7NkJBQ3BCLElBQUksWUFBWSxFQUFFOzZCQUNmLElBQUksWUFBWSxFQUFFO3lCQUlyRSxLQUFLOzZCQUNELEtBQUs7NEJBRVMsSUFBSSxZQUFZLEVBQUU7UUFRckQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQzVDO0tBQ0Y7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtZQUM3QixRQUFRLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDakMsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksY0FBTSxLQUFLLElBQUUsUUFBUSxVQUFBLElBQUcsR0FBQSxDQUFDLENBQUMsQ0FBQztTQUN2RyxDQUFDLENBQUM7UUFDSCxxQkFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQTRCLENBQUM7UUFDNUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLDBCQUEwQixDQUEyQixTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNuRzs7OztJQUVELHFEQUFlOzs7SUFBZjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssRUFBRSxHQUFBLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDL0I7Ozs7SUFFRCxpREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBRUQsMkNBQUs7OztJQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7O0lBRUQsK0NBQVM7Ozs7SUFBVCxVQUFVLE1BQWtCO1FBQzFCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFTSx1REFBaUI7Ozs7Y0FBQyxRQUFrQztRQUN6RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7SUFHeEQsdURBQWlCOzs7O2NBQUMsUUFBa0M7UUFDekQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O0lBR3hELHdEQUFrQjs7OztjQUFDLEtBQVU7UUFDbEMsSUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sS0FBSyxDQUFDOzs7Ozs7SUFHUixnREFBVTs7OztjQUFDLElBQWlCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFLM0MsZ0RBQVU7Ozs7SUFGakIsVUFFa0IsS0FBb0I7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7O0lBR00seURBQW1COzs7O0lBRDFCLFVBQzJCLEtBQXFCO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7S0FDRjs7Ozs7SUFJTSw0REFBc0I7Ozs7SUFGN0IsVUFFOEIsS0FBcUI7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QztLQUNGOzs7OztJQUlNLHFEQUFlOzs7O0lBRnRCLFVBRXVCLEtBQW9CO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLE9BQU8sS0FBSyxrQkFBa0IsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7S0FDMUY7Ozs7O0lBSU0sK0NBQVM7Ozs7SUFGaEIsVUFFaUIsS0FBaUI7UUFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztLQUNsQzs7Ozs7O0lBRU0sbURBQWE7Ozs7O2NBQUMsUUFBa0MsRUFBRSxLQUFrQztRQUN6RixxQkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMzRixxQkFBTSxhQUFhLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLGFBQWEsZUFBQTtZQUNiLFdBQVcsRUFBRSxRQUFRLENBQUMsT0FBTztZQUM3QixLQUFLLE9BQUE7WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixpQkFBaUIsRUFBRSxJQUFJO1NBQ3hCLENBQUMsQ0FBQzs7Ozs7OztJQUdFLHNEQUFnQjs7Ozs7Y0FBQyxRQUFrQyxFQUFFLEtBQWlDO1FBQzNGLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzNDOzs7Ozs7SUFHSyxpREFBVzs7OztjQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU87U0FDUjtRQUVELHFCQUFNLE1BQU0sR0FBZ0IsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUM1RixPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDOzs7Z0JBaE4zQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsTUFBTSxFQUFFO3dCQUNOLGdSQVdFO3FCQUNIO29CQUNELFFBQVEsRUFDUixxbURBcUJDO2lCQUNGOzs7O2dCQWpFRyxpQkFBaUI7Z0JBRWpCLFVBQVU7Z0RBdUZULFFBQVEsWUFDUixNQUFNLFNBQUMsb0JBQW9CO2dCQXBGNUIsUUFBUTs7OzRCQTZEVCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQ0FDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLE1BQU07OEJBRU4sTUFBTTtnQ0FDTixNQUFNO2dDQUNOLE1BQU07OEJBQ04sU0FBUyxTQUFDLE1BQU07bUNBQ2hCLFlBQVksU0FBQyxJQUFJOzZCQXFFakIsWUFBWSxTQUFDLDBCQUEwQixFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ25ELFlBQVksU0FBQyx3QkFBd0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQ0FRakQsWUFBWSxTQUFDLDJCQUEyQixFQUFFLENBQUMsUUFBUSxDQUFDO3lDQVlwRCxZQUFZLFNBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDL0MsWUFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDO2tDQVkvQyxZQUFZLFNBQUMsdUJBQXVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDaEQsWUFBWSxTQUFDLDBCQUEwQixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVNuRCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FDekMsWUFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUMsUUFBUSxDQUFDOztzQ0F0TWxEOzs7Ozs7OztJQzhERSw0QkFDVSxTQUNBO1FBREEsWUFBTyxHQUFQLE9BQU87UUFDUCxtQkFBYyxHQUFkLGNBQWM7b0NBckJNLEtBQUs7b0JBRVksSUFBSSxPQUFPLEVBQTBCOzRCQUN4QixJQUFJLE9BQU8sRUFBRTtxQkFDMUIsSUFBSSxPQUFPLEVBQUU7d0JBRzNCLEVBQUU7MkJBQ1I7WUFDekIscUJBQXFCLEVBQUUsY0FBa0IsUUFBQztnQkFDeEMsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsR0FBRyxFQUFFLENBQUM7Z0JBQ04sS0FBSyxFQUFFLENBQUM7YUFDVCxJQUFDO1NBQ0g7S0FLSTs7Ozs7SUFFRSw0Q0FBZTs7OztjQUFDLE9BQTRCO1FBQ3pDLElBQUEscUNBQWEsRUFBRSxxQkFBSyxFQUFFLDZDQUFpQixDQUFhO1FBRTVELElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixxQkFBTSxZQUFVLHFCQUFHLEtBQW1CLENBQUEsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixHQUFHLGNBQWtCLFFBQUM7Z0JBQzFELE1BQU0sRUFBRSxZQUFVLENBQUMsT0FBTztnQkFDMUIsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLFlBQVUsQ0FBQyxPQUFPO2dCQUN4QixLQUFLLEVBQUUsWUFBVSxDQUFDLE9BQU87Z0JBQ3pCLEdBQUcsRUFBRSxZQUFVLENBQUMsT0FBTztnQkFDdkIsS0FBSyxFQUFFLENBQUM7YUFDVCxJQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUMxRCxxQkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FDMUQsSUFBSSxVQUFVLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDakQsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFDdkMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDdEMsb0JBQW9CLENBQ3JCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3BDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQ3pDLG9CQUFvQixDQUNyQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNsQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUN0QyxvQkFBb0IsQ0FDckIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDcEMsb0JBQW9CLENBQ3JCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQ3JDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQ3pDLG9CQUFvQixDQUNyQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUN2QyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQ3ZDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNuQyxnQkFBZ0Isa0JBQUE7b0JBQ2hCLFVBQVUsRUFBRSxpQkFBaUI7b0JBQzdCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTtpQkFDNUMsQ0FBQyxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDthQUFNO1lBQ0wscUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQzFELElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxFQUNwRCxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNsQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUN0QyxvQkFBb0IsQ0FDckIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFDcEMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDcEMsb0JBQW9CLENBQ3JCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQ3JDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7aUJBQ3pDLG9CQUFvQixDQUNyQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUN2QyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQ3ZDO1lBQ0gscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxnQkFBZ0Isa0JBQUE7Z0JBQ2hCLFVBQVUsRUFBRSxpQkFBaUI7Z0JBQzdCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTthQUM1QyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdDOzs7Ozs7O0lBR0ksOENBQWlCOzs7OztjQUFDLE9BQW1CLEVBQUUsT0FBNEI7O1FBQ2hFLElBQUEscUJBQUssRUFBRSxtQkFBSSxFQUFFLDZCQUFTLEVBQUUsNkJBQVMsQ0FBYTtRQUV0RCxxQkFBTSxrQkFBa0IsR0FBOEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDdkksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDMUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDeEMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbEQsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDOUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDbEQsbUJBQTRCLE9BQU8sR0FBRSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBRS9FLHFCQUFNLGFBQWEsR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO2FBQ2pFLFNBQVMsQ0FBQyxVQUFDLFlBQVksSUFBSyxPQUFBLEtBQUksQ0FBQyxvQkFBb0IsWUFBRyxTQUFTLEVBQUUsU0FBUyxJQUFLLFlBQVksRUFBRyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLGFBQWEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7YUFDdkUsU0FBUyxDQUFDLFVBQUMsYUFBYSxJQUFLLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixZQUFHLFNBQVMsRUFBRSxRQUFRLElBQUssYUFBYSxFQUFHLEdBQUEsQ0FBQyxDQUFDLENBQUM7UUFDdkcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTthQUN2RSxTQUFTLENBQUMsVUFBQSxrQkFBa0IsSUFBSSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQztRQUM5RSxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO2FBQ3JFLFNBQVMsQ0FBQyxVQUFDLFlBQWlDO1lBQzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQzdCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxPQUFPO2FBQ1I7WUFDRCxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUMzQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QixDQUFDLENBQUMsQ0FBQztRQUNOLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUMzQixTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUEsQ0FBQyxDQUFDO1lBQ3pELGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFDSCxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7O0lBR2hELGlEQUFvQjs7OztjQUFDLFVBQWlDO1FBQzNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxLQUFLO2dCQUNuQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNuQixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7OztJQUdkLG1EQUFzQjs7OztRQUMzQixxQkFBSSxPQUFPLEdBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDcEUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxPQUFPLENBQUM7Ozs7OztJQUdWLDRDQUFlOzs7O2NBQUMsRUFBa0Q7O1lBQWxELDRCQUFrRCxFQUFoRCxrQ0FBYyxFQUFFLGdCQUFLO1FBQzVDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzdCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFakMsVUFBVSxDQUFDO1lBQ1QscUJBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlDLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFDdkMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQzFELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakIsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ25CO1lBRUQscUJBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1lBQzlDLElBQUksT0FBTyxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNuQztZQUVELEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7U0FDbkMsQ0FBQyxDQUFDOzs7Ozs7SUFHRSw0Q0FBZTs7OztjQUFDLFdBQXdDO1FBQzdELHFCQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsY0FBYztZQUNuRCxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDeEIsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzFCLENBQUMsQ0FBQzs7Ozs7O0lBR0UsdUNBQVU7Ozs7Y0FBQyxrQkFBK0M7UUFDL0QscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlDLE9BQU8sa0JBQWtCLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQzs7O2dCQTVMakQsVUFBVTs7OztnQkF6Q0YsT0FBTztnQkFBYyxxQkFBcUI7OzZCQUFuRDs7Ozs7Ozs7SUN5RUUsOEJBQ1UscUJBQ0EsZ0JBQ0EsWUFFOEIsT0FBNEI7UUFMcEUsaUJBY0M7UUFiUyx3QkFBbUIsR0FBbkIsbUJBQW1CO1FBQ25CLG1CQUFjLEdBQWQsY0FBYztRQUNkLGVBQVUsR0FBVixVQUFVO1FBRW9CLFlBQU8sR0FBUCxPQUFPLENBQXFCO3lCQXBCeEMsRUFBRTt5QkFDRixLQUFLOzZCQUNELEtBQUs7d0JBQ1YsS0FBSztxQkFDOEIsSUFBSSxZQUFZLEVBQUU7b0JBQ2xCLElBQUksWUFBWSxFQUFFO2dDQUcxQixFQUFFO3FCQUUxQixFQUFFOzRCQUdLLElBQUksWUFBWSxFQUFFO1FBU3JELElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxTQUFTO1lBQ2hFLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0IsQ0FBQyxDQUFDLENBQUM7S0FDTDs7OztJQUVNLDBDQUFXOzs7O1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7OztJQUczQiwwQ0FBVzs7OztjQUFDLFNBQWlDOztRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBQ08sSUFBQSxtQ0FBVyxFQUFFLHVCQUFLLEVBQUUscUJBQUksQ0FBZTtRQUMvQyxJQUFJLFdBQVcsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLGNBQU0sU0FBUyxJQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUcsQ0FBQztRQUN4SCxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFBLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7O0lBR3JCLGdEQUFpQjs7OztjQUFDLFFBQWtDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7SUFHNUMsa0RBQW1COzs7OztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUEsQ0FBQyxDQUFDOzs7Ozs7SUFHdkYsaURBQWtCOzs7O2NBQUMsS0FBVTtRQUNsQyxJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxLQUFLLENBQUM7OztnQkFyRmhCLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLE1BQU0sRUFBRSxDQUFDLHFVQWVSLENBQUM7b0JBQ0YsUUFBUSxFQUFFLEdBQUc7aUJBQ2Q7Ozs7Z0JBbkNRLGtCQUFrQjtnQkFwQnZCLGlCQUFpQjtnQkFHakIsVUFBVTtnREF5RVQsUUFBUSxZQUNSLE1BQU0sU0FBQyxvQkFBb0I7Ozs0QkFwQjdCLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsTUFBTTt1QkFDTixNQUFNOzRCQUNOLGVBQWUsU0FBQyx3QkFBd0I7OEJBQ3hDLFNBQVMsU0FBQyxNQUFNOzsrQkFqRW5COzs7Ozs7O0FDQUE7SUFXRSxvQ0FBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7S0FBSzs7Ozs7SUFHeEQsa0RBQWE7Ozs7SUFEcEIsVUFDcUIsS0FBaUI7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLEtBQUssT0FBQTtnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjthQUM5QixDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7O2dCQXBCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQUxRLGtCQUFrQjs7O3FDQU94QixLQUFLOzhCQUNMLEtBQUs7Z0NBSUwsWUFBWSxTQUFDLGFBQWEsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7cUNBYnpDOzs7Ozs7O0FDQUE7Ozs7Ozs7SUFpQ2dCLHlCQUFPOzs7O2NBQUMsT0FBNkI7UUFDakQsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULGtCQUFrQjtnQkFDbEI7b0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsUUFBUSxFQUFFLE9BQU87aUJBQ2xCO2FBQ0Y7U0FDRixDQUFDOzs7Z0JBL0JMLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0Isd0JBQXdCO3FCQUN6QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTtxQkFDZDtpQkFDRjs7NEJBL0JEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/demo-modules/context-menu/component.ts":
/*!********************************************************!*\
  !*** ./src/app/demo-modules/context-menu/component.ts ***!
  \********************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../demo-utils/colors */ "./src/app/demo-modules/demo-utils/colors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.view = 'month';
        this.viewDate = new Date();
        this.events = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DemoComponent.prototype.addEvent = function (date) {
        this.events.push({
            start: date,
            title: 'New event',
            color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_2__["colors"].red
        });
        this.refresh.next();
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-component',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./template.html */ "./src/app/demo-modules/context-menu/template.html"),
            styles: [
                "\n      .fill-height {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }\n    "
            ]
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/context-menu/module.ts":
/*!*****************************************************!*\
  !*** ./src/app/demo-modules/context-menu/module.ts ***!
  \*****************************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-utils/module */ "./src/app/demo-modules/demo-utils/module.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component */ "./src/app/demo-modules/context-menu/component.ts");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./projects/angular-calendar/src/date-adapters/date-fns/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_7__["adapterFactory"]
                }),
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_4__["ContextMenuModule"].forRoot({
                    useBootstrap4: true
                }),
                _demo_utils_module__WEBPACK_IMPORTED_MODULE_5__["DemoUtilsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"] }])
            ],
            declarations: [_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]],
            exports: [_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo-modules/demo-utils/calendar-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/demo-modules/demo-utils/calendar-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: CalendarHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeaderComponent", function() { return CalendarHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent() {
        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Date)
    ], CalendarHeaderComponent.prototype, "viewDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CalendarHeaderComponent.prototype, "locale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarHeaderComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CalendarHeaderComponent.prototype, "viewDateChange", void 0);
    CalendarHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-utils-calendar-header',
            template: "\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarPreviousView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Previous\n          </div>\n          <div\n            class=\"btn btn-outline-secondary\"\n            mwlCalendarToday\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Today\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            mwlCalendarNextView\n            [view]=\"view\"\n            [(viewDate)]=\"viewDate\"\n            (viewDateChange)=\"viewDateChange.next(viewDate)\">\n            Next\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):locale }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-group\">\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('month')\"\n            [class.active]=\"view === 'month'\">\n            Month\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('week')\"\n            [class.active]=\"view === 'week'\">\n            Week\n          </div>\n          <div\n            class=\"btn btn-primary\"\n            (click)=\"viewChange.emit('day')\"\n            [class.active]=\"view === 'day'\">\n            Day\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n  "
        })
    ], CalendarHeaderComponent);
    return CalendarHeaderComponent;
}());



/***/ }),

/***/ "./src/app/demo-modules/demo-utils/module.ts":
/*!***************************************************!*\
  !*** ./src/app/demo-modules/demo-utils/module.ts ***!
  \***************************************************/
/*! exports provided: DemoUtilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoUtilsModule", function() { return DemoUtilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./projects/angular-calendar/src/index.ts");
/* harmony import */ var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar-header.component */ "./src/app/demo-modules/demo-utils/calendar-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DemoUtilsModule = /** @class */ (function () {
    function DemoUtilsModule() {
    }
    DemoUtilsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"]],
            declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]],
            exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__["CalendarHeaderComponent"]]
        })
    ], DemoUtilsModule);
    return DemoUtilsModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-modules-context-menu-module.js.map
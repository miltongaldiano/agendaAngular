var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { map, take, filter } from 'rxjs/operators';
import StackBlitzSDK from '@stackblitz/sdk';
import { sources as demoUtilsSources } from './demo-modules/demo-utils/sources';
function getSources(folder) {
    return __awaiter(this, void 0, void 0, function () {
        var sources;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import('./demo-modules/' + folder + '/sources.ts')];
                case 1:
                    sources = (_a.sent()).sources;
                    return [2 /*return*/, sources.map(function (_a) {
                            var filename = _a.filename, contents = _a.contents;
                            var _b = filename.match(/^.+\.(.+)$/), extension = _b[1];
                            var languages = {
                                ts: 'typescript',
                                html: 'html',
                                css: 'css'
                            };
                            return {
                                filename: filename,
                                contents: {
                                    raw: contents.raw
                                        .replace(",\n    RouterModule.forChild([{ path: '', component: DemoComponent }])", '')
                                        .replace("\nimport { RouterModule } from '@angular/router';", ''),
                                    highlighted: contents.highlighted // TODO - move this into a regexp replace for both
                                        .replace(',\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])', '')
                                        .replace('\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;', '')
                                },
                                language: languages[extension]
                            };
                        })];
            }
        });
    });
}
var dependencyVersions = {
    angular: require('@angular/core/package.json').version,
    angularRouter: require('@angular/router/package.json').version,
    angularCalendar: require('../../package.json').version,
    calendarUtils: require('calendar-utils/package.json').version,
    angularResizableElement: require('angular-resizable-element/package.json')
        .version,
    angularDraggableDroppable: require('angular-draggable-droppable/package.json')
        .version,
    dateFns: require('date-fns/package.json').version,
    rxjs: require('rxjs/package.json').version,
    bootstrap: require('bootstrap-css-only/package.json').version,
    zoneJs: require('zone.js/package.json').version,
    ngBootstrap: require('@ng-bootstrap/ng-bootstrap/package.json').version,
    rrule: require('rrule/package.json').version,
    fontAwesome: require('font-awesome/package.json').version,
    positioning: require('positioning/package.json').version,
    flatpickr: require('flatpickr/package.json').version,
    angularxFlatpickr: require('angularx-flatpickr/package.json').version
};
var DemoAppComponent = /** @class */ (function () {
    function DemoAppComponent(router) {
        this.router = router;
        this.demos = [];
        this.isMenuVisible = false;
        this.firstDemoLoaded = false;
    }
    DemoAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var defaultRoute = this.router.config.find(function (route) { return route.path === '**'; });
        this.demos = this.router.config
            .filter(function (route) { return route.path !== '**'; })
            .map(function (route) { return ({
            path: route.path,
            label: route.data['label']
        }); });
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .pipe(take(1))
            .subscribe(function () { return (_this.firstDemoLoaded = true); });
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationStart; }))
            .pipe(map(function (event) {
            if (event.url === '/') {
                return { url: "/" + defaultRoute.redirectTo };
            }
            return event;
        }))
            .subscribe(function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.activeDemo = this.demos.find(function (demo) { return "/" + demo.path === event.url; });
                        _a = this.activeDemo;
                        return [4 /*yield*/, getSources(this.activeDemo.path)];
                    case 1:
                        _a.sources = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DemoAppComponent.prototype.editInStackblitz = function (demo) {
        var files = {
            'index.html': ("\n<link href=\"https://unpkg.com/bootstrap-css-only@" + dependencyVersions.bootstrap + "/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/font-awesome@" + dependencyVersions.fontAwesome + "/css/font-awesome.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/angular-calendar@" + dependencyVersions.angularCalendar + "/css/angular-calendar.css\" rel=\"stylesheet\">\n<link href=\"https://unpkg.com/flatpickr@" + dependencyVersions.flatpickr + "/dist/flatpickr.css\" rel=\"stylesheet\">\n<mwl-demo-component>Loading...</mwl-demo-component>\n").trim(),
            'main.ts': "\nimport 'core-js/es6/reflect';\nimport 'core-js/es7/reflect';\nimport 'zone.js/dist/zone';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { NgModule } from '@angular/core';\nimport { DemoModule } from './demo/module';\nimport { DemoComponent } from './demo/component';\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    DemoModule\n  ],\n  bootstrap: [DemoComponent]\n})\nexport class BootstrapModule {}\n\nplatformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));\n".trim()
        };
        demoUtilsSources.forEach(function (source) {
            files["demo-utils/" + source.filename] = source.contents.raw;
        });
        demo.sources.forEach(function (source) {
            files["demo/" + source.filename] = source.contents.raw;
        });
        StackBlitzSDK.openProject({
            title: 'Angular Calendar Demo',
            description: demo.label,
            template: 'angular-cli',
            tags: ['angular-calendar'],
            files: files,
            dependencies: {
                '@angular/core': dependencyVersions.angular,
                '@angular/common': dependencyVersions.angular,
                '@angular/compiler': dependencyVersions.angular,
                '@angular/platform-browser': dependencyVersions.angular,
                '@angular/platform-browser-dynamic': dependencyVersions.angular,
                '@angular/router': dependencyVersions.angular,
                '@angular/forms': dependencyVersions.angular,
                '@angular/animations': dependencyVersions.angular,
                rxjs: dependencyVersions.rxjs,
                'zone.js': dependencyVersions.zoneJs,
                'angular-draggable-droppable': dependencyVersions.angularDraggableDroppable,
                'angular-resizable-element': dependencyVersions.angularResizableElement,
                'date-fns': dependencyVersions.dateFns,
                'angular-calendar': dependencyVersions.angularCalendar,
                '@ng-bootstrap/ng-bootstrap': dependencyVersions.ngBootstrap,
                rrule: dependencyVersions.rrule,
                'calendar-utils': dependencyVersions.calendarUtils,
                flatpickr: dependencyVersions.flatpickr,
                'angularx-flatpickr': dependencyVersions.angularxFlatpickr
            }
        }, {
            openFile: 'demo/component.ts'
        });
    };
    DemoAppComponent = __decorate([
        Component({
            selector: 'mwl-demo-app',
            styleUrls: ['./demo-app.css'],
            templateUrl: './demo-app.html'
        }),
        __metadata("design:paramtypes", [Router])
    ], DemoAppComponent);
    return DemoAppComponent;
}());
export { DemoAppComponent };
//# sourceMappingURL=demo-app.component.js.map
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoAppModule } from './app/demo-app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic()
    .bootstrapModule(DemoAppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import {FirstModule} from "./FirstModule/FirstModule"
// import {AppFormModule} from "./FormDemo/module"

// import {CustomerModule} from "./CustomerForm/CustomerModule"
// import {CustomerTemplateModule} from "./TemplateForm/TemplateFormModule"

// import {ViewModule} from "./ViewChild/ViewModule"
// import {InputOutputModule} from "./InputOutput/InputOutputModule"

// import {AppModule1} from "./RouteDemo/Module"
// import {LifecycleModel} from "./ModularComponent/LifecycleModel"
import {Httpclass} from "./ConsumeNodeAPI/httpClientModule"


if (environment.production) {
  enableProdMode();
}

//platformBrowserDynamic().bootstrapModule(AppModule)
//platformBrowserDynamic().bootstrapModule(FirstModule)
//platformBrowserDynamic().bootstrapModule(AppFormModule)
//platformBrowserDynamic().bootstrapModule(CustomerModule)
//platformBrowserDynamic().bootstrapModule(CustomerTemplateModule)
//platformBrowserDynamic().bootstrapModule(ViewModule)
//platformBrowserDynamic().bootstrapModule(InputOutputModule)
//platformBrowserDynamic().bootstrapModule(AppModule1)
//platformBrowserDynamic().bootstrapModule(LifecycleModel)
platformBrowserDynamic().bootstrapModule(Httpclass)
  .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Check2Component } from './app/ComponentsTotest/check2/check2.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

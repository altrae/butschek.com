import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { config as appConfig } from './app/app.config.server';
import { App } from './app';

export default (bootstrapContext: BootstrapContext) => bootstrapApplication(App, appConfig, bootstrapContext);

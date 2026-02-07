import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { App } from './app';

const bootstrap = (options?: ApplicationConfig) =>
  bootstrapApplication(App, options ? mergeApplicationConfig(config, options) : config);

export default bootstrap;

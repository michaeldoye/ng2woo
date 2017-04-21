import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WooApiService }   from './src/woocommerce.service';


export * from './src/woocommerce.service';


@NgModule({
  imports: [ CommonModule ],
  declarations: [],
  exports: []
})
export class WooApiModule {
  static forRoot(config: Object): ModuleWithProviders {
    return {
      ngModule: WooApiModule,
      providers: [ WooApiService, {provide: 'config', useValue: config}]
    };
  }
}

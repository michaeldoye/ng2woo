# WaNG (In development)
Angular2+ wrapper for the WooCommerce API

Please note this library is not yet pubished or active, it is currently being developed. Visit the [Discord Channel](https://discord.gg/xyUdZKh) if you have an idea or feature request for this project.

[![GitHub version](https://badge.fury.io/gh/michaeldoye%2FWaNG.svg)](https://badge.fury.io/gh/michaeldoye%2FWaNG)
[![dependencies Status](https://david-dm.org/michaeldoye/WaNG/status.svg)](https://david-dm.org/michaeldoye/WaNG)
[![GitHub issues](https://img.shields.io/github/issues/michaeldoye/WaNG.svg)](https://github.com/michaeldoye/woo-wrapper/WaNG)
[![Discord Chat](https://img.shields.io/badge/Discord-Chat-blue.svg)](https://discord.gg/xyUdZKh)

## Installation

To install this library, run:

```bash
$ npm install woo-wrapper --save (not yet published)
```

## Usage

Import woo-wrapper in any Angular application by running:

```bash
$ npm install woo-wrapper (not yet published)
```

and then from your Angular `AppModule`:

```typescript
...
// Import WaNG
import { WooApiModule, WooApiService } from 'woo-wrapper';

// Add your WooCommerce Credentials
const WooCommerceConfig = {
  url: 'your_site_url',
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  wpAPI: true,
  version: 'wc/v1'
};

@NgModule({
  declarations: [...],
  imports: [
    ...
    // Specify as an import and pass in your config
    WooApiModule.forRoot(WooCommerceConfig)
  ],
  // Add the Api service to the provider
  providers: [WooApiService]
})
export class AppModule { }
```

Once woo-wrapper is imported, you can use the `WooApiService`:

```typescript
import { Component, OnInit } from '@angular/core';
// Import the services
import { WooApiService } from 'woo-wrapper';


@Component({...})
export class HomePage implements OnInit { 

  products: any;
  // Inject the service
  constructor(private woo: WooApiService) { }

  ngOnInit(): void {
    // Fetch all products
    this.woo.fetchItems('products')
      .then(products => console.log(products));
  }

}

```

## Methods


### `fetchItems(itemType)`

- Accepts: `string` (_required_) - the type of WooCommerce item you want to fetch (_products, orders, customers, categories_). Accepts query parameters, see the [WooCommerce Api docs](https://woocommerce.github.io/woocommerce-rest-api-docs) for a full list of query parameters.
- Returns: `Promise`

**Example**

```typescript
this.woo.fetchItems('products')
  .then(products => console.log(products));
```


## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Michael Doye](mailto:michaeldoye[@]gmail.com)

# ng2woo 
Very simple Angular2+ wrapper for the WooCommerce API

[![GitHub version](https://badge.fury.io/gh/michaeldoye%2FWaNG.svg)](https://badge.fury.io/gh/michaeldoye%2FWaNG)
[![dependencies Status](https://david-dm.org/michaeldoye/WaNG/status.svg)](https://david-dm.org/michaeldoye/WaNG)
[![GitHub issues](https://img.shields.io/github/issues/michaeldoye/WaNG.svg)](https://github.com/michaeldoye/woo-wrapper/WaNG)
[![Discord Chat](https://img.shields.io/badge/Discord-Chat-blue.svg)](https://discord.gg/xyUdZKh)

## Usage

Import ng2woo in any Angular application by running:

```bash
$ npm install --save ng2woo
```

Install the WooCommerce API:

```bash
$ npm install --save woocommerce-api
```

You will need to get the [WooCommerce credentials](https://woocommerce.github.io/woocommerce-rest-api-docs/#rest-api-keys) from your WooCommerce website.

Then from your Angular `AppModule`:

```typescript
...
// Import ng2woo
import { WooApiModule, WooApiService } from 'ng2woo';

// Add your WooCommerce Credentials
const WooCommerceConfig = {
  url: 'your_site_url',
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  wpAPI: true,
  version: 'wc/v1'
};

@NgModule({
  declarations: [ ... ],
  imports: [
    ...
    // Specify as an import and pass in your config
    WooApiModule.forRoot(WooCommerceConfig)
  ],
  // Add the Api service
  providers: [ WooApiService ]
})
export class AppModule { }
```

Once ng2woo is imported, you can use the `WooApiService` in your components/services:

```typescript
import { Component, OnInit } from '@angular/core';
// Import the service
import { WooApiService } from 'ng2woo';


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

**Examples**

```typescript
this.woo.fetchItems('products')
  .then(products => console.log(products))
  .catch(error => console.log(error));
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

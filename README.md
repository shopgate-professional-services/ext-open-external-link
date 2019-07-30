# Shopgate Connect - Extension Boilerplate

Extension that will take passed parameters to create a link that uses App Command - openPageExtern

## About Widget Configuration
The widget can display either a link in text or a image link. There are additional optional configuration for the styling of either the image or text link.

- `link`: the url to be opened in an external browser
####Use one of the following two configurations.
- `imgSource`: the source url for your image link
- `linkText`: the text to display for your text link
####The following configurations are optional
- `imageHeight`: the specified height for your image. Can be (auto, length(px, rem, etc), %, initial, inherit).
- `imageWidth`: the specified width for you image. Can be (auto, length(px, rem, etc), %, initial, inherit).
- `fontSize`: the specified fontSize for your text

## Example Widget Configuration
```
<!--Widget
{
  "type": "@shopgate-project/open-external-link/ExternalLink",
  "settings": {
	"imgSource": "http://data.shopgate.com/shop_widget_images/24797/3692ec7a133d85701f713e624ceb4d51.min.jpeg",
	"imageHeight": "200px",
	"imageWidth": "200px",
	"linkText": "Example link text",
	"fontSize": "50px",
	"link": "example.com"
  }
}
-->
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.

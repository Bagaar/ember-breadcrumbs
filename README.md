# Bagaar Ember Breadcrumbs

![Bagaar Logo](https://bagaar.be/hubfs/logo-bagaar-black.svg)

**`@bagaar/ember-breadcrumbs` is built and maintained by [Bagaar](https://bagaar.be).**

[![NPM Version](https://badge.fury.io/js/%40bagaar%2Fember-breadcrumbs.svg)](https://badge.fury.io/js/%40bagaar%2Fember-breadcrumbs) [![Build Status](https://travis-ci.com/Bagaar/ember-breadcrumbs.svg?branch=master)](https://travis-ci.com/Bagaar/ember-breadcrumbs) [![Ember Observer Score](https://emberobserver.com/badges/-bagaar-ember-breadcrumbs.svg)](https://emberobserver.com/addons/@bagaar/ember-breadcrumbs) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Template based breadcrumb management for Ember applications.

## Table of Contents

- [Support](#support)
- [Installation](#installation)
- [Usage](#usage)
- [Usage Inside an Engine](#usage-inside-an-engine)
- [Contributing](#contributing)
- [License](#license)

## Support

**`@bagaar/ember-breadcrumbs` supports Ember v3.16 and up.**

For a version that is compatible with older versions of Ember, check out the [v1.X](https://github.com/Bagaar/ember-breadcrumbs/tree/v1.X) branch.

## Installation

```shell
ember install @bagaar/ember-breadcrumbs
```

## Usage

### 1\. Defining Where You Want the Breadcrumbs to Be Rendered

```handlebars
{{! app/templates/application.hbs }}

<BreadcrumbsContainer
  class="breadcrumbs"
  @itemClass="breadcrumbs__item"
  @linkClass="breadcrumbs__link"
/>
```

> **NOTE:** It's also possible to render multiple instances of the `<BreadcrumbsContainer />` component.

### 2\. Leaving Behind Breadcrumbs

```handlebars
{{! app/templates/foo.hbs }}

<BreadcrumbsItem as |linkClass|>
  <LinkTo @route="foo" class={{linkClass}}>
    Foo
  </LinkTo>
</BreadcrumbsItem>
```

```handlebars
{{! app/templates/foo/bar.hbs }}

<BreadcrumbsItem as |linkClass|>
  <LinkTo @route="foo.bar" class={{linkClass}}>
    Bar
  </LinkTo>
</BreadcrumbsItem>
```

> **NOTE:** The `<BreadcrumbsItem />` component is responsible for rendering the provided `<LinkTo />` component into all instances of the `<BreadcrumbsContainer />` component using Ember's `{{in-element}}` helper.

#### Advantages

Leaving behind breadcrumbs like this might seem very verbose, but actually it's pretty flexible and has some advantages:

1. Because you leave behind breadcrumbs inside templates, the addon doesn't have to take async model hooks into account.
2. Because you use Ember's `<LinkTo />` component to define breadcrumb links, you have complete control over:
   - **how you define them** (inline vs. block)
   - **how they should work** (route, dynamic segments, query parameters, ...)
   - **how they should look like** (text, icons, additional CSS class names, ...)

#### Rendered Output

The rendered output will be:

```html
<ul class="breadcrumbs">
  <li class="breadcrumbs__item">
    <a class="breadcrumbs__link" href="/foo">Foo</a>
  </li>
  <li class="breadcrumbs__item">
    <a class="breadcrumbs__link" href="/foo/bar">Bar</a>
  </li>
</ul>
```

### 3\. Styling the Breadcrumbs

The addon doesn't ship with default styling. This should be done inside the consuming project.

### 4\. `<BreadcrumbsContainer />` arguments

Name          | Description                                                                      | Type   
:-------------| :------------------------------------------------------------------------------- | :----- 
**itemClass** | The class(es) that will be added to all child `<BreadcrumbsItem />` components   | String 
**linkClass** | The class(es) that will be yielded to the `<BreadcrumbsItem />`'s block content  | String 

## Usage Inside an Engine

### 1\. Add `@bagaar/ember-breadcrumbs` to Your Engine's `dependencies`

This will make all `@bagaar/ember-breadcrumbs` components available inside the engine.

```json
{
  "dependencies": {
    "@bagaar/ember-breadcrumbs": "*"
  }
}
```

### 2\. Make the `breadcrumbs` Service Available Inside the Engine

This will make sure that the same instance of the `breadcrumbs` service is used inside the engine as inside the host application.

```javascript
// app/app.js

export default class App extends Application {
  // ...
  engines = {
    engineName: {
      dependencies: {
        services: [
          'breadcrumbs'
        ]
      }
    }
  }
}
```

```javascript
// lib/engine-name/addon/engine.js

export default Engine.extend({
  // ...
  dependencies: {
    services: [
      'breadcrumbs'
    ]
  }
})
```

**That's it! Now you should be able to leave behind breadcrumbs inside the engine and render them inside the host application.**

## Contributing

See the [Contributing](./CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](./LICENSE.md).

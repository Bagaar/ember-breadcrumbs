# Ember Breadcrumbs

[![CI](https://github.com/Bagaar/ember-breadcrumbs/workflows/CI/badge.svg)](https://github.com/Bagaar/ember-breadcrumbs/actions?query=workflow%3ACI)
[![NPM Version](https://badge.fury.io/js/%40bagaar%2Fember-breadcrumbs.svg)](https://badge.fury.io/js/%40bagaar%2Fember-breadcrumbs)
[![Ember Observer Score](https://emberobserver.com/badges/-bagaar-ember-breadcrumbs.svg)](https://emberobserver.com/addons/@bagaar/ember-breadcrumbs)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Template based breadcrumb management for Ember applications.

## Table of Contents

- [Support](#support)
- [Installation](#installation)
- [Usage](#usage)
- [Usage Inside an Engine](#usage-inside-an-engine)
- [Contributing](#contributing)
- [License](#license)
- [Maintenance](#maintenance)

## Support

- Ember.js v3.28 or above
- Ember CLI v3.28 or above
- Node.js v14 or above

## Installation

```shell
ember install @bagaar/ember-breadcrumbs
```

## Usage

### 1\. Defining Where You Want the Breadcrumbs to Be Rendered

```handlebars
{{! app/templates/application.hbs }}

<BreadcrumbsContainer
  @itemClass="breadcrumbs__item"
  @linkClass="breadcrumbs__link"
  class="breadcrumbs"
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

Leaving behind breadcrumbs like this might seem very verbose, but it's actually pretty flexible and has some advantages:

1. Because you leave behind breadcrumbs inside templates, the addon doesn't have to take async model hooks into account
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

The addon doesn't ship with default styling, this should be done inside the consuming project.

### 4\. `<BreadcrumbsContainer />` arguments

Name          | Description                                                                 | Type
:-------------| :---------------------------------------------------------------------------| :-----
**itemClass** | The class that will be added to all `<BreadcrumbsItem />` components        | String
**linkClass** | The class that will be yielded to the `<BreadcrumbsItem />`'s block content | String

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

This will make sure that the same instance of the `breadcrumbs` service is used inside the engine and inside the host application.

```javascript
// app/app.js

export default class App extends Application {
  engines = {
    'engine-name': {
      dependencies: {
        services: ['breadcrumbs'],
      },
    },
  };
}
```

```javascript
// lib/engine-name/addon/engine.js

export default class EngineName extends Engine {
  dependencies = {
    services: ['breadcrumbs'],
  };
}
```

**That's it! Now you should be able to leave behind breadcrumbs inside the engine and render them inside the host application.**

## Contributing

See the [Contributing](./CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](./LICENSE.md).

## Maintenance

**`@bagaar/ember-breadcrumbs` is built and maintained by [Bagaar](https://bagaar.be).**

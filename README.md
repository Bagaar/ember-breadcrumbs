# Bagaar Ember Breadcrumbs

![Bagaar Logo](https://bagaar.be/hubfs/logo-bagaar-black.svg)

**`@bagaar/ember-breadcrumbs` is built and maintained by [Bagaar](https://bagaar.be).**

[![NPM Version](https://badge.fury.io/js/%40bagaar%2Fember-breadcrumbs.svg)](https://badge.fury.io/js/%40bagaar%2Fember-breadcrumbs) [![Build Status](https://travis-ci.org/Bagaar/ember-breadcrumbs.svg?branch=master)](https://travis-ci.org/Bagaar/ember-breadcrumbs) [![Ember Observer Score](https://emberobserver.com/badges/-bagaar-ember-breadcrumbs.svg)](https://emberobserver.com/addons/@bagaar/ember-breadcrumbs) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Template based breadcrumb management for Ember applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Usage Inside an Engine](#usage-inside-an-engine)
- [License](#license)

## Installation

```shell
ember install @bagaar/ember-breadcrumbs
```

## Usage

### 1\. Defining Where You Want the Breadcrumbs to Be Rendered

```handlebars
{{! app/templates/application.hbs }}

{{bgr-breadcrumbs}}
```

> **NOTE:** It's also possible to render multiple instances of the `{{bgr-breadcrumbs}}` component.

### 2\. Leaving Behind Breadcrumbs

```handlebars
{{! app/templates/foo.hbs }}

{{#bgr-breadcrumbs-item as |linkClassName|}}
  {{#link-to "foo" class=linkClassName}}
    Foo
  {{/link-to}}
{{/bgr-breadcrumbs-item}}
```

```handlebars
{{! app/templates/foo/bar.hbs }}

{{#bgr-breadcrumbs-item as |linkClassName|}}
  {{#link-to "foo.bar" class=linkClassName}}
    Bar
  {{/link-to}}
{{/bgr-breadcrumbs-item}}
```

> **NOTE:** The `{{bgr-breadcrumbs-item}}` component is responsible for rendering the provided `{{link-to}}` component into all instances of the `{{bgr-breadcrumbs}}` component using Ember's `{{-in-element}}` component.

#### Advantages

Leaving behind breadcrumbs like this might seem very verbose, but actually it's pretty flexible and has some advantages:

1. Because you leave behind breadcrumbs inside templates, the addon doesn't have to take async model hooks into account.
2. Because you use Ember's `{{link-to}}` component to define breadcrumb links, you have complete control over:
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

### 4\. Options

Name              | Description               | Type   | Default
:---------------- | :------------------------ | :----- | :------------------
**className**     | The component class name. | String | 'breadcrumbs'
**itemClassName** | The item class name.      | String | 'breadcrumbs__item'
**linkClassName** | The link class name.      | String | 'breadcrumbs__link'

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

### 2\. Make the `bgr-breadcrumbs` Service Available Inside the Engine

This will make sure that the same instance of the `bgr-breadcrumbs` service is used inside the engine as inside the host application.

```javascript
// app/app.js

const App = Application.extend({
  // ...
  engines: {
    engineName: {
      dependencies: {
        services: [
          'bgr-breadcrumbs'
        ]
      }
    }
  }
});
```

```javascript
// lib/engine-name/addon/engine.js

const Eng = Engine.extend({
  // ...
  dependencies: {
    services: [
      'bgr-breadcrumbs'
    ]
  }
});
```

**That's it! Now you should be able to leave behind breadcrumbs inside the engine and render them inside the host application.**

## License

This project is licensed under the [MIT License](./LICENSE.md).

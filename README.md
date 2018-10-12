# Bagaar Ember Breadcrumbs

[![pipeline status](https://git.bagaar.be/shelf/front-end/ember/bgr-ember-breadcrumbs/badges/develop/pipeline.svg)](https://git.bagaar.be/shelf/front-end/ember/bgr-ember-breadcrumbs/commits/develop)

Bagaar logo goes here.

**bgr-ember-breadcrumbs is built and maintained by [Bagaar](http://bagaar.be).**

Easy breadcrumb management for Ember applications.

## Installation

```shell
$ ember install bgr-ember-breadcrumbs
```

## Usage

### 1\. Defining Where You Want the Breadcrumbs to Be Rendered

```html
<!-- application.hbs -->

{{bgr-breadcrumbs}}
```

**NOTE:** It's also possible to render multiple instances of the `{{bgr-breadcrumbs}}` component.

### 2\. Leaving Behind Breadcrumbs

```html
<!-- foo.hbs -->

{{#bgr-breadcrumbs-item as |linkClass|}}
  {{link-to "Foo" "foo" class=linkClass}}
{{/bgr-breadcrumbs-item}}
```

```html
<!-- foo/bar.hbs -->

{{#bgr-breadcrumbs-item as |linkClass|}}
  {{link-to "Bar" "foo.bar" class=linkClass}}
{{/bgr-breadcrumbs-item}}
```

**NOTE:** The `{{bgr-breadcrumbs-item}}` component is responsible for rendering the provided `{{link-to}}` component into all instances of the `{{bgr-breadcrumbs}}` component using Ember's `{{-in-element}}` component.

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

Name          | Description                 | Type   | Default
:------------ | :-------------------------- | :----- | :------------------
className     | The component's class name. | String | 'breadcrumbs'
itemClassName | The item class name.        | String | 'breadcrumbs__item'
linkClassName | The link class name.        | String | 'breadcrumbs__link'

## Contribution Guidelines

Describe the contribution guidelines.

## License

This project is licensed under the [MIT License](./LICENSE.md).

# Changelog

## Release (2025-04-16)

* @bagaar/ember-breadcrumbs 5.1.0 (minor)

#### :rocket: Enhancement
* `@bagaar/ember-breadcrumbs`
  * [#107](https://github.com/Bagaar/ember-breadcrumbs/pull/107) Update to the latest versions and addon blueprint ([@gvdp](https://github.com/gvdp))

#### :bug: Bug Fix
* [#106](https://github.com/Bagaar/ember-breadcrumbs/pull/106) Replace `inject` with `service` ([@Windvis](https://github.com/Windvis))

#### :house: Internal
* Other
  * [#109](https://github.com/Bagaar/ember-breadcrumbs/pull/109) Update release plan boilerplate ([@gvdp](https://github.com/gvdp))
  * [#100](https://github.com/Bagaar/ember-breadcrumbs/pull/100) Use template imports ([@bertdeblock](https://github.com/bertdeblock))
  * [#101](https://github.com/Bagaar/ember-breadcrumbs/pull/101) Set up Release Plan ([@bertdeblock](https://github.com/bertdeblock))
* `@bagaar/ember-breadcrumbs`
  * [#107](https://github.com/Bagaar/ember-breadcrumbs/pull/107) Update to the latest versions and addon blueprint ([@gvdp](https://github.com/gvdp))

#### Committers: 3
- Bert De Block ([@bertdeblock](https://github.com/bertdeblock))
- Sam Van Campenhout ([@Windvis](https://github.com/Windvis))
- [@gvdp](https://github.com/gvdp)

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.


## v5.0.0 (2024-03-05)

#### :boom: Breaking Change
* [#99](https://github.com/Bagaar/ember-breadcrumbs/pull/99) Convert to v2 addon ([@bertdeblock](https://github.com/bertdeblock))

#### :rocket: Enhancement
* [#97](https://github.com/Bagaar/ember-breadcrumbs/pull/97) Provide an extendable template registry ([@bertdeblock](https://github.com/bertdeblock))

#### Committers: 1
- Bert De Block ([@bertdeblock](https://github.com/bertdeblock))

## [4.1.0](https://github.com/Bagaar/ember-breadcrumbs/compare/v4.0.0...v4.1.0) (2023-07-05)


### Features

* add support for `ember-modifier` v4 ([2b85c8b](https://github.com/Bagaar/ember-breadcrumbs/commit/2b85c8bc62885f65f1490240012601b7195f2eb5))

## [4.0.0](https://github.com/Bagaar/ember-breadcrumbs/compare/v3.0.0...v4.0.0) (2022-10-21)


### ⚠ BREAKING CHANGES

* migrate to TypeScript

### Features

* add Glint types ([e638caf](https://github.com/Bagaar/ember-breadcrumbs/commit/e638cafc0484bbac025cd6dc2cb5b909465b8d5e))
* migrate to TypeScript ([e3151f8](https://github.com/Bagaar/ember-breadcrumbs/commit/e3151f8f892e7f64b6a0dd07d09a8eadf93cbcc9))

## [3.0.0](https://github.com/Bagaar/ember-breadcrumbs/compare/v2.0.0...v3.0.0) (2022-06-23)


### ⚠ BREAKING CHANGES

* drop support for Ember v3.20
* drop support for Node v12

### Features

* use `ember-modifier` instead of `@ember/render-modifiers` ([631a46c](https://github.com/Bagaar/ember-breadcrumbs/commit/631a46c1e2052b4c33854826df467172bb18b3c8))


* drop support for Ember v3.20 ([a4d5747](https://github.com/Bagaar/ember-breadcrumbs/commit/a4d5747f1e0b4838f3918b7b42de71db5260a886))
* drop support for Node v12 ([ff7fbb3](https://github.com/Bagaar/ember-breadcrumbs/commit/ff7fbb3f44f9d7a14b61dbbffbb086a301f52012))

## [2.0.0](https://github.com/Bagaar/ember-breadcrumbs/compare/v1.0.0...v2.0.0) (2022-03-09)


### ⚠ BREAKING CHANGES

* drop support for Ember versions below v3.20
* remove support for Ember v3.16
* switch to native classes and Glimmer components

* drop support for Ember versions below v3.20 ([b0a0527](https://github.com/Bagaar/ember-breadcrumbs/commit/b0a0527bf41838db32a562e083effbf0f694bdab))
* remove support for Ember v3.16 ([709d32d](https://github.com/Bagaar/ember-breadcrumbs/commit/709d32d22f23cb84dd0a87da2c37c4279d81fe16))
* switch to native classes and Glimmer components ([1ffc3b6](https://github.com/Bagaar/ember-breadcrumbs/commit/1ffc3b67787d56f72a6a639f1adfdd871f36e874))

## [1.0.0](https://github.com/Bagaar/ember-breadcrumbs/compare/v1.0.0-beta.1...v1.0.0) (2021-04-05)

## [1.0.0-beta.3](https://github.com/Bagaar/ember-breadcrumbs/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-05-18)

* Updated `ember-in-element-polyfill` dependency ([#42](https://github.com/Bagaar/ember-breadcrumbs/pull/42/files))

## [1.0.0-beta.2](https://github.com/Bagaar/ember-breadcrumbs/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-03-20)

* Updated dependencies ([#38](https://github.com/Bagaar/ember-breadcrumbs/pull/38))

## [1.0.0-beta.1](https://github.com/Bagaar/ember-breadcrumbs/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2020-01-23)


### ⚠ BREAKING CHANGES

* Renamed the `<Breadcrumbs />` component to `<BreadcrumbsContainer />` ([2eaf739](https://github.com/Bagaar/ember-breadcrumbs/commit/2eaf7396aed1963a8bbf5a3547c3375eb0a02fd4))

## [1.0.0-beta.0](https://github.com/Bagaar/ember-breadcrumbs/compare/v0.3.2...v1.0.0-beta.0) (2020-01-03)


### ⚠ BREAKING CHANGES

* Dropped support for Ember versions below 3.4 LTS
* Dropped support for classic "curly" component invocation syntax
* Removed the `bgr-` prefix from all components ([87bb2ec](https://github.com/Bagaar/ember-breadcrumbs/commit/87bb2eca039b2dc07adcfe61eb2461ce1de7caa9))
* Removed the default BEM style classes ([bf0a407](https://github.com/Bagaar/ember-breadcrumbs/commit/bf0a40748eb19eb5d301ee2a17188ecd48701543))
* Removed the `@className` argument from the `<Breadcrumbs />` component since the `class` HTML attribute can fully replace it ([bf0a407](https://github.com/Bagaar/ember-breadcrumbs/commit/bf0a40748eb19eb5d301ee2a17188ecd48701543))
* Renamed `@itemClassName` to `@itemClass` ([bf0a407](https://github.com/Bagaar/ember-breadcrumbs/commit/bf0a40748eb19eb5d301ee2a17188ecd48701543))
* Renamed `@linkClassName` to `@linkClass` ([bf0a407](https://github.com/Bagaar/ember-breadcrumbs/commit/bf0a40748eb19eb5d301ee2a17188ecd48701543))
* Drop node 6 support ([15bf00d](https://github.com/Bagaar/ember-breadcrumbs/commit/15bf00df019c778edeb890c438d575f822459dc8))

<a name="0.3.2"></a>
## [0.3.2](https://github.com/Bagaar/ember-breadcrumbs/compare/v0.3.1...v0.3.2) (2019-01-30)

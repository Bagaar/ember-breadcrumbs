import { LinkTo } from '@ember/routing';
import { pageTitle } from 'ember-page-title';

import BreadcrumbsContainer from '#src/components/breadcrumbs-container.gts';

<template>
  {{pageTitle "Demo App"}}

  <h1>Welcome to ember!</h1>

  <BreadcrumbsContainer
    @itemClass="breadcrumbs__item"
    @linkClass="breadcrumbs__link"
    class="breadcrumbs"
  />

  <nav>
    <LinkTo @route="foo">Foo</LinkTo>
    <LinkTo @route="foo.bar">Bar</LinkTo>
  </nav>

  {{outlet}}
</template>

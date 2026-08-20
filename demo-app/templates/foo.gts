import { LinkTo } from '@ember/routing';

import BreadcrumbsItem from '#src/components/breadcrumbs-item.gts';

<template>
  <BreadcrumbsItem as |linkClass|>
    <LinkTo @route="foo" class={{linkClass}}>
      Foo
    </LinkTo>
  </BreadcrumbsItem>

  {{outlet}}
</template>

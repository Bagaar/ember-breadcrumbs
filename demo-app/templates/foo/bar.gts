import { LinkTo } from '@ember/routing';

import BreadcrumbsItem from '#src/components/breadcrumbs-item.gts';

<template>
  <BreadcrumbsItem as |linkClass|>
    <LinkTo @route="foo.bar" class={{linkClass}}>
      Bar
    </LinkTo>
  </BreadcrumbsItem>
</template>

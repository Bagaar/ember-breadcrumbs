// components
import type BreadcrumbsContainer from '@bagaar/ember-breadcrumbs/components/breadcrumbs-container';
import type BreadcrumbsItem from '@bagaar/ember-breadcrumbs/components/breadcrumbs-item';

export default interface BagaarEmberBreadcrumbsRegistry {
  // components
  'breadcrumbs-container': typeof BreadcrumbsContainer;
  BreadcrumbsContainer: typeof BreadcrumbsContainer;
  'breadcrumbs-item': typeof BreadcrumbsItem;
  BreadcrumbsItem: typeof BreadcrumbsItem;
}

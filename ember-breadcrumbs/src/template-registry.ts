// components
import type BreadcrumbsContainer from './components/breadcrumbs-container.ts';
import type BreadcrumbsItem from './components/breadcrumbs-item.ts';

export default interface BagaarEmberBreadcrumbsRegistry {
  // components
  'breadcrumbs-container': typeof BreadcrumbsContainer;
  BreadcrumbsContainer: typeof BreadcrumbsContainer;
  'breadcrumbs-item': typeof BreadcrumbsItem;
  BreadcrumbsItem: typeof BreadcrumbsItem;
}

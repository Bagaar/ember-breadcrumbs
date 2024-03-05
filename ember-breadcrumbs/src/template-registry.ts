// components
import type BreadcrumbsContainer from './components/breadcrumbs-container.gts';
import type BreadcrumbsItem from './components/breadcrumbs-item.gts';

export default interface BagaarEmberBreadcrumbsRegistry {
  // components
  'breadcrumbs-container': typeof BreadcrumbsContainer;
  BreadcrumbsContainer: typeof BreadcrumbsContainer;
  'breadcrumbs-item': typeof BreadcrumbsItem;
  BreadcrumbsItem: typeof BreadcrumbsItem;
}

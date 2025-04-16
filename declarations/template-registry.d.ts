import type BreadcrumbsContainer from './components/breadcrumbs-container';
import type BreadcrumbsItem from './components/breadcrumbs-item';
export default interface BagaarEmberBreadcrumbsRegistry {
    'breadcrumbs-container': typeof BreadcrumbsContainer;
    BreadcrumbsContainer: typeof BreadcrumbsContainer;
    'breadcrumbs-item': typeof BreadcrumbsItem;
    BreadcrumbsItem: typeof BreadcrumbsItem;
}

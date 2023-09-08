import type BreadcrumbsContainerComponent from '@bagaar/ember-breadcrumbs/components/breadcrumbs-container';
import type BreadcrumbsItemComponent from '@bagaar/ember-breadcrumbs/components/breadcrumbs-item';
import type BreadcrumbsContainerModifier from '@bagaar/ember-breadcrumbs/modifiers/breadcrumbs-container';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    BreadcrumbsContainer: typeof BreadcrumbsContainerComponent;
    BreadcrumbsItem: typeof BreadcrumbsItemComponent;
    'breadcrumbs-container': typeof BreadcrumbsContainerModifier;
  }
}

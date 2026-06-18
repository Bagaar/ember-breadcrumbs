// Easily allow apps, which are not yet using strict mode templates, to consume your Glint types, by importing this file.
// Add all your components, helpers and modifiers to the template registry here, so apps don't have to do this.
// See https://typed-ember.gitbook.io/glint/environments/ember/authoring-addons

import type BreadcrumbsContainer from './components/breadcrumbs-container.gts';
import type BreadcrumbsItem from './components/breadcrumbs-item.gts';

export default interface BagaarEmberBreadcrumbsRegistry {
  // components
  'breadcrumbs-container': typeof BreadcrumbsContainer;
  BreadcrumbsContainer: typeof BreadcrumbsContainer;
  'breadcrumbs-item': typeof BreadcrumbsItem;
  BreadcrumbsItem: typeof BreadcrumbsItem;
}

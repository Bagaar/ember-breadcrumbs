import breadcrumbsContainerModifier from '@bagaar/ember-breadcrumbs/-private/breadcrumbs-container-modifier';
import Component from '@glimmer/component';

interface BreadcrumbsContainerComponentSignature {
  Args: {
    itemClass?: string;
    linkClass?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLUListElement;
}

export default class BreadcrumbsContainerComponent extends Component<BreadcrumbsContainerComponentSignature> {
  breadcrumbsContainerModifier = breadcrumbsContainerModifier;
}

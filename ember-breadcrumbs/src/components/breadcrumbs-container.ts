import Component from '@glimmer/component';
import breadcrumbsContainerModifier from '../-private/breadcrumbs-container-modifier.ts';

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

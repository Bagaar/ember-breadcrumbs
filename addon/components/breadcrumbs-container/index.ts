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

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class BreadcrumbsContainerComponent extends Component<BreadcrumbsContainerComponentSignature> {}

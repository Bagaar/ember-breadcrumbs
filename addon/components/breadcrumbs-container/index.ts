import templateOnlyComponent from '@ember/component/template-only';

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

export default templateOnlyComponent<BreadcrumbsContainerComponentSignature>();

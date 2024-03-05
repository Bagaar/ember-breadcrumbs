import type { TOC } from '@ember/component/template-only';
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

const BreadcrumbsContainerComponent: TOC<BreadcrumbsContainerComponentSignature> =
  <template>
    <ul
      {{breadcrumbsContainerModifier itemClass=@itemClass linkClass=@linkClass}}
      ...attributes
    >
      {{yield}}
    </ul>
  </template>;

export default BreadcrumbsContainerComponent;

import breadcrumbsContainerModifier from '../-private/breadcrumbs-container-modifier.ts';

import type { TOC } from '@ember/component/template-only';

export interface BreadcrumbsContainerSignature {
  Args: {
    itemClass?: string;
    linkClass?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLUListElement;
}

const BreadcrumbsContainer: TOC<BreadcrumbsContainerSignature> = <template>
  <ul
    {{breadcrumbsContainerModifier itemClass=@itemClass linkClass=@linkClass}}
    ...attributes
  >
    {{yield}}
  </ul>
</template>;

export default BreadcrumbsContainer;

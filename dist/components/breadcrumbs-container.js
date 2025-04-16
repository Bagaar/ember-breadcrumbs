import BreadcrumbsContainerModifier from '../-private/breadcrumbs-container-modifier.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const BreadcrumbsContainerComponent = setComponentTemplate(precompileTemplate("\n    <ul {{breadcrumbsContainerModifier itemClass=@itemClass linkClass=@linkClass}} ...attributes>\n      {{yield}}\n    </ul>\n  ", {
  strictMode: true,
  scope: () => ({
    breadcrumbsContainerModifier: BreadcrumbsContainerModifier
  })
}), templateOnly());

export { BreadcrumbsContainerComponent as default };
//# sourceMappingURL=breadcrumbs-container.js.map

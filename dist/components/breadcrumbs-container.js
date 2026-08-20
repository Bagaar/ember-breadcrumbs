import BreadcrumbsContainerModifier from '../-private/breadcrumbs-container-modifier.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

const BreadcrumbsContainer = setComponentTemplate(precompileTemplate("<ul {{breadcrumbsContainerModifier itemClass=@itemClass linkClass=@linkClass}} ...attributes>\n  {{yield}}\n</ul>", {
  strictMode: true,
  scope: () => ({
    breadcrumbsContainerModifier: BreadcrumbsContainerModifier
  })
}), templateOnly());

export { BreadcrumbsContainer as default };
//# sourceMappingURL=breadcrumbs-container.js.map

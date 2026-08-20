import Component from '@glimmer/component';
import { service } from '@ember/service';
import '../services/breadcrumbs.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i } from 'decorator-transforms/runtime-esm';

class BreadcrumbsItem extends Component {
  static {
    g(this.prototype, "breadcrumbsService", [service('breadcrumbs')]);
  }
  #breadcrumbsService = (i(this, "breadcrumbsService"), void 0);
  static {
    setComponentTemplate(precompileTemplate("{{#each this.breadcrumbsService.containers as |container|}}\n  {{#in-element container.element insertBefore=null}}\n    <li class={{container.itemClass}} ...attributes>\n      {{yield container.linkClass}}\n    </li>\n  {{/in-element}}\n{{/each}}", {
      strictMode: true
    }), this);
  }
}

export { BreadcrumbsItem as default };
//# sourceMappingURL=breadcrumbs-item.js.map

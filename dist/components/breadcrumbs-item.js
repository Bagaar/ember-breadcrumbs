import { service } from '@ember/service';
import Component from '@glimmer/component';
import '../services/breadcrumbs.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i } from 'decorator-transforms/runtime';

class BreadcrumbsItemComponent extends Component {
  static {
    g(this.prototype, "breadcrumbsService", [service('breadcrumbs')]);
  }
  #breadcrumbsService = (i(this, "breadcrumbsService"), void 0);
  static {
    setComponentTemplate(precompileTemplate("\n    {{#each this.breadcrumbsService.containers as |container|}}\n      {{#in-element container.element insertBefore=null}}\n        <li class={{container.itemClass}} ...attributes>\n          {{yield container.linkClass}}\n        </li>\n      {{/in-element}}\n    {{/each}}\n  ", {
      strictMode: true
    }), this);
  }
}

export { BreadcrumbsItemComponent as default };
//# sourceMappingURL=breadcrumbs-item.js.map

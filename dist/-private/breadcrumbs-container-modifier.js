import { registerDestructor } from '@ember/destroyable';
import { service } from '@ember/service';
import Modifier from 'ember-modifier';
import '../services/breadcrumbs.js';
import { g, i } from 'decorator-transforms/runtime';

class BreadcrumbsContainerModifier extends Modifier {
  static {
    g(this.prototype, "breadcrumbsService", [service('breadcrumbs')]);
  }
  #breadcrumbsService = (i(this, "breadcrumbsService"), void 0);
  container = null;
  modify(element, positional, {
    itemClass,
    linkClass
  }) {
    if (this.container) {
      return;
    }
    this.container = {
      element,
      itemClass,
      linkClass
    };
    this.breadcrumbsService.registerContainer(this.container);
    registerDestructor(this, unregisterContainer);
  }
}
function unregisterContainer(instance) {
  if (instance.container) {
    instance.breadcrumbsService.unregisterContainer(instance.container);
  }
}

export { BreadcrumbsContainerModifier as default };
//# sourceMappingURL=breadcrumbs-container-modifier.js.map

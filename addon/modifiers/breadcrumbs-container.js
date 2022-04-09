import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
import Modifier from 'ember-modifier';

export default class BreadcrumbsContainerModifier extends Modifier {
  @service('breadcrumbs') breadcrumbsService;

  container = null;

  constructor() {
    super(...arguments);

    registerDestructor(this, unregisterContainer);
  }

  modify(element, _positional, { itemClass, linkClass }) {
    this.container = {
      element,
      itemClass,
      linkClass,
    };

    this.breadcrumbsService.registerContainer(this.container);
  }
}

function unregisterContainer(instance) {
  instance.breadcrumbsService.unregisterContainer(instance.container);
}

import { registerDestructor } from '@ember/destroyable';
import { service } from '@ember/service';
import Modifier from 'ember-modifier';
import BreadcrumbsService from '../services/breadcrumbs.ts';

import type { NamedArgs, PositionalArgs } from 'ember-modifier';
import type { Container } from '../services/breadcrumbs.ts';

interface BreadcrumbsContainerModifierSignature {
  Element: HTMLUListElement;
  Args: {
    Named: {
      itemClass?: string;
      linkClass?: string;
    };
  };
}

export default class BreadcrumbsContainerModifier extends Modifier<BreadcrumbsContainerModifierSignature> {
  @service('breadcrumbs') declare breadcrumbsService: BreadcrumbsService;

  container: Container | null = null;

  modify(
    element: BreadcrumbsContainerModifierSignature['Element'],
    positional: PositionalArgs<BreadcrumbsContainerModifierSignature>,
    { itemClass, linkClass }: NamedArgs<BreadcrumbsContainerModifierSignature>,
  ) {
    if (this.container) {
      return;
    }

    this.container = { element, itemClass, linkClass };

    this.breadcrumbsService.registerContainer(this.container);

    registerDestructor(this, unregisterContainer);
  }
}

function unregisterContainer(instance: BreadcrumbsContainerModifier) {
  if (instance.container) {
    instance.breadcrumbsService.unregisterContainer(instance.container);
  }
}

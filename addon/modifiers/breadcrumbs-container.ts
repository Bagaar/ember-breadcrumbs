import BreadcrumbsService from '@bagaar/ember-breadcrumbs/services/breadcrumbs';
import type { Container } from '@bagaar/ember-breadcrumbs/services/breadcrumbs';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
import Modifier, { ArgsFor, NamedArgs, PositionalArgs } from 'ember-modifier';

interface BreadcrumbsContainerModifierSignature {
  Element: HTMLUListElement;
  Args: {
    Named: {
      itemClass?: string;
      linkClass?: string;
    };
    Positional: [];
  };
}

export default class BreadcrumbsContainerModifier extends Modifier<BreadcrumbsContainerModifierSignature> {
  @service('breadcrumbs') declare breadcrumbsService: BreadcrumbsService;

  container: Container | null = null;

  constructor(
    owner: unknown,
    args: ArgsFor<BreadcrumbsContainerModifierSignature>
  ) {
    super(owner, args);

    registerDestructor(this, unregisterContainer);
  }

  modify(
    element: HTMLUListElement,
    _positional: PositionalArgs<BreadcrumbsContainerModifierSignature>,
    { itemClass, linkClass }: NamedArgs<BreadcrumbsContainerModifierSignature>
  ) {
    this.container = {
      element,
      itemClass,
      linkClass,
    };

    this.breadcrumbsService.registerContainer(this.container);
  }
}

function unregisterContainer(instance: BreadcrumbsContainerModifier) {
  if (instance.container) {
    instance.breadcrumbsService.unregisterContainer(instance.container);
  }
}

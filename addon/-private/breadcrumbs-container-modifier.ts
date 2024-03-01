import BreadcrumbsService, {
  type Container,
} from '@bagaar/ember-breadcrumbs/services/breadcrumbs';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
import Modifier, { type NamedArgs, type PositionalArgs } from 'ember-modifier';

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

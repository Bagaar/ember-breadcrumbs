import { assert } from '@ember/debug';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BreadcrumbsService extends Service {
  @tracked containers = [];

  registerContainer(container) {
    assert(
      'A DOM element is required to register a breadcrumb container.',
      container.element
    );

    assert(
      'A breadcrumb container with the same DOM element has already been registered before.',
      !this.isContainerRegistered(container)
    );

    this.containers = [...this.containers, container];
  }

  unregisterContainer(container) {
    assert(
      'A DOM element is required to unregister a breadcrumb container.',
      container.element
    );

    assert(
      'No breadcrumb container was found with this DOM element.',
      this.isContainerRegistered(container)
    );

    this.containers = this.containers.filter((registeredContainer) => {
      return container.element !== registeredContainer.element;
    });
  }

  isContainerRegistered(container) {
    return this.containers.some((registeredContainer) => {
      return container.element === registeredContainer.element;
    });
  }
}

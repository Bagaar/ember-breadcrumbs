import { assert } from '@ember/debug';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class BreadcrumbsService extends Service {
  @tracked containers = [];

  _containers = [];

  registerContainer(container) {
    assert(
      'A DOM element is required to register a breadcrumb container.',
      container.element
    );

    assert(
      'A breadcrumb container with the same DOM element has already been registered before.',
      !this.isContainerRegistered(container)
    );

    this._containers = [...this._containers, container];

    this.containers = this._containers;
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

    this._containers = this._containers.filter((registeredContainer) => {
      return container.element !== registeredContainer.element;
    });

    this.containers = this._containers;
  }

  isContainerRegistered(container) {
    return this._containers.some((registeredContainer) => {
      return container.element === registeredContainer.element;
    });
  }
}

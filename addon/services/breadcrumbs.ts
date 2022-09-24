import { assert } from '@ember/debug';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export interface Container {
  element: HTMLUListElement;
  itemClass: string;
  linkClass: string;
}

export default class BreadcrumbsService extends Service {
  @tracked containers: Container[] = [];

  #containers: Container[] = [];

  registerContainer(container: Container): void {
    assert(
      'A breadcrumb container with the same DOM element has already been registered before.',
      !this.#isContainerRegistered(container)
    );

    this.#containers = [...this.#containers, container];

    this.containers = this.#containers;
  }

  unregisterContainer(container: Container): void {
    assert(
      'No breadcrumb container was found with this DOM element.',
      this.#isContainerRegistered(container)
    );

    this.#containers = this.#containers.filter((registeredContainer) => {
      return container.element !== registeredContainer.element;
    });

    this.containers = this.#containers;
  }

  #isContainerRegistered(container: Container): boolean {
    return this.#containers.some((registeredContainer) => {
      return container.element === registeredContainer.element;
    });
  }
}

declare module '@ember/service' {
  interface Registry {
    breadcrumbs: BreadcrumbsService;
  }
}

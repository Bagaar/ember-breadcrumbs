import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import BreadcrumbsService from '#src/services/breadcrumbs.ts';

import type { Container } from '#src/services/breadcrumbs.ts';

module('Unit | Service | breadcrumbs', function (hooks) {
  setupTest(hooks);

  test('it registers/unregisters breadcrumb containers', function (assert) {
    const breadcrumbsService = new BreadcrumbsService(this.owner);

    const container = getDummyContainer();

    breadcrumbsService.registerContainer(container);
    assert.strictEqual(breadcrumbsService.containers.length, 1);

    breadcrumbsService.unregisterContainer(container);
    assert.strictEqual(breadcrumbsService.containers.length, 0);
  });

  test('it throws when registering the same breadcrumb container twice', function (assert) {
    const breadcrumbsService = new BreadcrumbsService(this.owner);

    const container = getDummyContainer();

    breadcrumbsService.registerContainer(container);

    assert.throws(function () {
      breadcrumbsService.registerContainer(container);
    });
  });
});

function getDummyContainer(): Container {
  return {
    element: document.createElement('ul'),
  };
}

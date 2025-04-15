import type { Container } from '@bagaar/ember-breadcrumbs/services/breadcrumbs';
import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Service | breadcrumbs', function (hooks) {
  setupTest(hooks);

  test('it registers/unregisters breadcrumb containers', function (assert) {
    const breadcrumbsService = this.owner.lookup('service:breadcrumbs');

    const container = getDummyContainer();

    breadcrumbsService.registerContainer(container);
    assert.strictEqual(breadcrumbsService.containers.length, 1);

    breadcrumbsService.unregisterContainer(container);
    assert.strictEqual(breadcrumbsService.containers.length, 0);
  });

  test('it throws when registering the same breadcrumb container twice', function (assert) {
    const breadcrumbsService = this.owner.lookup('service:breadcrumbs');

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

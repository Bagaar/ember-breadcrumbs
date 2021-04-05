import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Service | breadcrumbs', function (hooks) {
  setupTest(hooks);

  test('it registers/unregisters breadcrumb containers', function (assert) {
    const breadcrumbsService = this.owner.lookup('service:breadcrumbs');
    const container = getDummyContainer();

    breadcrumbsService.registerContainer(container);
    assert.equal(breadcrumbsService.containers.length, 1);

    breadcrumbsService.unregisterContainer(container);
    assert.equal(breadcrumbsService.containers.length, 0);
  });

  test('it throws when no DOM element is provided', function (assert) {
    const breadcrumbsService = this.owner.lookup('service:breadcrumbs');

    assert.throws(function () {
      breadcrumbsService.registerContainer({});
    });
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

function getDummyContainer() {
  return {
    element: document.createElement('div'),
  };
}

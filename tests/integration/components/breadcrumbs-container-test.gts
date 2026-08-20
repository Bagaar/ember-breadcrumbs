import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';

import BreadcrumbsContainer from '#src/components/breadcrumbs-container.gts';
import BreadcrumbsService from '#src/services/breadcrumbs.ts';

module('Integration | Component | breadcrumbs-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it registers/unregisters', async function (assert) {
    const breadcrumbsService = new BreadcrumbsService(this.owner);

    this.owner.register('service:breadcrumbs', breadcrumbsService, {
      instantiate: false,
    });

    await render(<template><BreadcrumbsContainer /></template>);

    assert.strictEqual(breadcrumbsService.containers.length, 1);

    await render(
      <template>
        {{! no breadcrumbs container }}
      </template>,
    );

    assert.strictEqual(breadcrumbsService.containers.length, 0);
  });

  test('it renders the correct base class name', async function (assert) {
    await render(
      <template><BreadcrumbsContainer class="class-name" /></template>,
    );

    assert.dom('.class-name').exists();
  });

  test('it renders multiple instances with the correct base class name', async function (assert) {
    await render(
      <template>
        <BreadcrumbsContainer class="class-name-1" />
        <BreadcrumbsContainer class="class-name-2" />
      </template>,
    );

    assert.dom('.class-name-1').exists();
    assert.dom('.class-name-2').exists();
  });
});

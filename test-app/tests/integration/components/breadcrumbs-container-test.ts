import BreadcrumbsService from '@bagaar/ember-breadcrumbs/services/breadcrumbs';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | breadcrumbs-container', function (hooks) {
  setupRenderingTest(hooks);

  test('it registers/unregisters', async function (assert) {
    const breadcrumbsService = this.owner.lookup(
      'service:breadcrumbs',
    ) as BreadcrumbsService;

    await render(hbs`
      <BreadcrumbsContainer />
    `);

    assert.strictEqual(breadcrumbsService.containers.length, 1);

    await render(hbs``);

    assert.strictEqual(breadcrumbsService.containers.length, 0);
  });

  test('it renders the correct base class name', async function (assert) {
    await render(hbs`
      <BreadcrumbsContainer class="class-name" />
    `);

    assert.dom('.class-name').exists();
  });

  test('it renders multiple instances with the correct base class name', async function (assert) {
    await render(hbs`
      <BreadcrumbsContainer class="class-name-1" />
      <BreadcrumbsContainer class="class-name-2" />
    `);

    assert.dom('.class-name-1').exists();
    assert.dom('.class-name-2').exists();
  });
});

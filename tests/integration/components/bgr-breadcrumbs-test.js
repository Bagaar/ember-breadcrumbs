import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bgr-breadcrumbs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs `{{bgr-breadcrumbs}}`);

    assert.ok(this.element.querySelector('.breadcrumbs'));
  });
});

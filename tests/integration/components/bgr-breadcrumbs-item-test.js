import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bgr-breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs `
      {{bgr-breadcrumbs}}

      {{#bgr-breadcrumbs-item as |linkClass|}}
        {{link-to "foo" "foo" class=linkClass}}
      {{/bgr-breadcrumbs-item}}
    `);

    assert.ok(this.element.querySelector('.breadcrumbs .breadcrumbs__link'));
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bgr-breadcrumbs-link', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs `
      {{bgr-breadcrumbs}}

      {{#bgr-breadcrumbs-link as |linkClass|}}
        {{link-to "foo" "foo" class=linkClass}}
      {{/bgr-breadcrumbs-link}}
    `);

    assert.ok(this.element.querySelector('.breadcrumbs .breadcrumbs__link'));
  });
});

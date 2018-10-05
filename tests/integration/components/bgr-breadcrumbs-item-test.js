import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bgr-breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class name', async function (assert) {
    await render(hbs `
      {{bgr-breadcrumbs baseClassName="base-class-name"}}

      {{#bgr-breadcrumbs-item as |linkClass|}}
        {{link-to "Foo" "foo" class=linkClass}}
      {{/bgr-breadcrumbs-item}}
    `);

    assert.ok(this.element.querySelector('.base-class-name .base-class-name__link'));
  });
});

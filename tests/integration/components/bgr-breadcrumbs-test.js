import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | bgr-breadcrumbs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct base class name', async function (assert) {
    await render(hbs `{{bgr-breadcrumbs baseClassName="base-class-name"}}`);

    assert.ok(this.element.querySelector('.base-class-name'));
  });

  test('it renders multiple instances with the correct base class name', async function (assert) {
    await render(hbs `
      {{bgr-breadcrumbs baseClassName="base-class-name-1"}}
      {{bgr-breadcrumbs baseClassName="base-class-name-2"}}
    `);

    assert.ok(this.element.querySelector('.base-class-name-1'));
    assert.ok(this.element.querySelector('.base-class-name-2'));
  });
});

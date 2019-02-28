import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | bgr-breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders the correct class names', async function (assert) {
    await render(hbs`
      {{bgr-breadcrumbs
        className="class-name"
        itemClassName="item-class-name"
        linkClassName="link-class-name"
      }}

      {{#bgr-breadcrumbs-item as |linkClassName|}}
        {{link-to "Foo" "foo" class=linkClassName}}
      {{/bgr-breadcrumbs-item}}
    `)

    assert.ok(
      this.element.querySelector(
        '.class-name .item-class-name .link-class-name'
      )
    )
  })
})

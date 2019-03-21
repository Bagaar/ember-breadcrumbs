import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders the correct class names', async function (assert) {
    await render(hbs`
      <Breadcrumbs
        @className="class-name"
        @itemClassName="item-class-name"
        @linkClassName="link-class-name"
      />

      <BreadcrumbsItem as |linkClassName|>
        {{link-to "Foo" "foo" class=linkClassName}}
      </BreadcrumbsItem>
    `)

    assert.ok(
      this.element.querySelector(
        '.class-name .item-class-name .link-class-name'
      )
    )
  })
})

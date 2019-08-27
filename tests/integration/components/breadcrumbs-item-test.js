import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders the correct class names', async function (assert) {
    await render(hbs`
      <Breadcrumbs
        class="class-name"
        @itemClass="item-class-name"
        @linkClass="link-class-name"
      />

      <BreadcrumbsItem as |linkClass|>
        {{#link-to "foo" class=linkClass}}
          Foo
        {{/link-to}}
      </BreadcrumbsItem>
    `)

    assert.dom('.class-name .item-class-name .link-class-name').exists()
  })

  test('it appends new breadcrumb items', async function (assert) {
    await render(hbs`
      <Breadcrumbs @itemClass="item-class-name" />
      <BreadcrumbsItem />
      <BreadcrumbsItem />
    `)

    assert.dom('.item-class-name').exists({ count: 2 })
  })
})

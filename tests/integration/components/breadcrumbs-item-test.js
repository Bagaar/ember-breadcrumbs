import { render } from '@ember/test-helpers'
import { setupRenderingTest } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import { module, test } from 'qunit'

module('Integration | Component | breadcrumbs-item', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders the correct class names', async function (assert) {
    await render(hbs`
      <BreadcrumbsContainer
        @itemClass="item-class-name"
        @linkClass="link-class-name"
        class="class-name"
      />

      <BreadcrumbsItem as |linkClass|>
        <LinkTo @route="foo" class={{linkClass}}>
          Foo
        </LinkTo>
      </BreadcrumbsItem>
    `)

    assert.dom('.class-name .item-class-name .link-class-name').exists()
  })

  test('it appends new breadcrumb items', async function (assert) {
    await render(hbs`
      <BreadcrumbsContainer @itemClass="item-class-name" />
      <BreadcrumbsItem />
      <BreadcrumbsItem />
    `)

    assert.dom('.item-class-name').exists({ count: 2 })
  })
})

import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | breadcrumbs', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders the correct base class name', async function (assert) {
    await render(hbs`<Breadcrumbs class="class-name" />`)

    assert.ok(this.element.querySelector('.class-name'))
  })

  test('it renders multiple instances with the correct base class name', async function (assert) {
    await render(hbs`
      <Breadcrumbs class="class-name-1" />
      <Breadcrumbs class="class-name-2" />
    `)

    assert.dom('.class-name-1').exists()
    assert.dom('.class-name-2').exists()
  })
})

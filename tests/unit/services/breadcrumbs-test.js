import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Service | breadcrumbs', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:breadcrumbs')

    assert.ok(service)
  })
})

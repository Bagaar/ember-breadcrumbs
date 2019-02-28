import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Service | bgr-breadcrumbs', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:bgr-breadcrumbs')

    assert.ok(service)
  })
})

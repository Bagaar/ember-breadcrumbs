import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Service | breadcrumbs', function (hooks) {
  setupTest(hooks)

  test('it can register new breadcrumb containers', function (assert) {
    const service = this.owner.lookup('service:breadcrumbs')

    assert.equal(service.containers.length, 0)

    const containerData = getDummyContainerData()

    service.registerContainer(containerData)
    assert.equal(service.containers.length, 1)
    assert.equal(service.containers[0], containerData)

    const secondContainerData = getDummyContainerData()

    service.registerContainer(secondContainerData)
    assert.equal(service.containers.length, 2)
    assert.equal(service.containers[1], secondContainerData)
  })

  test('it throws an error when trying to register the same container multiple times', function (assert) {
    const service = this.owner.lookup('service:breadcrumbs')

    const containerData = getDummyContainerData()

    service.registerContainer(containerData)

    assert.throws(function () {
      service.registerContainer(containerData)
    })
  })

  test('it throws an error if no element is provided', function (assert) {
    const service = this.owner.lookup('service:breadcrumbs')

    assert.throws(function () {
      const invalidContainerData = {}
      service.registerContainer(invalidContainerData)
    })
  })

  test('it can unregister containers', function (assert) {
    const service = this.owner.lookup('service:breadcrumbs')

    const containerData = getDummyContainerData
    service.containers.push(containerData)

    service.unregisterContainer(containerData)
    assert.equal(service.containers.length, 0)
  })
})

function getDummyContainerData () {
  return {
    element: document.createElement('div')
  }
}

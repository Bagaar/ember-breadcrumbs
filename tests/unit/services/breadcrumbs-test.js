import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Service | breadcrumbs', function (hooks) {
  setupTest(hooks)

  test('it can register new breadcrumb containers', function (assert) {
    let service = this.owner.lookup('service:breadcrumbs')

    assert.equal(service.containers.length, 0)

    let containerData = getDummyContainerData()

    service.registerContainer(containerData)
    assert.equal(service.containers.length, 1)
    assert.equal(service.containers[0], containerData)

    let secondContainerData = getDummyContainerData()

    service.registerContainer(secondContainerData)
    assert.equal(service.containers.length, 2)
    assert.equal(service.containers[1], secondContainerData)
  })

  test('it throws an error when trying to register the same container multiple times', function (assert) {
    let service = this.owner.lookup('service:breadcrumbs')

    let containerData = getDummyContainerData()

    service.registerContainer(containerData)

    assert.throws(function () {
      service.registerContainer(containerData)
    })
  })

  test('it throws an error if no element is provided', function (assert) {
    let service = this.owner.lookup('service:breadcrumbs')

    assert.throws(function () {
      let invalidContainerData = {}
      service.registerContainer(invalidContainerData)
    })
  })

  test('it can unregister containers', function (assert) {
    let service = this.owner.lookup('service:breadcrumbs')

    let containerData = getDummyContainerData
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

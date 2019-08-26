import Service from '@ember/service'
import { assert } from '@ember/debug'

export default Service.extend({
  /**
   * State
   */

  containers: null,

  /**
   * Hooks
   */

  init () {
    this._super(...arguments)

    this.containers = []
  },

  /**
   * Methods
   */

  registerContainer (containerData) {
    assert(
      'An `element` is required to register a breadcrumb container',
      containerData.element
    )
    assert(
      'This container was already registered before',
      !this._isContainerRegistered(containerData)
    )

    this.set('containers', [...this.containers, containerData])
  },

  unregisterContainer ({ element }) {
    this.set(
      'containers',
      this.containers.filter(registeredContainer => {
        return element !== registeredContainer.element
      })
    )
  },

  _isContainerRegistered ({ element }) {
    return this.containers.some(registeredContainer => {
      return element === registeredContainer.element
    })
  }
})

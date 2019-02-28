import { A } from '@ember/array'
import Service from '@ember/service'

export default Service.extend({
  /**
   * State
   */

  instances: null,

  /**
   * Hooks
   */

  init () {
    this._super(...arguments)

    this.instances = A([])
  }
})

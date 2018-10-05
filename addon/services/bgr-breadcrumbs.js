import { A } from '@ember/array';
import Service from '@ember/service';

export default Service.extend({
  /**
   * state
   */

  instances: null,

  /**
   * hooks
   */

  init() {
    this._super(...arguments);

    this.instances = A([]);
  },
});

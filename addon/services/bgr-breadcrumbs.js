import { A } from '@ember/array';
import Service from '@ember/service';

export default Service.extend({
  /**
   * state
   */

  elements: null,

  /**
   * hooks
   */

  init() {
    this._super(...arguments);

    this.elements = A([]);
  },
});

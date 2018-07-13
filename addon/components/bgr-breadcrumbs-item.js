import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/bgr-breadcrumbs-item';

export default Component.extend({
  /**
   * injections
   */

  bgrBreadcrumbs: service(),

  /**
   * state
   */

  layout,
  tagName: '',
});

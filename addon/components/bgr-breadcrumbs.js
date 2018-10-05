import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/bgr-breadcrumbs';

export default Component.extend({
  /**
   * injections
   */

  bgrBreadcrumbs: service(),

  /**
   * props
   */

  baseClassName: 'breadcrumbs',

  /**
   * state
   */

  classNameBindings: ['baseClassName'],
  layout,
  tagName: 'ul',

  /**
   * hooks
   */

  didInsertElement() {
    this.get('bgrBreadcrumbs.instances').addObject(this);
  },

  willDestroyElement() {
    this.get('bgrBreadcrumbs.instances').removeObject(this);
  },
});

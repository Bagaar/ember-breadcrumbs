import Component from '@ember/component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/bgr-breadcrumbs';

export default Component.extend({
  /**
   * injections
   */

  bgrBreadcrumbs: service(),

  /**
   * state
   */

  classNames: ['breadcrumbs'],
  layout,
  tagName: 'ul',

  /**
   * hooks
   */

  didInsertElement() {
    this.get('bgrBreadcrumbs.elements').addObject(this.get('element'));
  },

  willDestroyElement() {
    this.get('bgrBreadcrumbs.elements').removeObject(this.get('element'));
  },
});

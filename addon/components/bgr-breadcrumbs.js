import Component from '@ember/component'
import { inject as service } from '@ember/service'
import layout from '../templates/components/bgr-breadcrumbs'

export default Component.extend({
  /**
   * Services
   */

  breadcrumbsService: service('bgr-breadcrumbs'),

  /**
   * Arguments
   */

  className: 'breadcrumbs',
  itemClassName: 'breadcrumbs__item',
  linkClassName: 'breadcrumbs__link',

  /**
   * State
   */

  classNameBindings: ['className'],
  layout,
  tagName: 'ul',

  /**
   * Hooks
   */

  didInsertElement () {
    this.get('breadcrumbsService.instances').addObject(this)
  },

  willDestroyElement () {
    this.get('breadcrumbsService.instances').removeObject(this)
  }
})

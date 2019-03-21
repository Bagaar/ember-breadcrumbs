import Component from '@ember/component'
import { inject as service } from '@ember/service'
import layout from '../templates/components/breadcrumbs-item'

export default Component.extend({
  /**
   * Services
   */

  breadcrumbsService: service('breadcrumbs'),

  /**
   * State
   */

  layout,
  tagName: ''
})

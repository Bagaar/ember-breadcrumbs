import Component from '@ember/component'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import layout from '../templates/components/breadcrumbs'

export default Component.extend({
  /**
   * Services
   */

  breadcrumbsService: service('breadcrumbs'),

  /**
   * Arguments
   */

  itemClass: null,
  linkClass: null,

  /**
   * State
   */

  layout,
  tagName: '',
  containerData: null,

  /**
   * Actions
   */

  registerContainer: action(function (element) {
    this.containerData = {
      element,
      itemClass: this.itemClass,
      linkClass: this.linkClass
    }

    this.breadcrumbsService.registerContainer(this.containerData)
  }),

  unregisterContainer: action(function () {
    this.breadcrumbsService.unregisterContainer(this.containerData)
  })
})

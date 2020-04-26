import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import Component from '@glimmer/component'

export default class BreadcrumbsContainerComponent extends Component {
  @service('breadcrumbs') breadcrumbsService

  container = null

  @action
  registerContainer (element) {
    const { itemClass, linkClass } = this.args

    this.container = {
      element,
      itemClass,
      linkClass
    }

    this.breadcrumbsService.registerContainer(this.container)
  }

  willDestroy () {
    this.breadcrumbsService.unregisterContainer(this.container)
  }
}

import { inject as service } from '@ember/service';
import Component from '@glimmer/component';

export default class BreadcrumbsItemComponent extends Component {
  @service('breadcrumbs') breadcrumbsService;
}

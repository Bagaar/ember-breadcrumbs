import Component from '@glimmer/component';
import { service } from '@ember/service';

import BreadcrumbsService from '../services/breadcrumbs.ts';

export interface BreadcrumbsItemSignature {
  Blocks: {
    default: [linkClass?: string];
  };
  Element: HTMLLIElement;
}

export default class BreadcrumbsItem extends Component<BreadcrumbsItemSignature> {
  @service('breadcrumbs') declare breadcrumbsService: BreadcrumbsService;

  <template>
    {{#each this.breadcrumbsService.containers as |container|}}
      {{#in-element container.element insertBefore=null}}
        <li class={{container.itemClass}} ...attributes>
          {{yield container.linkClass}}
        </li>
      {{/in-element}}
    {{/each}}
  </template>
}

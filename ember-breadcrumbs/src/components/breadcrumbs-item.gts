import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import BreadcrumbsService from '../services/breadcrumbs.ts';

interface BreadcrumbsItemComponentSignature {
  Blocks: {
    default: [linkClass?: string];
  };
  Element: HTMLLIElement;
}

export default class BreadcrumbsItemComponent extends Component<BreadcrumbsItemComponentSignature> {
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

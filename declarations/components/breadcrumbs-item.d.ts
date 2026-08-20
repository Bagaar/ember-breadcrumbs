import Component from '@glimmer/component';
import BreadcrumbsService from '../services/breadcrumbs.ts';
export interface BreadcrumbsItemSignature {
    Blocks: {
        default: [linkClass?: string];
    };
    Element: HTMLLIElement;
}
export default class BreadcrumbsItem extends Component<BreadcrumbsItemSignature> {
    breadcrumbsService: BreadcrumbsService;
}
//# sourceMappingURL=breadcrumbs-item.d.ts.map
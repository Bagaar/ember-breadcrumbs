import type { TOC } from '@ember/component/template-only';
interface BreadcrumbsContainerComponentSignature {
    Args: {
        itemClass?: string;
        linkClass?: string;
    };
    Blocks: {
        default: [];
    };
    Element: HTMLUListElement;
}
declare const BreadcrumbsContainerComponent: TOC<BreadcrumbsContainerComponentSignature>;
export default BreadcrumbsContainerComponent;

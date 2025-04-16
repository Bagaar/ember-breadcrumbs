import Modifier, { type NamedArgs, type PositionalArgs } from 'ember-modifier';
import BreadcrumbsService, { type Container } from '../services/breadcrumbs.ts';
interface BreadcrumbsContainerModifierSignature {
    Element: HTMLUListElement;
    Args: {
        Named: {
            itemClass?: string;
            linkClass?: string;
        };
    };
}
export default class BreadcrumbsContainerModifier extends Modifier<BreadcrumbsContainerModifierSignature> {
    breadcrumbsService: BreadcrumbsService;
    container: Container | null;
    modify(element: BreadcrumbsContainerModifierSignature['Element'], positional: PositionalArgs<BreadcrumbsContainerModifierSignature>, { itemClass, linkClass }: NamedArgs<BreadcrumbsContainerModifierSignature>): void;
}
export {};

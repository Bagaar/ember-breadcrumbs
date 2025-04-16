import Service from '@ember/service';
export interface Container {
    readonly element: HTMLUListElement;
    readonly itemClass?: string;
    readonly linkClass?: string;
}
export default class BreadcrumbsService extends Service {
    #private;
    containers: Container[];
    registerContainer(container: Container): void;
    unregisterContainer(container: Container): void;
}
declare module '@ember/service' {
    interface Registry {
        breadcrumbs: BreadcrumbsService;
    }
}

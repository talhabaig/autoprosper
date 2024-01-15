export interface NavigationContentType {
    title: string;
    content: JSX.Element;
    mobileOnly?: boolean;
}

export type NavigationsType = Array<NavigationContentType>;
// src/types/index.d.ts

// #region global
declare global {
    interface Window {
        dataLayer: unknown[];
        CookieConsent: CookieConsent;
        animatedStarField: (options) => void;
        PowerGlitch: {
            glitch: (selector, options) => void;
        };
    }
}
// #endregion

// #region navigation
export interface NavigationItem {
    href: string;
    label: string;
    tooltip: string;
    hasDropdown?: boolean;
    subItems?: {
        href: string;
        label: string;
    }[];
}
// #endregion

// #region slider
export interface LogoObject {
    title: string;
    url: string;
    src: string;
    classes: string;
}

export type LogoList = LogoObject[];
// #endregion

// #region form
type ValidationError = 'required' | 'minLength' | 'maxLength' | 'invalidChars' | 'invalidEmail' | 'messageLimit' | 'checkbox';

type FieldValidators = {
    name: (value: string) => ValidationError | null;
    email: (value: string) => ValidationError | null;
    type: (value: string) => ValidationError | null;
    message: (value: string) => ValidationError | null;
    privacy: (value: boolean) => ValidationError | null;
};

export interface FormResponse {
    title: string;
    message: string;
    color: string;
}

export interface FormText {
    formId: string;
    required: string;
    minLength: string;
    maxLength: string;
    messageLimit: string;
    invalidChars: string;
    invalidEmail: string;
    checkbox: string;
    response: {
        [key: number]: FormResponse;
    };
    [key: string]: string | object;
}
// #endregion

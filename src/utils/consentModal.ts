// src/utils/consentModal.ts

/**
 * Retrieves the current consent ID from the Jentis consent engine.
 *
 * @returns {string} The consent ID or '-' if not available.
 */
const getConsentId = (): string => {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name === '_ga') {
            const parts = value.split('.');

            if (parts.length >= 4) {
                return `${parts[2]}.${parts[3]}`;
            }

            return value;
        }
    }

    return '-';
};

const initializeGtag = (): void => {
    window.dataLayer = window.dataLayer || [];

    window.gtag = (...args: unknown[]): void => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(args);
    };

    window.gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied'
    });
};

/**
 * Initializes the cookie consent settings and manages the user consent.
 *
 * @returns {void} This function has no output.
 */
const initializeConsent = (): void => {
    if (!window.CookieConsent) return;

    initializeGtag();

    window.CookieConsent.run({
        revision: 0,
        autoShow: window.location.pathname === '/',
        disablePageInteraction: false,
        onModalShow: () => {
            const consentId = document.getElementById('consent-id');

            if (consentId) {
                consentId.textContent = getConsentId();
            }
        },
        onConsent: ({ cookie }: { cookie: { categories: string[] } }) => {
            window.gtag('consent', 'update', {
                ad_storage: cookie.categories.includes('marketing') ? 'granted' : 'denied',
                ad_user_data: cookie.categories.includes('marketing') ? 'granted' : 'denied',
                ad_personalization: cookie.categories.includes('marketing') ? 'granted' : 'denied',
                analytics_storage: cookie.categories.includes('analytics') ? 'granted' : 'denied'
            });
        },
        guiOptions: {
            consentModal: {
                layout: 'cloud',
                position: 'bottom center',
                equalWeightButtons: false,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                position: 'center',
                equalWeightButtons: false,
                flipButtons: true
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            functionality: {},
            analytics: {
                services: {
                    google_analytics_4: {
                        label: 'Google Analytics 4'
                        // onAccept: () => {
                        //     window.gtag('consent', 'update', {
                        //         analytics_storage: 'granted'
                        //     });
                        // },
                        // onReject: () => {
                        //     window.gtag('consent', 'update', {
                        //         analytics_storage: 'denied'
                        //     });
                        // }
                    }
                }
            },
            marketing: {}
        },
        language: {
            default: 'de',
            translations: {
                de: {
                    consentModal: {
                        title: '🍪 Want some cookies?',
                        description:
                            'This website uses cookies to enhance your experience and analyze our traffic. Cookies are small text files stored on your device that help us remember your preferences, improve site functionality, and provide you with personalized content.\n\n<button type="button" class="!text-stone-300 !underline hover:!text-stone-200 !transition-all" data-cc="show-preferencesModal">Manage preferences</button>',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all',
                        showPreferencesBtn: ''
                    },
                    preferencesModal: {
                        title: '🍪 Consent Preferences',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all',
                        savePreferencesBtn: 'Save preferences',
                        closeIconLabel: 'Close modal',
                        serviceCounterLabel: 'Service|Services',
                        sections: [
                            {
                                title: 'Cookie Usage',
                                description:
                                    'This website uses cookies to ensure basic functionality and to improve your online experience. You can accept or reject statistical cookies at any time. For more details on cookies and other sensitive data, see the full privacy statement.'
                            },
                            {
                                title: 'Essential Cookies <span class="pm__badge">Always Enabled</span>',
                                description:
                                    "Essential for core website functions like security, navigation, and accessing secure areas. Without these, the site won't work properly.",
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Functional Cookies',
                                description:
                                    "These cookies remember your preferences (like language) and enhance the website's functionality, making your experience more personalized and convenient.",
                                linkedCategory: 'functionality'
                            },
                            {
                                title: 'Analytical Cookies',
                                description:
                                    'Used to collect anonymous data on how visitors use the site. This helps improve performance and user experience by tracking trends and issues.',
                                linkedCategory: 'analytics',
                                cookieTable: {
                                    headers: {
                                        col1: 'Name',
                                        col2: 'Description'
                                    },
                                    body: [
                                        {
                                            col1: 'Google Analytics 4',
                                            col2: 'Analysis tool for creating aggregated statistics without personal data about the reach of our website.'
                                        }
                                    ]
                                }
                            },
                            {
                                title: 'Marketing Cookies',
                                description:
                                    'These cookies track your online activity to display relevant ads and measure the effectiveness of marketing campaigns. They help ensure ads are tailored to your interests.',
                                linkedCategory: 'marketing'
                            },
                            {
                                title: 'More Information',
                                description: `If you have any questions about our cookie policy and your choices, please contact us.<br /><br />Your Consent-ID: <span id="consent-id">${getConsentId()}</span>`
                            }
                        ]
                    }
                }
            }
        }
    });
};

export default initializeConsent;

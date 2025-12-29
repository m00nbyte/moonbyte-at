// src/utils/formHelper.ts

import { FieldValidators, FormResponse, FormText } from '@/types';

// #region validation
const charRegex = /[0-9~`!@#$%^&()_={}[\]:;,.<>+/?-]/;
const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const validators: FieldValidators = {
    name: (value: string) => {
        const trimmed = value.trim();
        return (
            (trimmed === '' && 'required') ||
            (trimmed.length < 3 && 'minLength') ||
            (trimmed.length > 100 && 'maxLength') ||
            (charRegex.test(trimmed) && 'invalidChars') ||
            null
        );
    },
    email: (value: string) => {
        const trimmed = value.trim();
        return (
            (trimmed === '' && 'required') ||
            (trimmed.length < 3 && 'minLength') ||
            (trimmed.length > 100 && 'maxLength') ||
            (!emailRegex.test(trimmed) && 'invalidEmail') ||
            null
        );
    },
    type: (value: string) => {
        const trimmed = value.trim();
        return (
            (trimmed === '' && 'required') ||
            (trimmed === 'select' && 'required') ||
            (trimmed.length < 3 && 'minLength') ||
            (trimmed.length > 100 && 'maxLength') ||
            null
        );
    },
    message: (value: string) => {
        const trimmed = value.trim();
        return (
            (trimmed === '' && 'required') ||
            (trimmed.length < 10 && 'minLength') ||
            (trimmed.length > 1000 && 'messageLimit') ||
            null
        );
    },
    privacy: (checked: boolean) => {
        return (!checked && 'checkbox') || null;
    }
};

/**
 * Validates a specific form field based on its name, type, and value.
 * If there is an error, it creates an error element and returns false; otherwise, it removes any existing errors.
 *
 * @param {FormText} strings - An object containing the error messages and response messages to display.
 * @param {HTMLInputElement} field - The form field to validate.
 * @returns {boolean} - Returns true if the field is valid, false otherwise.
 */
const validateField = (strings: FormText, field: HTMLInputElement): boolean => {
    const { name, type, value, checked } = field;

    if (!name || name === '_honey' || type === 'submit' || type === 'button') {
        return true;
    }

    const fieldName = name.toLowerCase() as keyof FieldValidators;
    const newValue = type === 'checkbox' ? checked : value;

    if (!validators[fieldName]) {
        console.warn(`No validator found for field: ${fieldName} (type: ${type}). Skipping validation.`);
        return true;
    }

    let hasError = null;

    if (fieldName === 'privacy') {
        hasError = validators[fieldName](newValue as boolean);
    } else {
        hasError = validators[fieldName](newValue as string);
    }

    if (hasError) {
        createErrorElement(field, <string>strings[hasError]);
    } else {
        removeErrorElement(<HTMLElement>field.parentElement);
    }

    return !hasError;
};

/**
 * Removes any existing error element associated with the given input or textarea field.
 *
 * @param {HTMLElement} parentElement - The parent element which contains the error element.
 * @returns {void} This function has no output.
 */
const removeErrorElement = (parentElement: HTMLElement): void => {
    if (!parentElement) return;

    const errorDiv = parentElement.querySelector<HTMLDivElement>('.input_error');

    if (errorDiv) {
        errorDiv.remove();
    }
};

/**
 * Creates and displays an error message associated with the given input or textarea field.
 *
 * @param {HTMLInputElement | HTMLTextAreaElement} field - The input or textarea field where the error occurred.
 * @param {string} error - The error message to display.
 * @returns {void} This function has no output.
 */
const createErrorElement = ({ type, parentElement }: HTMLInputElement | HTMLTextAreaElement, error: string): void => {
    if (!parentElement) return;

    removeErrorElement(parentElement);

    const divPosition = type === 'checkbox' ? '-top-0.5 right-0' : 'top-[0.8rem] right-2';

    const updateError = document.createElement('div');
    updateError.className = `input_error absolute flex items-center justify-center h-6 gap-2 pl-2 pr-2 text-xs text-white shadow-xs bg-rose-700 rounded-lg ${divPosition}`;
    updateError.textContent = error;

    parentElement.appendChild(updateError);
};

/**
 * Creates and displays a response message after form submission, indicating success or failure.
 * If the submission is successful, the form is reset after the message is shown.
 *
 * @param {HTMLFormElement} form - The form element to which the response message is related.
 * @param {object} response - The response data containing success status and content.
 * @param {boolean} response.success - A flag indicating whether the form submission was successful.
 * @param {object} response.content - An object containing the title, message, and color for the response message.
 * @param {string} response.content.title - The title of the response message.
 * @param {string} response.content.message - The content of the response message.
 * @param {string} response.content.color - The color class for styling the response message.
 * @returns {void} This function has no output.
 */
const createFormResponse = (
    form: HTMLFormElement,
    {
        success,
        content: { title, message, color }
    }: {
        success: boolean;
        content: {
            title: string;
            message: string;
            color: string;
        };
    }
): void => {
    const formSubmit = form.querySelector<HTMLDivElement>('#form_submit');
    if (!formSubmit) return;

    const formResponse = document.createElement('div');
    formResponse.id = 'form_response';
    formResponse.className = `absolute flex-row flex items-center justify-center w-full gap-2 top-0 h-full rounded-xl shadow-xs cursor-default text-white animate-slide-in ${color}`;
    formResponse.innerHTML = `<span class="text-lg font-bold tracking-tight">${title}</span><span class="text-lg">${message}</span>`;

    formSubmit.appendChild(formResponse);

    setTimeout(() => {
        formResponse.remove();

        if (success) {
            form.reset();
        }
    }, 3000);
};
// #endregion

// #region init
/**
 * Initializes the contact form by setting up validation for its fields and handling
 * the submission process. It adds event listeners to validate fields on input or change
 * events and processes the form submission using the Fetch API.
 *
 * @param {FormText} strings - An object containing the error messages and response messages to display.
 * @returns {void} This function has no output.
 */
const initializeForm = (strings: FormText): void => {
    const formContainer = document.querySelector<HTMLFormElement>('#contact_form');
    if (!formContainer) return;

    const formElements = <HTMLInputElement[]>Array.from(formContainer.elements);
    if (!formElements.length) return;

    for (const element of formElements) {
        const { name, type } = element;

        if (!name || name === '_honey' || type === 'submit' || type === 'button') {
            continue;
        }

        const fieldName = name.toLowerCase() as keyof FieldValidators;

        if (validators[fieldName]) {
            element.addEventListener(['select', 'checkbox'].includes(type) ? 'change' : 'input', ({ target }) =>
                validateField(strings, <HTMLInputElement>target)
            );
        }
    }

    formContainer.addEventListener('submit', (event) => {
        event.preventDefault();

        if (formElements.every((item) => validateField(strings, item))) {
            const { formId, response: responseText } = strings;

            const formData = new FormData(formContainer);

            const handleResponse = (status: boolean) =>
                createFormResponse(formContainer, {
                    success: status,
                    content: <FormResponse>responseText[+status]
                });

            fetch(`https://form.taxi/s/${formId}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            })
                .then((response) => response.json())
                .then(({ success }) => handleResponse(success))
                .catch(() => handleResponse(false));
        }
    });
};
// #endregion

export default initializeForm;

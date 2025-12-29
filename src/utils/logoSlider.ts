// src/utils/logoSlider.ts

import { LogoList } from '@/types';

// #region logic
/**
 * Calculates the animation duration for the slider, depending on the total number of logos.
 *
 * @param {number} total - The total number of logo objects.
 * @returns {void} This function has no output.
 */
const setAnimationDuration = (total: number): void => {
    const container = document.querySelector<HTMLDivElement>('#logo_slider');
    if (!container) return;

    const durationPerItem = 2;
    const totalDuration = total * durationPerItem;
    container.style.setProperty('--animate-slide-left', `slide-left ${totalDuration}s linear infinite`);
};

/**
 * Initializes a scrolling logo slider with the provided list of logos.
 *
 * @param {LogoList} logos - An array of logo objects.
 * @returns {void} This function has no output.
 */
const generateLogos = (logos: LogoList): void => {
    const container = document.querySelector<HTMLDivElement>('#logo_slider');
    if (!container) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'inline-block ml-16 animate-slide-left w-max';

    setAnimationDuration(logos.length);

    for (const { url, title, src, classes } of logos) {
        wrapper.innerHTML += `<a href="${url}" target="_blank" title="${title}">
            <img src="${src}" class="inline mx-8 transition-all opacity-80 hover:opacity-100 ${classes}" alt="${title}" />
        </a>`;
    }

    const wrapperClone = <HTMLDivElement>wrapper.cloneNode(true);
    wrapperClone.classList.remove('ml-16');

    container.appendChild(wrapper);
    container.appendChild(wrapperClone);
};
// #endregion

// #region init
/**
 * Sets up lazy loading for the logo slider using Intersection Observer.
 *
 * @param {LogoList} logos - An array of logo objects.
 * @returns {void} This function has no output.
 */
const initializeLogos = (logos: LogoList): void => {
    const container = document.querySelector<HTMLDivElement>('#logo_slider');
    if (!container) return;

    const section = container.closest('section');
    if (!section) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    generateLogos(logos);
                    observer.disconnect();
                    break;
                }
            }
        },
        {
            root: null,
            threshold: 0.1
        }
    );

    observer.observe(section);
};
// #endregion

export { initializeLogos };

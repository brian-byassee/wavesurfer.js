/**
 * Apply a map of styles to an element
 *
 * @param {HTMLElement} el The element that the styles will be applied to
 * @param {Object} styes The map of propName: attribute, both are used as-is
 *
 * @returns {HTMLElement} el
 */
export default function style (el, styles) {
    Object.keys(styles).forEach(function (prop) {
        if (el.style[prop] !== styles[prop]) {
            el.style[prop] = styles[prop];
        }
    });
    return el;
}

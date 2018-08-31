
/**
 * Applies styles to a node
 */
export const setStyles = (...args) => node => Object.assign(node.style, ...args)

/**
 * Applies styles to a node after a delay.
 */
export const setDelayedStyles = (delay, ...args) => node => setTimeout(() => {
  Object.assign(node.style, ...args)
}, delay)

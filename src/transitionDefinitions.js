
import {
  setStyles,
  setDelayedStyles
} from './helpers'

import {
  pageDefaultTiming,
  pageDefaultEnterStyle,
  defaultSlideDistance,
  defaultScaleDistance,
  defaultTransitionDelay
} from './defaults'

const noop = node => {
  return node.styles
}

export const instantTransition = () => ({
  onEnter: setStyles(pageDefaultEnterStyle),
  onEntering: noop,
  onExit: noop,
  onExiting: noop,
  timeout: {
    enter: 0,
    exit: 0
  }
})

export const fadeTransition = ({
  timeout,
  defaultStyle = {},
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms`,
    opacity: 0
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1
  }),
  onExit: setStyles({
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms`
  }),
  onExiting: setStyles({
    opacity: 0
  })
})

/**
 * Page Transitions
 */

export const pageInTransition = ({
  timeout,
  defaultStyle = {}
}) => ({
  onEnter: setStyles(defaultStyle, {
    transition: `transform ${timeout.enter}ms ease-out`,
    zIndex: 10,
    transform: `translateX(100%)`
  }),
  onEntering: setDelayedStyles(10, {
    transform: `translateX(0%)`
  }),
  onExit: setStyles({
    transition: `transform ${timeout.exit}ms ease-out`
  }),
  onExiting: setStyles({
    zIndex: 5,
    transform: `translateX(-25%)`
  })
})

export const pageOutTransition = ({
  timeout,
  defaultStyle = {}
}) => ({
  onEnter: setStyles(defaultStyle, {
    transition: `transform ${timeout.enter}ms ease-out`,
    zIndex: 5,
    transform: `translateX(-25%)`
  }),
  onEntering: setDelayedStyles(10, {
    transform: `translateX(0%)`
  }),
  onExit: setStyles({
    transition: `transform ${timeout.enter}ms ease-out`
  }),
  onExiting: setStyles({
    zIndex: 10,
    transform: `translateX(100%)`
  })
})

export const modalInTransition = ({
  timeout,
  defaultStyle = {}
}) => ({
  onEnter: setStyles(defaultStyle, {
    transition: `transform ${timeout.enter}ms ease-out`,
    zIndex: 10,
    transform: `translateY(100%)`
  }),
  onEntering: setDelayedStyles(10, {
    transform: `translateY(0%)`
  }),
  onExit: noop,
  onExiting: setStyles({
    zIndex: 5
  })
})

export const modalOutTransition = ({
  timeout,
  defaultStyle = {}
}) => ({
  onEnter: setStyles(defaultStyle, {
    zIndex: 5
  }),
  onEntering: noop,
  onExit: setStyles({
    transition: `transform ${timeout.enter}ms ease-out`
  }),
  onExiting: setStyles({
    zIndex: 10,
    transform: `translateY(100%)`
  })
})

/**
 * Animation Transitions
 */

export const appearUpTransition = ({
  timeout = pageDefaultTiming,
  defaultStyle = {},
  distance = defaultSlideDistance,
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    opacity: 0,
    transform: `translateY(${distance})`,
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms, transform ${timeout.enter}ms cubic-bezier(.28,.8,.71,1.49) ${delay.enter}ms`
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1,
    transform: `translateY(0)`
  }),
  onExit: setStyles({
    opacity: 0,
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms, transform ${timeout.exit}ms cubic-bezier(.28,.8,.71,1.49) ${delay.exit}ms`,
    transform: `translateY(${distance})`
  }),
  onExiting: noop
})

export const appearDownTransition = ({
  timeout = pageDefaultTiming,
  defaultStyle = {},
  distance = defaultSlideDistance,
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    opacity: 0,
    transform: `translateY(-${distance})`,
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms, transform ${timeout.enter}ms cubic-bezier(.28,.8,.71,1.49) ${delay.enter}ms`
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1,
    transform: `translateY(0)`
  }),
  onExit: setStyles({
    opacity: 0,
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms, transform ${timeout.exit}ms cubic-bezier(.28,.8,.71,1.49) ${delay.exit}ms`,
    transform: `translateY(-${distance})`
  }),
  onExiting: noop
})

export const appearLeftTransition = ({
  timeout = pageDefaultTiming,
  defaultStyle = {},
  distance = defaultSlideDistance,
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    opacity: 0,
    transform: `translateX(-${distance})`,
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms, transform ${timeout.enter}ms cubic-bezier(.28,.8,.71,1.49) ${delay.enter}ms`
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1,
    transform: `translateX(0)`
  }),
  onExit: setStyles({
    opacity: 0,
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms, transform ${timeout.exit}ms cubic-bezier(.28,.8,.71,1.49) ${delay.exit}ms`,
    transform: `translateX(-${distance})`
  }),
  onExiting: noop
})

export const appearRightTransition = ({
  timeout = pageDefaultTiming,
  defaultStyle = {},
  distance = defaultSlideDistance,
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    opacity: 0,
    transform: `translateX(${distance})`,
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms, transform ${timeout.enter}ms cubic-bezier(.28,.8,.71,1.49) ${delay.enter}ms`
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1,
    transform: `translateX(0)`
  }),
  onExit: setStyles({
    opacity: 0,
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms, transform ${timeout.exit}ms cubic-bezier(.28,.8,.71,1.49) ${delay.exit}ms`,
    transform: `translateX(${distance})`
  }),
  onExiting: noop
})

export const appearInTransition = ({
  timeout = pageDefaultTiming,
  defaultStyle = {},
  scale = defaultScaleDistance,
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    opacity: 0,
    transform: `scale(${1 - scale})`,
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms, transform ${timeout.enter}ms cubic-bezier(.28,.8,.71,1.49) ${delay.enter}ms`,
    transformOrigin: 'center'
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1,
    transform: `scale(1)`
  }),
  onExit: setStyles({
    opacity: 0,
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms, transform ${timeout.exit}ms cubic-bezier(.28,.8,.71,1.49) ${delay.exit}ms`,
    transform: `scale(${1 - scale})`
  }),
  onExiting: noop
})

export const appearOutTransition = ({
  timeout = pageDefaultTiming,
  defaultStyle = {},
  scale = defaultScaleDistance,
  delay = defaultTransitionDelay
}) => ({
  onEnter: setStyles(defaultStyle, {
    opacity: 0,
    transform: `scale(${1 + scale})`,
    transition: `opacity ${timeout.enter}ms ease-out ${delay.enter}ms, transform ${timeout.enter}ms cubic-bezier(.28,.8,.71,1.49) ${delay.enter}ms`,
    transformOrigin: 'center'
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1,
    transform: `scale(1)`
  }),
  onExit: setStyles({
    opacity: 0,
    transition: `opacity ${timeout.exit}ms ease-out ${delay.exit}ms, transform ${timeout.exit}ms cubic-bezier(.28,.8,.71,1.49) ${delay.exit}ms`,
    transform: `scale(${1 + scale})`
  }),
  onExiting: noop
})

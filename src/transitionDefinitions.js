
import {
  setStyles,
  setDelayedStyles
} from './helpers'

import {
  pageDefaultEnterStyle
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
  defaultStyles = pageDefaultEnterStyle
}) => ({
  onEnter: setStyles(defaultStyles, {
    transition: `opacity ${timeout.enter}ms ease-out`,
    opacity: 0
  }),
  onEntering: setDelayedStyles(10, {
    opacity: 1
  }),
  onExit: setStyles({
    transition: `opacity ${timeout.exit}ms ease-out`
  }),
  onExiting: setStyles({
    opacity: 0
  })
})

export const pageInTransition = ({timeout}) => ({
  onEnter: setStyles(pageDefaultEnterStyle, {
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

export const pageOutTransition = ({timeout}) => ({
  onEnter: setStyles(pageDefaultEnterStyle, {
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

export const modalInTransition = ({timeout}) => ({
  onEnter: setStyles(pageDefaultEnterStyle, {
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

export const modalOutTransition = ({timeout}) => ({
  onEnter: setStyles(pageDefaultEnterStyle, {
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

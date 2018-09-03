
import {Signal} from 'raid'
import {createActions} from 'raid-navigator'
import createHistory from 'history/createMemoryHistory'

import {TRANSITIONS} from '../../src'

export const signal = Signal.of()
export const history = createHistory()
const actions = createActions(history)

export const events = {
  push: 'navigation:push',
  pop: 'navigation:pop',
  setTransition: 'app:setTransition'
}

export const routes = {
  home: '/',
  pageTransitions: '/pageTransitions',
  fadeTransition: '/pageTransitions/fade',
  pageInTransition: '/pageTransitions/pageIn',
  instantTransition: '/pageTransitions/instant',
  modalTransition: '/pageTransitions/modal',
  usingPageTransitions: '/usingPageTransitions',
  usingWithNavigator: '/usingWithNavigator',
  animations: '/animations',
  fadeAnimation: '/animations/fade',
  appearAnimation: '/animations/appear',
  cascadeAnimation: '/animations/cascade'
}

export const push = ({
  route,
  transition = TRANSITIONS.PAGE_IN
}) => event => {
  signal.emit({
    type: events.setTransition,
    payload: {transition}
  })
  actions.push(route)
}

export const pop = ({
  transition = TRANSITIONS.PAGE_OUT
}) => event => {
  signal.emit({
    type: events.setTransition,
    payload: {transition}
  })
  actions.back()
}


import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {TransitionGroup, Transition} from 'react-transition-group'

import {
  instantTransition,
  fadeTransition,
  pageInTransition,
  pageOutTransition,
  modalInTransition,
  modalOutTransition
} from './transitionDefinitions'

import {
  pageDefaultTiming
} from './defaults'

export const TRANSITIONS = {
  INSTANT: 'instant',
  FADE: 'fade',
  PAGE_IN: 'pageIn',
  PAGE_OUT: 'pageOut',
  MODAL_IN: 'modalIn',
  MODAL_OUT: 'modalOut'
}

const router = {
  [TRANSITIONS.INSTANT]: instantTransition,
  [TRANSITIONS.FADE]: fadeTransition,
  [TRANSITIONS.PAGE_IN]: pageInTransition,
  [TRANSITIONS.PAGE_OUT]: pageOutTransition,
  [TRANSITIONS.MODAL_IN]: modalInTransition,
  [TRANSITIONS.MODAL_OUT]: modalOutTransition
}

const getTransition = ({transition, timeout}) => {
  if (!transition || !router[transition]) {
    return instantTransition({timeout})
  }

  return router[transition]({timeout})
}

export const PageGroup = styled(TransitionGroup)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const Page = styled(Transition)`
  position: absolute,
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const PageTransition = ({
  children,
  transition,
  timeout,
  ...props
}) => (
  <Page
    timeout={timeout}
    appear
    unmountOnExit
    {...props}
    {...getTransition({
      transition,
      timeout
    })}
  >
    {children}
  </Page>
)
PageTransition.defaultProps = {
  timeout: pageDefaultTiming
}
PageTransition.propTypes = {
  timeout: PropTypes.oneOfType([
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    }),
    PropTypes.number
  ]),
  transition: PropTypes.oneOf(Object.values(TRANSITIONS))
}

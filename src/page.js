
import React from 'react'
import styled from 'styled-components'
import {TransitionGroup, Transition} from 'react-transition-group'

import {
  instantTransition,
  fadeTransition,
  pageInTransition,
  pageOutTransition
} from './transitionDefinitions'

import {
  pageDefaultTiming
} from './defaults'

export const TRANSITIONS = {
  INSTANT: 'instant',
  FADE: 'fade',
  PAGE_IN: 'pageIn',
  PAGE_OUT: 'pageOut',
  MODAL: 'modal'
}

const router = {
  [TRANSITIONS.INSTANT]: instantTransition,
  [TRANSITIONS.FADE]: fadeTransition,
  [TRANSITIONS.PAGE_IN]: pageInTransition,
  [TRANSITIONS.PAGE_OUT]: pageOutTransition
}

const getTransition = ({transition, timeout}) => {
  if (!transition || !router[transition]) {
    return fadeTransition({timeout})
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
// @TODO prop types

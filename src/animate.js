
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, TransitionGroup } from 'react-transition-group'

import { pageDefaultTiming } from './defaults'

const Group = styled.div`
  position: relative;
`

export const Animate = ({
  in: inProp,
  timeout,
  transitionStyles,
  children,
  ...props
}) => {
  return (
    <Transition
      in={inProp}
      timeout={timeout}
      mountOnEnter
      unmountOnExit
      {...transitionStyles}
      {...props}
    >
      {children}
    </Transition>
  )
}
Animate.propTypes = {
  in: PropTypes.bool,
  timeout: PropTypes.oneOfType([
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    }),
    PropTypes.number
  ]),
  transitionStyles: PropTypes.shape({
    onEntering: PropTypes.func,
    onEnter: PropTypes.func,
    onExiting: PropTypes.func,
    onExit: PropTypes.func
  })
}
Animate.defaultProps = {
  in: false,
  timeout: pageDefaultTiming,
  transitionStyles: {}
}

export const AnimateGroup = ({
  styles,
  children
}) => (
  <Group style={styles}>
    <TransitionGroup style={styles}>
      {children}
    </TransitionGroup>
  </Group>
)

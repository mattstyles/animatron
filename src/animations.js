
import {Animate} from './animate'
import {
  pageDefaultTiming,
  defaultSlideDistance
} from './defaults'

import {
  fadeTransition,
  appearUpTransition
} from './transitionDefinitions'

export const Fade = ({
  in: inProp,
  timeout,
  defaultStyle,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={fadeTransition({timeout, defaultStyle})}
    {...props}
  >
    {children}
  </Animate>
)
Fade.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {}
}

export const AppearUp = ({
  in: inProp,
  timeout,
  defaultStyle,
  distance,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearUpTransition({timeout, defaultStyle, distance})}
    {...props}
  >
    {children}
  </Animate>
)
AppearUp.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {},
  distance: defaultSlideDistance
}


import { Animate } from './animate'
import {
  pageDefaultTiming,
  defaultSlideDistance
} from './defaults'

import {
  fadeTransition,
  appearUpTransition,
  appearDownTransition,
  appearLeftTransition,
  appearRightTransition,
  appearInTransition,
  appearOutTransition
} from './transitionDefinitions'

export const Fade = ({
  in: inProp,
  timeout,
  defaultStyle,
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={fadeTransition({ timeout, defaultStyle, delay })}
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
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearUpTransition({ timeout, defaultStyle, distance, delay })}
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

export const AppearDown = ({
  in: inProp,
  timeout,
  defaultStyle,
  distance,
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearDownTransition({ timeout, defaultStyle, distance, delay })}
    {...props}
  >
    {children}
  </Animate>
)
AppearDown.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {},
  distance: defaultSlideDistance
}

export const AppearLeft = ({
  in: inProp,
  timeout,
  defaultStyle,
  distance,
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearLeftTransition({ timeout, defaultStyle, distance, delay })}
    {...props}
  >
    {children}
  </Animate>
)
AppearLeft.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {},
  distance: defaultSlideDistance
}

export const AppearRight = ({
  in: inProp,
  timeout,
  defaultStyle,
  distance,
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearRightTransition({ timeout, defaultStyle, distance, delay })}
    {...props}
  >
    {children}
  </Animate>
)
AppearRight.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {},
  distance: defaultSlideDistance
}

export const AppearIn = ({
  in: inProp,
  timeout,
  defaultStyle,
  distance,
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearInTransition({ timeout, defaultStyle, distance, delay })}
    {...props}
  >
    {children}
  </Animate>
)
AppearIn.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {},
  distance: defaultSlideDistance
}

export const AppearOut = ({
  in: inProp,
  timeout,
  defaultStyle,
  distance,
  delay,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={appearOutTransition({ timeout, defaultStyle, distance, delay })}
    {...props}
  >
    {children}
  </Animate>
)
AppearOut.defaultProps = {
  timeout: pageDefaultTiming,
  defaultStyle: {},
  distance: defaultSlideDistance
}

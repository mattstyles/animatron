
import {Animate} from './animate'
import {fadeTransition} from './transitionDefinitions'
import {pageDefaultTiming} from './defaults'

export const Fade = ({
  in: inProp,
  timeout,
  children,
  ...props
}) => (
  <Animate
    in={inProp}
    timeout={timeout}
    transitionStyles={fadeTransition({timeout, defaultStyles: {}})}
    {...props}
  >
    {children}
  </Animate>
)
Fade.defaultProps = {
  timeout: pageDefaultTiming
}


import styled from 'styled-components'
import oc from 'open-color'

import {pop} from './navigation'
import {View, TextBlock, Text, Title, NavGroup, NavBack, Toggle} from './components'

import {
  AnimateGroup,
  Fade,
  AppearUp
} from '../../src'

const PageView = styled(View)`
  background: ${oc.gray[1]};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const AppearUpReplace = styled(AppearUp)`
  position: absolute;
  top: 0;
  left: 0;
`

export const AnimationView = () => (
  <PageView>
    <Title>Animations</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Fade in appear timeout={{
        enter: 2000,
        exit: 300
      }}>
        <Text flush>This text will fade in. This component will transition in when the component appears, i.e. when it is mounted. A long transition enter timeout is applied only because this page has its own transition on the entry edge.</Text>
      </Fade>
    </TextBlock>
    <TextBlock>
      <Toggle text='Fade'>
        {flag => (
          <Fade in={flag}>
            <Text flush>By default animation components mount and unmount at each edge of the transition.</Text>
          </Fade>
        )}
      </Toggle>
    </TextBlock>
    <TextBlock>
      <Text>Use <code>AnimateGroup</code> for replacement style transitions. Each different child requires a unique <code>key</code>.</Text>
      <Text><code>AnimateGroup</code> needs children to operate on, using <code>Toggle</code> like this doesn’t allow it to access the children so this example actually instantly unmounts exiting children so they don’t animate.</Text>
      <AnimateGroup>
        <Toggle text='Toggle'>
          {flag => flag
            ? <Fade in key='two'><Text flush>Component Two</Text></Fade>
            : <Fade in key='one'><Text flush>Component One</Text></Fade>
          }
        </Toggle>
      </AnimateGroup>
    </TextBlock>
    <TextBlock>
      <Text>This example lets <code>AnimateGroup</code> operate on the changing children but does require a bit more work as the container must handle the sizing.</Text>
      <Toggle
        text='Toggle'
        as={AnimateGroup}
        passProps={{
          styles: {
            height: 24,
            marginTop: 8,
            boxSizing: 'border-box'
          }
        }}
      >
        {flag => flag
          ? <AppearUpReplace in key='two' distance={'8px'}><Text flush>Component Two</Text></AppearUpReplace>
          : <AppearUpReplace in key='one' distance={'8px'}><Text flush>Component One</Text></AppearUpReplace>
        }
      </Toggle>
    </TextBlock>
  </PageView>
)

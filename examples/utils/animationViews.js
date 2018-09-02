
import styled from 'styled-components'
import oc from 'open-color'

import {pop} from './navigation'
import {View, TextBlock, Text, Title, NavGroup, NavBack, Toggle} from './components'

import {Fade} from '../../src'

const PageView = styled(View)`
  background: ${oc.gray[1]};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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
  </PageView>
)

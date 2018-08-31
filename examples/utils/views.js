
import styled from 'styled-components'

import {routes, push, pop} from './navigation'
import {View, TextBlock, Text, CodeBlock, Title, NavGroup, NavItem, NavBack} from './components'
import {SimplePageTransitionExample} from './simpleRoutingExample'

const PageView = styled(View)`
  background: rgb(244, 244, 244);
`

export const HomeView = () => (
  <PageView>
    <Title>Home</Title>
    <NavGroup>
      <NavItem onClick={push({
        route: routes.pageTransitions
      })}>Page Transitions</NavItem>
      <NavItem onClick={push({
        route: routes.usingPageTransitions
      })}>Using Page Transitions</NavItem>
      <NavItem onClick={push({
        route: routes.usingWithNavigator
      })}>Using With Navigator</NavItem>
    </NavGroup>
  </PageView>
)

export const PageTransitionsView = () => (
  <PageView>
    <Title>Page Transitions</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Text flush>Animatron exposes a number of built-in page transitions.</Text>
    </TextBlock>
    <CodeBlock>{`
export const TRANSITIONS = {
  FADE: 'fade',
  PAGE_IN: 'pageIn',
  PAGE_OUT: 'pageOut',
  MODAL: 'modal'
}
    `}</CodeBlock>
  </PageView>
)

export const UsingPageTransitions = () => (
  <PageView>
    <Title>Using Page Transitions</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <View noFlex>
      <TextBlock>
        <Text>Page transitions expect to work in a container that encompasses the entire page, but, they’ll actually work inside any container that specifies a height and width.</Text>
        <Text flush>The below example uses a <code>PageGroup</code> component and the helping <code>childFactory</code> function to supply a transition type to use and then a <code>PageTransition</code> child that houses the actual changing node.</Text>
      </TextBlock>
      <SimplePageTransitionExample />
    </View>
  </PageView>
)

export const UsingWithNavigator = () => (
  <PageView>
    <Title>Using Page Transitions</Title>
  </PageView>
)

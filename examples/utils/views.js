
import styled from 'styled-components'
import oc from 'open-color'

import {routes, push, pop} from './navigation'
import {View, TextBlock, Text, CodeBlock, Title, NavGroup, NavItem, NavBack} from './components'
import {SimplePageTransitionExample} from './simpleRoutingExample'

import {TRANSITIONS} from '../../src'

const PageView = styled(View)`
  background: ${oc.gray[1]};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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
      <NavItem onClick={push({
        route: routes.animations
      })}>Animations</NavItem>
    </NavGroup>
  </PageView>
)

export const PageTransitionsView = () => (
  <PageView>
    <Title>Page Transitions</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <NavGroup>
      <NavItem onClick={push({
        route: routes.instantTransition,
        transition: TRANSITIONS.INSTANT
      })}>Instant</NavItem>
      <NavItem onClick={push({
        route: routes.fadeTransition,
        transition: TRANSITIONS.FADE
      })}>Fade</NavItem>
      <NavItem onClick={push({
        route: routes.pageInTransition
      })}>Page In</NavItem>
      <NavItem onClick={push({
        route: routes.modalTransition,
        transition: TRANSITIONS.MODAL_IN
      })}>Modal</NavItem>
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

export const FadeTransition = () => (
  <PageView>
    <Title>Fade</Title>
    <NavGroup>
      <NavBack onClick={pop({
        transition: TRANSITIONS.FADE
      })}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Text flush>This transition has faded in, it has still been added to the navigation stack.</Text>
    </TextBlock>
  </PageView>
)

export const PageInTransition = () => (
  <PageView>
    <Title>Page In</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Text>This transition has transitioned in from the right-hand side, it has still been added to the navigation stack.</Text>
      <Text flush>Hit back to see the <code>Page Out</code> transition.</Text>
    </TextBlock>
  </PageView>
)

export const InstantTransition = () => (
  <PageView>
    <Title>Instant</Title>
    <NavGroup>
      <NavBack onClick={pop({
        transition: TRANSITIONS.INSTANT
      })}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Text flush>This page transition has no transition! It has still been added to the navigation stack.</Text>
    </TextBlock>
  </PageView>
)

export const ModalTransition = () => (
  <PageView>
    <Title>Modal</Title>
    <NavGroup>
      <NavBack onClick={pop({
        transition: TRANSITIONS.MODAL_OUT
      })}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Text>The modal-style transition of a page entering from the bottom of the viewport can be achieved with the <code>modal</code> transition.</Text>
      <Text flush>It is not a true modal as it is a real page with a navigation stack entry rather than an overlay.</Text>
    </TextBlock>
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
      <TextBlock>
        <Text>Page transitions work by absolutely positioning the pages and then translating them, which means that pages generally need some CSS to allow scrolling.</Text>
        <Text flush>As pages slides over one another as they transition in and out of view it is usually worth setting a background colour for each page.</Text>
      </TextBlock>
      <CodeBlock>{`
.Page {
  background: rgb(244, 244, 244);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
      `}</CodeBlock>
      <TextBlock>
        <Text>The downside of this is that pages end up controlling the scroll which means that browsers won’t know that the page has scrolled and alter their UI accordingly.</Text>
        <Text flush>Depending on your use-case this may be acceptable, for example, if used with <code>React Native</code> or <code>Cordova</code> or the like then this is likely perfectly fine.</Text>
      </TextBlock>
    </View>
  </PageView>
)

export const UsingWithNavigator = () => (
  <PageView>
    <Title>Using Page Transitions</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <View noFlex>
      <TextBlock>
        <Text flush>Page transitions work great with an application routing solution like <code>Raid-Navigator</code>.</Text>
      </TextBlock>
      <CodeBlock>{`
  import {Navigator} from 'raid-navigator'
  import {
    PageGroup,
    mapChildren,
    childFactory
  } from 'animatron'

  const App = (props) => (
    <Navigator
      Component={PageGroup}
      ComponentProps={{
        childFactory: childFactory(props.transition)
      }}
      mapChildren={mapChildren}
    >
      <Home route='/' />
      <Settings route='/settings' />
    </Navigator>
  )
      `}</CodeBlock>
      <TextBlock>
        <Text>In this example <code>Raid-Navigator</code> accepts a <code>PageGroup</code> component to use as the main element and then the <code>childFactory</code> and <code>mapChildren</code> functions take care of applying a <code>PageTransition</code> to the child elements and setting the desired transition type for the next transition.</Text>
        <Text><code>PageGroup</code> components will size to their container and each child will get absolutely positioned to be the size of the wrapping container, which is often your viewport.</Text>
        <Text>It is often worth setting <code>overflow-y</code> to scrolling and setting a background colour so that pages do not bleed in to each other.</Text>
        <Text flush>See these example pages for more details.</Text>
      </TextBlock>
      <TextBlock>
        <Text>Pages are absolutely positioned and are responsible for scrolling themselves which allows for things like a global application header and footer to remain in view.</Text>
        <Text>However, due to mobile browser behaviour you may find that the browser UI will not respond as you might expect as the actual window is not scrolling. Depending on your use-case this may be problematic.</Text>
        <Text>PWA’s and JS-powered native applications (i.e. <code>React Native</code> or <code>Cordova</code>) do not expose browser UI so won’t be subject to this limitation.</Text>
        <Text flush>By allowing pages to be responsible for scrolling themselves you get native application-like functionality and it helps to ensure that pages transitioning in and out of view do not become jumpy as their positioning changes.</Text>
      </TextBlock>
    </View>
  </PageView>
)

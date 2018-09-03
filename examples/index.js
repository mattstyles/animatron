
import React from 'react'
import {render} from 'react-dom'
import {compress, safe} from 'raid-addons'
import {Navigator} from 'raid-navigator'

import {setGlobalStyling, App} from './utils/components'
import {signal, events, history, routes} from './utils/navigation'
import {
  HomeView,
  PageTransitionsView,
  FadeTransition,
  PageInTransition,
  InstantTransition,
  ModalTransition,
  UsingPageTransitions,
  UsingWithNavigator
} from './utils/views'

import {
  AnimationView,
  FadeAnimation,
  AppearAnimation,
  CascadeAnimation
} from './utils/animationViews'

import {
  PageGroup,
  mapChildren,
  childFactory
} from '../src'

setGlobalStyling()

signal.register(compress({
  [events.setTransition]: safe((state, {transition}) => ({
    ...state,
    transition
  }))
}))

signal.register(safe((state, event) => {
  console.log(state, '::', event)
}))

const el = document.querySelector('.js-main')

signal.observe(state => {
  render(
    <App>
      <Navigator
        signal={signal}
        navigation={state.navigation}
        history={history}
        storage={null}
        Component={PageGroup}
        ComponentProps={{
          childFactory: childFactory(state.transition)
        }}
        mapChildren={mapChildren}
      >
        <HomeView route={routes.home} />
        <PageTransitionsView route={routes.pageTransitions} />
        <FadeTransition route={routes.fadeTransition} />
        <PageInTransition route={routes.pageInTransition} />
        <InstantTransition route={routes.instantTransition} />
        <ModalTransition route={routes.modalTransition} />
        <UsingPageTransitions route={routes.usingPageTransitions} />
        <UsingWithNavigator route={routes.usingWithNavigator} />
        <AnimationView route={routes.animations} />
        <FadeAnimation route={routes.fadeAnimation} />
        <AppearAnimation route={routes.appearAnimation} />
        <CascadeAnimation route={routes.cascadeAnimation} />
      </Navigator>
    </App>,
    el
  )
}, err => console.error(err))

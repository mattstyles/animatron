
import React from 'react'
import { render } from 'react-dom'
import { compress, safe } from 'raid-addons'
import { Navigator } from 'raid-navigator'

import { GlobalStyling, App } from './utils/components'
import { signal, events, history, routes } from './utils/navigation'
import {
  HomeView,
  PageTransitionsView,
  FadeTransition,
  PageInTransition,
  InstantTransition,
  ModalTransition,
  UsingPageTransitions,
  UsingWithNavigator
} from './views/pageViews'

import {
  AnimationView,
  FadeAnimation,
  AppearAnimation
} from './views/animationViews'

import {
  CommonCaseView,
  CascadeAnimation,
  TooltipCase,
  ReplaceCase
} from './views/commonViews'

import {
  PageGroup,
  mapChildren,
  childFactory
} from '../src'

signal.register(compress({
  [events.setTransition]: safe((state, { transition }) => ({
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
      <GlobalStyling />
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
        <CommonCaseView route={routes.commonCases} />
        <CascadeAnimation route={routes.cascadeAnimation} />
        <TooltipCase route={routes.tooltip} />
        <ReplaceCase route={routes.replace} />
      </Navigator>
    </App>,
    el
  )
}, err => console.error(err))


import React from 'react'
import {render} from 'react-dom'
import {compress, safe} from 'raid-addons'
import {Navigator} from 'raid-navigator'

import {setGlobalStyling} from './utils/components'
import {signal, events, history, routes} from './utils/navigation'
import {HomeView, SettingsView} from './utils/views'

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
      <HomeView route={routes.home} key={routes.home} />
      <SettingsView route={routes.settings} key={routes.settings} />
    </Navigator>,
    el
  )
}, err => console.error(err))

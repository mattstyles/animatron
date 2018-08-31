
import styled from 'styled-components'

import {routes, push, pop} from './navigation'
import {View, H1, Text, Button} from './components'

const PageView = styled(View)`
  background: rgb(244, 244, 244);
  height: 100vh;
  boxSizing: border-box;
`

export const HomeView = () => (
  <PageView isPadded>
    <H1>Home</H1>
    <Text>Home view</Text>
    <Button onClick={push({
      route: routes.settings
    })}>Settings</Button>
    <Button onClick={pop({})}>Back</Button>
  </PageView>
)

export const SettingsView = () => (
  <PageView isPadded>
    <H1>Settings</H1>
    <Button onClick={push({
      route: routes.home
    })}>Home</Button>
    <Button onClick={pop({})}>Back</Button>
  </PageView>
)

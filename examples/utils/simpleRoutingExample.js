
import React, {Component} from 'react'
import styled from 'styled-components'
import oc from 'open-color'

import {Button, TextBlock, Text} from './components'

import {TRANSITIONS, PageGroup, PageTransition, childFactory} from '../../src'

const Block = styled.div`
  background: ${oc.gray[8]};
  color: ${oc.white};
  margin: 1.6rem 0;
  padding: 1.6rem;
  padding: ${props => props.flush && '0'};
  display: flex;
  flex-direction: column;
`

const Choice = styled(Button)`
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
`

export class SimplePageTransitionExample extends Component {
  state = {
    route: 'one',
    transition: TRANSITIONS.FADE
  }

  render () {
    return (
      <Block flush>
        <Block>
          <Choice onClick={() => this.setState({
            route: 'one',
            transition: TRANSITIONS.PAGE_OUT
          })}>Cornholio</Choice>
          <Choice onClick={() => this.setState({
            route: 'two',
            transition: TRANSITIONS.PAGE_IN
          })}>Spartacus</Choice>
        </Block>
        <Block flush style={{maxHeight: 100}}>
          <Text>Rendering component:</Text>
          <PageGroup childFactory={childFactory(this.state.transition)}>
            {this.state.route === 'one' && (
              <PageTransition>
                <TextBlock inverted><Text flush>I am Cornholio</Text></TextBlock>
              </PageTransition>
            )}
            {this.state.route === 'two' && (
              <PageTransition>
                <TextBlock inverted><Text flush>I am Spartacus</Text></TextBlock>
              </PageTransition>
            )}
          </PageGroup>
        </Block>
      </Block>
    )
  }
}

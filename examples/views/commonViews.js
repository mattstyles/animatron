
import styled from 'styled-components'
import oc from 'open-color'
import React, { Component } from 'react'

import { routes, push, pop } from '../utils/navigation'
import { PageView, TextBlock, Text, Title, NavGroup, NavItem, NavBack, Button, Toggle } from '../utils/components'

import {
  AnimateGroup,
  AppearRight,
  AppearUp,
  AppearIn
} from '../../src'

const AppearInReplace = styled(AppearIn)`
  position: absolute;
  top: 0;
  left: 0;
`

const Tooltip = styled.div`
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: ${oc.white};
  border-color: ${oc.gray[8]};
  border-radius: 4px;
  padding: 4px 12px;

  :after, :before {
    position: absolute;
    top: 100%;
    left: 50%;
    height: 0;
    width: 0;
    border: solid transparent;
    content: ' ';
    pointer-events: none;
  }

  :after {
    border-top-color: rgba(0, 0, 0, 0.85);
    border-width: 4px;
    margin-left: -4px;
  }

  :before {
    border-top-color: ${oc.gray[8]};
    border-width: 6px;
    margin-left: -6px;
  }
`

const TooltipSizer = styled.div`
  position: absolute;
  top: -120%;
  width: 100%;
  pointer-events: none;
`

const createTooltip = Child => {
  return class extends Component {
    state = {
      isShowing: false
    }

    onClick = () => {
      this.setState(s => ({ ...s, isShowing: !s.isShowing }))
    }

    render () {
      return (
        <div style={{ position: 'relative', display: 'flex' }}>
          <AppearUp in={this.state.isShowing}>
            <TooltipSizer><Tooltip><Text flush>{this.props.tip}</Text></Tooltip></TooltipSizer>
          </AppearUp>
          <Child onClick={this.onClick} {...this.props} />
        </div>
      )
    }
  }
}

const TooltipButton = createTooltip(Button)

export const CommonCaseView = () => (
  <PageView>
    <Title>Common Use Cases</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <NavGroup>
      <NavItem onClick={push({
        route: routes.tooltip
      })}>Tooltips</NavItem>
      <NavItem onClick={push({
        route: routes.cascadeAnimation
      })}>Page onEnter</NavItem>
      <NavItem onClick={push({
        route: routes.replace
      })}>Replace Components</NavItem>
    </NavGroup>
  </PageView>
)

export const TooltipCase = () => (
  <PageView>
    <Title>Tooltips</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <TooltipButton tip='This is a tooltip' style={{ flex: 1 }}>Click Me</TooltipButton>
    </TextBlock>
  </PageView>
)

export const CascadeAnimation = () => (
  <PageView>
    <Title>onEnter Animations</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <TextBlock>
      <Text>The following animated paragraphs enter after a staggered delay and are fired when they are mounted in to the DOM by the page rendering.</Text>
      <Text flush>This page has the standard 150ms animation to appear so bare in mind that any components will mount roughly 150ms before you see them if you are <strong>not</strong> using the instant transition type for the page.</Text>
    </TextBlock>
    <TextBlock>
      <AppearRight in appear delay={{
        enter: 300,
        exit: 0
      }}><Text>The <code>appear</code> boolean property defines if this component should appear when mounted.</Text></AppearRight>
      <AppearRight in appear delay={{
        enter: 500,
        exit: 0
      }}><Text>The <code>delay</code> object property can be applied to stagger entry of subsequent elements.</Text></AppearRight>
      <AppearRight in appear delay={{
        enter: 700,
        exit: 0
      }}><Text><code>delay</code> accepts an object defining the entry and exit delay i.e. <code>{`{enter: 200, exit: 100}`}</code></Text></AppearRight>
    </TextBlock>
  </PageView>
)

export const ReplaceCase = () => (
  <PageView>
    <Title>Replacing Components</Title>
    <NavGroup>
      <NavBack onClick={pop({})}>Back</NavBack>
    </NavGroup>
    <TextBlock>
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
          ? <AppearInReplace in key='two' scale={0.5}><Text flush>Component Two</Text></AppearInReplace>
          : <AppearInReplace in key='one' scale={0.5}><Text flush>Component One</Text></AppearInReplace>
        }
      </Toggle>
    </TextBlock>
  </PageView>
)

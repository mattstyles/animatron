
import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import oc from 'open-color'

const font = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`
const monospace = `Source Code Pro, Consolas, monospace`

export const setGlobalStyling = () => {
  injectGlobal`
    html {
      font-size: 10px;
    }
    body {
      margin: 0;
      background: ${oc.gray[1]};
      color: ${oc.gray[8]};
      font-family: ${font};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;

      @media (min-width: 440px) {
        background: ${`linear-gradient(30deg, ${oc.orange[3]}, ${oc.red[7]} 75%)`};
      }
    }
    .main {
      display: flex;
      flex: 1;
    }
  `
}

export const App = styled.div`
  display: flex;
  flex: 1;
  max-width: 480px;

  @media (min-width: 440px) {
    position: absolute;
    width: 375px;
    height: 667px;
    border: 16px solid rgba(0, 0, 0, 0.85);
    border-radius: 8px;
    margin-left: 20px;
    margin-top: 20px;
  }
`

export const View = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${props => props.isPadded && '30px'};
  flex: ${props => props.noFlex && 'none'};
  display: ${props => props.noFlex && 'block'};
`

export const PageView = styled(View)`
  background: ${oc.gray[1]};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

export const H1 = styled.h1`
  font-size: 3rem;
`

export const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1.4;
  margin: 0 0 0.8rem 0;
  margin-bottom: ${props => props.flush && '0'};
`

export const InlineText = styled.span`
  font-size: 1.8rem;
  line-height: 1.4;
  display: inline-block;
`

export const TextBlock = styled.div`
  background: ${oc.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.8rem 1.6rem;
  margin: 1.6rem 0;
  background: ${props => props.inverted && oc.gray[8]};
  color: ${props => props.inverted && oc.white};
  margin: ${props => props.flush && '0'};
`

export const CodeBlock = styled.pre`
  background: ${oc.gray[8]};
  color: ${oc.gray[0]};
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 0.8rem 1.6rem;
  margin: 1.6rem 0;
  font-family: ${monospace};
  font-size: 1.8rem;
  overflow-x: scroll;
`

export const Button = styled.button`
  position: relative;
  font-size: 1.8rem;
  line-height: 2.5;
  background: ${oc.blue[5]};
  color: ${oc.white};
  font-weight: 500;
  letter-spacing: 1.2;
  text-transform: uppercase;
  padding: 0 20px;
  border-radius: 200px;
  border: none;
  cursor: pointer;

  :hover {
    background: ${oc.blue[7]};
  }

  :active {
    background: ${oc.blue[8]};
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: -0.5;
  background: ${oc.gray[0]};
  color: ${oc.gray[7]};
  padding: 0.8rem 0;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  text-align: center;
`

export const NavGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavItem = styled.li`
  background: ${oc.white};
  font-size: 1.8rem;
  padding: 0 1.6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  line-height: 2.5;

  :after {
    content: '>';
    float: right;
    font-family: ${monospace};
    color: ${oc.gray[5]};
  }
`

export const NavBack = styled(NavItem)`
  :after {
    content: '<';
    float: left;
    font-family: ${monospace};
    color: ${oc.gray[5]};
    margin-right: 1.6rem;
  }
`

export class Toggle extends Component {
  state = {
    isShowing: false
  }

  onToggle = () => {
    this.setState(s => ({
      ...s,
      isShowing: !s.isShowing
    }))
  }

  render () {
    const { isShowing } = this.state
    const { children, text, as: As, passProps } = this.props
    const contents = As
      ? <As {...passProps}>{children(isShowing)}</As>
      : children(isShowing)
    return (
      <Fragment>
        <Button onClick={this.onToggle}>{text}</Button>
        {contents}
      </Fragment>
    )
  }
}


import styled, {injectGlobal} from 'styled-components'

const font = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;`

export const setGlobalStyling = () => {
  injectGlobal`
    html {
      font-size: 10px;
    }
    body {
      margin: 0;
      background: rgb(244, 244, 244);
      color: rgb(64, 64, 64);
      font-family: ${font};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      display: flex;
    }
    .main {
      display: flex;
      flex: 1;
    }
  `
}

export const View = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${props => props.isPadded && '30px'};
`

export const H1 = styled.h1`
  font-size: 3rem;
`

export const Text = styled.p`
  font-size: 2.1rem;
`

export const Button = styled.button`
  font-size: 2.1rem;
  line-height: 2.5;
  background: rgb(70, 150, 180);
  color: rgb(255, 255, 255);
  font-weight: 500;
  letter-spacing: 1.5;
  text-transform: uppercase;
  padding: 0 20px;
  border-radius: 200px;
`

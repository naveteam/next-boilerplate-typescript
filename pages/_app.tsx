import { createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/app'

import Theme from 'theme'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0 auto;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #000;
    color: white;
  }
`

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App

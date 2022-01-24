import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import client from '../utils/client'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background:#dae0e6;
    font-family: Roboto, sans-serif;
  }
  html{
    height: 100%;
    width: 100%;
    font-size: 14px;
  }
  #__next{
    height: 100%;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
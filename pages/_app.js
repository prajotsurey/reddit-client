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
  }
  html{
    height: 100%;
    width: 100%;
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

export default function App({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>

    </>
  )
}
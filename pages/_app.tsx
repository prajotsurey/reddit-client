import React, { createContext, useEffect, useState } from 'react'
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
    background: ${props => props.theme.mainBackground};
    font-family: 'IBM plex sans', sans-serif;
    color:${props => props.theme.primaryTextColor};
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
  light: {
    primaryTextColor:'black',
    
    primaryAccentTextColor: '#0079d3',
    primaryAccentTextColorHover: '#3394dc',
    primaryAccentTextColorActive: '#0061a9',

    secondaryAccentTextColor: '#fff',
    
    primaryBorder: 'rgb(204, 204, 204)',
    primaryBorderHover: '#000',
    primaryBorderFocus: 'rgb(0, 0, 0,0.2)',
    primaryBorderActive: '#24a0ed',


    accentBorder: '#0079d3',

    mainBackground: '#dae0e6',
    
    primaryBackground: '#fff',
    
    primaryAccentBackground: '#fff',
    primaryAccentBackgroundHover: '#f4f9fd',
    primaryAccentBackgroundFocus: '#eaf4fb',
    primaryAccentBackgroundActive: '#d5e9f7',
    
    secondaryAccentBackground: '#0079d3',
    secondaryAccentBackgroundHover: '#1483d6',
    secondaryAccentBackgroundFocus: '#298eda',
    secondaryAccentBackgroundActive: '#3d99dd',

    voteSectionBackground: '#f7f9fa',
    dimColor: '#a5a4a4'
  },
  dark: {
    primaryTextColor:'#d7dadc',
    
    primaryAccentTextColor: '#d7dadc',
    
    secondaryAccentTextColor: '#1a1a1b',
    
    primaryBorder: '#343536',
    primaryBorderHover: 'rgb(129, 131, 132)',
    
    accentBorder: '#d7dadc',

    mainBackground: '#030303',
    
    primaryBackground: '#1a1a1b',
    
    primaryAccentBackground: '#1a1a1b',
    primaryAccentBackgroundHover: '#222223',
    primaryAccentBackgroundFocus: '#29292a',
    primaryAccentBackgroundActive: '#39393a',
    
    secondaryAccentBackground: '#d7dadc',
    secondaryAccentBackgroundHover: '#c7cacc',
    secondaryAccentBackgroundFocus: '#b7babc',
    secondaryAccentBackgroundActive: '#a9abad',

    voteSectionBackground: '#151516',

  }
}

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
})


const App = ({ Component, pageProps }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setDarkMode(Boolean(window.localStorage.getItem('reddit-theme')))
  },[])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    window.localStorage.setItem('reddit-theme', `${darkMode}`)
  }

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </ApolloProvider>
  )
}

export default App
import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { useMeQuery } from '../generated/graphql'
import { ThemeContext } from '../pages/_app'

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left:0;
  right:0;
  height: 50px;
  background: ${props => props.theme.primaryBackground};
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  padding: 0px 30px;
`
const Logo = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const NavLink = styled.a`
  text-decoration: none;
  border: 1px solid ${props => props.theme.accentBorder};
  border-radius: 999px;
  padding: 8px 40px;
  color: ${props => props.theme.primaryAccentTextColor};
  font-weight: 600;
  margin-left: 10px;

  &:hover {
    background:${props => props.theme.primaryAccentBackgroundHover};
  }

  &:focus {
    background:${props => props.theme.primaryAccentBackgroundFocus};
  }

  &:active {
    background:${props => props.theme.primaryAccentBackgroundActive};
  }
`

const NavLinkAlternate = styled(NavLink)`
  color: ${props => props.theme.secondaryAccentTextColor};

  background: ${props => props.theme.secondaryAccentBackground};
  
  &:hover {
    background:${props => props.theme.secondaryAccentBackgroundHover};
  }

  &:focus {
    background:${props => props.theme.secondaryAccentBackgroundFocus};
  }

  &:active {
    background:${props => props.theme.secondaryAccentBackgroundActive};
  }
`

const NavBarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`


const NavBar = () => {

  const { data } = useMeQuery()
  const context = useContext(ThemeContext)

  return(
    <NavBarContainer>
      <Logo>
        Reddit
      </Logo>
      <NavBarRight>
        { data?.Me 
          ?
          <>
            {data.Me.email}
          </>
          :
          <ButtonsContainer>
            <Link href="/login">
              <NavLink tabIndex={0}>
            Log In
              </NavLink>
            </Link>
            <Link href="/signup">
              <NavLinkAlternate tabIndex={0}>
            Sign Up
              </NavLinkAlternate>
            </Link>
          </ButtonsContainer>
        }
        <button onClick={() => context.toggleDarkMode()}>
        toggleTheme
        </button>
      </NavBarRight>
    </NavBarContainer>
  )
}

export default NavBar
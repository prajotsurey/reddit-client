import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { useMeQuery } from '../generated/graphql'
import SliderButton from './SliderButton'
import UserMenu from './UserMenu'

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
  z-index:4;

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

  @media(max-width:480px){
    display: none;
  }
`

const LogoLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4em;
  display: flex;
  flex-direction: row;
`

const SidebarToggle = styled.button`
  background: none;
  border: none;
  padding: 0px;
  height:20px;
  @media(min-width: 481px){
    display:none;
  }
`

const SidebarToggleSvg = styled.svg`
  fill: ${props => props.theme.primaryAccentTextColor};

`

const CreatePostLink = styled.a`
  fill: ${props => props.theme.secondaryAccentBackground};
  margin-right: 15px;
  height: 24px;
  &:hover {
    fill:${props => props.theme.secondaryAccentBackgroundHover};
  }

  &:focus {
    fill:${props => props.theme.secondaryAccentBackgroundFocus};
  }

  &:active {
    fill:${props => props.theme.secondaryAccentBackgroundActive};
  }
`

const CreatePostSvg = styled.svg`
  fill: inherit;
`

const RedditAlien = styled.svg`
  height: 2rem;
  margin-right:10px;
` 
const RedditLogoText = styled.svg`
  height: 1.7rem;
  fill: ${props => props.theme.primaryTextColor};
  
`

interface props {
  toggle: (arg:boolean) => void
}
const NavBar:React.FC<props> = ({toggle}) => {

  const { data } = useMeQuery()

  return(
    <NavBarContainer>
      <Link href="/">
        <LogoLink>
          <RedditAlien xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <g>
              <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
              <path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z">
              </path>
            </g>
          </RedditAlien>
          <RedditLogoText viewBox="0 0 57 18" xmlns="http://www.w3.org/2000/svg">
            <g >
              <path d="M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z">
              </path>
              <circle fill="#FF4500" cx="47.26" cy="3.44" r="2.12"></circle>
              <path d="M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"></path>
              <path d="M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z">
              </path>
              <path d="M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z">
              </path>
              <path d="M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z">
              </path>
              <path d="M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z">
              </path>
            </g>
          </RedditLogoText>
        </LogoLink>
      </Link>
      <NavBarRight>
        { data?.Me 
          ?
          <>
            <Link href="/createPost">
              <CreatePostLink tabIndex={0}>
                <CreatePostSvg width="25" height="24" viewBox="0 0 25 24"  xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.1597 1.94287C18.0286 0.869851 19.6029 0.704391 20.6759 1.5733V1.5733C21.7489 2.44221 21.9143 4.01645 21.0454 5.08947L19.8826 6.5255L15.9968 3.3789L17.1597 1.94287Z" />
                  <path d="M15.3128 4.22362L19.1985 7.37022L10.99 17.5069L7.10425 14.3603L15.3128 4.22362Z" />
                  <path d="M5.91733 20.5204C5.53438 20.7096 5.10581 20.3626 5.21129 19.9487L6.2275 15.9612C6.31755 15.6079 6.74331 15.4667 7.02667 15.6961L9.69949 17.8605C9.98285 18.09 9.93323 18.5358 9.60635 18.6974L5.91733 20.5204Z" />
                  <rect y="22" width="25" height="2" rx="1" />
                </CreatePostSvg>
              </CreatePostLink>
            </Link>
            {data.Me.email}
            <UserMenu/>
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
        <SliderButton />
      </NavBarRight>
      <SidebarToggle onClick={() => toggle(true)}>
        <SidebarToggleSvg width="20" height="23" viewBox="0 0 20 23"  xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3H20V0H0V3ZM0 13H20V10H0V13ZM0 23H20V20H0V23Z" />
        </SidebarToggleSvg>
      </SidebarToggle>
    </NavBarContainer>
  )
}

export default NavBar
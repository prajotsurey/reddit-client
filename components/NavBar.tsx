import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { useMeQuery } from '../generated/graphql'
import { ThemeContext } from '../pages/_app'
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

const ToggleButton = styled.button`
  border: none;
  background: none;
  height: 20px;
  margin-left:15px;
  padding: 0px;
`
const ThemeIcon = styled.svg`
  background: none;
  border: none;
  height: 20px;
  fill: ${props => props.theme.primaryAccentTextColor}};

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
  const context = useContext(ThemeContext)

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
        <ToggleButton onClick={() => context.toggleDarkMode()}>
          {context.darkMode 
            ? <ThemeIcon width="30" height="30" viewBox="0 0 44 44"  xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M36.1761 32.8615C35.9925 32.8656 35.8084 32.8676 35.6239 32.8676C22.0976 32.8676 11.1325 21.9024 11.1325 8.37622C11.1325 8.19166 11.1345 8.00754 11.1386 7.82389C7.06268 11.0893 4.45298 16.1097 4.45298 21.7351C4.45298 31.5724 12.4277 39.547 22.2649 39.547C27.8903 39.547 32.9107 36.9374 36.1761 32.8615ZM38.8881 28.1501C37.8258 28.3241 36.7354 28.4146 35.6239 28.4146C24.5569 28.4146 15.5854 19.4431 15.5854 8.37622C15.5854 7.26465 15.676 6.17421 15.85 5.11189C16.1442 3.31642 16.677 1.60125 17.4148 0C15.497 0.426063 13.6723 1.09947 11.9759 1.98502C4.85853 5.70048 0 13.1504 0 21.7351C0 34.0317 9.96834 44 22.2649 44C30.8496 44 38.2995 39.1415 42.015 32.0242C42.9005 30.3278 43.5739 28.5031 44 26.5853C42.3987 27.3231 40.6836 27.8559 38.8881 28.1501Z" />
            </ThemeIcon>
          
            :<ThemeIcon width="30" height="30" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.2 44H19.8V37.4H24.2V44ZM36.0008 39.1116L31.3346 34.4454L34.4454 31.3346L39.1138 36.003L36.0052 39.1116H36.0008ZM7.9992 39.1116L4.8862 36.0008L9.5502 31.3324L12.6632 34.4432L7.9992 39.1094V39.1116ZM22 33.0154C15.9169 33.013 10.9874 28.0801 10.989 21.9971C10.9906 15.914 15.9228 10.9838 22.0059 10.9846C28.0889 10.9854 33.0198 15.9169 33.0198 22C33.0137 28.0828 28.0828 33.0118 22 33.0154ZM22 15.3846C18.347 15.387 15.3874 18.3499 15.389 22.0029C15.3906 25.6559 18.3529 28.6162 22.0059 28.6154C25.6589 28.6146 28.6198 25.653 28.6198 22C28.6162 18.3462 25.6538 15.3858 22 15.3846ZM44 24.2H37.4V19.8H44V24.2ZM6.6 24.2H0V19.8H6.6V24.2ZM34.4432 12.6676L31.3346 9.5546L36.0008 4.8862L39.1138 7.9992L34.4454 12.6654L34.4432 12.6676ZM9.5546 12.6676L4.8906 8.0014L8.0036 4.8906L12.6676 9.559L9.5568 12.6654L9.5546 12.6676ZM24.2 6.6H19.8V0H24.2V6.6Z" />
            </ThemeIcon>
          }
        </ToggleButton>
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
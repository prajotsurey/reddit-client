import { useApolloClient } from '@apollo/client'
import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'
import { ThemeContext } from '../pages/_app'
import { setToken } from '../utils/token'

const SidebarContainer = styled.nav<{ sideBarOpen: boolean}>`
  position: fixed;
  top: 0;
  left:0;
  bottom:0;
  width:100%;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  padding: 0px 30px;
  flex-direction:column;
  justify-content: start;
  align-items:start;
  background: ${props => props.theme.mainBackground};
  color: ${props => props.theme.primaryAccentTextColor};
  font-weight: 500;
  transition: transform 0.2s ease-out;
  transform: ${props => props.sideBarOpen ? 'translateX(0)':'translateX(-100%)'};
  z-index:4;
  @media(min-width:750px) {
    transform: translate(-100%);
  }
`

const SideLink = styled.a`
  display: block;
  text-decoration: none;
  border: 1px solid ${props => props.theme.accentBorder};
  border-radius: 5px;
  padding: 8px ;
  text-align:center;
  font-weight: 600;
  margin-bottom: 10px;
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
const SideButton = styled.button`
  display: block;
  text-decoration: none;
  border: 1px solid ${props => props.theme.accentBorder};
  border-radius: 5px;
  padding: 8px ;
  text-align:center;
  font-weight: 600;
  margin-bottom: 10px;
  width: 100%;
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
const LinksContainer = styled.div`
  margin-top:10px;
  width:100%;
`

const ToggleButton = styled.button`
  border: none;
  background: none;
  height: 20px;
  padding:0px;
`
const ThemeIcon = styled.svg`
  background: none;
  border: none;
  height: 20px;
  fill: ${props => props.theme.primaryAccentTextColor};

`
const NavTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  padding: 10px 0px;
  align-items:center;
`

const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 1.4em;
  font-weight: 500;
`

const SidebarEmail = styled.div`
  margin-bottom: 10px;
`

const SidebarToggle = styled.button`
  background: none;
  border: none;
  padding:0px;
  height:30px;
`

const SidebarToggleSvg = styled.svg`
  stroke: ${props => props.theme.primaryAccentTextColor};

`
interface Props  {
  sideBarOpen : boolean,
  toggle: (arg:boolean) => void
}


const SideBar:React.FC<Props> = ({sideBarOpen, toggle}) => {

  const { data } = useMeQuery()
  const context = useContext(ThemeContext)
  const [logout] = useLogoutMutation()
  const apolloClient = useApolloClient()

  return(
    <SidebarContainer sideBarOpen={sideBarOpen}>
      <NavTop>
        <Link href="/">
          <Logo>
            Reddit
          </Logo>
        </Link>
        <ToggleButton onClick={() => context.toggleDarkMode()}>
          {context.darkMode 
            ? <ThemeIcon width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M36.1761 32.8615C35.9925 32.8656 35.8084 32.8676 35.6239 32.8676C22.0976 32.8676 11.1325 21.9024 11.1325 8.37622C11.1325 8.19166 11.1345 8.00754 11.1386 7.82389C7.06268 11.0893 4.45298 16.1097 4.45298 21.7351C4.45298 31.5724 12.4277 39.547 22.2649 39.547C27.8903 39.547 32.9107 36.9374 36.1761 32.8615ZM38.8881 28.1501C37.8258 28.3241 36.7354 28.4146 35.6239 28.4146C24.5569 28.4146 15.5854 19.4431 15.5854 8.37622C15.5854 7.26465 15.676 6.17421 15.85 5.11189C16.1442 3.31642 16.677 1.60125 17.4148 0C15.497 0.426063 13.6723 1.09947 11.9759 1.98502C4.85853 5.70048 0 13.1504 0 21.7351C0 34.0317 9.96834 44 22.2649 44C30.8496 44 38.2995 39.1415 42.015 32.0242C42.9005 30.3278 43.5739 28.5031 44 26.5853C42.3987 27.3231 40.6836 27.8559 38.8881 28.1501Z" />
            </ThemeIcon>
          
            :<ThemeIcon width="30" height="30" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.2 44H19.8V37.4H24.2V44ZM36.0008 39.1116L31.3346 34.4454L34.4454 31.3346L39.1138 36.003L36.0052 39.1116H36.0008ZM7.9992 39.1116L4.8862 36.0008L9.5502 31.3324L12.6632 34.4432L7.9992 39.1094V39.1116ZM22 33.0154C15.9169 33.013 10.9874 28.0801 10.989 21.9971C10.9906 15.914 15.9228 10.9838 22.0059 10.9846C28.0889 10.9854 33.0198 15.9169 33.0198 22C33.0137 28.0828 28.0828 33.0118 22 33.0154ZM22 15.3846C18.347 15.387 15.3874 18.3499 15.389 22.0029C15.3906 25.6559 18.3529 28.6162 22.0059 28.6154C25.6589 28.6146 28.6198 25.653 28.6198 22C28.6162 18.3462 25.6538 15.3858 22 15.3846ZM44 24.2H37.4V19.8H44V24.2ZM6.6 24.2H0V19.8H6.6V24.2ZM34.4432 12.6676L31.3346 9.5546L36.0008 4.8862L39.1138 7.9992L34.4454 12.6654L34.4432 12.6676ZM9.5546 12.6676L4.8906 8.0014L8.0036 4.8906L12.6676 9.559L9.5568 12.6654L9.5546 12.6676ZM24.2 6.6H19.8V0H24.2V6.6Z" />
            </ThemeIcon>
          }
        </ToggleButton>
        <SidebarToggle onClick={() => toggle(false)}>
          <SidebarToggleSvg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.92893 7.42893L22.0711 21.5711"  strokeWidth="3"/>
            <path d="M7.92893 21.5711L22.0711 7.42892"  strokeWidth="3"/>
          </SidebarToggleSvg>

        </SidebarToggle>
      </NavTop>
      <LinksContainer>
        { data?.Me 
          ?
          <>
            <SidebarEmail>
              {data.Me.email}
            </SidebarEmail>
            <Link href="/createPost">
              <SideLink tabIndex={0}>
                New Post
              </SideLink>
            </Link>
            <Link href="/profile">
              <SideLink tabIndex={0}>
                Profile
              </SideLink>
            </Link>
            <SideButton onClick={async () => {
              await logout()
              setToken('')
              await apolloClient.resetStore()
            }} tabIndex={0}>
                Logout
            </SideButton>
          </>
          :
          <>
            <Link href="/login">
              <SideLink tabIndex={0}>
            Log In
              </SideLink>
            </Link>
            <Link href="/signup">
              <SideLink tabIndex={0}>
            Sign Up
              </SideLink>
            </Link>
          </>
        }

      </LinksContainer>
    </SidebarContainer>
  )
}

export default SideBar
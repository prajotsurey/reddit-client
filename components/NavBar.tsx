import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left:0;
  right:0;
  height: 50px;
  background: white;
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
  border: 1px solid #0079d3;
  border-radius: 999px;
  padding: 8px 40px;
  color: #0079d3;
  font-weight: 600;
  margin-left: 10px;

  &:hover {
    background:#f4f9fd;
  }

  &:focus {
    background:#eaf4fb;
  }

  &:active {
    background: #d5e9f7;
  }
`

const NavLinkAlternate = styled.a`
  text-decoration: none;
  border: 1px solid #0079d3;
  border-radius: 999px;
  padding: 8px 40px;
  color: #fff;
  font-weight: 600;
  margin-left: 10px;

  background: #0079d3;
  
  &:hover {
    background:#1483d6;
  }

  &:focus {
    background:#298eda;
  }

  &:active {
    background: #3d99dd;
  }
`


const NavBar = () => {
  return(
    <NavBarContainer>
      <Logo>
        Reddit
      </Logo>
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
    </NavBarContainer>
  )
}

export default NavBar
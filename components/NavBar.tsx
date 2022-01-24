import React from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
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


const NavBar = () => {
  return(
    <NavBarContainer>
      <Logo>
        Reddit
      </Logo>
      <ButtonsContainer>
        
      </ButtonsContainer>
    </NavBarContainer>
  )
}

export default NavBar
import styled from 'styled-components'
import React, { useState } from 'react'


const DropDownContainer = styled.div<{open: boolean}>`
  display: ${props => props.open ? 'block': 'none'};
  position:absolute;
  top:110%;
  width: 150px;
  background: ${props => props.theme.primaryBackground};
  border-radius:5px;
  box-shadow: 0px 0px 7px grey;
`
const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0;
`
const ListElement = styled.li`
  font-weight: 500;

`

const DropDownButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  height: 25px;
  margin-left: 15px;
`

const DropDownSvg = styled.svg`
  stroke : ${props => props.theme.primaryAccentTextColor};

  & .path {
    fill : ${props => props.theme.primaryAccentTextColor};
  }
`
const ButtonContainer = styled.div`
  display: flex;
`
const MenuContainer = styled.div`
  position: relative;
`

interface props {
  children: React.ReactNode[]
}
const DropDownMenu:React.FC<props> = ({children}) => {
  const [open,setOpen] = useState(false)
  return(
    <MenuContainer>
      <ButtonContainer>
        <DropDownButton onClick={() => setOpen(!open)}>
          <DropDownSvg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="22" height="22" rx="1.5" strokeWidth="2"/>
            <path className='path' d="M12.5 18.3333L5.1343 10.9676C4.64615 10.4795 4.64615 9.68802 5.1343 9.19987V9.19987C5.62246 8.71171 6.41392 8.71171 6.90207 9.19987L14.2678 16.5656L12.5 18.3333Z" />
            <path className='path' d="M10.7322 16.5656L18.0979 9.19987C18.5861 8.71172 19.3775 8.71172 19.8657 9.19987V9.19987C20.3539 9.68803 20.3539 10.4795 19.8657 10.9676L12.5 18.3333L10.7322 16.5656Z" />
          </DropDownSvg>
        </DropDownButton>
      </ButtonContainer>  
      <DropDownContainer open={open}>
        <List>
          {
            children.map(child => (
              <>
                <ListElement>
                  {child}
                </ListElement>
              </>
            ))
          }
          
          <ListElement >
            
          </ListElement> 
        </List> 
      </DropDownContainer>
    </MenuContainer>

  )
}

export default DropDownMenu
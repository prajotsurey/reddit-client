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
  display:flex;
  height:10px;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  display: flex;
`
const PostInfo = styled.svg`
  fill: ${props => props.theme.dimColor};

`

const MenuContainer = styled.div`
  position: relative;
`

interface props {
  children: React.ReactNode
}
const PostMenu:React.FC<props> = ({children}) => {
  const [open,setOpen] = useState(false)
  return(
    <MenuContainer>
      <ButtonContainer>
        <DropDownButton onClick={() => setOpen(!open)}>
          <PostInfo width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.49998" cy="1.5" r="1.5" />
            <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z"/>
            <circle cx="17.5" cy="1.5" r="1.5"/>
          </PostInfo>
        </DropDownButton>
      </ButtonContainer>  
      <DropDownContainer open={open}>
        <List>
          <ListElement>
            {children}
          </ListElement>
        </List> 
      </DropDownContainer>
    </MenuContainer>
  )
}

export default PostMenu
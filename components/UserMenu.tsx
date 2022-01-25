import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLogoutMutation } from '../generated/graphql'
import { gql, useApolloClient } from '@apollo/client'


const DropDownContainer = styled.div`
  display: ${props => props.open ? 'block': 'none'};
  position:absolute;
  top:110%;
  width: 150px;
  background: ${props => props.theme.primaryBackground};
  border-radius:5px;
`
const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0;
`
const ListElement = styled.li`
  font-weight: 500;
  padding: 10px 10px;
  color: ${props => props.theme.dimColor};
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.secondaryAccentBackground};
    color: ${props => props.theme.secondaryAccentTextColor};
  }
`

const StyledInnerLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`

const UserMenu:React.FC<{email:string}> = ({email}) => {
  const [open,setOpen] = useState(false)
  const apolloClient = useApolloClient()
  const [logout] = useLogoutMutation()
  return(
    <div>
      <span onClick={() => setOpen(!open)}>
        {email}

      </span>
      <DropDownContainer open={open}>
        <List>
          <ListElement>
            <Link href="/profile">
              <StyledInnerLink>
                Profile
              </StyledInnerLink>
            </Link>
          </ListElement>
          <ListElement onClick={async () => {
            await logout()
            await apolloClient.resetStore()
          }}>
            Logout  
          </ListElement> 
        </List> 
      </DropDownContainer>
    </div>

  )
}

export default UserMenu
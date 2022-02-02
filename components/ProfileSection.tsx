import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface props {
  user: {
    id: number,
    createdAt: string,
    email: string,
  } | undefined | null
}


const ProfileSectionContainer = styled.div`
  flex-basis: 300px;
  flex-shrink: 1;
  position:sticky;
  top: 70px;
  margin-left: 20px;

  @media(max-width:750px) {
    margin-left: 0px;
    flex-basis:auto;
    position:static;
  }


`
const ProfileHeader = styled.div`
  height: 100px;
  width: 100%;
  background: ${props => props.theme.secondaryAccentBackground};
  border-radius: 5px 5px 0px 0px;
`
const ProfileContent = styled.div`
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  background: ${props => props.theme.primaryBackground};
  @media(max-width:750px) and (min-width:350px) {
    display: flex;
    flex-direction:row;
    align-items:start;
  }
`

const ProfileEmail = styled.div`
  font-weight: 500;
`

const JoinSection = styled.div`
  font-weight: 500;
  margin-top: 10px;
`

const JoinedAtDate = styled.div`
  font-weight: 500;
  color: ${props => props.theme.dimColor};
`
const CreatePostLink = styled.a`
  display: block;
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.secondaryAccentBackground};
  color: ${props => props.theme.secondaryAccentTextColor};
  margin-top: 10px;
  padding: 10px;
  border-radius: 7px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  @media(max-width:750px) and (min-width:350px) {
    margin-top: 0px;
    max-width: 150px;
    margin-left: auto;
  }

`
const Info = styled.div`

`
const ProfileSection:React.FC<props> = ({ user }) => {
  if(!user){
    return null
  }
  return(
    <ProfileSectionContainer>
      <ProfileHeader />
      <ProfileContent>
        <Info>
          <ProfileEmail>
            {user.email}
          </ProfileEmail>
          <JoinSection>
          Joined At
            <JoinedAtDate>
              {new Date(user.createdAt).toDateString()}
            </JoinedAtDate>
          </JoinSection>
        </Info>
        <>
          <Link href={'/createPost'}>
            <CreatePostLink>
            NEW POST
            </CreatePostLink>
          </Link>
        </>
      </ProfileContent>
    </ProfileSectionContainer>
  )
}

export default ProfileSection
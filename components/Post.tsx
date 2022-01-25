import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const PostContainer = styled.div`
  border: 1px solid ${props => props.theme.primaryBorder};
  margin-bottom: 1em;
  width:100%;
  box-sizing: border-box;
  border-radius: 8px;
  background: ${props => props.theme.primaryBackground};
  display:flex;
  flex-direction:row;
  min-height: 100px;
  &:hover {
    border-color: ${props => props.theme.primaryBorderHover};
  }
`
const VoteSection = styled.div`
  width: 40px;
  background: ${props => props.theme.voteSectionBackground};
  border-radius: 8px 0px 0px 8px;
`
const PostData = styled.div`
  padding: 8px 8px;
  flex:1
`
const PostCreator = styled.div`
  font-size: 0.6rem;
  color:${props => props.theme.dimColor};
  margin-bottom: 8px;
`

const StyledInnerLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`

const PostTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`
const PostComponent = ({ post }: any) => {
  
  return(
    <Link href={`/post/${post.id}`}>
      <StyledInnerLink>
        <PostContainer>
          <VoteSection/>
          <PostData>
            <PostCreator>
              Posted by {post.creator.email}
            </PostCreator>
            <PostTitle>
              {post.title}
            </PostTitle>
          </PostData>
        </PostContainer>
      </StyledInnerLink>
    </Link>
  )
}

export default PostComponent
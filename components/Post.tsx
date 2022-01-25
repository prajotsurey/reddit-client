import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { PaginatedPostsResponse } from '../generated/graphql'
import VoteSection from './VoteSection'

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

interface Props {
  post: { 
    __typename?: 'Post'
    id: number
    title: string
    content: string
    createdAt: any
    voteStatus: number
    voteCount: number
    creator: { __typename?: 'User', id: number, email: string } 
  }
}

const PostComponent:React.FC<Props> = ({ post }) => {
  
  return(
    <Link href={`/post/${post.id}`}>
      <StyledInnerLink>
        <PostContainer>
          <VoteSection voteCount={post.voteCount} voteStatus={post.voteStatus}/>
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
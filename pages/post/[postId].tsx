import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/NavBar'
import { usePostQuery } from '../../generated/graphql'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding-top: 70px;
`
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
`
const VoteSection = styled.div`
  width: 40px;
  border-radius: 8px 0px 0px 8px;
  background: ${props => props.theme.voteSectionBackground};

`
const PostData = styled.div`
  padding: 12px 8px;
  flex:1
`
const PostCreator = styled.div`
  font-size: 0.8rem;
  color:${props => props.theme.dimColor};
  margin-bottom: 10px;
`

const PostTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`

const PostContent = styled.div`
  margin-top: 2rem;
`

const PostDetail = () => {
  const router = useRouter()
  const { postId } = router.query
  const { data, loading } = usePostQuery({
    skip: !postId,
    variables: {
      id: typeof postId === 'string' ? parseFloat(postId) : -1
    }})

  if (loading) {
    return(
      <>
      loading
      </>
    )
  }

  return(
    <>
      <NavBar />
      <Container>
        <PostContainer>
          <VoteSection/>
          <PostData>
            <PostCreator>
              Posted by {data?.post.creator.email}
            </PostCreator>
            <PostTitle>
              {data?.post.title}
            </PostTitle>
            <PostContent>
              {data?.post.content}
            </PostContent>
          </PostData>
        </PostContainer>
      </Container>
    </>
  )
}


export default PostDetail
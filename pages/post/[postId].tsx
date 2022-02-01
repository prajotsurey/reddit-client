import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import PostMenu from '../../components/PostMenu'
import VoteSection from '../../components/VoteSection'
import { useDeletePostMutation, useMeQuery, usePostQuery } from '../../generated/graphql'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding: 70px 10px 15px 10px;
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
const PostData = styled.div`
  padding: 12px 8px;
  flex:1
`
const PostTop = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

const PostCreator = styled.div`
  font-size: 0.9rem;
  color:${props => props.theme.dimColor};
`

const PostTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
`

const PostContent = styled.div`
  margin-top: 2rem;
`
const StyledInnerButton = styled.a`
padding: 10px 10px;
box-sizing:border-box;
display:block;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.primaryAccentTextColor};
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.secondaryAccentBackground};
    color: ${props => props.theme.secondaryAccentTextColor};
  }
`

const PostDetail = () => {
  const {data: meData} = useMeQuery()
  const router = useRouter()
  const { postId } = router.query
  const { data, loading } = usePostQuery({
    skip: !postId,
    variables: {
      id: typeof postId === 'string' ? parseFloat(postId) : -1
    }})

  const [deletePost] = useDeletePostMutation()
  if (loading) {
    return(
      <>
      loading
      </>
    )
  }

  if(!data){
    return(
      <>
      unable to load post
      </>
    )
  }

  return(
    <>
      <Header />
      <Container>
        <PostContainer>
          <VoteSection voteCount={data.post.voteCount} voteStatus={data.post.voteStatus} id={data.post.id}/>
          <PostData>
            <PostTop>
              <PostCreator>
              Posted by {data?.post.creator.email}
              </PostCreator>
              {
                data.post.creator.id === meData?.Me?.id
                  ?
                  <PostMenu >
                    <StyledInnerButton onClick={async () => {
                      await deletePost({variables: {id:data.post.id}})
                      router.push('/')
                    }}>
                      Delete Post
                    </StyledInnerButton>
                  </PostMenu>
                  :null
              }
            </PostTop>
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
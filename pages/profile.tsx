import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Loading from '../components/Loading'
import PostComponent from '../components/Post'
import ProfileSection from '../components/ProfileSection'
import { useMeQuery, useMyPaginatedPostsQuery } from '../generated/graphql'

const Container = styled.div`
  max-width: 960px;
  margin: 0px auto;
  padding: 70px 10px 15px 10px;
  display:flex;
  flex-direction: row;
  align-items:start;

  @media(max-width:750px) {
    flex-direction: column-reverse;
    max-width: 600px;
    align-items:stretch;
  }

`

const PostsSection = styled.div`
  flex-basis: 640px;
  flex-shrink: 3;
`

const LoadMoreButton = styled.button`
  display:block;
  border: none;
  background: ${props => props.theme.primaryBackground};
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  margin: 0px auto;
  color: ${props => props.theme.primaryTextColor};
`

const StyledTextLink = styled.a`
  color: ${props => props.theme.primaryAccentTextColor};
  font-weight: 600;
  &:hover {
    color: ${props => props.theme.primaryAccentTextColorHover};
  }

  &:active {
    color: ${props => props.theme.primaryAccentTextColorActive};
  }

`

const Profile = () => {
  const {data,loading,error} = useMeQuery()
  const {data:postData,loading:postLoading,error:postError, fetchMore} = useMyPaginatedPostsQuery({errorPolicy: 'all'})
  const router = useRouter()
  if(loading || postLoading) {
    return(
      <Loading /> 
    )
  }

  if(error || postError){
    router.push('/')
  }

  if(!data?.Me){
    router.push('/')
  }
  return(
    <>
      <Head>
        <title>
          reddit.com:Profile
        </title>
      </Head>
      <Header/>
      <Container>
        <PostsSection>
          <h1>Posts</h1>
          {
            postData?.myPaginatedPosts.posts[0]
              ?
              postData?.myPaginatedPosts.posts.map( (post) => (
                <>
                  <PostComponent post={post}/>
                </>
              ))
              :
              <div>
                You do not have any posts yet.{' '}
                <Link href={'/createPost'}>
                  <StyledTextLink>
                      Create a Post.
                  </StyledTextLink>        
                </Link>
              </div>

          }
          { postData?.myPaginatedPosts.hasMore
            ?
            <LoadMoreButton type="button" onClick={() => {
              fetchMore({
                variables:{
                  cursor: postData?.myPaginatedPosts.posts[9].createdAt //ts does not have support for array.prototype.at in es2021
                }
              })
            }}>
                  Load more
            </LoadMoreButton>
            : <></>
          }
        </PostsSection>
        <ProfileSection user={data?.Me} />
      </Container>
    </>
  )
}


export default Profile
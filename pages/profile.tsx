import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import PostComponent from '../components/Post'
import ProfileSection from '../components/ProfileSection'
import { useMeQuery, useMyPaginatedPostsQuery } from '../generated/graphql'

const Container = styled.div`
  max-width: 960px;
  margin: 0px auto;
  padding-top: 70px;
  display:flex;
  flex-direction: row;
`

const PostsSection = styled.div`
  flex-basis: 640px;
  flex-shrink: 1;
  padding: 0px 20px;
`



const Profile = () => {
  const {data,loading,error} = useMeQuery()
  const {data:postData,loading:postLoading,error:postError} = useMyPaginatedPostsQuery()
  const router = useRouter()
  if(loading || postLoading) {
    return(
      <>
        loading
      </>
    )
  }

  if(error || postError){
    router.push('/')
  }

  return(
    <>
      <Head>
        <title>
        reddit.com:Profile
        </title>
      </Head>
      <NavBar/>
      <Container>
        <PostsSection>
          <h1>Posts</h1>
          {postData?.myPaginatedPosts.posts.map( (post) => (
            <>
              <PostComponent post={post}/>
            </>
          ))}
        </PostsSection>
        <ProfileSection user={data?.Me} />
      </Container>
    </>
  )
}


export default Profile
import React from 'react'
import styled from 'styled-components'
import Post from '../components/Post'
import { usePaginatedPostsQuery } from '../generated/graphql'
import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import Loading from '../components/Loading'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding: 70px 10px 15px 10px;
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
  border: 1px solid ${props => props.theme.primaryBorder};

  &:hover {
    background:${props => props.theme.primaryAccentBackgroundHover};
    border-color: ${props => props.theme.primaryBorderHover};

  }

  &:focus {
    background:${props => props.theme.primaryAccentBackgroundFocus};
  }

  &:active {
    background:${props => props.theme.primaryAccentBackgroundActive};
  }
`

const NoPostsNote = styled.div`
  width:100%;
  height: calc(100vh - 70px - 15px);
  display: grid;
  place-items:center;
  font-size:1.2em;
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
const Home = () => {

  const {data, loading, fetchMore} = usePaginatedPostsQuery()
  if(loading) {
    return(
      <Loading />
    )
  }

  return(
    <>
      <Head>
        <title>
        reddit.com
        </title>
      </Head>
      <Header/>
      <Container>
        <main>
          {
            data?.paginatedPosts.posts[0]
              ?
              data?.paginatedPosts.posts.map( (post) => (
                <>
                  <Post post={post}/>
                </>
              ))
              :
              <NoPostsNote>
                <span>
                There are no posts here yet. {' '}
                  <Link href={'/createPost'}>
                    <StyledTextLink>
                      Create a Post.
                    </StyledTextLink>        
                  </Link>
                </span>
              </NoPostsNote>

          }
          { data?.paginatedPosts.hasMore
            ?
            <LoadMoreButton type="button" onClick={() => {
              fetchMore({
                variables:{
                  cursor: data?.paginatedPosts.posts[9].createdAt //ts does not have support for array.prototype.at in es2021
                }
              })
            }}>
                Load more
            </LoadMoreButton>
            : <></>
          }
        </main>
      </Container>
    </>
  )
}

export default Home

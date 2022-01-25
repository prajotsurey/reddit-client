import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client'
import { PaginatedPostsResponse } from '../generated/graphql'
import { setContext } from '@apollo/client/link/context'
import { getToken, setToken } from './token'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode from 'jwt-decode'

console.log(process.env.NEXT_PUBLIC_SERVER_URL)
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SERVER_URL,
  credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getToken()
    if(!token){
      return false
    }

    try {
      const { exp }:any = jwtDecode(token)
      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch {
      return false
    }

  },
  fetchAccessToken: () => {
    return fetch(process.env.NEXT_PUBLIC_TOKEN_REFRESH_LINK as string,{ 
      method: 'POST',
      credentials: 'include'
    })
  },
  handleFetch: accessToken => {
    setToken(accessToken)
  },
  handleError: err => {
    console.warn('You are not logged in')
  }
})


const client = new ApolloClient({
  link: ApolloLink.from([ tokenRefreshLink,authLink.concat(httpLink)]) ,
  cache: new InMemoryCache({
    typePolicies:{
      Query: {
        fields: {
          paginatedPosts: {
            keyArgs: false,
            merge(existing: PaginatedPostsResponse | undefined , 
              incoming: PaginatedPostsResponse): PaginatedPostsResponse {
              return {
                ...incoming,
                // eslint-disable-next-line no-unsafe-optional-chaining
                posts: [...(existing?.posts || []), ...incoming?.posts]
              }
            }
          }
        }
      }
    }
  })
})

export default client
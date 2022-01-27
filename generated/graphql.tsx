import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FormFieldError = {
  __typename?: 'FormFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: CreatePostResponse;
  deleteAllPosts?: Maybe<Scalars['String']>;
  deletePost: Scalars['String'];
  login: LoginResponse;
  logout: Scalars['String'];
  registerUser: RegisterResponse;
  vote: Scalars['String'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: UserInput;
};


export type MutationRegisterUserArgs = {
  options: UserInput;
};


export type MutationVoteArgs = {
  id: Scalars['Float'];
  value: Scalars['Float'];
};

export type PaginatedPostsResponse = {
  __typename?: 'PaginatedPostsResponse';
  hasMore: Scalars['Boolean'];
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: User;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Int']>;
  voteCount: Scalars['Float'];
  voteStatus: Scalars['Float'];
  votes?: Maybe<Array<Vote>>;
};

export type Query = {
  __typename?: 'Query';
  Me?: Maybe<User>;
  helloWorld: Scalars['String'];
  myPaginatedPosts: PaginatedPostsResponse;
  paginatedPosts: PaginatedPostsResponse;
  post: Post;
  posts: Array<Post>;
};


export type QueryMyPaginatedPostsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
};


export type QueryPaginatedPostsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  posts: Array<Post>;
  votes?: Maybe<Array<Vote>>;
};

export type Vote = {
  __typename?: 'Vote';
  createdAt: Scalars['DateTime'];
  post: Post;
  postId: Scalars['Float'];
  user: User;
  userId: Scalars['Float'];
  value: Scalars['Float'];
};

export type CreatePostResponse = {
  __typename?: 'createPostResponse';
  errors?: Maybe<Array<FormFieldError>>;
  post?: Maybe<Post>;
};

export type LoginResponse = {
  __typename?: 'loginResponse';
  errors?: Maybe<Array<FormFieldError>>;
  token?: Maybe<Scalars['String']>;
};

export type RegisterResponse = {
  __typename?: 'registerResponse';
  errors?: Maybe<Array<FormFieldError>>;
  user?: Maybe<User>;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'createPostResponse', post?: { __typename?: 'Post', id: number, title: string, content: string, createdAt: any, voteStatus: number, voteCount: number, creator: { __typename?: 'User', id: number, email: string } } | null | undefined, errors?: Array<{ __typename?: 'FormFieldError', field: string, message: string }> | null | undefined } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'loginResponse', token?: string | null | undefined, errors?: Array<{ __typename?: 'FormFieldError', field: string, message: string }> | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'registerResponse', user?: { __typename?: 'User', id: number } | null | undefined, errors?: Array<{ __typename?: 'FormFieldError', field: string, message: string }> | null | undefined } };

export type VoteMutationVariables = Exact<{
  id: Scalars['Float'];
  value: Scalars['Float'];
}>;


export type VoteMutation = { __typename?: 'Mutation', vote: string };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', Me?: { __typename?: 'User', id: number, email: string, createdAt: any } | null | undefined };

export type MyPaginatedPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type MyPaginatedPostsQuery = { __typename?: 'Query', myPaginatedPosts: { __typename?: 'PaginatedPostsResponse', hasMore: boolean, posts: Array<{ __typename?: 'Post', id: number, createdAt: any, title: string, voteCount: number, content: string, voteStatus: number, creator: { __typename?: 'User', id: number, email: string } }> } };

export type PaginatedPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type PaginatedPostsQuery = { __typename?: 'Query', paginatedPosts: { __typename?: 'PaginatedPostsResponse', hasMore: boolean, posts: Array<{ __typename?: 'Post', id: number, title: string, content: string, createdAt: any, voteStatus: number, voteCount: number, creator: { __typename?: 'User', id: number, email: string } }> } };

export type PostQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: number, title: string, content: string, voteCount: number, voteStatus: number, createdAt: any, creator: { __typename?: 'User', email: string } } };


export const CreatePostDocument = gql`
    mutation CreatePost($content: String!, $title: String!) {
  createPost(content: $content, title: $title) {
    post {
      id
      title
      content
      createdAt
      voteStatus
      voteCount
      creator {
        id
        email
      }
    }
    errors {
      field
      message
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      content: // value for 'content'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(options: {password: $password, email: $email}) {
    token
    errors {
      field
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!) {
  registerUser(options: {email: $email, password: $password}) {
    user {
      id
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const VoteDocument = gql`
    mutation Vote($id: Float!, $value: Float!) {
  vote(id: $id, value: $value)
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;
export const MeDocument = gql`
    query Me {
  Me {
    id
    email
    createdAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MyPaginatedPostsDocument = gql`
    query MyPaginatedPosts($cursor: String) {
  myPaginatedPosts(cursor: $cursor) {
    posts {
      id
      createdAt
      creator {
        id
        email
      }
      title
      voteCount
      content
      voteStatus
    }
    hasMore
  }
}
    `;

/**
 * __useMyPaginatedPostsQuery__
 *
 * To run a query within a React component, call `useMyPaginatedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPaginatedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPaginatedPostsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useMyPaginatedPostsQuery(baseOptions?: Apollo.QueryHookOptions<MyPaginatedPostsQuery, MyPaginatedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPaginatedPostsQuery, MyPaginatedPostsQueryVariables>(MyPaginatedPostsDocument, options);
      }
export function useMyPaginatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPaginatedPostsQuery, MyPaginatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPaginatedPostsQuery, MyPaginatedPostsQueryVariables>(MyPaginatedPostsDocument, options);
        }
export type MyPaginatedPostsQueryHookResult = ReturnType<typeof useMyPaginatedPostsQuery>;
export type MyPaginatedPostsLazyQueryHookResult = ReturnType<typeof useMyPaginatedPostsLazyQuery>;
export type MyPaginatedPostsQueryResult = Apollo.QueryResult<MyPaginatedPostsQuery, MyPaginatedPostsQueryVariables>;
export const PaginatedPostsDocument = gql`
    query paginatedPosts($cursor: String) {
  paginatedPosts(cursor: $cursor) {
    posts {
      id
      title
      content
      createdAt
      creator {
        id
        email
      }
      voteStatus
      voteCount
    }
    hasMore
  }
}
    `;

/**
 * __usePaginatedPostsQuery__
 *
 * To run a query within a React component, call `usePaginatedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedPostsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function usePaginatedPostsQuery(baseOptions?: Apollo.QueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
      }
export function usePaginatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
        }
export type PaginatedPostsQueryHookResult = ReturnType<typeof usePaginatedPostsQuery>;
export type PaginatedPostsLazyQueryHookResult = ReturnType<typeof usePaginatedPostsLazyQuery>;
export type PaginatedPostsQueryResult = Apollo.QueryResult<PaginatedPostsQuery, PaginatedPostsQueryVariables>;
export const PostDocument = gql`
    query post($id: Float!) {
  post(id: $id) {
    id
    title
    content
    voteCount
    voteStatus
    creator {
      email
    }
    createdAt
  }
}
    `;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
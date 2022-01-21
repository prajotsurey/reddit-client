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
  id: Scalars['Float'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Int']>;
  voteCount: Scalars['Float'];
  voteStatus: Scalars['Float'];
  votes?: Maybe<Array<Vote>>;
};

export type Query = {
  __typename?: 'Query';
  Me: User;
  helloWorld: Scalars['String'];
  paginatedPosts: PaginatedPostsResponse;
  post: Post;
  posts: Array<Post>;
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

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'loginResponse', token?: string | null | undefined, errors?: Array<{ __typename?: 'FormFieldError', field: string, message: string }> | null | undefined } };


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
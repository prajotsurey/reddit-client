import { useApolloClient } from '@apollo/client'
import { Form, Formik } from 'formik'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import FormField from '../components/FormField'
import Header from '../components/Header'
import { useLoginMutation, useMeQuery } from '../generated/graphql'
import mapToFormikErrors from '../utils/mapToFormikErrors'
import { setToken } from '../utils/token'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`

const FormButton = styled.button`
text-decoration: none;
border: 1px solid ${props => props.theme.secondaryAccentBackground};
border-radius: 7px;
padding: 8px 40px;
color: ${props => props.theme.secondaryAccentTextColor};
font-weight: 600;
margin-top: 10px;
width: 100%;
background: ${props => props.theme.secondaryAccentBackground};

&:hover {
  background: ${props => props.theme.secondaryAccentBackgroundHover};
}

&:focus {
  background: ${props => props.theme.secondaryAccentBackgroundFocus};
}

&:active {
  background: ${props => props.theme.secondaryAccentBackgroundActive};
}
`
const LightHeading = styled.h1`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`
const LightMinorText = styled.div`
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 10px;
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

const StyledForm = styled(Form)`
  display:block;
  width:100%:
`
const FormContainer = styled.div`
  width: 250px;
`


const Login = () => {
  const [login] = useLoginMutation()
  const router = useRouter()
  const { data } = useMeQuery()
  const apolloClient = useApolloClient()

  if(data?.Me) {
    router.push('/')   
  }

  return(
    <>
      <Head>
        <title>
        reddit.com:Log in
        </title>
      </Head>
      <Header/>

      <Container>
        <FormContainer>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={async ({email, password}, {setErrors}) => {
              try{
                const response = await login({ variables: {email,password}})
                if(response.data){
                  if(response.data.login.token){
                    setToken(response.data.login.token)
                    router.push('/')
                    await apolloClient.resetStore()
                  } else {
                    setErrors(mapToFormikErrors(response.data.login.errors!))
                  }
                }
              } catch(err) {
                console
              }
          
            }}
          >
            {() => (
              <StyledForm>
                <LightHeading>
                  Login
                </LightHeading>
                <FormField name="email" type="email" label="email"/>
                <FormField name="password" type="password" label="password"/>
                <FormButton type='submit'>Log In</FormButton>
              </StyledForm>
            )}
          </Formik>
          <LightMinorText>
          New to Reddit? {' '}
            <Link href="/signup">
              <StyledTextLink >
              SIGN UP          
              </StyledTextLink>
            </Link>
          </LightMinorText>
        </FormContainer>
      </Container>
    </>
  )
}

export default Login

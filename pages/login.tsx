import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import FormField from '../components/FormField'
import NavBar from '../components/NavBar'
import { useLoginMutation, useMeQuery } from '../generated/graphql'
import mapToFormikErrors from '../utils/mapToFormikErrors'
import { getToken, setToken } from '../utils/token'

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

const Login = () => {
  const [login] = useLoginMutation()
  const router = useRouter()
  const { data } = useMeQuery()

  console.log(data)

  if(data?.Me) {
    router.push('/')   
  }

  return(
    <>
      <NavBar />
      <Container>
        <div>
          <LightHeading>
          Login
          </LightHeading>
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
                  } else {
                    setErrors(mapToFormikErrors(response.data.login.errors!))
                  }
                }
              } catch(err) {
                console.log(err)
              }
          
            }}
          >
            {({errors}) => (
              <Form>
                <FormField name="email" type="email" label="email"/>
                {errors.email}
                <FormField name="password" type="password" label="password"/>
                {errors.password}
                <FormButton type='submit'>Log In</FormButton>
              </Form>
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
        </div>
      </Container>
    </>
  )
}

export default Login

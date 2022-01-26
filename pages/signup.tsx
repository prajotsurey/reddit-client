import { Form, Formik } from 'formik'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import FormField from '../components/FormField'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { useMeQuery, useRegisterUserMutation } from '../generated/graphql'
import mapToFormikErrors from '../utils/mapToFormikErrors'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`

const FormButton = styled.button`
text-decoration: none;
border: 1px solid #0079d3;
border-radius: 7px;
padding: 8px 40px;
color: #fff;
font-weight: 600;
margin-top: 10px;
width: 100%;
background: #0079d3;

&:hover {
  background:#1483d6;
}

&:focus {
  background:#298eda;
}

&:active {
  background: #3d99dd;
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
  color: rgb(0, 121, 211);
  font-weight: 600;
  &:hover {
    color: #3394dc;
  }

  &:active {
    color: #0061a9;
  }

  &:focus {
    color:
  }
`

const Signup = () => {

  const [registerUser] = useRegisterUserMutation()
  const { data } = useMeQuery()
  const router = useRouter()
  
  if(data?.Me) {
    router.push('/')   
  }
  return(
    <>
      <Head>
        <title>
        reddit.com: Sign Up
        </title>
      </Head>
      <Header/>
      <Container>
        <div>
          <LightHeading>
          Sign Up
          </LightHeading>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={async ({email, password}, {setErrors}) => {
              try{
                const response = await registerUser({ variables: {email,password}})
                if(response.data){
                  if(response.data.registerUser.user){
                    router.push('/login')
                  } else {
                    setErrors(mapToFormikErrors(response.data.registerUser.errors!))
                  }
                }
              } catch(err) {
                console.log(err)
              }
          
            }}
          >
            {() => (
              <Form>
                <FormField name="email" type="email" label="email"/>
                <FormField name="password" type="password" label="password"/>
                <FormButton type='submit'>Sign Up</FormButton>
              </Form>
            )}
          </Formik>
          <LightMinorText>
          Already a redditor? {' '}
            <Link href="/login">
              <StyledTextLink >
              LOG IN     
              </StyledTextLink>
            </Link>
          </LightMinorText>
        </div>
      </Container>
    </>
  )
}

export default Signup

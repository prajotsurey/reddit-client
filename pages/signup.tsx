import { Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import FormField from '../components/FormField'
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

  const [login] = useLoginMutation()
  const { data } = useMeQuery()
  const router = useRouter()
  
  if(data?.Me) {
    router.push('/')   
  }
  return(
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
              const response = await login({ variables: {email,password}})
              if(response.data){
                if(response.data.login.token){
                  setToken(response.data.login.token)
                  console.log(getToken())
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
  )
}

export default Signup

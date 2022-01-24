import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import FormField from '../components/FormField'
import { useLoginMutation } from '../generated/graphql'
import mapToFormikErrors from '../utils/mapToFormikErrors'
import { getToken, setToken } from '../utils/token'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`
const Login = () => {

  const [login] = useLoginMutation()

  return(
    <Container>
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
            <button type='submit'>login</button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Login

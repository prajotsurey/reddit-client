import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
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
            <Field name="email" type="email"/>
            {errors.email}
            <Field name="password" type="password"/>
            {errors.password}
            <button type='submit'>login</button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Login

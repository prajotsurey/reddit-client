import { Field, Form, Formik } from 'formik'
import React from 'react'
import styled from 'styled-components'
import { useLoginMutation } from '../generated/graphql'
import mapToFormikErrors from '../utils/mapToFormikErrors'
import { setToken } from '../utils/token'

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`
const Home = () => {

  const [login] = useLoginMutation()

  return(
    <Container>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async ({email, password}, {setErrors}) => {
          console.log({email, password})
          try{
            const response = await login({ variables: {email,password}})
            if(response.data){
              if(response.data.login.errors){
                console.log('errors: ',response.data.login.errors)
                setErrors(mapToFormikErrors(response.data.login.errors))
              } else {
                console.log('token: ', response.data.login.token)
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

export default Home

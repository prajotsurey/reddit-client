import { gql } from '@apollo/client'
import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import FormField from '../components/FormField'
import FormTextArea from '../components/FormTextArea'
import Header from '../components/Header'
import { useCreatePostMutation, useMeQuery } from '../generated/graphql'
import mapToFormikErrors from '../utils/mapToFormikErrors'

const Container = styled.div`
  max-width: 600px;
  margin: 0rem auto;
  padding: 70px 10px 15px 10px;
`
const FormButton = styled.button`
text-decoration: none;
border: 1px solid ${props => props.theme.secondaryAccentBackground};
border-radius: 7px;
padding: 8px 40px;
color: ${props => props.theme.secondaryAccentTextColor};
font-weight: 600;
margin-top: 10px;
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

const StyledForm = styled(Form)`
  display:block;
  width:100%:
`
const FormContainer = styled.div`
`


const CreatePost = () => {
  const {data,loading} = useMeQuery()
  const router = useRouter()
  const [createPost] = useCreatePostMutation()

  console.log('before use effect')
  useEffect(() => {
    console.log('inside use effect')
    console.log(data)
    if(!data?.Me && !loading){
      router.push('/')
    }
  },[])
  console.log('after use effect')


  return(
    <>
      <Header />
      <Container>
        <FormContainer>
          <Formik
            initialValues={{
              title: '',
              content: ''
            }}
            onSubmit={async ({title, content}, {setErrors}) => {
              try{
                const response = await createPost({ 
                  variables: {title,content},
                  update: (cache) => {
                    cache.evict({ fieldName: 'paginatedPosts' })
                    cache.gc()
                  },
                })
                if(response.data){
                  if(response.data.createPost.post){
                    router.push('/')
                  } else {
                    setErrors(mapToFormikErrors(response.data.createPost.errors!))
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
                  Create Post
                </LightHeading>
                <FormField name="title" type="text" label="title"/>
                <FormTextArea name="content" type="text" label="content"/>
                <FormButton type='submit'>Create Post</FormButton>
              </StyledForm>
            )}
          </Formik>
        </FormContainer>
      </Container>
    </>
  )
}

export default CreatePost
import { useRouter } from 'next/router'
import React from 'react'
import { useMeQuery } from '../generated/graphql'


const Profile = () => {
  const {data,loading,error} = useMeQuery()
  const router = useRouter()
  if(loading) {
    return(
      <>
        loading
      </>
    )
  }

  if(error){
    router.push('/')
  }

  return(
    <>
      {data?.Me.email}
    </>
  )
}


export default Profile
import React from 'react'
import styled from 'styled-components'


const LoadingContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  font-weight: 500;
  font-size: 1.4rem;
`

const Loading = () => {

  return(
    <LoadingContainer>
      Loading
    </LoadingContainer>
  )
}

export default Loading
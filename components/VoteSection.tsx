import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { useVoteMutation } from '../generated/graphql'

const VoteSectionContainer = styled.div`
  width: 40px;
  background: ${props => props.theme.voteSectionBackground};
  border-radius: 8px 0px 0px 8px;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding-top: 10px;
`
const VoteButton = styled.button`
  border: none;
  background: none;
  padding: 2px;
  display:flex;
  
  &:hover {
  background: ${props => props.theme.voteButtonHover}
  }
`


const VoteIcon = styled.svg`
  stroke: ${props => props.theme.voteIconStroke};
  fill: none;
`
const VoteIconUp = styled(VoteIcon)`
  
  fill:  ${props => props.voteStatus === 1 ? props.theme.voteIconFillUp : 'none'};
  stroke: ${props => props.voteStatus === 1 ? props.theme.voteIconStrokeHoverUp : props.theme.voteIconStroke};

  ${VoteButton}:hover &{
    stroke: ${props => props.theme.voteIconStrokeHoverUp};
  }
`

const VoteIconDown = styled(VoteIcon)`

  fill:  ${props => props.voteStatus === -1 ? props.theme.voteIconFillDown : 'none'};
  stroke: ${props => props.voteStatus === -1 ? props.theme.voteIconStrokeHoverDown : props.theme.voteIconStroke};

  ${VoteButton}:hover &{
    stroke: ${props => props.theme.voteIconStrokeHoverDown};
  }
`

const VoteCount = styled.div`
  font-weight: 600;
`
interface Props {
  voteStatus: number
  voteCount: number
  id: number
}


const VoteSection:React.FC<Props> = ({voteStatus, voteCount, id}) => {
  const [vote] = useVoteMutation()
  const router = useRouter()
  const handleUpClick = async() => {
    try{
      const response = await vote({variables: {id, value:1}})
    } catch (error) {
      if(error.message === 'Error while voting post. Try logging in again.') {
        router.push('/login')
      }
    }

  }

  const handleDownClick = async() => {
    try{
      const response = await vote({variables: {id, value:-1}})
    } catch (err) {
      if(error.message === 'Error while voting post. Try logging in again.') {
        router.push('/login')
      }
    }

  }

  
  return(
    <VoteSectionContainer>
      <VoteButton onClick={handleUpClick}>
        <VoteIconUp voteStatus={voteStatus} width="26" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.3153 12.4396L13.711 1.71877C13.3196 1.32308 12.6804 1.32308 12.289 1.71877L1.68472 12.4396C1.06006 13.0712 1.50741 14.1429 2.39568 14.1429H5.5C6.05228 14.1429 6.5 14.5906 6.5 15.1429V23C6.5 23.5523 6.94771 24 7.5 24H18.5C19.0523 24 19.5 23.5523 19.5 23V15.1429C19.5 14.5906 19.9477 14.1429 20.5 14.1429H23.6043C24.4926 14.1429 24.9399 13.0712 24.3153 12.4396Z"  strokeWidth="2"/>
        </VoteIconUp>
      </VoteButton>
      <VoteCount>
        {voteCount}
      </VoteCount>
      <VoteButton onClick={handleDownClick}>
        <VoteIconDown voteStatus={voteStatus} width="26" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.68472 12.5604L12.289 23.2812C12.6804 23.6769 13.3196 23.6769 13.711 23.2812L24.3153 12.5604C24.9399 11.9288 24.4926 10.8571 23.6043 10.8571H20.5C19.9477 10.8571 19.5 10.4094 19.5 9.85714L19.5 2C19.5 1.44771 19.0523 1 18.5 1L7.5 1C6.94772 1 6.5 1.44771 6.5 2L6.5 9.85714C6.5 10.4094 6.05229 10.8571 5.5 10.8571L2.39568 10.8571C1.50741 10.8571 1.06006 11.9288 1.68472 12.5604Z" strokeWidth="2"/>
        </VoteIconDown>
      </VoteButton>
    </VoteSectionContainer>
  )
}

export default VoteSection
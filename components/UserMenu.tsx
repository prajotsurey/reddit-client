import styled from 'styled-components'
import React, { useEffect, useState } from 'react'


const DropDownContainer = styled.div`
  display: ${props => props.open ? 'block': 'none'};
  position:absolute;
  top:110%;
  height: 100px;
  width: 150px;
  background: ${props => props.theme.primaryBackground};
`

const UserMenu:React.FC<{email:string}> = ({email}) => {
  const [open,setOpen] = useState(false)
  return(
    <div>
      <span onClick={() => setOpen(!open)}>
        {email}

      </span>
      <DropDownContainer open={open}>


      </DropDownContainer>
    </div>

  )
}

export default UserMenu
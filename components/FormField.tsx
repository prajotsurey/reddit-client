import { useField } from 'formik'
import React, { useState } from 'react'
import styled from 'styled-components'

interface FormFieldProps {
  label: string
  name: string
  type: string
}

const CustomInputBox = styled.div`
  display: block;
  position: relative;
  height: 46px;
  background: ${props => props.theme.voteSectionBackground};
  margin-top:10px;
  border-radius: 5px;
`

const CustomInput = styled.input`
  border: none;
  padding: 22px 12px 10px;
  line-height: 10px;
  border-radius: 5px;
  outline: none;
  color: ${props => props.theme.primaryTextColor};
  border: 1px solid ${props => props.theme.primaryBorder};
  background: ${props => props.theme.primaryBackground};
  &:focus {
    border: 1px solid ${props => props.theme.primaryBorderFocus};
  }

  &:active {
    border: 1px solid ${props => props.theme.primaryBorderActive};
  }
`

const CustomLabel = styled.label`
  display: block;
  position: absolute;
  top: 22px;
  left: 12px;
  font-weight: 600;
  color: ${props => props.theme.dimColor};
  font-size: 10px;
  transition: all 0.2s ease-out;
  transform: ${props => props.moveTop ? 'translate3d(-3px,-13px,0px) scale(0.9)' : ''};

  ${CustomInput}:hover + & {
    transform: translate3d(-3px,-13px, 0px) scale(0.9)
  }

  ${CustomInput}:active + & {
    transform: translate3d(-3px,-13px, 0px) scale(0.9)
  }

  ${CustomInput}:focus + & {
    transform: translate3d(-3px,-13px, 0px) scale(0.9)
  }
  
`

const ErrorBlock = styled.div`
  display: block;
`

const FormField:React.FC<FormFieldProps> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props)
  const [moveTop, setMoveTop] = useState(false)
  return (
    <CustomInputBox>
      <CustomInput {...field} {...props} 
        onLoad={(e) => {
          if(e.target.value){
            setMoveTop(true)
          } else {
            setMoveTop(false)
          }
        }}
        onChange={(e) => {
          field.onChange(e)
          if(e.target.value){
            setMoveTop(true)
          } else {
            setMoveTop(false)
          }
        }}/>
      <CustomLabel moveTop={moveTop} className="animatedLabel">{label.toUpperCase()}</CustomLabel>
      {meta.touched && meta.error ? (
        <ErrorBlock>{meta.error}</ErrorBlock>
      ) : null}
    </CustomInputBox>
  )
}

export default FormField
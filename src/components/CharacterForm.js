import React from 'react'
import { Formik } from 'formik';
import styled from 'styled-components'

import Button from './Button'

const FormComponent = styled.form`
  display: grid;
  grid-template-column: 1fr;
`

const InputComponent = styled.input`
  padding: 10px;
`

const CharacterForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', initiative: '' }}
      onSubmit={handleSubmit}
      render={props => {
        return (
          <FormComponent onSubmit={props.handleSubmit}>
            <InputComponent
              type="text"
              name="name"
              placeholder="Name"
              value={props.values.name}
              onChange={props.handleChange}
              autoFocus
            />
            <InputComponent
              type="number"
              name="initiative"
              placeholder="Initiative roll"
              value={props.values.initiative}
              onChange={props.handleChange}
            />
          <Button uppercase type="submit">add</Button>
        </FormComponent>
        )}}
      />
  )
}

export default CharacterForm;
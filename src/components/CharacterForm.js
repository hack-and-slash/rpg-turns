import React from 'react'
import { Formik } from 'formik';

const CharacterForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', initiative: '' }}
      onSubmit={handleSubmit}
      render={props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={props.values.name}
              onChange={props.handleChange}
              autoFocus
            />
            <input
              type="number"
              name="initiative"
              placeholder="Initiative roll"
              value={props.values.initiative}
              onChange={props.handleChange}
            />
          <button type="submit">add</button>
        </form>
        )}}
      />
  )
}

export default CharacterForm;
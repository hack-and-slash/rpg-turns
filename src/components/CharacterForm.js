import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';


const CharacterForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ name: '', initiative: '' }}
    onSubmit={handleSubmit}
    render={props => (
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.values.name}
          onChange={props.handleChange}
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
    )}
  />
);

CharacterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};


export default CharacterForm;

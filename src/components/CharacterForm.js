import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import styled from 'styled-components';

import Button from './Button';

const FormComponent = styled.form`
  display: grid;
  grid-template-column: 1fr;
`;

const InputComponent = styled.input`
  padding: 10px;
`;

const CharacterForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ name: '', initiative: '', howMany: '' }}
    onSubmit={handleSubmit}
    render={props => (
      <FormComponent onSubmit={props.handleSubmit}>
        <InputComponent
          type="number"
          name="howMany"
          placeholder="How many"
          value={props.values.howMany}
          onChange={props.handleChange}
          autoFocus
        />
        <InputComponent
          type="text"
          name="name"
          placeholder="Name"
          value={props.values.name}
          onChange={props.handleChange}
          required
        />
        <InputComponent
          type="number"
          name="initiative"
          placeholder="Initiative roll"
          value={props.values.initiative}
          onChange={props.handleChange}
          required
        />
        <Button uppercase type="submit">add</Button>
      </FormComponent>
    )}
  />
);

CharacterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  values: PropTypes.object,
};

CharacterForm.defaultProps = {
  handleChange: undefined,
  values: {},
};

export default CharacterForm;

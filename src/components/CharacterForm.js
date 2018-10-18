import React from 'react'

const CharacterForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" autoFocus />
      <input type="number" name="initiative" placeholder="Initiative roll" />
      <button>add</button>
    </form>
  )
}

export default CharacterForm;
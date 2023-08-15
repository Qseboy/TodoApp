import { useState } from 'react';
import {
  TodoFormWrapper,
  TodoFormInput,
  TodoFormInputGroup,
  TodoFormButton,
} from './todoForm.styled';

export default function TodoForm({ handleForm }) {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleForm(name);
    setName('');
  };

  return (
    <>
      <TodoFormWrapper onSubmit={handleSubmit}>
        <TodoFormInputGroup>
          <TodoFormInput
            type="text"
            name="name"
            value={name}
            required
            placeholder="Add a task."
            onChange={handleChange}
          />
          <TodoFormButton type="submit">Add</TodoFormButton>
        </TodoFormInputGroup>
      </TodoFormWrapper>
    </>
  );
}

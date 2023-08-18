import React, { useState } from 'react';
import {
  TodoFormWrapper,
  TodoFormInput,
  TodoFormInputGroup,
  TodoFormButton,
} from './todoForm.styled';

type TodoFormProps = {
 handleForm: (name: string) => void
}

export default function TodoForm({ handleForm }: TodoFormProps) {
  const [name, setName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
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

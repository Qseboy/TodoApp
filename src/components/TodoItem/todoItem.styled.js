import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TodoListLi = styled.li(
  props =>
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      margin-bottom: 10px;
      border-radius: 10px;
      background-color: #01394c;

      &:last-child {
        margin-bottom: 0px;
      }

      ${props.checked
        ? {
            opacity: 0.6,
            textDecoration: 'line-through',
            textDecorationColor: '#ffffff',
          }
        : {}};
    `
);
export const TodoListNameP = styled.p`
  flex-grow: 1;
  text-align: left;
  display: inline-block;
  overflow-wrap: anywhere;

  color: #ffffff;
`;
export const TodoListRemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #002837;

  padding: 0;
  border: none;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: #001f29;
  }
`;
export const TodoListInput = styled.input`
  margin: 0px 20px;
  cursor: pointer;
`;

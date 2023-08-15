const { default: styled } = require('@emotion/styled');

export const TodoFormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;
export const TodoFormInputGroup = styled.div`
  position: relative;
  width: 100%;
`;
export const TodoFormInput = styled.input`
  width: 100%;
  padding: 10px 80px 10px 20px;

  color: white;
  outline: none;
  font-size: 20px;

  border: none;
  border-radius: 10px;
  background-color: #01394c;

  transition: background-color 200ms ease-in-out;

  &::placeholder {
    color: #a0b2b8;
  }

  &:hover {
    background-color: #013141;
  }
`;
export const TodoFormButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  padding: 0px 20px;

  font-size: 20px;
  background-color: #002837;
  color: white;
  transition: box-shadow 200ms ease, background-color 200ms ease-in-out;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #001f29;
  }
`;

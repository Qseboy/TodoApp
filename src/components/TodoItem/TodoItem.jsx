import {
  TodoListInput,
  TodoListLi,
  TodoListRemoveButton,
  TodoListNameP,
} from './todoItem.styled';
import { RxCross2 } from 'react-icons/rx';

export default function TodoItem({
  name,
  id,
  checked,
  removeTasks,
  handleChecked,
}) {
  return (
    <TodoListLi checked={checked}>
      <TodoListNameP>{name}</TodoListNameP>

      <TodoListInput
        type="checkbox"
        checked={checked}
        onChange={() => handleChecked(id)}
      />
      <TodoListRemoveButton onClick={() => removeTasks(id)}>
        <RxCross2 color="white" />
      </TodoListRemoveButton>
    </TodoListLi>
  );
}

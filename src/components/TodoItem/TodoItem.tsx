import {
  TodoListInput,
  TodoListLi,
  TodoListRemoveButton,
  TodoListNameP,
} from './todoItem.styled';
import { RxCross2 } from 'react-icons/rx';

type TodoItemProps = {
  name: string,
  id: string,
  checked: boolean,
  removeTasks: (id: string) => void
  handleChecked: (id: string) => void
}

export default function TodoItem({
  name,
  id,
  checked,
  removeTasks,
  handleChecked,
}: TodoItemProps) {
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

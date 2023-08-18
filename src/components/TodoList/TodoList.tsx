import TodoItem from 'components/TodoItem/TodoItem';
import { TodoListUl, TodoListUlWrapper } from './todoList.styled';

type TaskItem = {
  id: string,
  name: string,
  checked: boolean,
};

type TaskListProps = {
  taskList: TaskItem[],
  removeTasks: (id: string) => void,
  handleChecked: (id: string) => void,
};

export default function TodoList({ taskList, removeTasks, handleChecked }: TaskListProps) {
  return (
    <TodoListUlWrapper>
      <TodoListUl>
        {taskList.map(el => (
          <TodoItem
            key={el.id}
            id={el.id}
            name={el.name}
            checked={el.checked}
            removeTasks={removeTasks}
            handleChecked={handleChecked}
          />
        ))}
      </TodoListUl>
    </TodoListUlWrapper>
  );
}

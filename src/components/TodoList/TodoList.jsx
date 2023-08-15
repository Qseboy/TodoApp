import TodoItem from 'components/TodoItem/TodoItem';
import { TodoListUl, TodoListUlWrapper } from './todoList.styled';

export default function TodoList({ taskList, removeTasks, handleChecked }) {
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

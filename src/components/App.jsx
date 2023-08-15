import Section from './Section/Section';
import SectionHeader from './SectionHeader/SectionHeader';
import TodoForm from './TodoForm/TodoForm';
import { nanoid } from 'nanoid';
import TodoList from './TodoList/TodoList';
import useLocalStorage from 'hooks/localStorage';

export const App = () => {
  const [taskList, setTaskList] = useLocalStorage('tasks', []);

  const handleForm = name => {
    setTaskList(prevTaskList => [
      ...prevTaskList,
      { id: nanoid(), name, checked: false },
    ]);
  };

  const removeTasks = id => {
    const updatedTaskList = taskList.filter(el => el.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleChecked = id => {
    setTaskList(prevTaskList =>
      prevTaskList.map(el =>
        el.id === id ? { ...el, checked: !el.checked } : el
      )
    );
  };

  return (
    <Section>
      <SectionHeader title={'Todo List'}></SectionHeader>
      <TodoForm handleForm={handleForm} />
      <TodoList
        taskList={taskList}
        removeTasks={removeTasks}
        handleChecked={handleChecked}
      />
    </Section>
  );
};

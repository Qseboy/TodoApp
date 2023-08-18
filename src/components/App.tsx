import Section from './Section/Section';
import SectionHeader from './SectionHeader/SectionHeader';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import useLocalStorage from 'hooks/localStorage';

type Task = {
  id: string,
  name: string,
  checked: boolean
}

export const App = () => {
  const [taskList, setTaskList] = useLocalStorage('tasks', []);


  const handleForm = async (name: string) => {
    const { nanoid } = await import('nanoid');
    setTaskList((prevTaskList: Task[]) => [
      ...prevTaskList,
      { id: nanoid(), name, checked: false },
    ]);
  };

  const removeTasks = (id: string) => {
    const updatedTaskList = taskList.filter((el: Task) => el.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleChecked = (id: string) => {
    setTaskList((prevTaskList: Task[]) =>
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

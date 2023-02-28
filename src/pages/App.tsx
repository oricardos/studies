import {useState} from 'react'
import Form from "../components/Forms";
import { List } from "../components/List";
import { Stopwatch } from "../components/Stopwatch";
import { ITask } from '../types/tasks';
import style from  './App.module.scss'

function App() {
  const [tasks, setTasks] = useState<Array<ITask> | []>([]) // o state é um array de ITask ou um array vazio
  const [selected, setSelected] = useState<ITask>()

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }

  const endTask = () => {
    if(selected) {
      setSelected(undefined)
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }

        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <Stopwatch selected={selected} endTask={endTask} />
    </div>
  );
}

export default App;

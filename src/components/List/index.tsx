import { ITask } from '../../types/tasks'
import { Item } from './Item'
import style from  './List.module.scss'

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

export const List = ({tasks, selectTask}: Props) => {  
    return (
        <aside className={style.tasksList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item
                     key={task.id} 
                     selectTask={selectTask}
                     {...task} 
                     />
                ))}
            </ul>
        </aside>
    )
}
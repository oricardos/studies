import React, { useState } from 'react'
import { ITask } from '../../types/tasks'
import Button from '../Button'
import style from './Forms.module.scss'
import {v4 as uuidv4} from 'uuid'

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>
}

function Form({setTasks} : Props) {
    const [task, setTask] = useState('')
    const [time, setTime] = useState('00:00')

    function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTasks(oldTasks => [
            ...oldTasks, 
            {
                task,
                time,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])
        setTask('')
        setTime('00:00')
    }

    return (
        <form className={style.newTask} onSubmit={handleAddTask}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder='o que você quer estudar'
                        value={task}
                        onChange={ev => setTask(ev.target.value)}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>Tempo</label>
                    <input
                        type="time"
                        step='1'
                        name="time"
                        id="time"
                        min='00:00:00'
                        max='01:30:00'
                        value={time}
                        onChange={ev => setTime(ev.target.value)}
                        required
                    />
                </div>

                <Button type='submit'>Adicionar</Button>
            </form>
    )
}

export default Form
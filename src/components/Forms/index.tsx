import React from 'react'
import { ITask } from '../../types/tasks'
import Button from '../Button'
import style from './Forms.module.scss'
import {v4 as uuidv4} from 'uuid'

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>
}> {
    state = {
        task: '',
        time: '00:00:00'
    }

    handleAddTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        this.props.setTasks(oldTasks => [
            ...oldTasks, 
            {
                ...this.state,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])
        this.setState({
            task: '',
            time: '00:00'
        })
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.handleAddTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder='o que você quer estudar'
                        value={this.state.task}
                        onChange={ev => this.setState({ ...this.state, task: ev.target.value })}
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
                        value={this.state.time}
                        onChange={ev => this.setState({ ...this.state, time: ev.target.value })}
                        required
                    />
                </div>

                <Button type='submit'>Adicionar</Button>
            </form>
        )
    }
}

export default Form
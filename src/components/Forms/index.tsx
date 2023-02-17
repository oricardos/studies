import React from 'react'
import Button from '../Button'
import style from  './Forms.module.scss'

class Form extends React.Component{
    render(){
        return (
            <form className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>Adicione um novo estudo</label>
                    <input type="text" name="task" id="task" placeholder='o que você quer estudar' required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>Tempo</label>
                    <input type="time" name="time" id="time" step='1' min='00:00:00' max='01:30:00' required/>
                </div>

                <Button>Adicionar</Button>
            </form>
        )
    }
}

export default Form
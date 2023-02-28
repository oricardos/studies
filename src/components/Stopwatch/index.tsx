import { useState, useEffect } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITask } from "../../types/tasks"
import Button from "../Button"
import { Clock } from "./Clock"
import style from './Stopwatch.module.scss'

interface Props {
    selected: ITask | undefined
    endTask: () => void
}

export const Stopwatch = ({selected, endTask}: Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
    },[selected])

    const regressive = (time: number = 0) => {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1)
                return regressive(time - 1)
            }
            endTask()
        }, 1000)
    }

    
    return (
        <div className={style.stopwatch}>
        <p className={style.title}>Escolha um card e inicie o cronômetro</p>

        <div className={style.clockWrapper}>
            <Clock time={time} />
        </div>

        <Button onClick={() => regressive(time)}>
            Começar
        </Button>
        </div>
    )
}
import { useState, useEffect } from "react"
import { timeToSeconds } from "../../common/utils/time"
import { ITask } from "../../types/tasks"
import Button from "../Button"
import { Clock } from "./Clock"
import style from './Stopwatch.module.scss'

interface Props {
    selected: ITask | undefined
}

export const Stopwatch = ({selected}: Props) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
    },[selected])

    
    return (
        <div className={style.stopwatch}>
        <p className={style.title}>Escolha um card e inicie o cronômetro</p>

        <div className={style.clockWrapper}>
            <Clock time={time} />
        </div>

        <Button>
            Começar
        </Button>
        </div>
    )
}
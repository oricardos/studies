import { timeToSeconds } from "../../common/utils/date"
import Button from "../Button"
import { Clock } from "./Clock"
import style from './Stopwatch.module.scss'

export const Stopwatch = () => {
    console.log('conversão: ', timeToSeconds('01:01:01'))
    return (
        <div className={style.stopwatch}>
        <p className={style.title}>Escolha um card e inicie o cronômetro</p>

        <div className={style.clockWrapper}>
            <Clock />
        </div>

        <Button>
            Começar
        </Button>
        </div>
    )
}
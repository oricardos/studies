import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

export const Clock = ({time = 0} : Props) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minuteTen, minuteUnity] = String(minutes).padStart(2, '0')
    const [secondTen, secondUnity] = String(seconds).padStart(2, '0')

    return (
        <>
            <div className={style.numberClock}>
                <span>{minuteTen}</span>
            </div>
            <div className={style.numberClock}>
                <span>{minuteUnity}</span>
            </div>

            <span className={style.dividerClock}>:</span>
            <div className={style.numberClock}>
                <span>{secondTen}</span>
            </div><div className={style.numberClock}>
                <span>{secondUnity}</span>
            </div>
        </>
    )
}
import style from './Clock.module.scss'

export const Clock = () => {
    return (
        <>
            <div className={style.numberClock}>
                <span>0</span>
            </div>
            <div className={style.numberClock}>
                <span>0</span>
            </div>

            <span className={style.dividerClock}>:</span>
            <div className={style.numberClock}>
                <span>0</span>
            </div><div className={style.numberClock}>
                <span>0</span>
            </div>
        </>
    )
}
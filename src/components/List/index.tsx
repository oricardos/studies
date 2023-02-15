import style from  './List.module.scss'

export const List = () => {
    const tasks = [{
        task: 'Ler Livro',
        time: '01:00:00'
    }, {
        task: 'Curso TS',
        time: '02:00:00'
    }]

    return (
        <aside className={style.tasksList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={style.item}>
                        <h3>{task.task}</h3>
                        <span>{task.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
import React from 'react'
import style from  './Button.module.scss'

interface Props {
    children: string
    type?: 'button' | 'submit' | 'reset' | undefined  //type? quer dizer: opcional
    onClick?: () => void
}

function Button({children, type = 'button', onClick}: Props) {
    return (
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button
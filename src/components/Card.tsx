import React from 'react'
import './Card.css'

type Props = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void
}

const Card = (props: Props) => {
  return (
    <article className={`card ${props.className}`} onClick={props.onClick}>
        {props.children}
    </article>
  )
}

export default Card
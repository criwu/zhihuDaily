import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
function Card(props) {
    return (
        <li>
            <Link to={`/detail/${props.story.id}`}>
                <div className="left">
                    <h3>{props.story.title}</h3>
                    <span>{props.story.hint}</span>
                </div>
                <div className="right">
                    <img src={props.story.images} alt='' />
                </div>
            </Link>
        </li>
    )
}
export default Card

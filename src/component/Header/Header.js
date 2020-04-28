import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <header>
            <div className="date">
                <span className="date-day">{props.t.day}</span>
                <span className="date-month">{props.t.month}</span>
            </div>
            <div className="time">{props.t.text + '！'}</div>
            <div className="user-icon">
                <Link to='/mine'>
                    <img src="http://b-ssl.duitang.com/uploads/item/201704/10/20170410095843_SEvMy.thumb.700_0.jpeg" alt="" />
                </Link>
            </div>
        </header>
    )
}
export default Header
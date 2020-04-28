import React from 'react'
import { Carousel } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './Banner.css'
function Banner(props) {
    return (
        <Carousel
            autoplay={false}
            infinite>
            {props.data ? props.data.map(val => (
                <Link
                    key={val.id}
                    to={`/Detail/${val.id}`}
                    style={{ display: 'inline-block', width: '100%' }}

                >
                    <img
                        src={val.image}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                    <div className='con-carousel' style={{ background: `linear-gradient(rgba(255,255,255,0),#${val.image_hue.slice(2)})` }}>
                        <p className='title'>{val.title}</p>
                        <p className='hint'>{val.hint}</p>
                    </div>
                </Link>
            )) : null}
        </Carousel>
    )
}
export default Banner
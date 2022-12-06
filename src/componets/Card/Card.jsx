import React from 'react'
import "./Card.scss"
import {Link} from 'react-router-dom'

const Card = ({item}) => {
  return (
    <Link className='link' to = {'/product/${item.id}'}>
    <div className='card'>
        <div className="image">
            <span></span>
            <img src={item.img} alt="" className='img'/>
        </div>
        <h2>{item.name}</h2>
    <div className="price">
        <h3>${item.price}</h3>
    </div>
    </div>
    </Link>
  )
}

export default Card
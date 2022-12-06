import React from 'react'
import "./CategoryCard.scss"
import {Link} from 'react-router-dom'

const CategoryCard = ({item}) => {
    return (
        <Link className='link' to = {'/category/{item.id}'}>
        <div className='categorycard'>
            <h2>{item.name}</h2>
        </div>
        </Link>
      )
    }

export default CategoryCard
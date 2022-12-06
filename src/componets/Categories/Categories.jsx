import React from 'react'
import { useState ,useEffect} from 'react'
import CategoryCard from '../Card/CategoryCard'
import "./Categories.scss"
import axios from 'axios'

const Categories = ({type}) => {

    const [ categories, setCategories ] = useState([])
    
    const fethCategories = () => {
        axios.get('http://localhost:8080/categories'
        ).then(response => {
            setCategories(response.data)
        })
    }

    useEffect(() => {
        fethCategories(categories)
    },[])

    console.log(categories)

  return (
        <div className='categories'>
            <div className="top">
            <h1>{type}categories</h1>
        </div>
        <div className="bottom">
            {categories.map(category=>(
                <CategoryCard item={category} key={category.id}/>
            ))}
        </div>
    </div>
  )
}


export default Categories
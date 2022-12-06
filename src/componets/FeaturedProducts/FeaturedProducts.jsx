import React from 'react'
import { useState ,useEffect } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import axios from 'axios'

const FeaturedProducts = ({type}) => {

    const [ products, setProducts ] = useState([])

    const fethCategories = () => {
        axios.get('http://localhost:8080/products'
        ).then(response => {
            setProducts(response.data)
        })
    }

    useEffect(() => {
        fethCategories(products)
    },[])



  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
        </div>
        <div className="bottom">
            {products.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
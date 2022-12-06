import React from 'react'
import { useParams } from 'react-router-dom'
import "./Products.scss"
import List from '../../componets/List/List'
import { useState } from 'react'

const Products = () => {

const catId = parseInt(useParams().id)
const [maxPrice, setMaxPrice] = useState(10000)
const [sort,setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filerItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="filterItem">
        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
          <span>10000</span>
        </div>
        </div>
        <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inpuItem">
          <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inpuItem">
          <input type="radio" id="desc" value="asc" name="price" onChange={e=>setSort("desc")}/>
          <label htmlFor="asc">Price (Highest first)</label>
        </div>
        </div>
      </div>
      <div className="right">
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products
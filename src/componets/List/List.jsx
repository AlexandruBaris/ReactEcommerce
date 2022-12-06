import React from 'react'
import "./List.scss"
import Card from '../Card/Card'

const List = () => {

    const data = [
        {
            id:1,
            title:"TITLE-1",
            img:"https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043",
            price:200
        },
        {
            id:2,
            title:"TITLE-2",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrEZJZ_56BfvYCZ1XNGsMI2bFiPoIMTg55w&usqp=CAU",
            price:300
        },
        {
            id:3,
            title:"TITLE-3",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlLQzhCMBy0UsaU6njTZfvQ1-DrGXG-Qr6w&usqp=CAU",
            price:400
        },
        {
            id:4,
            title:"TITLE-4",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnhqrNHZow6ERCi37Fu_5Gnk2IGEOt4X1RA&usqp=CAU",
            price:500
        },
        {
            id:5,
            title:"TITLE-4",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnhqrNHZow6ERCi37Fu_5Gnk2IGEOt4X1RA&usqp=CAU",
            price:500
        },
        {
            id:6,
            title:"TITLE-4",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnhqrNHZow6ERCi37Fu_5Gnk2IGEOt4X1RA&usqp=CAU",
            price:500
        }
    ]

  return (
    <div className='list'>{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
        
    </div>
  )
}

export default List
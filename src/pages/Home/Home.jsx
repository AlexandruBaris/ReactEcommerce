import React from 'react'
import FeaturedProducts from '../../componets/FeaturedProducts/FeaturedProducts'
import Categories from '../../componets/Categories/Categories'
import "./Home.scss"
import Contact from '../../componets/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Categories/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      <Contact/>
    </div>
  )
}

export default Home
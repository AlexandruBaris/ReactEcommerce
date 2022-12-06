import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
        <h1>Categories</h1>
          <span>Laptops</span>
          <span>Tablets</span>
          <span>Cell Phones & Accessories</span>
          <span>Desktop Computers</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
        <h1>About</h1>
          <span>Without continual growth and progress, such words as improvement, achievement, and success have no meaning</span>
        </div>
        <div className="item">
        <h1>Contacts</h1>
          <span>Without continual growth and progress, such words as improvement, achievement, and success have no meaning</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ECOMMERCE</span>
          <span className="copyright">
          © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
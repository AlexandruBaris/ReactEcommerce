import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className='left'>
            <div className='item'>
                </div>

                <div className='item'>
                <img src="/img/eng.png" alt="" />
                <KeyboardArrowDownIcon/>
                </div>

                <div className='item'>
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/10">Laptops</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/11">Tablets</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/13">Cell Phones & Accessories</Link>
                </div>
            </div>
                
            <div className='center'>
                <div className='item'>
                <Link className='link' to="/">ECOMMERCE</Link>
            </div></div>
            
            <div className='right'>

            <div className='item'>
            <Link className='link' to="/">Homepage</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">About</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">Contacts</Link>
            </div>
            <div className="icons">
                <SearchOutlinedIcon/>

                <div className="authpage">
                    <Link className ='link' to="/login">
                        <PersonOutlineOutlinedIcon/>
                    </Link>
                </div>
            
                <FavoriteBorderOutlinedIcon/>
                <div className="cartIcon">
                    <ShoppingCartOutlinedIcon/>
                    <span>0</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
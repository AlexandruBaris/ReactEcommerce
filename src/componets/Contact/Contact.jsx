import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="icons">
                <InstagramIcon/>
                <TwitterIcon/>
                <GoogleIcon/>
                <FacebookIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact
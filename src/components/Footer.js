import React from 'react'
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/><FacebookIcon/>
        <TwitterIcon/><LinkedInIcon/>
      </div>
          <p>
         © 2024 Pizza Hut India. All rights reserved. License Number: 10017011004220
          </p>
    </div>
  )
}

export default Footer;

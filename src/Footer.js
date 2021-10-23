import React from 'react'
import "./Footer.css"
import Github from './Img/github_ico.png'
import Google from './Img/google_ico.png'
import Instagram from './Img/insta_ico3.png'
import LinkedIn from './Img/linked_ico.png'
import Twitter from './Img/twitter_ico.png'


function Footer(props) {
    return (


<div class="footer">
  <div class="row">
      <div className='footer-ele'><img src={Github} width='35px' height='35px' alt=''/> </div>
      <div className='footer-ele'><img src={Google} width='35px' height='35px' alt=''/> </div>
      <div className='footer-ele'><img src={Instagram} width='35px' height='35px' alt=''/> </div>
      <div className='footer-ele'><img src={LinkedIn} width='35px' height='35px' alt=''/> </div>
      <div className='footer-ele'><img src={Twitter} width='35px' height='35px' alt=''/> </div>
  </div>
</div>
    )
}

export default Footer

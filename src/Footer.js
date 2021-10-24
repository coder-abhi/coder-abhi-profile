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
      <div className='footer-ele'> <a href='https://github.com/coder-abhi'> <img src={Github} width='35px' height='35px' alt=''/></a> </div>
      <div className='footer-ele'><a href='mailto:abhi.kamble.3987@gmail.com'><img src={Google} width='35px' height='35px' alt=''/> </a></div>
      <div className='footer-ele'><a href='https://www.instagram.com/coder_abhi_/'><img src={Instagram} width='35px' height='35px' alt=''/></a> </div>
      <div className='footer-ele'><a href='https://www.linkedin.com/in/abhishek-kamble-2a59721ab/'><img src={LinkedIn} width='35px' height='35px' alt=''/> </a></div>
      <div className='footer-ele'><a href='https://twitter.com/coder_abhi_'><img src={Twitter} width='35px' height='35px' alt=''/></a> </div>
  </div>
</div>
    )
}

export default Footer

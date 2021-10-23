import React from 'react'
import ProfileImage from './MyImg.jpg'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="circle-img">
                    {/* <ProfileImage height='400' width='400'/> */}
                    <img src={ProfileImage} className='profile-img' alt=""></img>
                    {/* <h1 className="">Hi, I am Abhishek</h1>
                    <h1 className="">Open Source Enthusist</h1> */}
            </div>
        </div>
        )
}

export default Header

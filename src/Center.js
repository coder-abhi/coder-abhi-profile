import React from 'react'
import './Center.css'
import IconCall from './Img/call_ico.ico';
import IconWeb from './Img/web_ico.ico';
import IconLocation from './Img/location_ico.ico';
import IconMail from './Img/mail_ico.ico';
// import StreakImg from "https://github-readme-streak-stats.herokuapp.com/?user=ajauntor&";
function Center() {
    return (
        <div className="center">
            <div className="center-slots center-slot-1">

                <div className="center-slots-sub sub-slot-1">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>Abut Me</div>
                        <div className='about-me'><br /> &emsp; &emsp; I always love to learn new things. Learning is like a hobby for me. Completed Diploma in Mechanical and Currently pursuing B.E. in Information technology.<br /> <br />
                            &emsp; &emsp; Good grab of languages like C++ and Python and efficient in Data Structures and Algorithm. also Good performance in Competative Coding. <br /> <br />
                            &emsp; &emsp; Most of the Project work is done in React, Javascript, Java, Python, C++, etc.
                            Other than academics hobbies are flute, poetry, Calligraphy, Reading.</div>
                    </div>
                </div>

                <div className="center-slots-sub sub-slot-2">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>SKILLS</div>
                        <div className='skill-label'>
                            <div className='slot-sub-head'>MERN Development</div>
                            <div>95%</div>
                        </div>
                        <progress id="file" value="92" max="100" className='progress-bar' />
                        <div className='skill-label'>
                            <div className='slot-sub-head'>Java Development</div>
                            <div>92%</div>
                        </div>
                        <progress id="file" value="92" max="100" className='progress-bar' />
                        <div className='skill-label'>
                            <div className='slot-sub-head'>C++</div>
                            <div>85%</div>
                        </div>
                        <progress id="file" value="85" max="100" className='progress-bar' />
                        <div className='skill-label'>
                            <div className='slot-sub-head'>Advance Data Structure</div>
                            <div>80%</div>
                        </div>
                        <progress id="file" value="80" max="100" className='progress-bar' />
                    </div>
                </div>

            </div>

            <div className="center-slots center-slot-2">
                <div className="center-slots-sub sub-slot-3">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>Education</div>
                        <ul>
                            <li className='slot-edu-heading'> Bachelor of Engineering - Information Technology </li>
                            <li><pre>Parvatibai Genba Moze College Of Engineering <br />
                                &emsp; SGPA - 9.83 <br />
                                &emsp; 2019-2022</pre></li>
                        </ul>
                        <ul>
                            <li className='slot-edu-heading'> Diploma - Mechanical Engineering </li>
                            <li><pre>JSPM's BIT, Barshi <br />
                                &emsp; Percentage - 62.80 <br />
                                &emsp; 2016-2019</pre></li>
                        </ul>


                    </div>
                </div>
                <div className="center-slots-sub sub-slot-4">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>SOFT SKILLS</div>
                        <ul className='soft-skill-list'>
                            <li> Critical Thinking</li>
                            <li>&#9733; Prolem Solving</li>
                            <li>&#9733; Team Work</li>
                            <li>&#9733; Public Speaking</li>
                            <li>&#9733; Communication Skills</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="center-slots center-slot-3">
                <div className="center-slots-sub sub-slot-5">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>Contact</div>
                        <ul className='soft-skill-list contact-list'>

                            <li><a href='https://www.google.com/maps/place/Pune,+Maharashtra/@18.5248904,73.722879,11z/'><img src={IconLocation} className='contact-list-ele' alt='' /> Pune </a></li>
                            <li><a href='tel:5558920234'><img src={IconCall} className='contact-list-ele' alt='' /> +91 7020606242</a></li>
                            <li><a href='mailto:abhi.kamble.3987@gmail.com'><img src={IconMail} className='contact-list-ele ele-mail' alt='' /> abhi.kamble.3987@gmail.com</a></li>
                            <li><a href='https://coder-abhi.vercel.app/'><img src={IconWeb} className='contact-list-ele' alt='' /> www.coder-abhi.vercel.app</a></li>
                        </ul>
                    </div>
                </div>
                <div className="center-slots-sub sub-slot-6">
                    <img className='streak' src="https://github-readme-stats.vercel.app/api?username=coder-abhi&show_icons=true&locale=en&count_private=true&custom_title=Github Stats" alt='' />
                </div>
            </div>
            <div className="center-slots">
                <div className="center-slots-sub sub-slot-9">
                    <h2>Top Repositories</h2>
                    <div className='repo-slot'>

                        <img className='repository' src="https://github-readme-stats.vercel.app/api/pin?username=coder-abhi&repo=Automatic-File-Sort&show_icons=true&locale=en&count_private=true" alt='' />
                        <img className='repository' src="https://github-readme-stats.vercel.app/api/pin?username=coder-abhi&repo=Task-Scheduler&show_icons=true&locale=en&count_private=true" alt='' />
                        <img className='repository' src="https://github-readme-stats.vercel.app/api/pin?username=coder-abhi&repo=Jarvis-For-Windows&show_icons=true&locale=en&count_private=true" alt='' />
                        <img className='repository' src="https://github-readme-stats.vercel.app/api/pin?username=coder-abhi&repo=Amazon-Clone&show_icons=true&locale=en&count_private=true" alt='' />
                    </div>
                </div>
                <div className="center-slots-sub sub-slot-7">
                    <h2>&emsp;Github Contributions</h2>
                    <img className='streak' src="https://github-readme-streak-stats.herokuapp.com/?user=coder-abhi&count_private=true&custom_title=Github Contribution&hide_border=true&title_color=#000000" alt='' />
                </div>
                    {/* <div className='slot-heading'> Github Contributions</div> */}
            </div>
            {/* <div className="center-slots">
                <div className="center-slots-sub sub-slot-10">
                </div>
                <div className="center-slots-sub sub-slot-8">
                </div>
            </div> */}
        </div>
    )
}

export default Center

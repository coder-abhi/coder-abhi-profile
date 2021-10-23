import React from 'react'
import './Center.css'
import IconCall from './Img/call_ico.ico';
import IconWeb from './Img/web_ico.ico';
import IconLocation from './Img/location_ico.ico';
import IconMail from './Img/mail_ico.ico';
function Center() {
    return (
        <div className="center">
            <div className="center-slots">

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

            <div className="center-slots">
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
            <div className="center-slots">
                <div className="center-slots-sub sub-slot-5">
                <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>Contact</div>
                        <ul className='soft-skill-list contact-list'>
                        
                            <li><img src={IconCall} className='contact-list-ele' alt=''/> Pune </li>
                            <li><img src={IconCall} className='contact-list-ele' alt=''/> +91 7020606242</li>
                            <li><img src={IconCall} className='contact-list-ele ele-mail' alt=''/> abhi.kamble.3987@gmail.com</li>
                            <li><img src={IconCall} className='contact-list-ele' alt=''/> https://coder-abhi.vercel.app</li>
                        </ul>
                    </div>
                </div>
                <div className="center-slots-sub sub-slot-2"></div>
            </div>
            <div className="center-slots">
                <div className="center-slots-sub sub-slot-1"></div>
                <div className="center-slots-sub sub-slot-2"></div>
            </div>
        </div>
    )
}

export default Center

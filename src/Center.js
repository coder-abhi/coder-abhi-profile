import React from 'react'
import './Center.css'
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
                <div className="center-slots-sub sub-slot-1">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>Education</div>
                        <ul>
                            <li className='slot-edu-heading'> Bachelor of Engineering - Information Technology </li>
                            <li><pre>&emsp; &emsp; Parvatibai Genba Moze College Of Engineering <br />
                                &emsp; &emsp; SGPA - 9.83 <br />
                                &emsp; &emsp; 2019-2022</pre></li>
                        </ul>
                        <ul>
                            <li className='slot-edu-heading'> Diploma - Mechanical Engineering </li>
                            <li><pre>&emsp; &emsp; JSPM's BIT, Barshi <br />
                                &emsp; &emsp; Percentage - 62.80 <br />
                                &emsp; &emsp; 2016-2019</pre></li>
                        </ul>


                    </div>
                </div>
                <div className="center-slots-sub sub-slot-2"></div>
            </div>
            <div className="center-slots">
                <div className="center-slots-sub sub-slot-1"></div>
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

import React from 'react'
import './Center.css'
function Center() {
    return (
        <div className="center">
            <div className="center-slots">

                <div className="center-slots-sub sub-slot-1">
                    <div className='center-slots-sub-inner'>Hii</div>
                </div>

                <div className="center-slots-sub sub-slot-2">
                    <div className='center-slots-sub-inner'>
                        <div className='slot-heading'>Skills</div>
                        <div className='skill-label'>
                            <div className='slot-sub-head'>First</div>
                            <div>32%</div>
                        </div>
                        <progress id="file" value="32" max="100" className='progress-bar' />
                        <div className='skill-label'>
                            <div className='slot-sub-head'>First</div>
                            <div>32%</div>
                        </div>
                        <progress id="file" value="32" max="100" className='progress-bar' />
                        <div className='skill-label'>
                            <div className='slot-sub-head'>First</div>
                            <div>32%</div>
                        </div>
                        <progress id="file" value="32" max="100" className='progress-bar' />
                        <div className='skill-label'>
                            <div className='slot-sub-head'>First</div>
                            <div>32%</div>
                        </div>
                        <progress id="file" value="32" max="100" className='progress-bar' />
                    </div>
                </div>

            </div>

            <div className="center-slots">
                <div className="center-slots-sub sub-slot-1"></div>
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

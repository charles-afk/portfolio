import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../utilities/ScrollService'
import './Profile.css'
const Profile = () => {
    return (
        <div className="profile-container">
            <div className='profile-parent'>

                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://github.com/charles-afk'>
                            <i className="bi bi-github"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/charles-agudelo-55756b1a3/'>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Charles</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Full Stack Developer 💻",
                                        1500,
                                        "Mobile Developer 📱",
                                        1500,
                                        "Software Engineer 🔧",
                                        1500,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Agile development across multiple platforms 
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me {" "}
                        </button>
                        <a href="Resume-converted.pdf" download='Agudelo-Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                
                <div className='profile-picture'>
                    <div className="profile-picture-background"></div>            
                </div>

            </div>
        </div>
    )
}

export default Profile

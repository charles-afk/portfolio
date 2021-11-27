import React, { useState } from 'react'
import Typical from 'react-typical'
import axios from "axios";
import { toast } from "react-toastify";
import './ContactMe.css'
import imgBack from '../../assets/images/mail.jpeg'
import loading from '../../assets/images/load.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

const ContactMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) 
            return;
        Animations.animations.fadeInScreen(props.id);
    };
    
    // eslint-disable-next-line
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [banner, setBanner] = useState("");
    const [bool, setBool] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const submitForm = async (e) => {
        e.preventDefault()

        try {
            let data = {
              name,
              email,
              message,
            };

            setBool(true);

            const res = await axios.post(`/contact`, data);

            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false);
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);

                setName("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='main-container' id={props.id || ""}>
            <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"}/>
            <div className='central-form'>
                <div className='col'>
                    <h2 className="title">
                        <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
                    </h2>{" "}
                    <a href='https://github.com/charles-afk'>
                        <i className="bi bi-github"></i>
                    </a>
                    <a href='https://www.linkedin.com/in/charles-agudelo-55756b1a3/'>
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Email Here!</h4>
                        <img src={imgBack} alt="img not found" />
                    </div>
                    <form onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleName} value={name} />

                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} value={email} />

                        <label htmlFor="message">Message</label>
                        <textarea type="text" onChange={handleMessage} value={message} />
                        
                        <div className='send-btn'>
                            <button type="submit">
                                Send 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                                </svg>
                                {bool ? (
                                    <b className="load">
                                        <img src={loading} alt="gif not responding" />
                                    </b>
                                    ) : (
                                    ""
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe

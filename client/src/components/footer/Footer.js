import React from 'react'
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";

const Footer = () => {
    return (
        <div className="scroll-container">
            <button
                className="btn-scroll"
                onClick={() => ScrollService.scrollHandler.scrollToHome()}
            >
            {" "}
                <i className="bi bi-arrow-up-circle-fill"></i>
            </button>
        </div>
    )
}

export default Footer

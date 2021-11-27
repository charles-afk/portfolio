import React from 'react'
import Profile from './Profile'
import Footer from './footer/Footer';
import './Home.css'
import Header from './header/Header';

const Home = (props) => {
    return (
        <div className='home-container' id={props.id || ""}>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}

export default Home

import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <>        
        <Header/>
        <div className="home">
            <h1>Welcome to our website!</h1>
            <p>This is the home page.</p>
        </div>
        <Footer/>
        </>

    );
};

export default Home;

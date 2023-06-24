// Home.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleLogin = () => {
    const user = { name: 'John Doe' };
    dispatch(setUser(user));
  };

  return (
    <>
      <Header/>
      <div className="home">
        <h1>Welcome to our website!</h1>
        <p>This is the home page.</p>
        <button onClick={handleLogin}>Login</button>
        {user.name && <p>Welcome, {user.name}!</p>}
      </div>
      <Footer/>
    </>
  );
};

export default Home;

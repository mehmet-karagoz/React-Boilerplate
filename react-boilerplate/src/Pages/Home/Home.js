import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useCustomHook from '../../hooks/useCustomHook';
import { convertToUppercase } from '../../utils/helpers';
import { fetchData } from '../../services/api';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { count, increment } = useCustomHook();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  const handleLogin = () => {
    const user = { name: 'John Doe' };
    dispatch(setUser(user));
  };

  const uppercasedText = convertToUppercase('Hello, World!');

  return (
    <>
      <Header/>
      <div className="home">
        <h1>Welcome to our website!</h1>
        <p>This is the home page.</p>
        <button onClick={handleLogin}>Login</button>
        {user.name && <p>Welcome, {user.name}!</p>}
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <p>{uppercasedText}</p>
        {data ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Home;

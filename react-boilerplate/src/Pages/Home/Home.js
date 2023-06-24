import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import useCustomHook from '../../hooks/useCustomHook';
import { convertToUppercase } from '../../utils/helpers';
import { fetchData } from '../../services/api';
import { onAuthStateChanged ,signOut} from "firebase/auth";
import { auth } from '../../firebase_config/firebase';
import   { useNavigate }  from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const { count, increment } = useCustomHook();
  const [data, setData] = useState(null);
  const [firebaseUser, setFirebaseUser] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setFirebaseUser(user);
        // ...
        console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")

      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
      console.log("Signed out successfully")
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleLogin = () => {
    const user = { name: 'John Doe' };
    dispatch(setUser(user));
  };

  const uppercasedText = convertToUppercase('Hello, World!');

  return (
    <>
      <Header />
      <div className="home">
        <h1>Welcome to our website!</h1>
        <p>This is the home page.</p>
        <button onClick={handleLogin}>Login</button>
        {user.name && <p>Welcome, {user.name}!</p>}
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        {firebaseUser && <p>Welcome, {firebaseUser.email}!</p>}
        <div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
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
     
      <Footer />
    </>
  );
};

export default Home;

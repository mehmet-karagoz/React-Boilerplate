import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

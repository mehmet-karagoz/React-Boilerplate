import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index path="/" element={<Home/>} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

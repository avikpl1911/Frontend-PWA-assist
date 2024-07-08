import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<UserPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
);

export default App;

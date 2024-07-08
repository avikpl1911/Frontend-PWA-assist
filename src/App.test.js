import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UserPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  </Router>
);

export default App;

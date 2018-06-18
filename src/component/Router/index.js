import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navbar from '../Navbar';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const Settings = Loadable({
  loader: () => import('./routes/Settings'),
  loading: Loading,
});

const Todo = Loadable({
  loader: () => import('./routes/Todo'),
  loading: Loading,
});

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/settings" component={Settings}/>
        <Route path="/todo" component={Todo}/>
      </Switch>
    </div>
  </Router>
);

export default App;

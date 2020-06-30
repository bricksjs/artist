import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';

import './App.css';

const Home = () => (
    <div>
      Home
    </div>
);

const About = () => (
  <div>
    About
  </div>
);
const RouteExample = () => (
    <Router basename={ '/'}>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
);

export default function App() {
  return (
    <div className="app-main">
      <RouteExample />
    </div>
  );
}

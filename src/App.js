import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './containers/Login';
import Profile from './containers/Profile';
import NewsList from './containers/NewsList';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={NewsList} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={() => <h1>404 Page Not Found!</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

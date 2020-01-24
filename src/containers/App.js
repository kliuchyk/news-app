import React from 'react';
import HomePage from '../routes/HomePage';
import LoginPage from '../routes/LoginPage';
import ProfilePage from '../routes/ProfilePage';
import NewsPage from '../routes/NewsPage';
import AppHeader from '../components/AppHeader';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App({ loggedIn }) {
  return (
    <BrowserRouter>
      <AppHeader />
      <div className="container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile">
            {loggedIn ? <ProfilePage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/" component={() => <h1>404 Page Not Found!</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn
  };
};

export default connect(mapStateToProps)(App);

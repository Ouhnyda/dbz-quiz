import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../../Quiz-app.css'
import Header from '../Header'
import Accueil from '../Accueil'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import SignUp from '../SignUp'
import ErrorPage from '../ErrorPage'

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route component={ErrorPage} />
        </ Switch>

        <Footer />
      </ Router>
    </div>
  );
}

export default App;

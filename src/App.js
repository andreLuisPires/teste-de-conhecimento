import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from  './pages/Login/login'
import Feed from  './pages/Feed/feed'
import Register from  './pages/Register/register'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  )
}

export default App;

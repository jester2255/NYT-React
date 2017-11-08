import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grades from "./pages/Grades";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Grades} />
        <Route exact path="/grades" component={Grades} />
        <Route exact path="/grades/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;

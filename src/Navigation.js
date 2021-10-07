import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

        <div
          className="navbar fixed bottom-5 p-3 rounded-full bg-white text-gray-400 shadow-lg flex justify-evenly"
          style={{ width: "300px" }}
        >
          <NavLink
            to="/"
            exact
            activeStyle={{
              color: "#1AABBC",
            }}
          >
            <h1 className="material-icons">home</h1>
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeStyle={{
              color: "#1AABBC",
            }}
          >
            <h1 className="material-icons">history</h1>
          </NavLink>
          <NavLink
            to="/dashboard"
            exact
            activeStyle={{
              color: "#1AABBC",
            }}
          >
            <h1 className="material-icons">account_circle</h1>
          </NavLink>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

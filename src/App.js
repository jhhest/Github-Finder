import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  const [alert, setAlert] = useState(null);

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_CLIENT_SECRET);
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https:/api.github.com/users?client_id=
  //     ${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //     &client_secret=
  //     ${process.env.REACT_APP_CLIENT_SECRET}`
  //   );

  //   setUser(res.data.items)
  //   setLoading(false)
  // }
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 2500);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [alert, setAlert] = useState(null);

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

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
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
      </AlertState>
    </GithubState>
  );
};

export default App;

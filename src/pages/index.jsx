import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import MainPage from "./index";
import Search from "../pages/Search";


class App extends Component {
   render() {
     return (<Router>
         <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/search">
            {searchPage()}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
     );
   }
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function searchPage() {
    return (<Search/>);
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
export default App;

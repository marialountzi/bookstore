import React, { Component } from "react";
import Search from '../components/Search';
import initialDetails from '../Data/initialDetails';


class App extends Component {
    render() {
        return (
            <div className="tc bg-grey ma0 pa4 min-vh-100">
                <Search details={initialDetails}/>
            </div>
        );
    }
}
export default App;

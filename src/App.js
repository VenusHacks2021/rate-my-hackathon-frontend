import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";

import NewHackathon from "./components/NewHackathon/NewHackathon";
import AllHackathons from "./components/AllHackathons/AllHackathons";
import ViewHackathon from "./components/ViewHackathon/ViewHackathon";
// import UpdateHackathon from "./pages/UpdateHackathon";
import NewReview from "./components/NewReview/NewReview";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/all-hackathons" component={AllHackathons} />
            <Route path="/new-hackathon" component={NewHackathon} />
            <Route path="/hackathon/:id" component={ViewHackathon} />
            <Route path='/new-review/:id' component={NewReview} />
            {/* <Route path='/edit-hackathon/:id' component={UpdateHackathon} /> */}
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

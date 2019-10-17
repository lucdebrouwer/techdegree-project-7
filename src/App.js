import React, { Component } from "react";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import apiKey from "./config";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    photosData: []
  };
  performSearch = query => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({ photosData: result.photos.photo });
      });
  };
  componentDidMount() {}
  render() {
    return (
      <Router>
        <div>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Gallery {...props} photos={this.state.photosData} />
              )}
            />
            <Route path="/cats" component={Gallery} />
            <Route path="/dogs" component={Gallery} />
            <Route path="/computers" component={Gallery} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

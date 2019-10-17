import React, { Component } from "react";
import "./css/index.css";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import RouteNotFound from "./components/RouteNotFound";
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
        console.log(result);
        this.setState({ photosData: result.photos.photo });
      });
  };

  handleHomeClick = () => {
    this.setState({ photosData: [] });
    console.log("I did reset state here");
  };

  getCatPhotos = () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=cats&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({ photosData: result.photos.photo });
      });
  };

  getDogPhotos = () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=dogs&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        this.setState({ photosData: result.photos.photo });
      });
  };

  getBusinessPhotos = () => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=business&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ photosData: result.photos.photo });
      });
  };

  componentDidMount() {}
  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav
            handleHomeClick={this.handleHomeClick}
            onCatClick={this.getCatPhotos}
            onDogClick={this.getDogPhotos}
            onBusinessClick={this.getBusinessPhotos}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Gallery {...props} photos={this.state.photosData} />
              )}
            />
            <Route
              path="/cats"
              render={props => (
                <Gallery {...props} photos={this.state.photosData} />
              )}
            />
            <Route
              path="/dogs"
              render={props => (
                <Gallery {...props} photos={this.state.photosData} />
              )}
            />
            <Route
              path="/business"
              render={props => (
                <Gallery {...props} photos={this.state.photosData} />
              )}
            />
            <Route component={RouteNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

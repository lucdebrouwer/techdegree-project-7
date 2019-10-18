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
  /* ----------- Main Data Retrieval ---------------- */
  // The main function for data retrieval from the flickr API.
  // the App component gets the query property by lifting state up from SearchForm back to App.
  performSearch = query => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=${query}&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        // The flickr api returns an array of objects containing a few properties that we need to actually build the source link of the image
        // this object contains the id, the farm, the server and the secret.

        // Pass the result of the fetch call into the app state.
        // We will be lifting state down to get this data at the components that need the data.
        this.setState({ photosData: result.photos.photo });
      });
  };

  /* ----------- Category Data Retrieval ---------------- */
  // This function is used to retrieve the default data whenever the app loads,
  // or the user clicks on the Home route.
  handleHomeClick = () => {
    //this.setState({ photosData: [] });
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=rainbows&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ photosData: result.photos.photo });
      });
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

  //  Retrieves and sets the default data whenever the app is loaded.
  componentDidMount() {
    this.handleHomeClick();
  }
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
          {/* ---------- Routes -----------*/}
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
            {/* Return a RouteNotFound component if a user tries to access a route that does not exist */}
            <Route component={RouteNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

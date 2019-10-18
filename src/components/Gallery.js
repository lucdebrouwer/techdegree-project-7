import React, { Component } from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";
class Gallery extends Component {
  render() {
    // Display a loading indicator if data is being retrieved.
    let isLoading = this.props.isLoading;
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    // We retrieved five important properties that are used below to pass to the Photo component.
    // loop over each of these properties and pass them to the photo component.
    let photos = this.props.photos;
    if (photos.length > 0) {
      photos = this.props.photos.map(photo => {
        return (
          <Photo
            key={photo.id}
            id={photo.id}
            farm={photo.farm}
            secret={photo.secret}
            server={photo.server}
            alt={photo.title}
          />
        );
      });
    } else {
      // If the application is starting, return a loading indicator.
      if (this.props.isInitialising) {
        return <h2>Loading...</h2>;
      }

      return <NotFound />;
    }

    // Construct our page
    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default Gallery;

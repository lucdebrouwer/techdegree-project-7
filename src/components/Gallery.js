import React, { Component } from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";
class Gallery extends Component {
  render() {
    let photos_2 = this.props.photos.map(photo => {
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

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos_2}</ul>
      </div>
    );
  }
}

export default Gallery;

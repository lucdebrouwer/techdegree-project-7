import React, { Component } from "react";
import Photo from "./Photo";

class Gallery extends Component {
  render() {
    let photos = this.props.photos;
    if (this.props.photos !== null) {
      let photos = this.props.photos.map(photo => {
        return (
          <Photo
            key={photo.id}
            id={photo.id}
            farmId={photo.farm}
            secret={photo.secret}
            server={photo.secret}
          />
        );
      });
    } else {
      return;
    }

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default Gallery;

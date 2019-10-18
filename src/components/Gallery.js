import React, { Component } from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";
class Gallery extends Component {
  render() {
    // We retrieved five important properties that are used below to pass to the Photo component.
    let photos = this.props.photos;
    if (this.props.isLoading) {
      return <h2>Loading...</h2>;
    }
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
      if (this.props.isInitialising) {
        return <h2>Loading...</h2>;
      }
      return <NotFound />;
    }

    // } else if (this.props.isInitialising || this.props.isLoading) {
    //   // if (this.props.isInitialising) {
    //   //   return <h2>Loading...</h2>;
    //   // }
    //   return <h2>Loading...</h2>;
    // } else {
    //   return <NotFound />;
    // }
    // let photos_2 = this.props.photos.map(photo => {
    //   return (
    //     <Photo
    //       key={photo.id}
    //       id={photo.id}
    //       farm={photo.farm}
    //       secret={photo.secret}
    //       server={photo.server}
    //       alt={photo.title}
    //     />
    //   );
    // });

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{photos}</ul>
      </div>
    );
  }
}

export default Gallery;

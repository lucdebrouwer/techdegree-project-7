import React from "react";

const Photo = props => {
  // Here we are using the data that we retrieved from the flickr api to construct a source url so we can display our images.
  const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  return (
    <li>
      <img src={url} alt={props.alt} />
    </li>
  );
};
export default Photo;

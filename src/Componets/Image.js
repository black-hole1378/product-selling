import React from "react";

function Image(props) {
  return (
    <React.Fragment>
      <img src={props.image} id="selectedImage" alt="" />
    </React.Fragment>
  );
}

export default Image;

import React from "react";
function Notification({ notification, quantity }) {
  let content;
  if (notification && quantity)
    content = <p id="notification">{quantity}</p>;
  return content;
}

export default Notification;

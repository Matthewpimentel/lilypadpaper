import React, { useState } from "react";
const BannerMessage = () => {
  const [message, setMessage] = useState({
    id: 1,
    message: "Free shipping on orders over CA$25",
  });

  return (
    <div className="banner">
      <h1 className="banner-message">{message.message}</h1>
    </div>
  );
};
export default BannerMessage;

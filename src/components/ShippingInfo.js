const ShippingInfo = () => {
  return (
    <div className="shipping-info">
      <h1>Shipping Info</h1>
      <h2>Canada</h2>
      <ul>
        <li>
          Orders placed for delivery within Canada are shipped via Canada Post.
        </li>
        <li>Free standard Canadian shipping for orders of $25+</li>
        <li>Lily Pad Paper & Co. is not liable for lost or stolen packages.</li>
      </ul>
      <p>
        Due to the use of postage stamps, we are not offering tracking
        information at this time. Thank you for your understanding!
      </p>
      <p>We are currently not offering shipping to the U.S.</p>
    </div>
  );
};

export default ShippingInfo;

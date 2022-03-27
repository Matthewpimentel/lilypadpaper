import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer-links">
          <a href="/preorder">Pre-Order</a>
          <a href="/shippinginfo">Shipping Info</a>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/lilypadpaper.co/"
              target="_blank"
            >
              <FiInstagram size={20} className="insta" />
            </a>
            <a href="https://www.tiktok.com/@lilypadpaper.co" target="_blank">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

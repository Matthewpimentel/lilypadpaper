import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <a
          href="https://www.instagram.com/lilypadpaper.co/"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <FiInstagram size={35} className="insta" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;

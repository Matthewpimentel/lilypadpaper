import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/lilypadpaper.co/" target={"_blank"}>
        <AiOutlineInstagram size={40} />
      </a>
      <a href="https://www.tiktok.com/@lilypadpaper.co" target={"_blank"}>
        <FaTiktok size={35} />
      </a>
    </div>
  );
};

export default Footer;

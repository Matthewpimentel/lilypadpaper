import Background from "../background.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        className="welcome-banner"
        // style={{ backgroundImage: `url(${Background})` }}
      >
        <h2>Hello there! - It's so nice to meet you.</h2>
        <h1>Welcome to Lily Pad Paper & Co!</h1>
        <Link to="/shop">
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

import Background from "../background.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        className="welcome-banner"
        // style={{ backgroundImage: `url(${Background})` }}
      >
        <h1>Hello there! - It's so nice to meet you.</h1>
        <h2>Welcome to Lily Pad Paper & Co!</h2>
        <h2>
          We believe that every day is a blank canvas, ready to be filled with
          life, love, and beautiful things.
        </h2>
        <h2>
          Our products are made of high quality paper, and are proudly designed
          and printed in Ontario.
        </h2>
        <Link to="/shop">
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

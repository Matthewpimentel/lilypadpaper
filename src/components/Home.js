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
      <div className="home-page-about">
        <h1>Meet The Brand</h1>
        <h2>
          The brand began curating in 2021 during lockdown. With so much free
          time at my hands, I was inspired to create something meaningful to me,
          that I thought others would enjoy as well. My passion for minimalism
          and stationery products brought my vision of Lily Pad Paper & Co. to
          life.
        </h2>

        <h1>Meet The Owner</h1>
        <h2>
          Megan is a full-time Early Childhood Educator, heading back to school
          in 2023 to continue her studies in becoming a teacher. She believes
          that children need good role models that are positive, fun and
          patient! Megan finds it rewarding connecting with children and their
          families. Her dream one day is to build a happy and healthy family of
          her own.
        </h2>
        <h2>
          When Megan is not working, she is focused on living a balanced healthy
          lifestyle; working out, cooking, spending time with her new puppy,
          family and friends.
        </h2>
        <h1>How It Started</h1>
        <h2>
          It started with the idea of starting my own business. I reached out to
          an old friend to create my logo image. From there, I sat and thought
          how I could incorporate my logo into a product that I was proud of. As
          I was brainstorming ideas on my dollar store notepad, my lightbulb
          went off, and I got my idea - I am going to start a stationery
          business!
        </h2>
      </div>
    </div>
  );
};

export default Home;

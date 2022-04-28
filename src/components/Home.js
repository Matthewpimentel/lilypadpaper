import Background from "../background.jpg";
import { Link } from "react-router-dom";
import Image from "../lily-note-blank.JPG";
const Home = () => {
  function readMore() {
    var x = document.getElementById("home-blurb-readmore");
    var y = document.getElementById("readmore-button");
    var z = document.getElementById("showless-button");

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }

    if (z.style.display === "block") {
      z.style.display = "none";
    } else {
      z.style.display = "block";
    }
  }
  return (
    <div className="home-page">
      <div className="welcome-banner">
        <h2>Hello there! - It's so nice to meet you.</h2>
        <h1>Welcome to Lily Pad Paper & Co!</h1>
        <Link to="/shop">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <div className="home-page-about">
        <div className="home-blurb">
          <img src={Image}></img>
          <div>
            <h1>Meet the Brand</h1>
            <h2>
              The brand began curating in 2021 during lockdown. With so much
              free time at my hands, I was inspired to create something
              meaningful to me, that I thought others would enjoy as well. My
              passion for minimalism and stationery products brought my vision
              of <i>Lily Pad Paper & Co</i>. to life.
            </h2>
          </div>
        </div>

        <div className="home-blurb">
          <div>
            <h1>Meet the Owner</h1>
            <h2>
              Megan is a full-time Early Childhood Educator, heading back to
              school in 2023 to continue her studies in becoming a teacher. She
              believes that children need good role models that are positive,
              fun and patient! Her dream one day is to build a happy and healthy
              family of her own.
            </h2>
            <a
              id="readmore-button"
              className="readmore-button"
              onClick={readMore}
            >
              Read More
            </a>

            <h2 id="home-blurb-readmore" className="home-blurb-readmore">
              When Megan is not working, she is focused on living a balanced
              healthy lifestyle; working out, cooking, spending time with her
              new puppy, family and friends.
            </h2>
            <a
              className="showless-button"
              id="showless-button"
              onClick={readMore}
            >
              Show Less
            </a>
          </div>
          <img src={Image}></img>
        </div>
        <div className="home-blurb">
          <img src={Image}></img>
          <div>
            <h1>How it Started</h1>
            <h2>
              It started with the idea of starting my own business. I reached
              out to an old friend to create my logo image. From there, I
              thought about how I could incorporate my logo into a product that
              I was proud of. As I was brainstorming ideas on my dollar store
              notepad, my lightbulb went off, and I got my idea - I am going to
              start a stationery business!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../../components/Partials/header/header";
import Footer from "../../components/Partials/footer/footer";

const Career = () => {
  return (
    <>
      <Header />
      <div className="position-relative">
        <img
          src="https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_960_720.jpg"
          class="img-fluid career__image"
          alt="..."
        />
        <div className="career_image__overlay__text">
          <h1>Live and work from anywhere</h1>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
             <div className="row">
              <div className="col-md-12">
              <span>NEWS</span>
        <h2>Living and working from anywhere</h2>
        <p>2022 was another record year for WeHost. Read more about our Q4 and year-end 2022 financial results in our Shareholder Letter.</p>
        <p>We have a new design for living and working anywhere! Read WeHost Co-Founder & CEO Brian Chesky’s email to WeHost employees around the globe in our Newsroom post.</p>
        <p>WeHost, Inc. can hire employees in states where we have registered entities. Currently, employees cannot be located/live in: Alaska, Nebraska, North Dakota, Wisconsin, Alabama, Mississippi, and Delaware. This list is continuously evolving, so please check back with us if the state you live in is on the exclusion list.</p>
              </div>

              <div className="col-md-12">
              <span>OUR MISSION</span>
        <h2>Create a world where anyone can belong anywhere</h2>
        <p>It’s an audacious, incredibly rewarding mission that our increasingly diverse team is dedicated to achieving.</p>
        <p>WeHost is built around the idea that everyone should be able to take the perfect trip, including where they stay, what they do, and who they meet. To that end, we empower millions of people around the world to use their spaces, passions, and talents to become entrepreneurs.</p>
        <p>Exciting challenges lie ahead—new regions, technologies, and businesses. Guided by our four core values, we’ll meet these challenges creatively and with the support of our global community. Join us!</p>
              </div>
             </div>
          </div>

        </div>
      
      </div>

      <Footer />
    </>
  );
};

export default Career;

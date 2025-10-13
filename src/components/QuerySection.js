import React from "react";
import "./QuerySection.css";

const QuerySection = () => {
  return (
    <div className="queryform-container">
      {/* Left Side - Image */}
      <div className="queryform-left">
        {/* <img
          src={require("../assets/queryform-img.jpg")}
          alt="Query Form Visual"
        /> */}
      </div>

      {/* Right Side - Form */}
      <div className="queryform-right">
        <h2>Submit a Suggestion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Enter subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default QuerySection;

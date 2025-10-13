import React from "react";
import { Container } from "react-bootstrap";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./Banner.css";

const Banner = ({ title, image, breadcrumbs = [] }) => {
  return (
    <Container fluid>
      <div className="pg-banner">
        <div className="pg-banner-img">
          <img src={image} alt={title} />
        </div>

        <div className="pg-banner-box">
          <div className="pg-banner-left">
            <h2>{title}</h2>
          </div>

          <div className="pg-banner-right">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index} className="d-flex justify-content-around align-items-center">
                <a href={item.link}>{item.label}</a>
                {index !== breadcrumbs.length - 1 && (
                  <MdOutlineKeyboardDoubleArrowRight className="direction-icon" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

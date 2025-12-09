import React from "react";
import Slider from "react-slick";
import "./WhyOngc.css";

const WhyOngc = () => {
  const points = [
    {
      title: "Academic Excellence ",
      text: "ONGC Community School provides a strong academic foundation supported by modern teaching practices."
    },
    {
      title: "Dedicated Educators ",
      text: "Our well-qualified and dedicated faculty ensure personalized attention to every learner."
    },
    {
      title: "Enriching Environment",
      text: "The school offers a safe, inclusive, and enriching environment for holistic development."
    },
    {
      title: "Modern Infrastructure",
      text: "State-of-the-art infrastructure and tech-enabled classrooms enhance learning experience."
    },
    {
      title: "Values Driven Learning",
      text: "We focus on values, discipline & character-building to prepare students for future."
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: true,          // arrows visible on mobile bottom
          centerMode: true,
          centerPadding: "0px"
        }
      }
    ]
  };

  return (
    <section className="whyChoose">
      <h2 className="page-heading why-heading">Why ONGC Community School?</h2>

      <Slider {...settings} className="whyChoose-slider">

        {points.map((item, i) => (
          <div key={i} className="whyChoose-box-wrapper">
            
            <div className="whyChoose-box">
              <h3 dangerouslySetInnerHTML={{__html:item.title.replace(" ","<br/>")}} />
              <p>{item.text}</p>
            </div>

            {/* Show vertical line after each except last */}
            {i !== points.length - 1 && <div className="vertical-line"></div>}
          
          </div>
        ))}

      </Slider>

    </section>
  );
};

export default WhyOngc;

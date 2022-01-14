import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div
        className="row d-flex align-items-center mt-5 p-5"
       
      >
        <div className="col-md-6">
          <div>
            <img
              src="https://media.istockphoto.com/photos/business-man-working-in-office-and-icons-appearing-picture-id1132054367?b=1&k=20&m=1132054367&s=170667a&w=0&h=89u1Xtg0-UQExCufaEhEIMZGwdHBOn9l-RTcZImWuRA="
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <h1>This is our EDU Website. </h1>
          <p>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            inventore consequuntur aspernatur iure, repudiandae libero nisi
            possimus delectus odit. Cupiditate!
          </p>
          <Link to="/about">
            <button className="btn btn-primary">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

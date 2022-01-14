import React from 'react';
import Course from '../Course/Course';

const Courses = () => {
    return (
      <div className=" mt-5 ">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-start">
              <h3>
                <img src="https://img.icons8.com/dusk/64/000000/bookmark--v1.png" />{" "}
                Popular Courses in EDU+
              </h3>
            </div>
            <div className="col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab
              eligendi optio, ullam recusandae natus est corrupti totam magnam
              atque dignissimos iure suscipit nihil adipisci. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laboriosam, blanditiis.
            </div>
          </div>
          <Course />
        </div>
      </div>
    );
};

export default Courses;
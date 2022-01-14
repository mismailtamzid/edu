import React from 'react';

const Exclusive = () => {
    return (
      <div className="container">
        <div>
          <h3>Our Exclusive services available for you</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nobis odit mollitia doloribus adipisci illo?
          </p>
                <hr className='p-1 bg-primary' style={{"width": "100px", "margin":"auto"}}/>
          <div className='mt-5'>
            <div className="row">
              <div className="col-md-4">
                <i className="fas fa-home p-3 bg-warning fa-5x rounded "></i>
                <h6>private learning</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, tenetur.
                </p>
              </div>
              <div className="col-md-4">
                {" "}
                <i className="fas fa-home p-3 bg-primary fa-5x rounded"></i>
                <h6>private learning</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, tenetur.
                </p>
              </div>
              <div className="col-md-4">
                {" "}
                <i className="fas fa-home p-3 bg-danger fa-5x rounded"></i>
                <h6>private learning</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid, tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Exclusive;
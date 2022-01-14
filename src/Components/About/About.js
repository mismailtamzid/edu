import React from 'react';

const About = () => {
    return (
      <div className='mt-3 pt-5'>
        <h3 className='p-5'>
          <img src="https://img.icons8.com/color/48/000000/about-us-female.png" />
          Welcome to Our platform...
        </h3>

        <div>
          <div className="row d-flex align-items-center pt-5">
            <div className="col-md-6">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />{" "}
            </div>
            <div className="col-md-6">
              <h1>this is about</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                recusandae natus obcaecati debitis suscipit architecto eius eos.
                Odit ad labore repellendus repudiandae sit, voluptate assumenda
                dicta nobis quam, illo qui. Aspernatur corporis ipsam cumque
                quos quae unde aliquam omnis? Iure tempore perferendis corrupti
                optio perspiciatis cumque aliquid a et facere.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
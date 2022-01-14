import React from 'react';
import Courses from '../Courses/Courses';
import Banner from '../HomePage/Banner/Banner';
import Exclusive from '../HomePage/Exclusive/Exclusive';


const Home = () => {
    return (
        <div>
            <Banner />
            <Exclusive />
            <Courses/>
        </div>
    );
};

export default Home;
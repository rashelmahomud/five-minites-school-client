import React from 'react';
import CourseSlide from '../AllCourse/CourseSlide/CourseSlide';
import OurFetures from '../AllCourse/OurFetures';
import Banner from './Banner';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <OurFetures></OurFetures>
            <CourseSlide></CourseSlide>
  
        </div>
    );
};

export default Home;
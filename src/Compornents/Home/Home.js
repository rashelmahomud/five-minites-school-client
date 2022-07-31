import React from 'react';
import Admissions from '../Admisson/Admissions';
import CourseSlide from '../AllCourse/CourseSlide/CourseSlide';
import OurFetures from '../AllCourse/OurFetures';
import SpecialCourse from '../AllCourse/SpecialCourse/SpecialCourse';
import Banner from './Banner';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <OurFetures></OurFetures>
            <CourseSlide></CourseSlide>
            
            <SpecialCourse></SpecialCourse>
            <Admissions></Admissions>
        </div>
    );
};

export default Home;
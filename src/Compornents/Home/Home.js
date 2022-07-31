import React from 'react';
import Admissions from '../Admisson/Admissions';
import CourseSlide from '../AllCourse/CourseSlide/CourseSlide';
import OurFetures from '../AllCourse/OurFetures';
import SpecialCourse from '../AllCourse/SpecialCourse/SpecialCourse';
import CoursesVideo from '../CoursesVideo/CoursesVideo';
import JobExams from '../JobExam/JobExams';
import Banner from './Banner';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <OurFetures></OurFetures>
            <CourseSlide></CourseSlide>
            
            <SpecialCourse></SpecialCourse>
            <Admissions></Admissions>
            <JobExams></JobExams>
            <CoursesVideo></CoursesVideo>
        </div>
    );
};

export default Home;
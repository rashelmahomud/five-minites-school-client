import React from 'react';
import Achivements from '../Achivement/Achivements';
import Admissions from '../Admisson/Admissions';
import CourseSlide from '../AllCourse/CourseSlide/CourseSlide';
import OurFetures from '../AllCourse/OurFetures';
import SpecialCourse from '../AllCourse/SpecialCourse/SpecialCourse';
import CoursesVideo from '../CoursesVideo/CoursesVideo';
import JobExams from '../JobExam/JobExams';
import Reviews from '../ReviewsAll/CustomerReviews/Reviews';
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
            <Reviews></Reviews>
            <Achivements></Achivements>
        </div>
    );
};

export default Home;
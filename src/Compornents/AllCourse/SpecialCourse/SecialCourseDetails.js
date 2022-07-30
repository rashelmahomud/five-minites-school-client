import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SecialCourseDetails = () => {
    const { coursesId } = useParams();

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/special.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const newDetails = details.filter(detail => detail._id == coursesId)

    return (
        <div>
            <h1>details page{newDetails[0]?.name}</h1>
        </div>
    );
};

export default SecialCourseDetails;
import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productAction';

const JobDetails = () => {
    const { jobdetailsId } = useParams();
    const product = useSelector((state) => state.product);
    const {name, img, _id } = product;
    const dispatch = useDispatch();
    console.log(product);


    const fetchProduct = async () => {
        const responce = await axios
            .get(`http://localhost:5000/jobexam/${jobdetailsId}`)
            .catch((err) => {
                console.log('Err', err);
            });
        dispatch(selectedProduct(responce.data));
    }

    useEffect(() => {
        if (jobdetailsId && jobdetailsId !== "") fetchProduct();
    }, [jobdetailsId])

    return (
        <div>
             <img src={img} />
            <h1>Product Details {_id} </h1>
            <h1>Product Details {name} </h1>
          
        </div>
    );
};

export default JobDetails;
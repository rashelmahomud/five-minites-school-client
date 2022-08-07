import React, { useEffect, useState } from 'react';
import BookStore from './BookStore';

const BookStores = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('AcadamicBooks.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-bold text-4xl text-center my-20'>ACADEMIC BOOK STORE</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:mx-10 gap-6 mx-3 my-10'>
                {
                    books.map(book => <BookStore key={book._id} book={book}></BookStore>)
                }
            </div>
        </div>
    );
};

export default BookStores;
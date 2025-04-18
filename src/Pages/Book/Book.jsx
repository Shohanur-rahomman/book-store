import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ oneBook }) => {
    const { bookName, image, rating, category, tags,bookId } = oneBook;
    return (
        <Link to={`bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure className='bg-gray-100 py-4 px-6'>
                    <img className='h-[166px] w-[124px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-10'>
                        {
                            tags.map((tag, index) => <button key={index}>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-green-700">
                        {bookName}

                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className='border-t-1 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div >{category}</div>
                        <div className='flex gap-4 items-center'>{rating}<FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
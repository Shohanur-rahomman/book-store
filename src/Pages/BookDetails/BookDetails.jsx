import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/AddToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData()
    const oneBook = data.find(book => book.bookId === bookId)
    const { image, bookName } = oneBook;

    const handleRead = () => {
        addToStoredDB(id)
    }

    return (
        <>
            <div className="w-3/4 mx-auto mb-14 text-center mt-11">
                <img
                    className="h-[400px] object-cover w-full max-w-md mx-auto rounded shadow"
                    src={image}
                    alt={"Book cover"}
                />

                <h2 className="text-3xl font-bold text-green-700 mt-4 mb-6">
                    {bookName}
                </h2>

                <div className="flex justify-center gap-4">
                    <button onClick={() => handleRead(id)} className="btn btn-success">Read</button>
                    <button className="btn btn-warning">WisdList</button>
                </div>
            </div>
        </>
    );
};

export default BookDetails;
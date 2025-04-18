// import React, { useState } from 'react';

import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ allBookData }) => {

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-4'>BOOK</h2>
            <Suspense fallback={<span>loading..</span>}>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-6 gap-6">
                    {
                        allBookData.map(oneBook => <Book key={oneBook.bookId} oneBook={oneBook}></Book>)
                    }
               </div>
            </Suspense>
        </div>
    );
};

export default Books;
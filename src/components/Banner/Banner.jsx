import React from 'react';
import bookImg from './../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className='md:flex justify-around items-center p-6 rounded-2xl bg-gray-100'>
            <div >
                <h2 className='text-4xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing<br /> elit.  Facilis, impedit!</h2>
                <button className='btn btn-primary mt-6'>More details</button>
            </div>
            <div>
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
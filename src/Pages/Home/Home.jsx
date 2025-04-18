import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allBookData = useLoaderData()
    console.log(allBookData);
    return (
        <div>
            <Banner></Banner>
            <Books allBookData={allBookData}></Books>
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FindTutorsCard from './FindTutorsCard';

const FindTutor = () => {

    const tutors = useLoaderData()

    return (
        <div>
            <h1>All Tutors: {tutors.length}</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mb-10'>
            {
                tutors.map(tutor => <FindTutorsCard tutor={tutor}></FindTutorsCard> )
            }
        </div>

        </div>
    );
};

export default FindTutor;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
       <div>
            <Navbar></Navbar>
         <div className='max-w-[1400px]  mx-auto'>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
       </div>
    );
};

export default Root;
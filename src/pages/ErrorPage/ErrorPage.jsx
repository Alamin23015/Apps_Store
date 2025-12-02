import React, { useEffect, useState } from 'react';
import errorImg from '../../assets/error-404.png'
import {  useNavigate } from 'react-router';
import NavBar from '../../componenets/Header/NavBar';
const ErrorPage = () => {
    const [currentPage, setCurrentPage] = useState('error');
    const navigate = useNavigate();
    
    const handleCurrentPage = (page) => {
        setCurrentPage(page);
    }
    useEffect (() =>{
        if (currentPage === 'home'){
            navigate('/');
        }else if (currentPage === 'apps'){
            navigate('/apps');
        }
    }, [currentPage, navigate]);

    const backToHome = () => {
        handleCurrentPage('home');
    }
    const allApps = () => {
        handleCurrentPage('apps');
    }
    return (
        <>
        <NavBar></NavBar>
        <div className='bg-[#E9E9E9] min-h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-4 h-full max-w-md px-4 '>
                <img src={errorImg} alt="" />
                
                <span className='text-2xl '>Not Found</span>
                <p className='text-gray-500 mb-4 text-center '>Sorry, the page you are looking for might be removed,<br /> renamed, or is temporarily unavailable.</p>
                <div className='flex gap-4 mt-auto '>
                    <button className='btn btn-primary'
                            onClick={backToHome}
                    >
                        Back to Home
                    </button>
                    <button 
                    onClick={allApps}
                    className='btn text-violet-600 border border-violet-500 hover:bg-violet-600 hover:text-white '>
                        Browse All Apps
                    </button>
                </div>
            </div>
           
        </div>
        </>
    );
};

export default ErrorPage;
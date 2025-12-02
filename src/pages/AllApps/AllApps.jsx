import React, { useState } from 'react';
import download from '../../assets/download.svg'
import star from '../../assets/icon-ratings.png'
import { Link, useLoaderData, useNavigate, useOutletContext } from 'react-router';





const Apps = () => {
    const { startLoading } = useOutletContext();
    const { apps } = useLoaderData();
    const [searchApp, setSearchApp] = useState('');
    const navigate = useNavigate();

    const handleShowAllApps = () => {
        startLoading();
        navigate('/apps');
        setSearchApp('');
    }

    const filterApps = apps.filter(app =>
        app.name.toLowerCase().includes(searchApp.toLowerCase())
    );
    const handleSearchChange = (event) => {
        setSearchApp(event.target.value);
        startLoading();
    };

    const changeMenu = () => {
        startLoading();
    }
    return (
        <div className='bg-[#E9E9E9]'>
            <div>
                <div className='max-w-[1200px] mx-auto pt-5 flex flex-col items-center justify-center'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-gray-700 text-4xl font-bold'>Our All Applications</h1>

                    </div>
                    <p className='mt-2  text-center text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
            </div>
            <div className='flex items-center justify-between mx-20 p-4'>
                <span className='underline'>({filterApps.length})Apps Found</span>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search"
                            required placeholder="Search by name"
                            value={searchApp}
                            onChange={handleSearchChange}
                            className='grow'
                        />
                    </label>
                </div>
            </div>
            {/* App data from json */}
            <div>
                <div className='max-w-[1200px] mx-auto p-4 '>
                    <div className='flex flex-col items-center '>
                        <div>
                            {filterApps && filterApps.length > 0 ? (

                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                                    {filterApps.map(app => (
                                        <div key={app.id} className='bg-white rounded-xl w-full shadow-md hover:shadow-xl hover:-translate-y-2 
                                            transition-all duration-300 ease-in-out'>
                                            <Link to={`/apps/${app.id}`} key={app.id} className="w-full" onClick={changeMenu} >
                                                <div className='flex flex-col items-center justify-center p-2 gap-2'>
                                                    <img
                                                        src={app.image}
                                                        className='w-full object-cover rounded-xl h-48'

                                                    />
                                                    <p className='text-xl font-semibold text-center px-2'>{app.name}</p>
                                                    <div className='flex justify-between w-full px-4 pb-4'>
                                                        <button className='btn rounded-2xl border border-green-500 text-green-500 flex items-center gap-1 px-2 py-1'>
                                                            <img src={download} className='h-4' alt="Downloads" /> {app.downloads}
                                                        </button>
                                                        <button className='btn rounded-2xl border border-violet-500 text-violet-500 flex items-center gap-1 px-2 py-1'>
                                                            <img src={star} className='h-4' alt="Rating" /> {app.rating}
                                                        </button>
                                                    </div>
                                                </div>
                                            </Link>

                                        </div>
                                    ))}

                                </div>

                            ) : (
                                <div className='text-center text-gray-600 py-8 text-4xl '>No apps available.
                                    <div className='m-10'>

                                        <button onClick={handleShowAllApps} className="btn bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl">Show All Apps</button>


                                    </div>
                                </div>

                            )}
                        </div>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default Apps;
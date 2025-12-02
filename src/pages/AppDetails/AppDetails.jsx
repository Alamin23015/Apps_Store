import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import download from '../../assets/download.svg'
import star from '../../assets/icon-ratings.png'
import playImg from '../../assets/play.svg'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Label } from 'recharts';
import AppNotFound from '../AppNotFound/AppNotFound';
const AppDetails = () => {
    const { app } = useLoaderData();


    const [isInstalled, setIsInstalled] = useState(false);
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const alreadyInstalled = installedApps.some(installedApp => installedApp.id === app.id);
        if (alreadyInstalled) {
            setIsInstalled(true);
        }
    }, [app]);

    if (!app) {
        return <AppNotFound></AppNotFound>;
    }

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        const updatedApps = [...installedApps, app];
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        setIsInstalled(true);
        toast.success(`Yahoo ⚡ ${app.title} Installed Succesfully`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className='bg-[#E9E9E9]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex flex-col'>


                    <div className='p-5 flex items-center gap-4 justify-center flex-col md:flex-row lg:flex-row border-b border-gray-400  m-10'>
                        <div>
                            <img src={app.image} className='rounded-xl' />
                        </div>
                        <div>
                            <div className='border-b-2 w-full border-violet-600 p-4'>
                                <div className=''>
                                    <h1 className='text-3xl text-gray-700'>{app.title}</h1>
                                    <h2 className='text-gray-800'>Devoloped By <span className='text-violet-600'>{app.companyName}</span></h2>

                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex flex-col md:flex-row gap-6 p-6 m-4'>
                                    {/* Downloads Hostory */}
                                    <div className=' flex flex-col '>
                                        <span className='text-gray-500'>Downloads</span>
                                        <div className='flex flex-row items-center justify-around gap-4'>
                                            <h1 className='text-2xl font-bold md:text-5xl'>{app.downloads}M</h1>
                                            <img className='h-4 md:h-10' src={download} alt="" />
                                        </div>

                                    </div>
                                    {/* Total reviews */}
                                    <div className=' flex flex-col '>
                                        <span className='text-gray-500'>Reviews</span>
                                        <div className='flex flex-row  items-center justify-around gap-4'>
                                            <h1 className='text-2xl font-bold md:text-5xl'>{app.ratingAvg}K</h1>
                                            <img className='h-4 md:h-10' src={star} alt="" />
                                        </div>

                                    </div>
                                    {/* Active Apps */}
                                    <div className=' flex flex-col '>
                                        <span className='text-gray-500'>Total Reviews</span>
                                        <div className='flex flex-row items-center justify-around gap-4'>
                                            <h1 className='text-2xl font-bold md:text-5xl'>{app.reviews}</h1>
                                            <img className='h-4 md:h-10' src={playImg} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <button
                                    onClick={handleInstall}
                                    disabled={isInstalled}
                                    className={`btn btn-primary border-none text-white font-bold py-2 px-4 rounded-lg shadow-lg 
                                            transition-all duration-300 ease-in-out
                                            ${isInstalled
                                            ? 'bg-gray-500 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-green-500 to-green-600 animate-pulse hover:scale-105 active:scale-95'
                                        }`}
                                >
                                    {isInstalled ? 'Installed' : `Install Now (${app.size}MB)`}
                                </button>
                            </div>

                        </div>


                    </div>


                </div>
                <div className='p-4'>
                    <p className='text-xl'>Ratings:</p>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={app.ratings}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 30,
                            }}
                            layout='vertical'>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number">
                                <Label
                                    value="Count"
                                    position="bottom"
                                    dy={10}
                                />
                            </XAxis>

                            <YAxis type="category" dataKey="name" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#74D591" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* Description */}
                <div className='flex flex-col p-4'>
                    <h1 className='text-4xl text-gray-600 font-bold'>
                        Description
                    </h1>
                    <span className='text-xl text-gray-600 py-4 text-justify'>{app.description}</span>
                </div>

            </div>
            <ToastContainer />
        </div>

    );
};

export default AppDetails;
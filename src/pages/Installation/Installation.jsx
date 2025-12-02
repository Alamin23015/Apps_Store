import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import boxImg from '../../assets/box.svg'
import { useNavigate, useOutletContext } from 'react-router';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const navigate = useNavigate();
    const { startLoading } = useOutletContext();
    const [sortBySize, setSortBySize] = useState('Sort By Downloads ⌄');




    /* Sorting Apps  */
    const ascSortApp = () => {
        const sortedApps = [...installedApps];
        sortedApps.sort((a, b) => a.downloads - b.downloads);
        setInstalledApps(sortedApps);
        setSortBySize('Low-High ⌄');
    }
    const dscSortApp = () => {
        const sortedApps = [...installedApps];
        sortedApps.sort((a, b) => b.downloads - a.downloads);
        setInstalledApps(sortedApps);
        setSortBySize('High-Low ⌄');
    }

    const goAppDetails = (appId) => {
        if (startLoading) {
            startLoading();
        }
        navigate(`/apps/${appId}`);
    }


    useEffect(() => {
        const appsFromStorage = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(appsFromStorage);
    }, []);

    const handleUninstall = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        const appToUninstall = installedApps.find(app => app.id === appId);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        setInstalledApps(updatedApps);
        toast.success(`🗑️ ${appToUninstall.title} Uninstalled Succesfully`, {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
           
            progressClassName: 'custom-progress',
       
        });
    };
    return (
        <div className='bg-[#E9E9E9] p-40'>
            <div className='flex flex-col max-w-[1200px] mx-auto pb-4'>
                <div className='max-w-[1200px] mx-auto p-4'>
                    <div className=' flex flex-row gap-4'>
                        <h1 className='md:text-4xl font-bold text-gray-600'>Your Intalled Apps</h1>
                        <img src={boxImg} className='h-6 md:h-12' />
                    </div>
                    <p className='text-center text-gray-500 text-sm'>Explore All Trending Apps on the Market developed by us</p>

                </div>
                <div className='flex items-center justify-between border-b-1 border-gray-500'>
                    <span className='underline text-violet-500'>({installedApps.length})Apps Found</span>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1 sm:text-sm">{sortBySize}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 md:w-52 p-2 shadow-sm">
                            <li ><a className='disabled text-gray-400 hover:bg-transparent cursor-default '>✓ Sort By Downloads</a> </li>
                            <li onClick={ascSortApp} ><a> Low-High</a></li>
                            <li onClick={dscSortApp}><a> High-Low</a></li>
                        </ul>
                    </div>
                </div>

                {/*  Card */}
                <div className='flex flex-col gap-4 mt-8'
                >
                    {installedApps.length > 0 ? (
                        installedApps.map(app => (
                            <div key={app.id} className='w-full py-4 flex items-center justify-between bg-white p-4 rounded-xl shadow-md'>
                                <div className='flex gap-4 items-center hover:cursor-pointer '
                                    onClick={() => goAppDetails(app.id)}
                                >
                                    <img src={app.image} className='h-12 md:h-16 rounded-lg' />
                                    <div>
                                        <h1 className='text-lg md:text-xl font-semibold text-gray-700'>{app.title}</h1>
                                        <div className='flex gap-4 text-gray-500 text-sm'>
                                            <span className='text-green-500' > ↓ {app.downloads}M</span>
                                            <span className='text-violet-500'>★ {app.ratingAvg} </span>
                                            <span>{app.size}MB</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => handleUninstall(app.id)}
                                        className='btn btn-error bg-green-500 hover:bg-green-400 text-white border-none'
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-gray-500 text-xl mt-10'>You have no installed apps.</p>
                    )}
                </div>


            </div>
            <ToastContainer />
        </div>
    );
};

export default Installation;
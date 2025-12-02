import React from 'react';
import playImg from '../../assets/play.svg'
import apple from '../../assets/apple.svg'
import hero from '../../assets/hero.png'
import download from '../../assets/download.svg'
import star from '../../assets/icon-ratings.png'
import trendImg from '../../assets/trend.svg'
import { Link, useLoaderData, useNavigate, useOutletContext  } from 'react-router';

//Play button 
const openPlay = () => {
    window.open('https://play.google.com/store/games');
}

//App Store
const openAppStore = () => {
    window.open('https://www.apple.com/app-store/');
}

const Home = () => {
    const { apps } = useLoaderData();
    const firstEightApps = apps.slice(0, 8);

    const {startLoading} = useOutletContext();
    const navigate = useNavigate();

    const handleShowAllApps = () => {
        startLoading();
        navigate('/apps');
    }
    const changeMenu = () => {
        startLoading();
    }
    
    return (
        <div className='bg-[#E9E9E9]'>
            <div className='flex flex-col gap-2 items-center justify-center max-w-[1200px] mx-auto px-4 pt-4 pr-3 pl-3'>
                <h1 className='text-center text-6xl  font-bold'>
                    We Build <br />
                    <span className='text-violet-600'>Productive </span>
                    <span className='text-gray-700'>Apps</span>
                </h1>
                <p className='mt-4 italic text-center font-italic'>At <span className='text-gray-700 font-bold'>HERO.IO</span>  , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital
                    experiences that truly make an impact
                </p>
                {/* Button */}
                <div className='flex gap-4'>
                    <button onClick={openPlay}
                        className='btn h-12 bg-white text-xl rounded-xl border-none hover:shadow-lg hover:bg-gray-200
                               transition-shadow duration-300 ease-in-out'>
                        <img src={playImg} alt="" className='h-8 ' />
                        Google Play
                    </button>
                    <button onClick={openAppStore}
                        className='btn h-12 bg-white text-xl rounded-xl border-none hover:shadow-lg hover:bg-gray-200
                               transition-shadow duration-300 ease-in-out'>
                        <img src={apple} alt="" className='h-8 ' />
                        App Store
                    </button>
                </div>
                {/* HeroImg */}
                <div className='mt-8'>
                    <img src={hero} alt="" />
                </div>
            </div>
            {/* Feedback */}
            <div className='bg-gradient-to-r from-indigo-500 to-violet-500
                            flex flex-col items-center justify-center
            '>
                <h1 className='text-xl text-white p-5 font-bold md:text-4xl'>Trusted by Millions, Built for You</h1>
                {/* History */}
                <div className='flex flex-col md:flex-row gap-6 p-6 m-4'>
                    {/* Downloads Hostory */}
                    <div className='text-white flex flex-col '>
                        <span>Total Downloads</span>
                        <div className='flex flex-row items-center justify-around gap-4'>
                            <h1 className='text-2xl font-bold md:text-5xl'>29.6M</h1>
                            <img className='h-4 md:h-10' src={download} alt="" />
                        </div>
                        <span className='text-sm'>21% more than last month</span>
                    </div>
                    {/* Total reviews */}
                    <div className='text-white flex flex-col '>
                        <span>Total Reviews</span>
                        <div className='flex flex-row  items-center justify-around gap-4'>
                            <h1 className='text-2xl font-bold md:text-5xl'>906K</h1>
                            <img className='h-4 md:h-10' src={star} alt="" />
                        </div>
                        <span className='text-sm'>46% more than last month</span>
                    </div>
                    {/* Active Apps */}
                    <div className='text-white flex flex-col '>
                        <span>Active Apps</span>
                        <div className='flex flex-row items-center justify-around gap-4'>
                            <h1 className='text-2xl font-bold md:text-5xl'>132+</h1>
                            <img className='h-4 md:h-10' src={playImg} alt="" />
                        </div>
                        <span className='text-sm'>31 more will Launch</span>
                    </div>
                </div>

            </div>
            {/* Trending */}
            <div>
                <div className='max-w-[1200px] mx-auto mt-5 flex flex-col items-center justify-center'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-gray-700 text-4xl font-bold'>Trending Apps</h1>
                        <img className='h-10' src={trendImg} />
                    </div>
                    <p className='mt-4 p-3 text-center text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            </div>
            {/* AllApp */}

            <div className='max-w-[1200px] mx-auto p-4 '>
                <div className='flex flex-col items-center '>
                    <div>
                        {apps && apps.length > 0 ? (
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
                        {firstEightApps.map(app => (
                            <div key={app.id} className='bg-white rounded-xl w-full shadow-md hover:shadow-xl hover:-translate-y-2 
                                transition-all duration-300 ease-in-out'>
                                    <Link to={`/apps/${app.id}`} key={app.id} className="w-full" onClick={changeMenu}>
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
                    <div className='text-center text-gray-500 py-8'>No apps available.</div>
                )}
                    </div>
                    <div className='m-10'>
                        
                            <button onClick={handleShowAllApps} className="btn bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl">Show All Apps</button>
                      
                        
                    </div>
                </div>
                
                
            </div>
            

        </div>
    );
};

export default Home;
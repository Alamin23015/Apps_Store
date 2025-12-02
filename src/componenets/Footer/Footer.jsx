import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router'; 
const Footer = () => {
    return (
        <div className='bg-[#031931] text-white pb-5'>
           
            <div className='max-w-[1200px] mx-auto p-5 flex flex-col md:flex-row gap-6'>
                <div>
                    <div className='flex items-center gap-2 '>
                        <img src={logoImg} className='h-12' />
                        <h1 className='text-xl font-bold'>Hero Apps </h1>
                    </div>
                    <p>Hero Apps is the biggest company in Bandladesh.  <br />
                        We delivered alsmost 100+ apps in the world. We <br />
                        have 300+ engineers.
                    </p>
                    <div className='flex items-center gap-2 '>
                        <img src={logoImg} className='h-12' />
                        <h1 className='text-xl font-bold'>Hero Apps </h1>
                    </div>


                    <p>Hero Apps is the biggest company in Bandladesh.  <br />
                        We delivered alsmost 100+ apps in the world. We <br />
                        have 300+ engineers.
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='tetx-xl font-bold'>About Heroes Apps</h1>
                    <span className='text-sm text-gray-400'>Newsroom</span>
                    <span className='text-sm text-gray-400'>Leadership</span>
                    <span className='text-sm text-gray-400'>Career</span>
                    <span className='text-sm text-gray-400'>Blog</span>

                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='tetx-xl font-bold'>Contact with us</h1>
                    <span className='text-sm text-gray-400'>Newsroom</span>
                    <span className='text-sm text-gray-400'>Leadership</span>
                    <span className='text-sm text-gray-400'>Career</span>
                    <span className='text-sm text-gray-400'>Blog</span>

                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='tetx-xl font-bold'>Social Links</h1>
                    <span className='text-sm text-gray-400'>Facebook</span>
                    <span className='text-sm text-gray-400'>LinkedIn</span>
                    <span className='text-sm text-gray-400'>You Tube</span>
                    <span className='text-sm text-gray-400'>X</span>

                    <div className='flex flex-col gap-2'>
                        <h1 className='tetx-xl font-bold'>About Heroes Apps</h1>
                        <span className='text-sm text-gray-400'>Newsroom</span>
                        <span className='text-sm text-gray-400'>Leadership</span>
                        <span className='text-sm text-gray-400'>Career</span>
                        <span className='text-sm text-gray-400'>Blog</span>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='tetx-xl font-bold'>Contact with us</h1>
                        <span className='text-sm text-gray-400'>Newsroom</span>
                        <span className='text-sm text-gray-400'>Leadership</span>
                        <span className='text-sm text-gray-400'>Career</span>
                        <span className='text-sm text-gray-400'>Blog</span>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='tetx-xl font-bold'>Social Links</h1>
                        <span className='text-sm text-gray-400'>Facebook</span>
                        <span className='text-sm text-gray-400'>LinkedIn</span>
                        <span className='text-sm text-gray-400'>You Tube</span>
                        <span className='text-sm text-gray-400'>X</span>
                    </div>

                </div>
            </div> {/* <--- THIS CLOSING TAG WAS MISSING */}

            <div className='max-w-[1200px] mx-auto text-center border-t border-gray-400'>
                <p className='text-gray-500 p-4 w-full text-sm'>© 2025 Hero Apps. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;
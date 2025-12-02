import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../componenets/Header/NavBar';
import { Outlet, useLocation, useMatch} from 'react-router';
import Footer from '../../../src/componenets/Footer/Footer';

import logoImg from '../../assets/logo.png'

const Root = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const loadingTimeRef = useRef(null);
    const isAppDetailsPage = useMatch("/apps/:id");
   /*  const navigation = useNavigation(); */


    //Initial Loading
    useEffect(() => {
        const initialTimer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(initialTimer);
    }, []);


    //Menu loading challenge part
    const startLoading = () => {
        setLoading(true);
        if (loadingTimeRef.current) {
            clearTimeout(loadingTimeRef.current);
        }
        loadingTimeRef.current = setTimeout(() => {
            setLoading(false);
            loadingTimeRef.current = null;
        }, 1000);

    };

    const showFooter = ['/', '/apps', '/installation','/apps:id'].includes(location.pathname) || isAppDetailsPage;
    return (
        <div className=''>
            <NavBar startLoading={startLoading} ></NavBar>
            <Outlet context={{startLoading}}></Outlet>
            {showFooter && <Footer></Footer>}
            {loading && (
                <div className='fixed inset-0 flex items-center justify-center bg-gray-100/75 backdrop-blur-sm z-50'>
                    <div className="flex items-center gap-1">
                    <span className="text-8xl font-semibold text-gray-400">L</span>
                    <img
                        src={logoImg}
                        
                        className="h-16 animate-spin" 
                    />
                    <span className="text-8xl font-semibold text-gray-400">oading</span>
                   </div>
                </div>
                
            )}

        </div>
    );
};

export default Root;
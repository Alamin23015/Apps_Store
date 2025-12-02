import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/AllApps/AllApps';
//import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';
import AppNotFound from '../pages/AppNotFound/AppNotFound';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />, 
    
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const API_URL = '/appData.json';
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch apps'); 
          const data = await response.json();
          const transformedData = data.map(item => ({
            id: item.id,
            image: item.image,
            name: item.title,
            downloads: item.downloads + 'M', 
            rating: item.ratingAvg
          }));
          return { apps: transformedData };
        },
      },
      {
        path: "/apps",
        Component: Apps,
        loader: async () => {
          const API_URL = '/appData.json';
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch apps');
          const data = await response.json();
          const transformedData = data.map(item => ({
            id: item.id,
            image: item.image,
            name: item.title,
            downloads: item.downloads + 'M',
            rating: item.ratingAvg
          }));
          return { apps: transformedData };
        },
      },

      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: async ({ params }) => {
          const API_URL = '/appData.json';
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch apps'); 
          const data = await response.json();
          const app = data.find(item => item.id == params.id);
          return { app: app || null };
        },
      },
      // {
      //   path: "/installation",
      //   Component: Installation,
      // },
    ]
  },
]);
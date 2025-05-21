
import './index.css'
import ReactDOM from "react-dom/client";
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/layout';
import { Home } from './pages/Home/Home';
import { Repair } from './pages/repair/repair';
import { Design } from './pages/design/design';
import { Consultation } from './pages/consultation/consultation';
import { Prices } from './pages/prices/prices';
import { Gallery } from './pages/gallery/gallery';
import { Service } from './pages/service/service';
import { Company } from './pages/company/company';
import { Contacts } from './pages/contacts/contscts';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: "/",
            element: <Home />
        }, 
        {
            path: "repair",
            element: <Repair />
        },
        {
             path: "design",
            element: <Design />
        },
       {
            path: "consultation",
            element: <Consultation />
       },
       {
            path: "/",
            element: <Home />
        }, 
        {
            path: "repair",
            element: <Repair />
        },
        {
             path: "design",
            element: <Design />
        },
       {
            path: "consultation",
            element: <Consultation />
       },
       {
        path: "prices",
        element: <Prices/>
    }, 
    {
        path: "gallery",
        element: <Gallery />
    },
    {
         path: "service",
        element: <Service/>
    },
   {
        path: "company",
        element: <Company/>
   },
   {
    path: "contacts",
    element: <Contacts/>
   }
    ]}
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
          <RouterProvider router={router} />
  </React.StrictMode>
);

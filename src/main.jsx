import './index.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/home.page.jsx';
import JobPage from './pages/job/job.page';
import RootLayout from './layouts/root.layout';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/job",
        element: <JobPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import JobFeatureDetail from './components/JobFeatureDetail/JobFeatureDetail';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('FeaturedJobs.json')
      },
      {
        path: 'featured_details/:id',
        element: <JobFeatureDetail></JobFeatureDetail>
      },
      {
        path: 'AppliedJob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

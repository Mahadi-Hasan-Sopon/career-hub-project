import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Statistics from "../pages/statistics/Statistics";
import Jobs from "../pages/jobs/Jobs";
import Blogs from "../pages/blogs/Blogs";
import Home from "../pages/home/Home";
import JobDetails from "../components/featuredJobs/JobDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

export default routes;

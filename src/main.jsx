import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Summarizer from "./pages/TextSummary";
import QAGenerator from "./pages/QAGenerator";
import JobRecommendation from "./pages/Job_Recommendation";
import NotFound from "./pages/NotFound";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {path: "aboutus", element: <AboutUs /> },
      { path: "summarizer", element: <Summarizer /> },
      { path: "qa-generator", element: <QAGenerator /> },
      {path: "job-recommend", element: <JobRecommendation /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

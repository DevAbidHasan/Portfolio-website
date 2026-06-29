import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import ProjectDetails from "../pages/ProjectDetails";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
    {
        path : "",
        Component : MainLayout,
        errorElement: <ErrorPage/>,
        children :[
            {
                index : true,
                Component : HomeLayout
            },
            {
                path : "projects/:slug",
                Component : ProjectDetails
            }
        ]
    }
])
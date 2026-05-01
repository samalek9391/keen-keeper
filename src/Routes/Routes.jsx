import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import States from "../Pages/Timeline/States/States";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },

            {
                path: '/timeline',
                Component: Timeline,
            },

            {
                path: '/stats',
                Component: States,
            },
        ]
    }
])
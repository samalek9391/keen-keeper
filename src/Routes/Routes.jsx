import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/HomePage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import States from "../Pages/Timeline/States/States";
import FriendCard from "../UI/FriendCard";
import FriendDetail from "../UI/FriendDetail";

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

            {
                path: '/friend/:id',
                Component: FriendDetail,
                loader: async () => {
                const res = await fetch("/friendsData.json");
                return res.json(); // ✅ MUST
                }
            },
        ]
    }
])
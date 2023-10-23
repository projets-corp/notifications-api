import { Outlet, createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/ProjectDetail/Dashboard";
import Projects from "../pages/Landing/Projects";
import NewProject from "../pages/Landing/NewProject";
import EditProject from "../pages/ProjectDetail/EditProject";
import Templates from "../pages/ProjectDetail/Templates";
import Layout from "@components/Layout";
import menuLanding from "./menu-landing";
import menuProjectDetail from "./menu-project-detail";
import Authentification from "../pages/ProjectDetail/Authentification";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout menuItems={menuLanding} >
            <Outlet />
        </Layout>,
        children: [{
            path: "/",
            element: <Projects />,
        },
        {
            path: "new-project",
            element: <NewProject />,
        },]
    },
    {
        path: "/project",
        element: <Layout menuItems={menuProjectDetail} >
            <Outlet />
        </Layout>,
        children: [
            {
                path: "edit",
                element: <EditProject />,
            },
            {
                path: "templates",
                element: <Templates />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "authentification",
                element: <Authentification/>,
            },
        ]
    }


]);

export default router;
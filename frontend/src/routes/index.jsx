import Layout from "@components/Layout";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NewProject from "../pages/Landing/NewProject";
import Projects from "../pages/Landing/Projects";
import Authentification from "../pages/ProjectDetail/Authentification";
import Dashboard from "../pages/ProjectDetail/Dashboard";
import EditProject from "../pages/ProjectDetail/EditProject";
import Members from "../pages/ProjectDetail/Members";
import Templates from "../pages/ProjectDetail/Templates";
import menuLanding from "./menu-landing";
import menuProjectDetail from "./menu-project-detail";


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
            {
                path: "members",
                element: <Members/>,
            },
        ]
    }


]);

export default router;
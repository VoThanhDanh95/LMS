import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Todo from './pages/Todo'
// import Audio from './pages/Audio'
import TaskDetail from "./components/Tasks/TaskDetail";
import TaskList from "./components/Tasks/TaskList";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    // {
    //     path: '/audio',
    //     exact: true,
    //     component: Audio,
    // },
    {
        path: '/about',
        exact: true,
        component: About,
    },
    {
        path: '/todo',
        exact: true,
        component: Todo,
    },
    {
        path: '/tasks',
        exact: true,
        component: TaskList,
    },
    {
        path: '/task/:task_id',
        exact: true,
        component: TaskDetail,
    },
]

function renderRoutes() {
    return (
        <Routes>
            {
                routes.map((route, index) => {
                    const Comp = route.component
                    const path = route.path
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Comp />
                            }
                        />
                    )
                })
            }
        </Routes>
    )

}
export default renderRoutes;
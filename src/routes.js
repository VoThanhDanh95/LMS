import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Todo from './pages/Todo'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
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
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import configureStore from "./redux/store";
import renderRoutes from "./routes";
import NavBar from "./components/NavBar";
import RootLayout from "./pages/Root";
import TaskList from "./components/Tasks/TaskList";
import About from "./pages/About";
import Home from "./pages/Home"
import TaskDetail from "./components/Tasks/TaskDetail";
import { action as myformAction } from "./components/MyForm"
import { action as answerFormAction } from "./components/AnswerForm"
import { action as newTaskAction } from "./pages/Task/NewTask"
import NewTaskPage from "./pages/Task/NewTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About />, action: myformAction },
            {
                path: 'tasks',
                // element: <TaskList />,
                children: [
                    { index: true, element: <TaskList /> },
                    { path: 'home', element: <Home /> },
                    { path: ':task_id', element: <TaskDetail />, action: answerFormAction },
                    { path: 'new', element: <NewTaskPage />, action: newTaskAction }
                ]
            },
            // { path: 'home', element: <Home /> }
        ]
    }
])



const store = configureStore();
function App() {
    return <RouterProvider router={router} />


    // return (
    //     <NavBar> </NavBar>
    // )


    // return (
    //     <Provider store={store}>
    //         <BrowserRouter>
    //             {renderRoutes()}
    //         </BrowserRouter>
    //     </Provider>
    // );
}

export default App;

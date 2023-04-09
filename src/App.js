import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "./redux/store";
import renderRoutes from "./routes";

const store = configureStore();
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {renderRoutes()}
            </BrowserRouter>
        </Provider>
    );
}

export default App;

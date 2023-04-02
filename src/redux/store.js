import { createStore } from '@reduxjs/toolkit'

import rootReducer from "./rootReducer";

function configureStore() {
    const store = createStore(rootReducer)
    return store
}

export default configureStore;
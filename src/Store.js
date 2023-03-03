import { createStore } from "redux";
import Rootreducer from "./Services/Reducers/Rootreducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : "reduxStudentCrud",
    storage
}

const persistR = persistReducer(persistConfig,Rootreducer)

const store = createStore(
    persistR , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)
export default store;

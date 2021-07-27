import { createStore, applyMiddleware } from "redux";
import {rootReducer} from "../reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store)

export default store;

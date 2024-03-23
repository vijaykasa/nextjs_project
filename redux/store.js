// import {configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
// import storage from 'reduxjs-toolkit-persist/lib/storage' // defaults to localStorage for web
// import rootReducer from '../redux/features/favoritesSlice';
// import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

// const persistConfig = {
//   key: 'root',
//   storage,
//   stateReconciler: autoMergeLevel1,

// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = configureStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }


import {configureStore } from "@reduxjs/toolkit";
import rootReducer from '../redux/features/favoritesSlice';


export const store=configureStore({
   reducer:rootReducer
})

import {configureStore} from '@reduxjs/toolkit'
import { articleApi } from './article';

export const store = configureStore({
    // articleApi reduce the scope of state
    reducer:{
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import AgeReducer from './age'

export const store = configureStore({
    reducer: {
        age: AgeReducer
    },
    middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(logger)
})

export type RootState = typeof store
export type AppDispatch = RootState['dispatch']
export type AppSelector = ReturnType<RootState['getState']>
export * from './age'
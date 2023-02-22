import {combineReducers} from "redux";
import {ProfileActionsType} from "./reducers/profile-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {InitializationActionsType, InitializeReducer} from "./reducers/initialization-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {newsReducer} from "./reducers/news-reducer";
import {authReducer} from "./reducers/auth-reducer";
import {appReducer} from "../app/app-reducer";


const rootReducer = combineReducers({
    //profile: ProfileReducer,
    app: appReducer,
    initialize: InitializeReducer,
    auth: authReducer,
    news: newsReducer,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)

})
export type AppRootStateType = ReturnType<typeof store.getState>
export type AllActionsType =  InitializationActionsType | ProfileActionsType

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AllActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>
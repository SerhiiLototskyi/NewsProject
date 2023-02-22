import {Dispatch} from 'redux'
import {setAppStatusAC, setIsInitializedStatusAC} from '../../app/app-reducer'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../../api/api";

const initialState: InitialStateType = {
    isLoggedIn: false
}
type InitialStateType = {
    isLoggedIn: boolean
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    }
})
export const authReducer = slice.reducer
export const {setIsLoggedInAC} = slice.actions

// thunks

export const initializeAppTC = () => async (dispatch: Dispatch) => {
    dispatch(setIsInitializedStatusAC({isInitialized: false}))
    const res = await authAPI.me()
    try {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        if (isLoggedIn === 'true') {
            dispatch(setIsLoggedInAC({value: true}))
        } else {
            dispatch(setIsLoggedInAC({value: false}))
        }

    } catch (e) {

    } finally {
        dispatch(setIsInitializedStatusAC({isInitialized: true}))
    }
}
export const loginTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const res = await authAPI.login()
    try {
        localStorage.setItem('isLoggedIn', 'true')
        dispatch(setIsLoggedInAC({value: true}))
        dispatch(setAppStatusAC({status: 'succeeded'}))

    } catch (e) {
    } finally {

    }
}
export const logoutTC = () => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const res = await authAPI.logout()
    try {
        localStorage.setItem('isLoggedIn', 'false')
        dispatch(setIsLoggedInAC({value: false}))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    } catch (e) {
    } finally {

    }
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>

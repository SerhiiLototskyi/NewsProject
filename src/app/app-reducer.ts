import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    errorMessage: null as null | string,
    isInitialized: false as boolean
}

type InitialStateType = typeof initialState

const slice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{status: RequestStatusType}>) {
            state.status = action.payload.status
        },
        setErrorAC(state, action: PayloadAction<{errorMessage:null | string }>) {
            state.errorMessage = action.payload.errorMessage
        },
        setIsInitializedStatusAC(state,action: PayloadAction<{isInitialized: boolean}>){
            state.isInitialized = action.payload.isInitialized
        }
    }
})

export const {setAppStatusAC} = slice.actions
export const {setErrorAC} = slice.actions
export const {setIsInitializedStatusAC} = slice.actions

export const appReducer = slice.reducer

/*export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, errorMessage: action.errorMessage}
        case 'APP/SET-INITIALIZED-STAUTS':
            return {...state, isInitialized: action.status}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const)
export const setErrorAC = (errorMessage: string | null) => ({type: 'APP/SET-ERROR', errorMessage} as const)
export const setIsInitializedStatusAC = (status:boolean) => ({type: 'APP/SET-INITIALIZED-STAUTS', status} as const)

export type SetAppErrorActionType = ReturnType<typeof setAppStatusAC>
export type SetAppStatusActionType = ReturnType<typeof setErrorAC>
export type setIsInitializedStatusActionType = ReturnType<typeof setIsInitializedStatusAC>

export type AppActionsType =
    SetAppErrorActionType
    | SetAppStatusActionType
    | setIsInitializedStatusActionType
*/

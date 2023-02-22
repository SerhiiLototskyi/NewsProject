import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "../../api/api";
import {AppThunk} from "../store";
import {setAppStatusAC} from "../../app/app-reducer";


export type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}
const initialState = {
    news: [] as PostType[]
}

const slice = createSlice({
    name: 'newsReducer',
    initialState: initialState,
    reducers: {
        setNewsAC(state, action: PayloadAction<{ news: any }>) {
            state.news = action.payload.news
        },
        deleteNewAC(state, action: PayloadAction<{ id: number }>) {
            const removeIndex = state.news.findIndex(n => n.id == action.payload.id)
            state.news.splice(removeIndex, 1)
        },
    }
})

export const {setNewsAC, deleteNewAC} = slice.actions


export const newsReducer = slice.reducer


export const setNewsTC = (): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const res = await api.getNews()
    try {
        if (res.status === 200) {
            dispatch(setNewsAC({news: res.data}))
        }
    } catch (e) {
        //handleServerNetworkError(e.data.messages,dispatch)
    } finally {
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }
}
export const deleteNewTC = (id: number): AppThunk => async (dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    const res = await api.deleteNew(id)
    try {
        if (res.status === 200) {
            dispatch(deleteNewAC({id: id}))
        }
    } catch (e) {
        //handleServerNetworkError(e.data.messages,dispatch)
    } finally {
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }
}
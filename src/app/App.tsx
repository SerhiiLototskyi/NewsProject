import React, {useEffect} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Profile} from "../components/profile/Profile";
import {PageNotFound} from "../components/pageNotFound/PageNotFound";
import {Login} from "../components/login/Login";
import {Header} from "../components/header/Header";
import {AppContainer, AppWrapper} from '../styleComponents/StyleComponents';
import {News} from "../components/news/News";
import {MainPage} from "../components/mainPage/MainPage";
import {useAppDispatch, useAppSelector} from "../state/hooks";
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import {initializeAppTC} from "../state/reducers/auth-reducer";


function App() {

    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (
        <AppWrapper>
            <Header/>
            <AppContainer>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </AppContainer>

        </AppWrapper>
    )
}

export default App

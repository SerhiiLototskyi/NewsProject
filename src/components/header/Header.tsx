import React from 'react';
import {HeaderBlock, HeaderButton, LinePosition} from '../../styleComponents/StyleComponents';
import Button from '@mui/material/Button';
import {RoutesLinks} from "../../app/Routes";
import {NavLink} from "react-router-dom";
import s from '../../app/links.module.css'
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {logoutTC} from "../../state/reducers/auth-reducer";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import {RequestStatusType} from "../../app/app-reducer";

export const Header = () => {
    let isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector<RequestStatusType>(state => state.app.status)
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <HeaderBlock>
            <RoutesLinks/>
            <HeaderButton>
                {isLoggedIn ? <Button onClick={logoutHandler} variant="contained">Logout</Button> :
                    <NavLink className={s.link} to={'/login'}>
                        <Button variant="contained">Sign in</Button>
                    </NavLink>}

            </HeaderButton>
            {status === "loading" && <LinePosition><LinearProgress/></LinePosition>}
        </HeaderBlock>
    );
};


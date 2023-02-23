import React from 'react';
import {HeaderBlock, HeaderButton, HeaderButtons, LinePosition} from '../../styleComponents/StyleComponents';
import Button from '@mui/material/Button';
import {RoutesLinks} from "../../app/Routes";
import {NavLink} from "react-router-dom";
import s from '../../app/links.module.css'
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {logoutTC} from "../../state/reducers/auth-reducer";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import {RequestStatusType} from "../../app/app-reducer";
import {useTranslation} from "react-i18next";
import {ChangeLanguage} from "../changeLanguage/ChangeLanguage";

export const Header = () => {
    const {t} = useTranslation()
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const status = useAppSelector<RequestStatusType>(state => state.app.status)
    const dispatch = useAppDispatch()
    const logoutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <HeaderBlock>
            <RoutesLinks/>
            <HeaderButtons>
                <HeaderButton>
                    {isLoggedIn ? <Button onClick={logoutHandler} variant="contained">{t('Logout')}</Button> :
                        <NavLink className={s.link} to={'/login'}>
                            <Button variant="contained">{t('SignIn')}</Button>
                        </NavLink>}
                </HeaderButton>
                <ChangeLanguage/>
            </HeaderButtons>
            {status === "loading" && <LinePosition><LinearProgress/></LinePosition>}
        </HeaderBlock>
    );
};


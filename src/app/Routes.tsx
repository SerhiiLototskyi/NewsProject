import React from 'react';
import {NavLink} from "react-router-dom";
import {NavigationWrapper} from "../styleComponents/StyleComponents";
import s from './links.module.css'
import {useTranslation} from "react-i18next";

export const RoutesLinks = () => {
    const { t } = useTranslation()
    return (
        <NavigationWrapper>
            <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={"/"}>{t('Main page')}</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={"/profile"}>{t('Profile')}</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={"/news"}>{t('News')}</NavLink>
        </NavigationWrapper>
    );
};


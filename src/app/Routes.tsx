import React from 'react';
import {NavLink} from "react-router-dom";
import {NavigationWrapper} from "../styleComponents/StyleComponents";
import s from './links.module.css'

export const RoutesLinks = () => {
    return (
        <NavigationWrapper>
            <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={"/"}>Main Page</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={"/profile"}>Profile</NavLink>
            <NavLink className={({isActive}) => isActive ? s.activeLink : s.link} to={"/news"}>News</NavLink>
        </NavigationWrapper>
    );
};


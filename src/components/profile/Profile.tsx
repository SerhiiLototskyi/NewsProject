import React from 'react';
import {useAppSelector} from "../../state/hooks";
import {Navigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const Profile = () => {
    const { t} = useTranslation();
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            {t('Profile')}
        </div>
    );
};


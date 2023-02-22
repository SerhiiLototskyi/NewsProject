import React from 'react';
import {useAppSelector} from "../../state/hooks";
import {Navigate} from "react-router-dom";

export const Profile = () => {
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            Profile
        </div>
    );
};


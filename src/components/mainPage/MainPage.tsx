import React from 'react';
import {useTranslation} from "react-i18next";
export const MainPage = () => {

    const { t} = useTranslation();
    return (
        <div>
            {t('Main page')}
        </div>
    );
};


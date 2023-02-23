import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {deleteNewTC, setNewsTC} from "../../state/reducers/news-reducer";
import {NewsContainer, NewsPageWrapper} from "../../styleComponents/StyleComponents";
import Button from '@mui/material/Button/Button';
import {useTranslation} from "react-i18next";
import {New} from "./new/New";
import {RequestStatusType} from "../../app/app-reducer";

export const News = () => {
    const {t} = useTranslation()
    const [newsCount, setNewsCount] = useState(4)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const news = useAppSelector(state => state.news.news)
    const status = useAppSelector<RequestStatusType>(state => state.app.status)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setNewsTC())
    }, [])
    const deleteNew = (id: number) => {
        dispatch(deleteNewTC(id))
    }
    return (
        <NewsPageWrapper>
            <NewsContainer>
                {news.filter(news => news.id <= newsCount).map(n => <New
                        isLoggedIn={isLoggedIn}
                        key={n.id}
                        deleteNew={deleteNew}
                        id={n.id}
                        body={n.body}
                        title={n.title}
                        status={status}
                    />
                )}
            </NewsContainer>
            <Button sx={{fontSize: '30px'}} disabled={newsCount > 100} onClick={() => setNewsCount(newsCount + 4)}
                    variant="text">{t('MoreNews')}</Button>
        </NewsPageWrapper>
    );
};


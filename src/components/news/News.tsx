import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../state/hooks";
import {deleteNewTC, setNewsTC} from "../../state/reducers/news-reducer";
import CardMedia from '@material-ui/core/CardMedia/CardMedia';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Card from '@mui/material/Card/Card';
import {CardActionArea} from "@material-ui/core";
import {NewsContainer, NewsPageWrapper} from "../../styleComponents/StyleComponents";
import Button from '@mui/material/Button/Button';
import {RequestStatusType} from "../../app/app-reducer";

export const News = () => {
    const [newsCount, setNewsCount] = useState(4)

    const dispatch = useAppDispatch()
    const news = useAppSelector(state => state.news.news)
    const status = useAppSelector<RequestStatusType>(state => state.app.status)
    useEffect(()=> {
        dispatch(setNewsTC())
    },[])
    const deleteNew = (id: number) => {
        dispatch(deleteNewTC(id))
    }
    return (
        <NewsPageWrapper>
            <NewsContainer>
            {news.filter(news => news.id <= newsCount).map(n => <Card key={n.id}
                                                                     sx={{maxWidth: 345, marginBottom: '30px'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://radiogdansk.pl/wp-content/uploads/2023/02/332134812_909797986938636_8503707183178604052_n-1024x501.jpg"
                            alt="zelenskii and biden"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {n.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {n.body}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                    <Button disabled={status == 'loading'} sx={{marginLeft: '130px'}} onClick={() => deleteNew(n.id)}
                            variant="text">Delete</Button>
                </Card>
            )}
        </NewsContainer>
            <Button sx={{fontSize: '30px'}} disabled={newsCount > 100} onClick={() => setNewsCount(newsCount+4)} variant="text">More news</Button>
        </NewsPageWrapper>
    );
};


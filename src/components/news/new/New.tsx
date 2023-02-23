import React from 'react';
import {CardActionArea} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import {useTranslation} from "react-i18next";
import {RequestStatusType} from "../../../app/app-reducer";

type NewPropsType = {
    id: number
    title: string
    body: string
    deleteNew: (id: number) => void
    isLoggedIn: boolean
    status: RequestStatusType
}


export const New = ({id,title,body,deleteNew,isLoggedIn,status,...restProps}: NewPropsType) => {
    const {t} = useTranslation()

    return (
        <Card
              sx={{maxWidth: 345, marginBottom: '30px', marginLeft: '10px'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://radiogdansk.pl/wp-content/uploads/2023/02/332134812_909797986938636_8503707183178604052_n-1024x501.jpg"
                    alt="zelenskii and biden"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>

                </CardContent>
            </CardActionArea>
            {isLoggedIn && <Button disabled={status == 'loading'} sx={{marginLeft: '130px'}}
                                   onClick={() => deleteNew(id)}
                                   variant="text">{t('DeleteNew')}</Button>}
        </Card>
    );
};


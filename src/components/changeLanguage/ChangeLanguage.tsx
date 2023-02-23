import React, {useState} from 'react';
import Select from "@mui/material/Select/Select";
import {MenuItem} from "@mui/material";
import {SelectChangeEvent} from "@material-ui/core/Select/SelectInput";
import i18n from "i18next";

export const ChangeLanguage = () => {
    const [language,setLanguage] = useState('en')
    const changeLng = (e: SelectChangeEvent<string>) => {
        setLanguage(e.target.value)
        i18n. changeLanguage(e.target.value)
    }
    return (
        <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={language}
            onChange={changeLng}
            sx={{height: '30px'}}
        >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={'en'}>En</MenuItem>
            <MenuItem value={'ua'}>Українська</MenuItem>
        </Select>
    );
};

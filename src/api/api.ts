import axios, { AxiosResponse } from 'axios'
import {PostType} from "../state/reducers/news-reducer";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

// api
export const api = {
    getNews() {
        return instance.get<ResponseNewsType>('posts');
    },
    deleteNew(id:number) {
        return instance.delete<ResponseNewsType>(`posts/${id}`);
    },
}

export const authAPI = {
    me() {
        return new Promise((resolve,reject) =>{
            setTimeout(() => {return resolve(true)}, 1500)
        })
    },
    login() {
        return new Promise((resolve,reject) =>{
            setTimeout(() => {return resolve(true)}, 1500)
        })
    },
    logout() {
        return new Promise((resolve,reject) =>{
            setTimeout(() => {return resolve(true)}, 1500)
        })
    },
}

// types

export type ResponseNewsType= {
    status: number
    statusText: string
    data: Array<PostType>
}


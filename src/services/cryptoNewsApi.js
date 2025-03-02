import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const cryptoNewsHeaders = {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'bb5579ba60msh02c652cf7c68261p1d8ef5jsnf3af87017786',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}


const createRequest=(url,params) =>({url, headers: cryptoNewsHeaders,params})


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery ({baseUrl}),
    endpoints: (builder) =>({
    getCryptoNews: builder.query({
            query:({ newsCategory, count })=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })



})

export const{useGetCryptoNewsQuery} = cryptoNewsApi;
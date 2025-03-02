import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoapiheaders = {
    'X-RapidAPI-Key': 'bb5579ba60msh02c652cf7c68261p1d8ef5jsnf3af87017786',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}


const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest=(url,params) =>({url, headers: cryptoapiheaders,params})


export const cryptoApi = createApi({
            reducerPath: 'cryptoApi',
            baseQuery: fetchBaseQuery ({baseUrl}),
            endpoints: (builder) =>({
                getCryptos: builder.query({
                    query:(count)=>createRequest(`/coins`,{limit:count}),
                }),
                getCryptosDetails: builder.query({
                    query:(coinID)=>createRequest(`/coin/${coinID}`),
                }),

                getCryptoHistory: builder.query({
                    query: ({ coinID, Timeperiod }) => createRequest(`coin/${coinID}/history?timeperiod=${Timeperiod}`),
                }),

            })

})

export const{useGetCryptosQuery,useGetCryptosDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi

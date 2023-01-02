import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4d5fdb515amsh34d74db809e079ep1408b3jsnb23a68d88dc9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
 

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const creatRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'createApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => creatRequest(`/coins?limit=${count}`)
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => creatRequest(`/coin/${coinId}`)

        }),

        getCryptoHistory: builder.query({
            query: ({coinId, timeperiod}) => creatRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)

        }),
        //
        // Note: To access this endpoint you need premium plan
        // getExchanges: builder.query({
        //     query: () => createRequest('/exchanges'),
        // }),
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery,
    // useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
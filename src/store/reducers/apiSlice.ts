import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (build) => ({
    fetchChars: build.query({
      query: (query) => ({
        url: query && `?name=${query}`,
      }),
    }),
  }),
});

export const { useFetchCharsQuery } = api;

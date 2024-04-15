import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        getUserAccounts: builder.query({
            query: () => `accounts`,
            providesTags: ['accounts'], // tags provide to fetch from server not cache
        }),
        addAccount: builder.mutation({
            query: (amount, id) => ({
                url: "accounts",
                method: "POST",
                body: { amount, id }
            }),
            invalidatesTags: ["accounts"] // which tags do invalidate , and fetch again from server not cache
        }),
        deleteAccount: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["accounts"]
        }),
        updateAccount: builder.mutation({
            query: ({ id, amount }) => ({
                url: `accounts/${id}`,
                method: "PATCH",
                body: { amount }
            }),
            invalidatesTags: ["accounts"]
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserAccountsQuery,
    useAddAccountMutation,
    useDeleteAccountMutation,
    useUpdateAccountMutation
} = adminApi
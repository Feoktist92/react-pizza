import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzasStatus',
    async (params, thunkApi) => {
        const { categoryId, sort, sortMethod, searchValue, currentPage } =
            params;
        const res = await axios.get(
            `https://6517b526582f58d62d351525.mockapi.io/Items?page=${currentPage}&limit=4&${
                categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sort.sortProperty}&order=${
                sortMethod === false ? `desc` : `asc`
            }&${searchValue ? `search=${searchValue}` : ''}`
        );
        return res.data;
    }
);

const initialState = {
    items: [],
    status: 'loading',
};

const cartSlice = createSlice({
    name: 'pizzas',
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'received';
            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    },
});

export const { setItems } = cartSlice.actions;
export const selectPizzas = (state) => state.pizzas;
export const pizzasReducer = cartSlice.reducer;

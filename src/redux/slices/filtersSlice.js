import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    sort: { name: 'популярности', sortProperty: 'rating' },
    sortMethod: false,
    searchValue: '',
    currentPage: 1,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.currentPage = 1;
            state.categoryId = action.payload;
        },
        setSort: (state, action) => {
            state.currentPage = 1;
            state.sort = action.payload;
        },
        setSortMethod: (state, action) => {
            state.sortMethod = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action) => {
            state.sort = action.payload.sort;
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sortMethod = action.payload.sortMethod;
        },
    },
});

export const {
    setCategoryId,
    setSort,
    setSortMethod,
    setSearchValue,
    setCurrentPage,
    setFilters,
} = filtersSlice.actions;
export const selectFilters = (state) => state.filters;
export const filtersReducer = filtersSlice.reducer;

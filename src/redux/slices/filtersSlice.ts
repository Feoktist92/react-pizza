import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FilterSliceState  {
    categoryId: number;
    sort: { name: string; sortProperty: string };
    sortMethod: boolean;
    searchValue: string;
    currentPage: number;
}

const initialState: FilterSliceState = {
    categoryId: 0,
    sort: { name: 'популярности', sortProperty: 'rating' },
    sortMethod: false,
    searchValue: '',
    currentPage: 1
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.currentPage = 1;
            state.categoryId = action.payload;
        },
        setSort: (state, action: PayloadAction<{ name: string; sortProperty: string }>) => {
            state.currentPage = 1;
            state.sort = action.payload;
        },
        setSortMethod: (state, action: PayloadAction<boolean>) => {
            state.sortMethod = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFilters: (state, action: PayloadAction<FilterSliceState>) => {
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
export const selectFilters = (state: RootState) => state.filters;
export const filtersReducer = filtersSlice.reducer;

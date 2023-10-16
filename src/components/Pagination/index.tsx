import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { selectFilters, setCurrentPage } from '../../redux/slices/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Pagination:React.FC = () => {
    const { currentPage } = useSelector(selectFilters);
    const dispatch = useDispatch();

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel='...'
            nextLabel='>'
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={4}
            previousLabel='<'
            renderOnZeroPageCount={null}
            forcePage={currentPage - 1}
        />
    );
};



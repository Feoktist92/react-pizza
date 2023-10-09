import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { selectFilters, setCurrentPage } from '../../redux/slices/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
    const { currentPage } = useSelector(selectFilters);
    const dispatch = useDispatch();

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
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

export default Pagination;

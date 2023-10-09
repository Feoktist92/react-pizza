import React, { useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filtersSlice';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import closeIcon from '../../assets/img/close-icon.svg';

const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const searchValue = useSelector((state) => state.filters.searchValue);
    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 250),
        []
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };
    console.log(searchValue);

    return (
        <div className={styles.root}>
            <input
                name='Search'
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder='Поиск пиццы...'
            />
            <img
                className={styles.searchIcon}
                src={searchIcon}
                alt='иконка-поиска'
            />
            {value && (
                <img
                    onClick={onClickClear}
                    className={styles.closeIcon}
                    src={closeIcon}
                    alt='иконка-закрытия'
                />
            )}
        </div>
    );
};
export default Search;

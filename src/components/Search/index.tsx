import React, { useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchValue } from '../../redux/slices/filtersSlice';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search-icon.svg';
import closeIcon from '../../assets/img/close-icon.svg';

export const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    };

    // eslint-disable-next-line
    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 250),
        []
    );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

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


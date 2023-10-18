import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectFilters,
    setSort,
    setSortMethod,
} from '../redux/slices/filtersSlice';

type ListItem = {
    name: string;
    sortProperty: string;
}

export const list: ListItem[] = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
];

export const Sort:React.FC = React.memo(() => {
    const sortRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const { sort, sortMethod } = useSelector(selectFilters);
    const [isVisiblePopup, setVisiblePopup] = useState(false);

    const onClickSortItem = (obj: ListItem) => {
        dispatch(setSort(obj));
        setVisiblePopup(false);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setVisiblePopup(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () =>
        document.body.removeEventListener('click', handleClickOutside);
    });

    return (
        <div className='sort' ref={sortRef}>
            <div className='sort__label'>
                <svg
                    onClick={() => () => dispatch(setSortMethod(!sortMethod))}
                    transform={!sortMethod ? 'rotate(-180 0 0)' : ''}
                    width='15'
                    height='10'
                    viewBox='0 0 10 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    cursor={'pointer'}
                >
                    <path
                        d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                        fill='#2C2C2C'
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setVisiblePopup(!isVisiblePopup)}>
                    {sort.name}
                </span>
            </div>
            {isVisiblePopup && (
                <div className='sort__popup'>
                    <ul>
                        {list.map((obj, index) => (
                            <li
                                key={index}
                                onClick={() => onClickSortItem(obj)}
                                className={
                                    sort.sortProperty === obj.sortProperty
                                        ? 'active'
                                        : ''
                                }
                            >
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});


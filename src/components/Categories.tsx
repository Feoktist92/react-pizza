import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCategoryId } from '../redux/slices/filtersSlice';
import React, { useCallback } from 'react';

const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

export const Categories: React.FC =  React.memo(() => {
    const { categoryId } = useSelector(selectFilters);
    const dispatch = useDispatch();

    const onChangeCategory = useCallback((index:number) => {
        dispatch(setCategoryId(index));
    }, [ dispatch ]);

    return (
        <div className='categories'>
            <ul>
                {categories.map((name, index) => (
                    <li
                        key={index}
                        onClick={() => onChangeCategory(index)}
                        className={categoryId === index ? 'active' : ''}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
});


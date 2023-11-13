import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFilters, setFilters } from '../redux/slices/filtersSlice';
import { fetchPizzas, selectPizzas } from '../redux/slices/pizzasSlice';
import { useAppDispatch } from '../redux/store';
import qs from 'qs';

import {
    Categories,
    Sort,
    Pizzablock,
    Skeleton,
    Pagination,
    LoadingError,
} from '../components';
import { list } from '../components';
// import Categories from '../components/Categories';
// import Sort, { list } from '../components/Sort';
// import Pizzablock from '../components/Pizzablock';
// import Skeleton from '../components/Skeleton';
// import Pagination from '../components/Pagination';
// import LoadingError from '../components/LoadingError';

const Home: React.FC = () => {
    const { categoryId, sort, sortMethod, searchValue, currentPage } =
        useSelector(selectFilters);
    const { items, status } = useSelector(selectPizzas);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isMounted = useRef(false);

    const getPizzas = async () => {
        dispatch(
            fetchPizzas({
                categoryId,
                sort,
                sortMethod,
                searchValue,
                currentPage,
            })
        );
        window.scrollTo(0, 0);
    };

    // проверка первый ли рендер был и есть ли url-параметры, если первый - url-параметры не парсим, если рендер не первый - парсим url параметры
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                currentPage,
                sortMethod,
                searchValue,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
        // eslint-disable-next-line
    }, [categoryId, sort.sortProperty, currentPage, sortMethod]);

    // Если первый рендер уже был, то проверяем URl-параметры и сохраняем в редаксе
    useEffect(() => {
        if (window.location.search) {
            const params: any = qs.parse(window.location.search.substring(1));
            const sort = list.find(
                (obj) => obj.sortProperty === params.sortProperty
            );

            dispatch(setFilters({ ...params, sort }));
        }
        // eslint-disable-next-line
    }, []);

    // Если был первый рендер, запрашиваем пиццы, проверяя взяли  или  не взяли url-параметры
    useEffect(() => {
        getPizzas();
        // eslint-disable-next-line
    }, [categoryId, sortMethod, currentPage, sort.sortProperty, searchValue]);

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories />
                <Sort />
            </div>
            <h2 className='content__title'>Все пиццы</h2>
            {status === 'error' ? (
                <LoadingError />
            ) : (
                <>
                    <div className='content__items'>
                        {status === 'loading'
                            ? [...new Array(4)].map((_, index) => (
                                  <Skeleton key={index} />
                              ))
                            : items.map((obj: any) => (
                                  <Pizzablock
                                      id={obj.id}
                                      title={obj.title}
                                      price={obj.price}
                                      imageUrl={obj.imageUrl}
                                      sizes={obj.sizes}
                                      types={obj.types}
                                      key={obj.id}
                                  />
                              ))}
                    </div>
                    {items.length === 0 && <LoadingError />}
                </>
            )}

            <Pagination />
        </div>
    );
};
export default Home;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { addProduct, selectCart } from '../redux/slices/cartSlice';
import { setSearchValue } from '../redux/slices/filtersSlice';

const typeName = ['тонкое', 'традиционное'];
const sizeName = [26, 30, 40];

const FullPizza = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector(selectCart);

    const [pizza, setPizza] = useState();
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const { data } = await axios.get(
                    `https://6517b526582f58d62d351525.mockapi.io/Items/${id}`
                );
                setPizza(data);
            } catch (error) {
                alert('К сожалению данная пицца не найдена');
                navigate('/');
            }
        };
        fetchPizza();
        //eslint-disable-next-line
    }, []);

    if (!pizza) {
        return <Loader />;
    }

    pizza.type = typeName[activeType];
    pizza.size = sizeName[activeSize];

    const cartProduct = products.find(
        (obj) =>
            obj.id === id && obj.type === pizza.type && obj.size === pizza.size
    );
    const addedCount = cartProduct ? cartProduct.count : 0;

    const onClickAdd = () => {
        dispatch(addProduct(pizza));
    };
    const clearSearch = () => {
        dispatch(setSearchValue(''));
    };

    return (
        <div className='container'>
            <div className='pizza__wraper'>
                <div className='pizza__block'>
                    <h1>{pizza.title}</h1>
                    <img src={pizza.imageUrl} alt={pizza.title} />
                    <p>{pizza.desc}</p>
                    <div className='pizza-block__selector'>
                        <ul>
                            {pizza.types.map((type, index) => (
                                <li
                                    key={index}
                                    onClick={() => setActiveType(index)}
                                    className={
                                        activeType === index ? 'active' : ''
                                    }
                                >
                                    {typeName[index]}
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {pizza.sizes.map((size, index) => (
                                <li
                                    key={index}
                                    onClick={() => setActiveSize(index)}
                                    className={
                                        activeSize === index ? 'active' : ''
                                    }
                                >
                                    {sizeName[index]} см.
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='pizza-block__bottom'>
                        <div className='pizza-block__price'>
                            от {pizza.price} ₽
                        </div>
                        <div
                            className='button button--outline button--add'
                            onClick={onClickAdd}
                        >
                            <svg
                                width='12'
                                height='12'
                                viewBox='0 0 12 12'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                                    fill='white'
                                />
                            </svg>
                            <span>Добавить</span>
                            {addedCount > 0 && <i>{addedCount}</i>}
                        </div>
                    </div>
                    <div className='cart__bottom-buttons'>
                        <Link
                            to='/'
                            onClick={clearSearch}
                            className='button button--outline  go-back-btn'
                        >
                            <svg
                                width='8'
                                height='14'
                                viewBox='0 0 8 14'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M7 13L1 6.93015L6.86175 1'
                                    stroke='#D3D3D3'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </svg>
                            <span>Вернуться назад</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullPizza;

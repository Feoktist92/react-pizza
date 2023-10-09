import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyPic from '../assets/img/empty-cart.png';

const Cartempty = () => {
    return (
        <>
            <div className='container container--cart'>
                <div className='cart cart--empty'>
                    <h2>
                        Корзина пустая <span className='sad-smile'>😕</span>
                    </h2>
                    <p>
                        Вероятней всего, вы ещё не заказывали пиццу.
                        <br />
                        Для того, чтобы сделать заказ, перейдите на главную
                        страницу.
                    </p>
                    <img src={cartEmptyPic} alt='Empty cart' />
                    <Link to='/' className='button button--black'>
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cartempty;

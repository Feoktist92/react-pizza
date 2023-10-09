import React from 'react';

const LoadingError = () => {
    return (
        <div className='content__error-info'>
            <h2>Ошибка при загрузке данных</h2>
            <p>
                К сожалению, не удалось получить пиццы{' '}
                <span className='sad-smile'>😕</span>. Попробуйте повторить
                попытку позже.
            </p>
        </div>
    );
};
export default LoadingError;

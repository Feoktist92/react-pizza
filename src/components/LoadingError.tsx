import React from 'react';

export const LoadingError:React.FC = () => {
    return (
      
        <div className='content__error-info'>
            <h2>Ошибка при загрузке данных</h2>
            <p>
                К сожалению, не удалось получить пиццы{' '}
                <span className='sad-smile'>😕</span> 
            </p>
        </div>
        
    );
};

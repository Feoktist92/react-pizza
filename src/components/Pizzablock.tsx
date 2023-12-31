import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, selectCart } from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';

const typeName = ['тонкое', 'традиционное'];
const sizeName = [26, 30, 40];
type PizzablockProps = {title:string, imageUrl:string, price: number, sizes: number[], types: number[], id:string }


export const Pizzablock:React.FC<PizzablockProps> = ({ title, imageUrl, price, sizes, types, id }) => {
    const { products } = useSelector(selectCart);
    const dispatch = useDispatch();
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const product = {
        id,
        title,
        price,
        imageUrl,
        type: typeName[activeType],
        size: sizeName[activeSize],
        count: 0
    };

    const cartProduct = products.find(
        (obj: {id: string, type: string,
            size: number}) =>
            obj.id === product.id &&
            obj.type === product.type &&
            obj.size === product.size
    );

    const addedCount = cartProduct ? cartProduct.count : 0;

    const onClickAdd = () => {
        dispatch(addProduct(product));
    };

    return (
        <div className='pizza-block'>
            <Link to={`/pizza/${id}`}>
                <img
                    className='pizza-block__image'
                    src={imageUrl}
                    alt='Pizza'
                />
            </Link>

            <h4 className='pizza-block__title'>{title}</h4>
            <div className='pizza-block__selector'>
                <ul>
                    {types.map((type, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveType(index)}
                            className={activeType === index ? 'active' : ''}
                        >
                            {typeName[index]}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((size, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveSize(index)}
                            className={activeSize === index ? 'active' : ''}
                        >
                            {sizeName[index]} см.
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pizza-block__bottom'>
                <div className='pizza-block__price'>от {price} ₽</div>
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
        </div>
    );
};



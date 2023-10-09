import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCategoryId } from '../redux/slices/filtersSlice';

const Categories = () => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];
    const { categoryId } = useSelector(selectFilters);
    const dispatch = useDispatch();

    return (
        <div className='categories'>
            <ul>
                {categories.map((name, index) => (
                    <li
                        key={index}
                        onClick={() => dispatch(setCategoryId(index))}
                        className={categoryId === index ? 'active' : ''}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Categories;

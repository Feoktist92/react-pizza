import React from "react";
import styles from './Modal.module.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearProducts, selectCart } from "../../redux/slices/cartSlice";



type ModalProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}

export const Modal:React.FC<ModalProps> = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [valueName, setValueName] = React.useState('');
    const [valueTel, setValueTel] = React.useState('');
    const [valueEmail, setValueEmail] = React.useState('');
    const {totalPrice} = useSelector(selectCart)

    const submitForm = () => {
        if(!valueName || !valueTel || !valueEmail) {
            alert('Пожалуйста, заполните все поля');
        } else { 
            alert('Спасибо за заказ! Скоро мы свяжемся с Вами!');
            setOpen(false);
            setValueName('');
            setValueTel('');
            setValueEmail('');
            dispatch(clearProducts());
            navigate('/cart');
        }
    };

    return (
        <div className={`${styles.overlay} ${styles.animated} ${open ? `${styles.show}` : ''}`}>
        <div className={styles.wrap}>
        <div className={styles.modal}> 
            <svg
                height='200'
                viewBox='0 0 200 200'
                width='200'
                onClick={() => setOpen(false)}
            >
                <title />
                <path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
            </svg>
            <h3 className={styles.title}>Заполните форму</h3>
            <div className={styles.form}>
            <input value={valueName} onChange={(e) => setValueName(e.target.value)} type="text" placeholder="Имя"/>
            <input value={valueTel} onChange={(e) => setValueTel(e.target.value)} type="tel" placeholder="Телефон"/>
            <input value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} type="text" placeholder="E-mail" />
            <b>{totalPrice} ₽</b>
            <input type="submit" value='Отправить'  className="button pay-btn" onClick={submitForm}/>
            </div>
        </div>
        </div>
    </div>
    )
}



import bas_tovar from "/img/bas_tovar.png";
import tovar1 from "/img/tovar1.png";
import ser_tovar from "/img/ser_tovar.png";
import { tovar } from '/src/data.js'
import './Card.css'
import {Link} from 'react-router-dom';
import Modal from "../Modal/Modalka";
export default function Card({name,price,id,ostatok}){
    if(ostatok == 0){

    return(
    <div className="tovar">
        <img src={tovar1} alt="" />
        <p className="name">{name}</p>
        <div className="price_logo">
            <p className="price">{price} ₽</p>
            <div className="tovar_logo">
                <img src={ser_tovar} alt="" />
                <img src={bas_tovar} alt="" />
            </div>
            
        </div>
        <Modal/>
    </div>
    )
}
else{
    return(
        <div className="tovar">
            <img src={tovar1} alt="" />
            <p className="name">{name}</p>
            <div className="price_logo">
                <p className="price">{price} ₽</p>
                <div className="tovar_logo">
                    <img src={ser_tovar} alt="" />
                    <img src={bas_tovar} alt="" />
                </div>
                
            </div>
            <Link className="btn_card" to={`${id}`}>Подробнее</Link>
        </div>
        )
}
}
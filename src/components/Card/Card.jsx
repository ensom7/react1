
import bas_tovar from "/img/bas_tovar.png";
import tovar1 from "/img/tovar1.png";
// import tovar2 from "/img/tovar2.png";
// import tovar3 from "/img/tovar3.png";
import ser_tovar from "/img/ser_tovar.png";
import { tovar } from '/src/data.js'
import './Card.css'
import {Link} from 'react-router-dom';
export default function Card({name,price,id}){
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
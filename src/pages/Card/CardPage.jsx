import { useParams } from "react-router-dom";
import {tovar} from '../../data';
import tovar1 from "/img/tovar1.png";
import './CardPage.css'

export default function CardPage (){
    const {id} = useParams();
    const product = tovar.find(product => product.id === parseInt(id))

    return(
        <div className="container">
<div className="tovar_cont">
            <img src={tovar1} alt="" />
            <div className="tovar_info_p">
            <p className="prod_name">{product.name}</p>
            <p className="prod_price">{product.price} ₽</p>
            <p className="prod_desc">{product.desc}</p>
            </div>
            
        </div>
        </div>
        
    )
}
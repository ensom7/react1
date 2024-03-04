// import bas_tovar from "/img/bas_tovar.png";

// import tovar2 from "/img/tovar2.png";
// import tovar3 from "/img/tovar3.png";
// import ser_tovar from "/img/ser_tovar.png";
import Card from '../../components/Card/Card';
import "./Catalog.css";
import {tovar} from '../../data';
export default function Catalog(){
    return(
        <div className="catalog">
            <div className="container">
                <div className="catalog-content">
                  <div className="category">
                    <input type="submit" value="Все"/>
                    <input type="submit" value="Топ"/>
                    <input type="submit" value="Низ"/>
                    <input type="submit" value="Обувь"/>
                  </div>
                  <div className="tovar_content">
                    
                  {tovar.map((tovar,index) =>(
                    <Card key={index} {...tovar}/>
                ))}
                  </div>
                </div>
            </div>
        </div>
    )
}
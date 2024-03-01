import bas_tovar from "/img/bas_tovar.png";
import tovar1 from "/img/tovar1.png";
import tovar2 from "/img/tovar2.png";
import tovar3 from "/img/tovar3.png";
import ser_tovar from "/img/ser_tovar.png";
import "./Catalog.css";
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
                    <div className="tovar">
                        <img src={tovar1} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar2} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar3} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar1} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar2} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar3} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar1} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar2} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tovar">
                        <img src={tovar3} alt="" />
                        <p className="name">Рубашка СВЭГ</p>
                        <div className="price_logo">
                            <p className="price">9999 ₽</p>
                            <div className="tovar_logo">
                                <img src={ser_tovar} alt="" />
                                <img src={bas_tovar} alt="" />
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}
import logo from "/img/logo.svg";
import "./Banner.css";
export default function Banner(){
    return(
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <img src={logo} alt="" />
                    <p>БРЕНД ОДЕЖДЫ</p>
                    <button className="btn">ПЕРЕЙТИ В КАТЕГОРИИ</button>
                </div>
            </div>
        </div>
    )
}
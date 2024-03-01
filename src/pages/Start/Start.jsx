import logo from "/img/logo.svg";
import "./Start.css";
export default function Start(){
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
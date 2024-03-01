import logo from '/img/logo.svg'
import sear from '/img/sear.png'
import ser from '/img/ser.png'
import bas from '/img/bas.png'
import line from '/img/line.png'
import './Header.css'
export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="logo-menu">
                        <img src={logo} alt="" />
                        <ul className="menu">
                        <img src={line} alt="" />
                            <li className="menu_li">
                                <a href="">ГЛАВНАЯ</a>
                            </li>
                            <li className="menu_li">
                                <a href="">КАТАЛОГ</a>
                            </li>
                            <img src={line} alt="" />
                            <li className="menu_li">
                                <a href="">ИНФОРМАЦИЯ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="logos">
                    <img src={sear} alt="" />
                    <img src={bas} alt="" />
                    <img src={ser} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}
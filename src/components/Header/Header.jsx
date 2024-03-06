import logo from '/img/logo.svg'
import sear from '/img/sear.png'
import ser from '/img/ser.png'
import bas from '/img/bas.png'
import line from '/img/line.png'
import './Header.css'
import {Link} from 'react-router-dom'
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
                                <Link to="/">ГЛАВНАЯ</Link>
                            </li>
                            <li className="menu_li">
                                <Link to="/catalog">КАТАЛОГ</Link>
                            </li>
                            <img src={line} alt="" />
                            <li className="menu_li">
                                <Link to="/users">Пользователи</Link>
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
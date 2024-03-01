import logo from '/img/logo.svg'
import sear from '/img/sear.png'
import ser from '/img/ser.png'
import bas from '/img/bas.png'
import line from '/img/line.png'
import './Footer.css'
import {Link} from 'react-router-dom'
export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer-content">
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
                                <Link to="/">ИНФОРМАЦИЯ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info">
                    <p className="info_p">Г. КАЗАНЬ УЛ. БАРИ ГАЛЕЕВА 3А</p>
                    <p className="info_p">+7 927 482-09-82</p>
                    <p className="info_p">KUZMAKOLOM@GMAIL.RU</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
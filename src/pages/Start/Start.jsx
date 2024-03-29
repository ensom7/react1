import logo from "/img/logo.svg";
import "./Start.css";
import Accordion from '../../components/Accordion/Accordion';
import Slider from '../../components/Slider/Slider';
import SliderC from "../../components/Slider/Slider";
export default function Start(){
    return(
        <>
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <img src={logo} alt="" />
                    <p>БРЕНД ОДЕЖДЫ</p>
                    <button className="btn">ПЕРЕЙТИ В КАТЕГОРИИ</button>
                </div>
            </div>
        </div>
        <div className="acc">
            <Accordion title="Какая у вас минимальная сумма заказа?" content="Минимальная сумма заказа на сайте — 3000 ₽" />
            <Accordion title="Соответствует ли размеры указанные на сайте?" content="Нет, товар маломерит, мы указываем те размеры, что заявляет нам производитель. На практике показало, что товар маломерит на размер" />
            <Accordion title="А как можно будет оплатить заказ?" content="После того, как, вам будет выставлен счет на оплату, в течение 3-х дней вам нужно будет оплатить его. Оплатить можете карточкой в онлайн режиме (через личный кабинет) или оплата на расчетный счет компании." />
            <Accordion title="А если в заказе оказался брак, как мне быть?" content="В течении 7 дней вам нужно будет связаться с вашим менеджером и сообщить о браке, приложить фото с дефектом. После этого, вы с менеджером решаете как поступить, вам будет предложено оставить эту сумму в счет вашей следующей покупки, или же, вернуть вам сумму за модель с браком." />
        </div>
        <Slider/>
        </>
    )
}
import { Link } from "react-router-dom";
import "./styles.scss";
import mainLogo from "/src/assets/main-logo.svg";
import lang from "/src/assets/lang.svg";
import vk from "/src/assets/vk-logo.svg";
import tg from "/src/assets/telegram-logo.svg";
import whatsapp from "/src/assets/whatsapp-logo.svg";
import { Typography } from "../typography";

function Footer() {
    return (
        <nav  className="footer">
            <div>
                <Link to="/">
                    <img src={mainLogo} alt="Main logo" className="" />
                </Link>
            </div>
            <div className="footer__nav">
                <Typography type="p1" className="links">Избранное</Typography>
                <Typography type="p1" className="links">Корзина</Typography>
                <Typography type="p1"  className="links">Контакты</Typography>
            </div>
            <div className="footer__terms">
                <Typography type="p1"  className="links">Условия сервиса</Typography>
                <div className="footer__terms-lang">
                    <img src={lang} alt="Main logo" />
                    <Typography type="p2" className="text_element">Каз</Typography>
                    <Typography type="p2" className="text_element">Рус</Typography>
                    <Typography type="p2" className="text_element">Eng</Typography>
                </div>
            </div>
            <div className="footer__media">
                <img src={vk} alt="Main logo" className="footer__media-img-vk" />
                <img src={tg} alt="Main logo" className="footer__media-img" />
                <img src={whatsapp} alt="Main logo" className="footer__media-img" />
            </div>
        </nav>
    );
}

export default Footer;

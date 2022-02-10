import React, {FC} from "react";
import './Footer.css';

 const Footer: FC = () => {
    return (
        <footer className="footer">
            <h4 className="footer__title">Тестовое задание для компании Qtim</h4>
            <div className="footer__container">
                <p className="footer__subtitle">&copy; 2022</p>
                <nav className="footer__navigation">
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-item"><a className="footer_link" href="https://medialeaks.ru/wp-content/uploads/2019/09/imgonline-com-ua-Resize-JHE7IbTFUKx4-600x338.jpg" rel="noreferrer" target="_blank">Ответ на главный вопрос</a></li>
                        <li className="footer__navigation-item"><a className="footer_link" href="https://github.com/timofeus91" rel="noreferrer" target="_blank">Github</a></li>
                        <li className="footer__navigation-item"><a className="footer_link" href="https://t.me/timofeus91" rel="noreferrer" target="_blank">Telegram</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}


export default Footer;

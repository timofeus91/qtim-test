import React, {FC} from "react";
import './AboutMe.css';
import photo from '../../images/photo.jpg';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutMe: FC = () => {
    return (
        <>
            <Header/>
            <section className="about-me">
                <h3 className="about-me__title">Соискатель</h3>
                <div className="about-me__main-container">
                    <div className="about-me__about-container">
                        <div className="about-me__text-container">
                            <h2 className="about-me__name">Тимофей</h2>
                            <h2 className="about-me__profession">Фронтенд-разработчик, 30 лет</h2>
                            <p className="about-me__declaration"> Меня зовут Бережнов Тимофей. Я выпускник курсов
                                Веб-разработки в Яндекс.Практикуме. Мой стек технологий: React, JS, HTML и CSS, Node.js,
                                express.js, Git, Figma, TypeScript. Знаком с MUI и Bootstrap. Сейчас изучаю MobX</p>
                            <p className="about-me__declaration">На данный момент у меня есть около 5 месяцев
                                коммерческого опыта. Я активно изучаю и пишу код с использованием TypeScript. Сейчас
                                работаю part-time как junior fullstack над развлекательным приложением - пишу бэкенд на
                                express.js, изучаю MobX и подключаю его на фронтенде React+TypeScript.
                            </p>
                        </div>
                        <div className="about-me__links">
                            <a rel="noreferrer" target="_blank" className="about-me__link"
                               href="https://www.facebook.com/timofey.berezhnov/">Facebook</a>
                            <a rel="noreferrer" target="_blank" className="about-me__link"
                               href="https://github.com/timofeus91">Github</a>
                            <a rel="noreferrer" target="_blank" className="about-me__link"
                               href="https://t.me/timofeus91">Telegram</a>
                        </div>
                    </div>
                    <img className="about-me__photo" alt="Тимофей" src={photo}/>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AboutMe;

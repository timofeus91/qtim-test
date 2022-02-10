import React, {FC, useState} from "react";
import './MainPageNewsList.css';
import MainPageNewsItem from "../MainPageNewsItem/MainPageNewsItem";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NewsObjectInterface} from "../../utils/interfaces";

interface MainPageNewsListInterface {
    openNews: (id : string) => void
    defaultArray: NewsObjectInterface[],
}

const MainPageNewsList: FC<MainPageNewsListInterface> = ({openNews, defaultArray}) => {

    const [newsCount, setNewsCount] = useState(6);

    const newsCardsRender = defaultArray.slice(0, newsCount)

    const elseShow = newsCardsRender.length === defaultArray.length;

    const showMore = () => {
        setNewsCount(newsCount + 4);
    }

    return (
        <>
            <Header/>
            <section className="main-page-news">
                <div className="main-page-news__container">
                    {newsCardsRender.map(item =>
                        <MainPageNewsItem key={item.id} createdData={item.createdAt} imageSrc={item.image}
                                          openNews={() => {
                                              openNews(item.id)
                                          }}
                                          postPreview={item.preview} postTitle={item.title}/>)}
                </div>
                <button type="button" onClick={showMore} className={elseShow ? "main-page-news__button main-page-news__button_disabled" : "main-page-news__button"}>Show me more</button>
            </section>
            <Footer/>
        </>
    )
};


export default MainPageNewsList;

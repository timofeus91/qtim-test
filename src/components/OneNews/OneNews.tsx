import React, {FC} from "react";
import './OneNews.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {NewsObjectInterface} from "../../utils/interfaces";


const OneNews: FC<NewsObjectInterface> = ({image, title, createdAt, preview, description}) => {


    return (
        <>
            <Header/>
            <div className="single-blog one-news">
                <div className="single-blog-img">
                    <img src={image} alt={`Image for ${title}`}/>
                </div>
                <div className="blog-meta">
                 <span className="date-type">
                      <i className="bi bi-calendar"></i>{createdAt}
                 </span>
                </div>
                <div className="blog-text">
                    <h4>{title}</h4>
                    <p>{preview}</p>
                    <p>{description}</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default OneNews;

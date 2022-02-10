import React, {FC} from "react";
import './MainPageNewsItem.css';
import {Link} from "react-router-dom";


/*2016-03-05 / 09:10:16*/

interface MainPageNewsItemInterface {
    createdData: string,
    imageSrc: string,
    openNews: () => void,
    postPreview: string,
    postTitle: string,
}

const MainPageNewsItem: FC<MainPageNewsItemInterface> = ({createdData, imageSrc, openNews, postPreview, postTitle}) => {
    return (
        <div className="single-blog main-page-news__item">
            <div className="single-blog-img main-page-news__cursor" onClick={openNews}>

                    <img src={imageSrc} alt={`Image for ${postTitle}`}/>

            </div>
            <div className="blog-meta">

                <span className="date-type">
                      <i className="bi bi-calendar"></i>{createdData}
                    </span>
            </div>
            <div className="blog-text main-page-news__cursor">
                <h4 onClick={openNews}>
                    {postTitle}
                </h4>
                <p>
                    {postPreview}
                </p>
            </div>
            <span>
                    <button type="button" onClick={openNews} className="ready-btn main-page-news__cursor ">Read more</button>
                  </span>
        </div>

    )
}


export default MainPageNewsItem;

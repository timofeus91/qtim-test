import React, {FC, useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import './App.css';
import MainPageNewsList from "../MainPageNewsList/MainPageNewsList";
import AboutMe from "../AboutMe/AboutMe";
import {getAllNews, getOneNews} from "../../utils/api";
import OneNews from "../OneNews/OneNews";
import {NewsObjectInterface} from "../../utils/interfaces";
import PageNotFound from "../PageNotFound/PageNotFound";

const App: FC = () => {

    const [oneNewsData, setOneNewsData] = useState<NewsObjectInterface | null>(null);
    const [allNewsData, seAllNewsData] = useState<NewsObjectInterface[] | []>([]);

    const navigate = useNavigate();



    const changeArray = (arr: NewsObjectInterface[]) => {
        return arr.map(item => changeObject(item))
    };

    const changeObject = (obj: NewsObjectInterface) => {
        return {...obj, createdAt: `${obj.createdAt.slice(0, 10)} / ${obj.createdAt.slice(11, 19)}`}
    }

    const openNews = async (id: string) => {
        try {
            const oneNews = await getOneNews(id);

            setOneNewsData(changeObject(oneNews.data));
            navigate('/one-news');

        } catch (err) {
            console.log(`This is error  ${err}`)
        }
    }


    useEffect(() => {
        getAllNews()
            .then((res) => {
                const correctArray = changeArray(res.data);
                seAllNewsData(correctArray);
            })
            .catch(err => console.log(`This is error ${err}`))
    }, []);

    return (
        <Routes>
            <Route path="/"
                   element={
                       <MainPageNewsList
                           defaultArray={allNewsData}
                           openNews={openNews}/>
                   }/>
            <Route path="/about-me"
                   element={
                       <AboutMe/>
                   }/>

            <Route path="/one-news"
                   element={oneNewsData &&
                   <OneNews title={oneNewsData.title} preview={oneNewsData.preview} image={oneNewsData.image}
                            id={oneNewsData.id} createdAt={oneNewsData.createdAt}
                            description={oneNewsData.description}/> || <PageNotFound />}/>
        </Routes>
    );
}

export default App;

import React, {FC} from "react";
import './PageNotFound.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";

const PageNotFound: FC = () => {
    return (
        <>
            <Header/>
            <section className="not-found">
                <h3 className="not-found__title">404</h3>
                <p className="not-found__subtitle">PAge not found</p>
                <Link className="not-found__link" to="/">Back</Link>
            </section>
            <Footer/>

        </>
    )
};

export default PageNotFound;

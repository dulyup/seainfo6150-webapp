import React from "react";
import PropTypes from "prop-types";

import ArticleImage from './ArticleImage'
import style from './ArticleListItem.module.css';

const ArticleListItem = ({title, pubDate, pubYear, author, shortText, url}) => {
    return <li className={style.articleListItem}>
        <div className={style.articleImage}>
            <ArticleImage url={url} title={title}/>
        </div>
        <article className={style.articleContent}>
            <header>
                <h1 className={style.articleTitle}>{title}</h1>
            </header>
            <section>
                <p>
                    {shortText}
                </p>
            </section>
            <footer className={style.authorTime}>
                <address>By: {author}</address>
                <time dateTime={pubDate} className={style.time}>{pubDate}</time>
            </footer>
        </article>
    </li>
};

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    pubYear: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default ArticleListItem;

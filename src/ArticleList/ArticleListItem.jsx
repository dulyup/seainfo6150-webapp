import React from "react";
import PropTypes from "prop-types";

import style from './ArticleListItem.module.css';

const ArticleListItem = ({title, pubDate, pubYear, author, shortText}) => {
    return <li className={style.articleListItem}>
        <article>
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
    shortText: PropTypes.string.isRequired
};

export default ArticleListItem;

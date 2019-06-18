import React from "react";
import PropTypes from "prop-types";

import ArticleListItem from './ArticleListItem';
import style from './ArticleList.module.css';

const ArticleList = ({articles}) => {
    return <ul className={style.articles}>
        {
            // this iterates through the articles JSON and
            // calls your ArticleListItem component for each article object
            Object.values(articles).map(article => {
                return <ArticleListItem
                    key={article.slug}
                    title={article.title}
                    pubDate={article.pubDate}
                    pubYear={article.pubYear}
                    author={article.author}
                    shortText={article.shortText}
                    url={article.image._url}/>;
            })
        }
    </ul>
};

ArticleList.propTypes = {
    articles: PropTypes.object.isRequired
};

export default ArticleList;
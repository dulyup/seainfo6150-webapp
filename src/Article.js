import React from 'react';
import PropTypes from 'prop-types';

const Article = ({title, shortText, pubDate, pubYear, author}) => (
    <article>
        <header>
            <h1>{title}</h1>
            <p>By: {author}</p>
            <time dateTime='2018-11-21 22:57:55'>{pubDate}</time>
        </header>
        <section>
            <p>
                {shortText}
            </p>
        </section>
    </article>
);

Article.propTypes = {
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
};

export default Article;
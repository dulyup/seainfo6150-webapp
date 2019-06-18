import React from "react";

import articles from './data/articles.json';
import ArticleList from './ArticleList/ArticleList';

const App = () => {
    return <div className="App">
        <ArticleList articles={articles}/>
    </div>;
};

export default App;

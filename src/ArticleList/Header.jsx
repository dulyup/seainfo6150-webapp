import React from "react";

import style from './Header.module.css';

const Header = () => {
    return <header className={style.header}>
        <h1>The INFO6150 News</h1>
        <time dateTime={new Date().toDateString()}>{getDateTimeString()}</time>
    </header>
};

function getDateTimeString() {
    const dates = new Date().toDateString().split(' ');
    return dates[0] + ", " + dates[1] + " " + dates[2] + ", " + dates[3];
}

export default Header;
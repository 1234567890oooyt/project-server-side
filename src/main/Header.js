import React from "react";
import logo from "../full_logo.png"
function Header() {
    return (<header>

        <ul className="header_ul">

            <li><a id="lang_button" href="/">UA</a><a id="geo_button" href="/">Львів</a></li>
            <li><img id="logo" src={logo} alt="IT Step University" /></li>
            <li><input id="header_input" type="text" placeholder="Пошук..." /></li>
        </ul>
        <div id="sub_header"><ul>
            <li>Головна</li>
            <li>Університет</li>
            <li>Бакалаврат</li>
            <li>Магістратура</li>
            <li>Студенту</li>
            <li>Абітурієнту</li>
            <li>Наукова діяльність</li>
            <li>Новини</li>
            <li>Події</li>
            <li>Співпраця</li></ul></div>
    </header>

    )
}

export default Header
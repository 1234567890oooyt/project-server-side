import React from "react";
import { Router, Route, } from "react-router-dom";
import AdminPanel from "../main/admin/AdminPanel";
import Header from "../main/Header";
import Description from "../main/Description";
import FormLanding from "../main/FormLanding";
import Footer from "../main/Footer";
import Menu from "../main/admin/Menu";
import LandingBlock from "../main/LandingBlock";
import LandingBlock_2 from "../main/LandingBlock_2";
import News from "../main/News";
import GalaryGrid from "../main/GalaryGrid";
import CallBackEmail from "../main/CallBackEmail";

import landing_building_2_1 from "../landing_2_1.webp"
import landing_building_2_2 from "../landing_2_2.webp"

function ITservices() {
    return (

        <div class="landing_bloc_2">
            <div> <img id="landing_building_2" src={landing_building_2_1} alt="IT Step University" /></div>
            <div className="landing_bloc_2_element">
                <div className="landing_bloc_2_head" >1</div>
                <div className="landing_bloc_2_text"></div>
                <div id="landing_bloc_2_button">Для студентів</div>
            </div>
            <div className="landing_bloc_2_element">
                <div className="landing_bloc_2_head" >2</div>
                <div className="landing_bloc_2_text"> </div>
                <div id="landing_bloc_2_button">Для студентів</div>
            </div>
            <div><img id="landing_building_2" src={landing_building_2_2} alt="IT Step University" /></div>

        </div>
    );
}








export default ITservices;





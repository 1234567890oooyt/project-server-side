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
import { useEffect, useState, } from "react";
import HeaderServises from "../main/HeaderServises";
import landing_building_2_1 from "../landing_2_1.webp"
import landing_building_2_2 from "../landing_2_2.webp"
function ItserviseComponent(props) {
    const {
        title
    }=props
    return (<div className="landing_bloc_2_element" id="chess_debug">
        <div className="servises_block_head" id="chess_debug_head" > {title}</div>
        <div className="servises_block_text" id="chess_debug_div">
            <li>Lorem, ipsum dolor.</li>
            <li>Dolorem, cupiditate est.</li>
            <li>Fugiat, vel aperiam.</li>
            <li>Quo, voluptate repudiandae.</li>
            <li>Numquam, molestias quas?</li>
        </div>
        <div id="servises_block_button_debug">Дізнатися більше</div>
    </div>)
}
function ITservices() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:8080/api/university-info`,)
            .then((res) => res.json())
            .then((response) => {
                setData(response.contacts);
                setIsLoading(false);

            })
            .catch((error) => console.log(error));
    }, []);
    console.log(data)
    return (
        <div className="main">
            <HeaderServises />
            <div class="servises_block">


                <div className="landing_bloc_2_element">
                    <div className="servises_block_head" >{!isLoading && (<div>{data.adress}</div>)}HR - консалтинг</div>
                    <div className="servises_block_text">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Dolorem, cupiditate est.</li>
                        <li>Fugiat, vel aperiam.</li>
                        <li>Quo, voluptate repudiandae.</li>
                        <li>Numquam, molestias quas?</li>
                    </div>
                    <div id="servises_block_button">Дізнатися більше</div>
                </div>
                <div> <img id="landing_building_2" src={landing_building_2_1} alt="IT Step University" /></div>
                <div><img id="landing_building_2" src={landing_building_2_2} alt="IT Step University" /></div>

                <div className="landing_bloc_2_element" id="chess_debug">
                    <div className="servises_block_head" id="chess_debug_head" >Кар'єрний коучинг</div>
                    <div className="servises_block_text" id="chess_debug_div">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Dolorem, cupiditate est.</li>
                        <li>Fugiat, vel aperiam.</li>
                        <li>Quo, voluptate repudiandae.</li>
                        <li>Numquam, molestias quas?</li>
                    </div>
                    <div id="servises_block_button_debug">Дізнатися більше</div>
                </div>
                <div className="landing_bloc_2_element">
                    <div className="servises_block_head" >Самокоучинг</div>
                    <div className="servises_block_text">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Dolorem, cupiditate est.</li>
                        <li>Fugiat, vel aperiam.</li>
                        <li>Quo, voluptate repudiandae.</li>
                        <li>Numquam, molestias quas?</li></div>
                    <div id="servises_block_button">Дізнатися більше</div>
                </div>
                <div><img id="landing_building_2" src={landing_building_2_2} alt="IT Step University" /></div>

            </div>
        </div>
    );
}








export default ITservices;





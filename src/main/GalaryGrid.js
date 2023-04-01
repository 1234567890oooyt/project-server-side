import React from "react";
import image_1 from "../image/grid_image_1.webp"
const images = [1,2,3,4,5,6,7,8,9,10,11,12].fill(image_1);;



const GalaryGrid = () => (

    <div className="galary_grid_container">
        <div id="galary_grid_head">
            Життя IT STEP University</div>
        <div id="galary_grid_description">Слідкуйте за @it_university в Instagram</div>


        <div id="galary_grid">
            {images.map(image => <img src={image} className="galary_grid_element" key={image}></img>)}

    

        </div>

    </div>



);




export default GalaryGrid;


import React from "react";
import { Link } from "react-router-dom";
const LandingBlock = () => (

    <div className="landing_block">

        <div className="container debug">
            <ul >
                <li id="list_header">IT STEP University</li>
                <li id="list_text"> Перший спеціалізований  IT-університет</li>
                <li id="list_botton"><Link to="/it-services"> Дізнатися більше</Link>     </li>
            </ul>
        </div>

    </div>
);

export default LandingBlock;
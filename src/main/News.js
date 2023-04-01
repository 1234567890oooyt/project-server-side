import React from "react";
// import landing_building from "../landing_building.webp"
const News = () => (

    <div className="news_container">
        <div id="news_head">Останні новини</div>
        <div id="news_grid">
            <div id="news_grid_element" className="image_1_import">
                <div id="data">26 гру. 2022 р.1 хв</div>
                <div id="description_container">
                    <div id="description_text">Юрій Рашкевич розповів про ІТ СТЕП Університет</div>
                    <hr />
                    <div className="stats_container">
                        <div className="element-left">👁</div>
                        <div className="element-right">💗</div>
                    </div>


                </div>
            </div>
            <div id="news_grid_element" className="image_2_import">
            <div id="data">26 гру. 2022 р.1 хв</div>
                <div id="description_container">
                    <div id="description_text">Можливості від Sigma Software</div>
                    <hr />
                    <div className="stats_container">
                        <div className="element-left">👁</div>
                        <div className="element-right">💗</div>
                    </div>


                </div>
            </div>
            <div id="news_grid_element" className="image_3_import">
            <div id="data">26 гру. 2022 р.1 хв</div>
                <div id="description_container">
                    <div id="description_text">Посвята у студенти</div>
                    <hr />
                    <div className="stats_container">
                        <div className="element-left">👁</div>
                        <div className="element-right">💗</div>
                    </div>


                </div>
            </div>
        </div>

<div id="all_news_button">Всі новини</div>
    </div>
);

export default News;
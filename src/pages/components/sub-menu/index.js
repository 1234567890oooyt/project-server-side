import { Link, redirect, useLocation } from "react-router-dom";
import './sub-menu.css';
import React from "react";
import HeaderServices from "../../HeaderServises";
function SubMenu () {
 const location = useLocation();
 const service = location.state;
 const { mainPoints } = service;

 if (mainPoints.length == 0) {
  return redirect('/it-services');
 }

 return (<div>
        <HeaderServices />
  <div className="sub-menu_grid">
   {mainPoints.map(el => (<div className="sub-menu_elem">
    <div
     className="sub-menu_image"
     style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/images/${el.imageFileName})` }}></div>
    <div className="sub-menu_text-block">
     {el.title}
     <Link to={`/it-services/articles/${el.articleId}`}>Дізнатися більше</Link>
    </div>
   </div>))}
  </div>
  </div>
 );
}

export default SubMenu;
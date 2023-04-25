import { Link, redirect, useLocation } from "react-router-dom";
import './sub-menu.css';

function SubMenu () {
 const location = useLocation();
 const service = location.state;
 const { mainPoints } = service;

 if (mainPoints.length == 0) {
  return redirect('/it-services');
 }

 return (
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
 );
}

export default SubMenu;
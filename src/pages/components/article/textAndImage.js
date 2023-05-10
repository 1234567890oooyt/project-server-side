/**
 * 
 * @param {Object} props 
 * @param {string} props.value 
 * @param {string} props.imageUrl 
 * @returns 
 */
function TextAndImage (props) {

 return (
  <div className="article_block_2">
   <div className="article_block_2_image" style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
   <div className="article_block_2_text">
    {props.title && <h2 >{props.title}</h2>}
    <p>{props.value}</p>
   </div>
  </div>
 );
}

export default TextAndImage;
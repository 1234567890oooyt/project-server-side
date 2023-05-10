/**
 * 
 * @param {Object} props 
 * @param {Array<string>} props.value 
 * @returns 
 */
function Text3Columns (props) {

 return (
  <div className="article_block_3">
   {props.value.map(text => (<div className="info_element">{text}</div>))}
  </div>
 );
}

export default Text3Columns;
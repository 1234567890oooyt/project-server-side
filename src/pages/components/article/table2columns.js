/**
 * 
 * @param {Object} props 
 * @param {Array<Array<string>>} props.value 
 * @param {string} props.title 
 * @returns 
 */
function Table2Columns (props) {

 return (
  <div className="article_block_4">
   <h1>{props.title}</h1>
   <div class="grid-container">
    {props.value.map((row, i) => {
     return row.map(elem => (<div className={"item " + (i % 2 ? "odd" : "")}>{elem}</div>));
    })}
   </div>
  </div>
 );
}

export default Table2Columns;
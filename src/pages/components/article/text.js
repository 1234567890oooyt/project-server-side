import './text.css';
/**
 * 
 * @param {Object} props 
 * @param {string} props.value 
 * @returns 
 */
function Text (props) {

    return (
        <div className="article_block_1">
            {props.title && <h2 >{props.title}</h2>}
            <p>{props.value}</p>
        </div>
    );
}

export default Text;
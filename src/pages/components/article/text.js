import './text.css';
/**
 * 
 * @param {Object} props 
 * @param {string} props.value 
 * @returns 
 */
function Text (props) {

    return (
        <div className='article_block-text'>{props.value}</div>
    );
}

export default Text;
import './text.css';
/**
 * 
 * @param {Object} props 
 * @param {string} props.value 
 * @returns 
 */
function Text(props) {

    return (
        <div className="article-block-text bg-image">
          
            <div className="container-it-text">
                <div className='article_block-text'>{props.value}</div>
            </div>
        </div>
    );
}

export default Text;
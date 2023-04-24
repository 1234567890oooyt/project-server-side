import './text.css';
import Footer from '../../main/Footer';
/**
 * 
 * @param {Object} props 
 * @param {string} props.value 
 * @returns 
 */
function Text(props) {

    return (

    
        <div className="article-block-text bg-image">

            {/* <div className='im'></div> */}
            <div className="container-it-text">
                <div className='it-text'>{props.value}</div>
                <div className='button'>Більше</div>
            </div>


        </div>
     


    );
}

export default Text;
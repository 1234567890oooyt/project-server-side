import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backEndAPI } from "../../services/backend";
import Loader from "../components/loader";
import Text from "./text";


function Article (props) {
 const { articleId } = useParams();
 const [isLoading, setIsLoading] = useState(true);
 const [title, setTitle] = useState('');
 /**
  * @type [[{ type: 'text', value?: string}], function]
  */
 const [blocks, setBlocks] = useState([]);

 useEffect(() => {
  backEndAPI.getArticle(articleId)
   .then(data => {
    setTitle(data.title);
    setBlocks(data.blocks);
    setIsLoading(false);
   });
 }, []);


 if (isLoading) {
  return (<Loader />);
 }
 return (
  <div>
   <h4>{title}</h4>
   {
    blocks.map(block => {
     switch (block.type) {
      case 'text': {
       return <Text value={block.value} />;
      }
      default: {
       return null;
      }
     }
    })
   }
  </div>
 );
}

export default Article;
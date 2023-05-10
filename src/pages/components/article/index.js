import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backEndAPI } from "../../../services/backend";
import Loader from "../loader";
import CallForm from "../../../main/CallForm";
import Text from "./text";
import './article.css';
import './test.css';
import TextAndImage from "./textAndImage";
import Text3Columns from "./text3Columns";
import Table2Columns from "./table2columns";

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
    <div className="article" >
      <div style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/images/file.gif)`, backgroundSize: 'cover', }}>
        <h1 className="article_h">{title}</h1>
        <button className="article_more_info ">Дізнатися більше</button>
      </div>
      <div id="under_line"></div>
      <div className="square">
        {
          blocks.map(block => {
            switch (block.type) {
              case 'text': {
                return <>
                  <Text value={block.value} title={block.title} />
                  <div className="black"></div>
                </>;
              }
              case 'textAndImage': {
                return <>
                  <TextAndImage title={block.title} value={block.value} imageFileName={block.imageFileName} />
                  <div className="black"></div>
                </>;
              }
              case 'text3Columns': {
                return <>
                  <Text3Columns value={block.value} />
                  <div className="black"></div>
                </>;
              }
              case 'table2Columns': {
                return <>
                  <Table2Columns title={block.title} value={block.value} />
                  <div className="black"></div>
                </>;
              }
              default: {
                return null;
              }
            }
          })
        }

        {/* <h1 className="v2_article_h">Кар'єрний коучинг</h1>
          <div class="v2_grid-container">
            <div class="box"><div className="box_num">1</div>
              <div className="box_text">Lorem, ipsum dolor.</div>
              <div className="box_image"></div>
              <div className="box_more_info">Більше</div>
            </div>
            <div class="box"><div className="box_num">2</div>
              <div className="box_text">Lorem, ipsum dolor.</div>
              <div className="box_image"></div>
              <div className="box_more_info">Більше</div>
            </div>

            <div class="box"><div className="box_num">3</div>
              <div className="box_text">Lorem, ipsum dolor.</div>
              <div className="box_image"></div>
              <div className="box_more_info">Більше</div>
            </div>
          </div> */}
        <CallForm />

      </div>
    </div>
  );
}

export default Article;
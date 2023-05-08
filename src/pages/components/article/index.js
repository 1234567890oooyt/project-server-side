import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backEndAPI } from "../../../services/backend";
import Loader from "../loader";
import CallForm from "../../../main/CallForm";
import Text from "./text";
import './article.css';
import './test.css'

function Article(props) {
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
      {/* <h4 className="article-title">{title}</h4> */}
      <div id="under_line"></div>
      <div className="square">
        {/* {
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
        } */}

        <div>


          {/* 
          
          <h1 className="article_h">Створи свій особистий бренд</h1>
          <button className="article_more_info ">Дізнатися більше</button>
          <div className="article_block_1"><h2 >Що таке особистий бренд</h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quia non repellat consequuntur, sequi temporibus ipsam at pariatur quas aliquam omnis est error sit! Commodi et consequuntur exercitationem eveniet voluptatem nobis officia provident rem quibusdam sapiente fugit labore, aut ut excepturi atque quia, a nam! Molestiae quibusdam autem blanditiis quia nemo quisquam possimus corporis at, facere similique nam fuga rerum iste fugiat qui temporibus, repellat nisi voluptate quo. Dolore quaerat quidem, facere nisi nihil ut quasi error quibusdam repellendus ad consectetur, alias tempore nemo eaque molestiae perspiciatis voluptatum quisquam? Molestiae mollitia earum, deleniti suscipit libero atque ratione cupiditate minus officia harum, dolores et delectus numquam consequatur placeat maxime, doloribus aspernatur nostrum! At repellendus voluptas quos autem, hic alias voluptates minima voluptatem voluptatibus veritatis similique! Ipsam veniam eaque voluptatibus earum! Alias earum sed repudiandae amet autem, minima, doloremque, culpa laborum porro dolore saepe voluptatum! Vel provident ad laborum deleniti sunt esse reiciendis quam harum debitis labore suscipit quas hic ipsum beatae iste iure commodi, dicta dolore voluptates nostrum consequuntur laudantium laboriosam. Optio sapiente vero quis illo, animi soluta doloremque porro perferendis qui. Fuga id labore sit quas, odio nemo ex dolores magni vel aut repellat voluptas expedita sequi doloremque quia eveniet.
          </div>
          <div className="black"></div>

          <div className="article_block_2">
            <div className="article_block_2_text"> <h2>Як працює особистий бренд IT-спеціаліста</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa architecto libero laborum exercitationem quibusdam molestiae natus autem a cupiditate earum suscipit, eum tenetur qui eos, dolores nostrum vel reprehenderit ducimus ad! Ipsa voluptatem nam similique magni modi odit minus cupiditate ipsam, recusandae delectus saepe commodi, laboriosam dolorem tenetur. Ab dicta inventore, iste illo odit unde consectetur optio obcaecati veritatis officiis itaque quis error aliquam officia magnam quas laudantium nostrum ad quaerat provident iusto labore, laborum commodi fuga. Accusamus eveniet facilis est vel, omnis magni ipsa veritatis cumque suscipit aperiam dignissimos deserunt dolores, minus reprehenderit sapiente quod at reiciendis repudiandae! Recusandae consectetur quasi eius eum repellat amet. Reprehenderit alias temporibus a, impedit atque sint est ullam, cumque ea, eos animi at ex consequuntur. Quae quisquam rerum saepe voluptatibus. Adipisci, similique velit quam debitis voluptatum porro nemo optio culpa perferendis repellat, quis fugiat ab id! Repellendus necessitatibus iure pariatur veniam at?</p>
              <button className="article_block_2_more_info ">Дізнатися більше</button>
            </div>
          </div>
          <div className="black"></div>
          <div className="article_block_3">
            <div className="info_element">Анастасія Стеценко
              Employee Advocacy Lead у DataArt, консультантка з особистого бренду та публічних виступів</div>
            <div className="info_element">Репутація будь-якого спеціаліста завжди була важливою для просування кар’єрною драбиною, але сьогодні особистий бренд — це те, що може суттєво прискорити ваш професійний успіх. </div>
            <div className="info_element">Кому й навіщо потрібний особистий бренд
             Особистий бренд формує бажаний образ для аудиторії, дає можливість просунути якусь ідею і здебільшого монетизувати її.</div>
          </div>
          <div className="article_block_4">
            <h1>4 поради для зміцнення особистого бренду</h1>
          <div class="grid-container">
  <div class="item item-1">Контент 1</div>
  <div class="item item-2">Контент 2</div>
  <div class="item item-3">Контент 3</div>
  <div class="item item-4">Контент 4</div>
</div>
          </div> */}


          <h1 className="v2_article_h">Кар'єрний коучинг</h1>
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
          </div>


          <CallForm />
          



        </div>

       


      </div>
    </div>
  );
}

export default Article;
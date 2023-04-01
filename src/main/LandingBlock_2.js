import React from "react";
import landing_building_2_1 from "../landing_2_1.webp"
import landing_building_2_2 from "../landing_2_2.webp"
const LandingBlock_2 = () => (

   <div class="landing_bloc_2">
      <div> <img id="landing_building_2" src={landing_building_2_1} alt="IT Step University" /></div>
      <div className="landing_bloc_2_element">
         <div className="landing_bloc_2_head" >Студентське життя</div>
         <div className="landing_bloc_2_text">Студентське життя - це не лише сесії, заліки, екзамени та недоспані ночі!

            Студенти ІТ СТЕП Університету ще й під час навчання подорожують! Адже навчально-ознайомчі поїздки - це можливість побачити світ, попрактикувати свої знання з іноземної мови та чудово провести час з однодумцями!
            <p></p>
            А ще студентство не залишається осторонь допомоги та благадійності. Щорічно бере участь в акції "Миколай про тебе не забуде" та здійснює мрії діток зі складними життєвими обставинами.
            <p></p>

            А поміж насичені навчанням дні студенти навіть встигають волонтерити у ІТ-компаніях!</div>
         <div id="landing_bloc_2_button">Для студентів</div>
      </div>
      <div className="landing_bloc_2_element">
         <div className="landing_bloc_2_head" >Вступ до університету</div>
         <div className="landing_bloc_2_text">Ми створили гнучкі освітні програми, які вже сьогодні інтегрують в себе нові ідеї, нові технології, нові напрямки, що виникають надзвичайно швидко в галузі ІТ.
         <p></p>
Наші студенти вже сьогодні разом з фахівцями-практиками працюють з технологіями, які тільки з’явились на ринку, поєднуючи навчання в університеті з роботою над реальними проектами в ІТ компаніях (дуальна освіта).
<p></p>
Великій набір спеціалізованих вибіркових дисциплін в рамках освітньої програми дає можливість кожному знайти свої вподобання і вибрати свій напрямок розвитку у сфері ІТ. </div>
         <div id="landing_bloc_2_button">Для студентів</div>
      </div>
      <div><img id="landing_building_2" src={landing_building_2_2} alt="IT Step University" /></div>

   </div>
);

export default LandingBlock_2;
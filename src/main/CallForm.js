import React from "react";
function CallForm() {
    return (
        <div className="callform">
            <div className="callform_1">
                1

            </div>

            <div className="callform_2">
                <div className="call_form_container">
                    <ul><li className="call_form_line"><input className="form_name input_style" type="text" placeholder="Ім'я" /><input className="form_email input_style" type="text" placeholder="Ел.пошта" /></li>
                        <li className="call_form_line"><input className="form_code_number input_style" type="text" placeholder="UA +380" /><input className="form_number input_style" type="text" placeholder="Телефон" /></li>
                        <li className="call_form_line"><input className="form_date input_style" type="text" placeholder="Дата і час консультації ( за бажанням )" /></li>
                        <li className="call_form_line"><textarea className="form_question input_style" type="text" placeholder="Питання" ></textarea></li>
                    </ul>
                    <button className="form_send">Надіслати</button>
                </div>
            </div>


        </div>
    )
}

export default CallForm
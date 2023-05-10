import React, { useRef } from "react";
import { backEndAPI } from "../services/backend";
function CallForm () {

    const emailRef = useRef();
    const nameRef = useRef();
    const phoneNumberCodeRef = useRef();
    const phoneNumberRef = useRef();
    const requestedDateRef = useRef();
    const questionsRef = useRef();

    const sendRequest = async () => {
        backEndAPI.createRequest({
            email: emailRef.current.value,
            name: nameRef.current.value,
            phoneNumber: phoneNumberCodeRef.current.value + phoneNumberRef.current.value,
            requestedDate: requestedDateRef.current.value,
            questions: questionsRef.current.value,
        });
    };
    return (
        <div className="callform" style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/images/comp.png)`,  }}>
            <div className="callform_1">
                1

            </div>

            <div className="callform_2">
                <div className="call_form_container">
                    <ul>
                        <li className="call_form_line">
                            <input ref={nameRef} className="form_name input_style" type="text" placeholder="Ім'я" />
                            <input ref={emailRef} className="form_email input_style" type="email" placeholder="Ел.пошта" />
                        </li>
                        <li className="call_form_line">
                            <input className="form_code_number input_style" type="text" placeholder="UA +380" />
                            <input className="form_number input_style" type="text" placeholder="Телефон" />
                        </li>
                        <li className="call_form_line">
                            <input ref={requestedDateRef} className="form_date input_style" type="date" placeholder="Дата і час консультації ( за бажанням )" />
                        </li>
                        <li className="call_form_line">
                            <textarea ref={questionsRef} className="form_question input_style" type="text" placeholder="Питання" ></textarea>
                        </li>
                    </ul>
                    <button className="form_send" onClick={sendRequest}>Надіслати</button>
                </div>
            </div>


        </div>
    );
}

export default CallForm;
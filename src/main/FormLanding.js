import React from "react";
function FormLanding(){
    return(
        <form className="form_landing">
            <div>Call form</div>
            <input className="name_input" type="text"  placeholder=" Your name" />
            <input className="phone_input"  type="text"  placeholder=" Phone number" />
            <button id="submit_button" type="submit">Send</button>
            
        </form>

    )
}
export default FormLanding
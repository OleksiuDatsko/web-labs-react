import React from "react";
import "./FindForm.css";
import Button from "../../Button/Button";

const FindForm = (props) => {
    return (
        <div className="find_form">
            <input type="text" className="text_field" placeholder={props.placeholder}></input>
            <Button text="Find" styleType="outline" size="small" noneBorder />
        </div>
    );
};

export default FindForm;
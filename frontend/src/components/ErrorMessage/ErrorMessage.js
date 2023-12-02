import React from "react";
import "./ErrorMessage.css"
import Button from "../Button/Button";

const ErrorMessage = (props) => {
    return (
        <div className="error_window">
            <p>
                <b>Oh snap!</b>
                {"  "}Change a few things up and try submitting again.
            </p>
            <Button size="small" styleType="outline" onClick={props.closeWindow}>X</Button>
        </div>
    )
}

export default ErrorMessage
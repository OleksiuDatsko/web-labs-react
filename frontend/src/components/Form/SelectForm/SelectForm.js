import React from "react";
import "./SelectForm.css";
import Button from "../../Button/Button";

const SelectForm = (props) => {
    console.log(props.options)

    return (
        <div className="select_form">
            <p className="select_form__lable">
                {props.label}
            </p>
            <select className="select_form__select">
                {props.options.map(({key, value, label }) => {
                    return <option key={key} value={value} >{label}</option>
                })}
            </select>
            <Button text="Apply" styleType="outline" size="small" noneBorder />
        </div>
    );
};

export default SelectForm;
import React from "react";
import "./SelectForm.css";

const SelectComponent = (props) => {
    return (
        <select className="select_form__select" onChange={(event) => { props.setSelectedOption(event.target.value) }}>
            {props.options.map(({ key, value, label }) => {
                return <option key={key} value={value} >{label}</option>
            })}
        </select>
    );
};

export default SelectComponent

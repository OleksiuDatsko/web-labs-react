import React, { useState } from "react";
import "./SelectForm.css";
import SelectComponent from "./SelectComponent";
import Button from "../../Button/Button";

const SelectForm = (props) => {
    let [selectedOption, setSelectedOption] = useState("")

    const handleSelectChange = (option) => {
        props.setSortBy(option);
    };


    return (
        <div className="select_form">
            <p className="select_form__lable">
                {props.label}
            </p>
            <SelectComponent options={props.options} setSelectedOption={setSelectedOption}/>
            <Button text="Apply" styleType="outline" size="small" noneBorder onClick={() => { handleSelectChange(selectedOption) }} />
        </div>
    );
};

export default SelectForm;
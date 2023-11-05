import React, { useState } from "react";
import "./FindForm.css";
import Button from "../../Button/Button";
import SelectComponent from "../SelectForm/SelectComponent";

const FindForm = (props) => {
    let [selectedOption, setSelectedOption] = useState("name");
    let [findProp, setFindProp] = useState("")

    const handleFindButton = (option, prop) => {
        console.log(option, prop)
        props.setFindBy(option)
        props.setHotelsProp(prop)
    }

    return (
        <div className="find_form">
            <input type="text" className="text_field" placeholder="Find by ..." onChange={(event) => {setFindProp(event.target.value)}}></input>
            <SelectComponent options={props.options} setSelectedOption={setSelectedOption}/>
            <Button text="Find" styleType="outline" size="small" noneBorder onClick={() => {handleFindButton(selectedOption, findProp)}} />
        </div>
    );
}

export default FindForm;
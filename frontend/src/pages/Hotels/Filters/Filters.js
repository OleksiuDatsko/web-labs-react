import React from "react";

import "./Filters.css"
import FindForm from "../../../components/Form/FindForm/FindForm";
import SelectForm from "../../../components/Form/SelectForm/SelectForm";

const options = [
    { key: 1, value: 'name', label: 'Name' },
    { key: 2, value: 'price', label: 'Price' },
    { key: 3, value: 'total_rooms', label: 'Total rooms' },
]


const Filters = () => {
    return (
        <section className="conteiner filter">
            <SelectForm options={options} label="Sort by:" />
            <FindForm placeholder="Hotel name" />
        </section>
    );
};

export default Filters;
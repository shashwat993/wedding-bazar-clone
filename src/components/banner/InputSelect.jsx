
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo({ searchItem, searchPlaceHolder }) {
    const [selectedCity, setSelectedCity] = useState(null);


    return (
        <div className="card flex justify-content-center px-4">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={searchItem} optionLabel="name" 
                placeholder={searchPlaceHolder} className="w-full md:w-full " />
        </div>
    )
}
        
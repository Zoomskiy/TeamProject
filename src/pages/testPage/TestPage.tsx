import React from "react";
import SuperInputText from "../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../common/c3-SuperCheckbox/SuperCheckbox";


const TestPage = () => {
    return (
        <>
            <SuperInputText/>
            <SuperButton children={"TEST"} />
            <SuperCheckbox children={"TEST"}/>
        </>
    )
}

export default TestPage
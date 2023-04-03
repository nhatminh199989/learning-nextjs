import { useState } from "react";

export default function useToggle(defaultValue) {
    const [val, setVal] = useState(defaultValue);
    function toggleValue(val) {
        setVal(currentValue => 
            typeof val === "boolean" ? val : !currentValue    
        )
    }
    return [val, toggleValue]
}
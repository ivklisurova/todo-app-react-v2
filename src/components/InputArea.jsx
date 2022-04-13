import React, {useState} from "react";

function InputArea(props) {
    const [item, setItem] = useState("");

    function handleChange(event) {
        const newItem = event.target.value;

        setItem(newItem);
    }

    return (
        <div className="form">
            <input type="text" onChange={handleChange} name="task" value={item}/>
            <button type="submit" onClick={() => {
                props.onAdd(item);
                setItem("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );

}


export default InputArea;

import React from "react";

function InputArea(props) {
    return (
        <div className="form">
            <input type="text" onChange={props.isChanged} name="task" value={props.itemValue}/>
            <button type="submit" onClick={props.isClicked}>
                <span>Add</span>
            </button>
        </div>
    );

}


export default InputArea;

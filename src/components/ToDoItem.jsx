import React, {useState} from "react";

function ToDoItem(props) {


    return <div onClick={() => {
        props.isClicked(props.id)
    }
    }>

        <li>{props.text}</li>

    </div>;

}

export default ToDoItem;

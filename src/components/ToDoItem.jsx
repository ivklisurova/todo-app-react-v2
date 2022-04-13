import React, {useState} from "react";

function ToDoItem(props) {

    const [isDone, setIsDone] = useState(false)

    function handleClickText() {
        if (isDone) {
            setIsDone(false);
        } else {
            setIsDone(true);
        }

    }


    return <div>

        <li onClick={handleClickText}
            style={isDone ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.text}</li>

    </div>;

}

export default ToDoItem;

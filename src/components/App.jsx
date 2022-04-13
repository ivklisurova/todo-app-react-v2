import React, {useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    // const listItems = list.map((item, index) => <li key={index}>{item}</li>);

    function handleChange(event) {
        const newItem = event.target.value;

        setItem(newItem);
    }

    function handleClick() {
        !(item.length === 0 || !item.trim()) &&
        setList((prevItems) => {
            return [...prevItems, item];
        });

        setItem("");
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} name="task" value={item}/>
                <button type="submit" onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {list.map((item, index) => <ToDoItem text={item}/>)}
                </ul>
            </div>
        </div>
    );
}

export default App;

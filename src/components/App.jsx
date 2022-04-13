import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");


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

    function deleteItem(id) {
        setList(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        })

    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea isClicked={handleClick} isChanged={handleChange} itemValue={item}/>
            <div>
                <ul>
                    {list.map((item, index) => <ToDoItem key={index} id={index} text={item} isClicked={deleteItem}/>)}
                </ul>
            </div>
        </div>
    );
}

export default App;

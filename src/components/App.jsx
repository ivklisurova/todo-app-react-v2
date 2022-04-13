import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [list, setList] = useState([]);


    function handleClick(item) {

        !(item.length === 0 || !item.trim()) &&
        setList((prevItems) => {
            return [...prevItems, item];
        });


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
            <InputArea onAdd={handleClick}/>
            <div>
                <ul>
                    {list.map((item, index) => <ToDoItem key={index} id={index} text={item} isClicked={deleteItem}/>)}
                </ul>
            </div>
        </div>
    );
}

export default App;

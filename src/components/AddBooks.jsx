import React, { useContext, useState } from 'react'
import { Book } from '../context/BookProducts';
import { useNavigate } from 'react-router-dom';


const AddBooks = () => {
    const {addTodo} = useContext(Book)
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const navigate = useNavigate();
    const handlClick = () => {
        if(!name.trim() || !author.trim() || !img.trim()){
            return;
        };
        let newObj = {
            todoName: name,
            todoAuthor: author,
            todoImg: img,
        };

        addTodo(newObj);
        setName("");
        setAuthor("");
        setImg("");
        navigate("/product")
    };

    
  return (
    <div>
        <h1>Add Book</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" />
        <input value={img} onChange={(e) => setImg(e.target.value)} type="text" />
        <button onClick={handlClick}>Add Products</button>
    </div>
  )
}

export default AddBooks

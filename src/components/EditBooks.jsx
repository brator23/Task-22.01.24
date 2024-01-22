import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../helpers/const';

const EditBooks = () => {
  const {id} = useParams();
    const navigete = useNavigate();
    const [todoDetail, setTodoDetail] = useState("")
    const [title, setTitle] = useState(todoDetail.todoName);
    const [subtitle, setSubTitle] = useState(todoDetail.todoAuthor);
    const [number, setNumber] = useState(todoDetail.todoImg);
    useEffect(() => {
      getTodo(id)
    }, [])
    const getTodo = async (id) => {
      const {data} = await axios(`${API}/${id}`)
      setTodoDetail(data)
  };
  useEffect(() => {
    if(todoDetail){
        setTitle(todoDetail.todoName)
        setSubTitle(todoDetail.todoAuthor)
        setNumber(todoDetail.todoImg)
    }
}, [todoDetail])

console.log(todoDetail);
const hendleClick = () => {
    if (!title && !subtitle && !number){
        return;
    };
    let newTodo = {
        todoName: title,
        todoAuthor: subtitle,
        todoImg: number,
    };
    editTodo(id, newTodo)
    navigete("/product")
};
const editTodo = async (id, newTodo) => {
    await axios.patch(`${API}/${id}`, newTodo);
} 
  return (
    <div>
      <input value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
      <input value={subtitle} type="text" onChange={(e) => setSubTitle(e.target.value)} />
      <input value={number} type="text" onChange={(e) => setNumber(e.target.value)} />
      <button onClick={hendleClick}>Save</button>
    </div>
  )
}

export default EditBooks

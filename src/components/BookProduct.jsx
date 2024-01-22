import axios from 'axios'
import React from 'react'
import { API } from '../helpers/const'
import { Link } from 'react-router-dom'

const BookProduct = ({todoName, todoAuthor, todoImg, id, getTodo}) => {
    const deleteTodo = async (id) => {
        await axios.delete(`${API}/${id}`)
        getTodo();
    }
  return (
    <div>
      <img src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h4>{todoAuthor}</h4>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <Link to={`/edit/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  )
}

export default BookProduct

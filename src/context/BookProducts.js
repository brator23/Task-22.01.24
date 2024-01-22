import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { API } from '../helpers/const';
export const Book = createContext();

const BookProducts = ({children}) => {
    const [todos, setTodos] = useState([])
    const addTodo = async (todo) => {
        await axios.post(API, todo)
    };
    const getTodo = async () => {
        try {
            const {data} = await axios(API)
            setTodos(data)
            return data;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if(!todos){
            setTodos(getTodo)
        }
    }, [])

    const virus = {
        addTodo,
        getTodo,
        todos,
    }
  return (
    <Book.Provider value={virus}>
      {children}
    </Book.Provider>
  )
}

export default BookProducts

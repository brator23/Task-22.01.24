
import BookProduct from './BookProduct'
import { useContext, useEffect } from 'react'
import { Book } from '../context/BookProducts'

const BookProductList = () => {
    const {getTodo, todos} = useContext(Book);
    useEffect(() => {
        getTodo();
    }, [])
  return (
    <div>
      {todos.map((elem) => (
        <BookProduct key={elem.id} {...elem} getTodo={getTodo} />
      ))}
    </div>
  )
}

export default BookProductList

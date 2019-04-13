import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../css/main.css';
const App = () => (
  <div className="main">
    <span className="logo">
      Redux Todo
      <hr></hr>
    </span>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App

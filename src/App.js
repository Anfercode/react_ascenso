// import logo from './logo.svg';
import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <>
      {/* <TodoCounter /> */}
      <h2> Has completado 2 de 3 TODOs </h2>
      {/* <TodoSearch /> */}
      <input placeholder="Cebolla"/>
      {/* <TodoList> */}
      {/* {todos.map(todo => (<TodoItem />))} */}
      {/* </TodoList> */}
      {/* <CreateTodoButton /> */}
      <button></button>
    </>
  )
}

export default App;

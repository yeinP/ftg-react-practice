import { useState } from "react";

function App(){
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDo("");
    setToDos(currentArray => [toDo, ...currentArray])
    
  }
  return(
    <div>
      <h1>ToDo List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="ToDo write" onChange={onChange} value={toDo}/>
        <button>Add To Do</button>
      </form>
      <hr/>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </div>
  )
}
export default App;

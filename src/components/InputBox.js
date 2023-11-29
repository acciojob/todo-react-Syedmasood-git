import React,{useState} from 'react'

const Inputbox = () => {

    const [todo,setTodo]=useState("")
    const [todoList,setTodoList]=useState([])


    console.log("todo",todo);
    function handleSubmit(e){
        e.preventDefault()
        setTodoList([...todoList,todo])
        setTodo("")
    }

    function handelDelete(index){
        setTodoList(todoList.filter((value,position)=>position !== index))
    }
    
  return (
    <div>
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>setTodo(e.target.value)} value={todo}>
            </input>
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
        {todoList.map((item,index)=>(
            <div>
                    <li key={index}>
                        <p>{item}</p>
                        <button onClick={()=>handelDelete(index)}></button>
                    </li>
                    </div>
            ))}
        </ul>
    </div>
  )
}

export default Inputbox
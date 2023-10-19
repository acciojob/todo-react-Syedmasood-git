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
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>setTodo(e.target.value)} value={todo}>
            </input>
            <button type='submit'>Add Todo</button>
        </form>
        {
            todoList.map((item,index)=>(
                <div>
                    <li>
                        {item}
                        <button onClick={()=>handelDelete(index)}>Delete</button>
                    </li>
                </div>
            ))
        }
    </div>
  )
}

export default Inputbox
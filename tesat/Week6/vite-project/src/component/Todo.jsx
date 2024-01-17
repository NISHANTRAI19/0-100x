

function Todo ({todos}){
      
console.log(todos)
    return (<div>
    {todos.map((elem)=>{
        return(
        <div key={elem.id}>
            <div style={{color:"white"}} >{elem.description}</div>
            <div >{elem.title}</div>

        </div>
   ) })}
    </div>)
}

export default Todo;
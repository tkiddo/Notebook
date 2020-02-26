import React,{useState} from 'react'

function Example(props) {
    const [count,setCount] = useState(0)
    const [obj,setObj] = useState({name:'a'})
    return (
        <>
            <div>{count}</div>
            <button onClick={()=>{setCount(count+1)}}>add</button>
            <div>{obj.name}</div>
            <button onClick={()=>{setObj({...obj,name:'b'})}}>update</button>
        </>
        
    )
}

export default Example
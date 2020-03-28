import React,{useState} from 'react'


export const Tabs=(props)=>{
    const [activeIndex,setActiveIndex] = useState(0)
    return (
        <div style={{'display':'flex'}}>
            {
                React.Children.map(props.children,(child,idx)=>{
                    const isActive = activeIndex===idx
                    return child.type?React.cloneElement(child,{
                        isActive,
                        onClick:()=>setActiveIndex(idx)
                    }):child
                })
            }
        </div>
    )
}
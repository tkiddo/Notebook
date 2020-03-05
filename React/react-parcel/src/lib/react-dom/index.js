import React from '../react'



const render = function (ele,root) {
    const element = renderNode(ele)
    root.appendChild(element)
}

function renderNode(ele) {
    if(ele===undefined || ele === null) return
    const {tag,attrs,children} = ele;
    let element;
    if(typeof ele === 'string'){
        element = document.createTextNode(ele);
    }else if(typeof tag === 'function'){
        let comp = React.createComponent(tag,attrs)
        return renderComponent(comp)
    }else{
        element = document.createElement(tag)
        if(attrs){
            Object.keys(attrs).forEach(key=>{
                setAttribute(element,key,attrs[key])
            })
        }
        
    }
    if(children){
        children.forEach(item=>{
            const child = renderNode(item)
            element.appendChild(child)
        })
    }
    return element
}

function renderComponent(comp) {
    comp.base = renderNode(comp.render())
    return comp.base
}

function setAttribute(ele,key,value) {
    switch (key) {
        case "className":
            ele["class"]=value
            break;
        case "style":
            Object.keys(value).forEach(key=>{
                ele.style[key]=value[key]
            })
            break;
        default:
            ele[key]=value
    }
    
}

export default {
    render
}
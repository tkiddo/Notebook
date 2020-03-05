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
    }else if(typeof ele === 'number'){
        element = document.createTextNode(ele.toString());
    }else if(typeof tag === 'function'){
        let comp = React.createComponent(tag,attrs)
        renderComponent(comp)
        return comp.base
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
    let base = renderNode(comp.render())
    if(comp.base && comp.base.parentNode){
        comp.base.parentNode.replaceChild(base,comp.base)
    }
    comp.base = base
    if(comp.componentDidMount){
        comp.componentDidMount()
    }
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
    render,
    renderComponent
}
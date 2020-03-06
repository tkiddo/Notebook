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
    }

    if(attrs){
        Object.keys(attrs).forEach(key=>{
            setAttribute(element,key,attrs[key])
        })
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
    let jsxNode = comp.render()
    
    // if(comp.base && comp.base.parentNode){
    //     comp.base.parentNode.replaceChild(base,comp.base)
    // }
    if(comp.base){
        diffNode(jsxNode,comp.base)
    }else{
        let base = renderNode(jsxNode)
        comp.base = base
        if(comp.componentDidMount){
            comp.componentDidMount()
        }
    }
    
    
    
}

function diffNode(comp,domNode) {
    console.log(comp.children,domNode.children)
    if(domNode.nodeName.toUpperCase()===comp.tag.toUpperCase()){
        diffAttributes(comp,domNode)
    }

    if(comp.children){
        if(domNode.children.length>0){
            let newChildren = comp.children
            let oldChildren = [...domNode.children]
            oldChildren.forEach((item,idx)=>{
                diffNode(newChildren[idx],item)
            })
        }else{
            //文字节点
            if(comp.children[0]!==domNode.childNodes[0]){
                let str = document.createTextNode(comp.children[0])
                domNode.childNodes[0].parentNode.replaceChild(str,domNode.childNodes[0])
            }
        }
    }
}

function  diffAttributes(comp,domNode) {
    let oldAttrs = domNode.attributes
    let newAttrs = comp.attrs
    oldAttrs = Array.prototype.slice.call(oldAttrs)
    oldAttrs.forEach(item=>{
        let key = item.nodeName
        let value = item.nodeValue
        let newKey= key ==='class'?'className':key
        if(newAttrs[newKey]!==value){
            domNode.setAttribute(key,newAttrs[newKey])
        }
    })
    
    // console.log(oldAttrs,newAttrs)
}

function setAttribute(ele,key,value) {
    switch (key) {
        case "className":
            ele.className=value
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
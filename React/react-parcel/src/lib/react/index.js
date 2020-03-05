import Component from './component'

const createElement = function (tag,attrs,...children) {
    return {
        tag,
        attrs,
        children
    }
}

const createComponent = function (comp,props) {
    if(comp.prototype && comp.prototype.render){
        return new comp(props)
    }else{
        let temp = new Component(props)
        temp.constructor = comp
        temp.render = function () {
            return this.constructor()
        }
        return temp
    }
}

export default {
    createElement,
    createComponent,
    Component
}
import React from 'react'
const FancyButton = React.forwardRef((props, ref) => {
    console.log(ref)
    return (
        <button ref={ref}>
            {props.children}
        </button>
    )

})
const ref = React.createRef()

export default class RefComponent extends React.Component {
    render() {
        return (
            <FancyButton ref={ref}>Click me</FancyButton>
        )
    }
}
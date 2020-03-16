import React,{Fragment} from 'react'


export default class Tabs extends React.Component {
    state = {
        activeIndex: 0
    }

    render() {
        const newChildren = React.Children.map(this.props.children, (child, index) => {
            if (child.type) {
                return React.cloneElement(child, {
                    active: this.state.activeIndex === index,
                    onClick: () => this.setState({ activeIndex: index })
                });
            } else {
                return child;
            }
        });

        return (
            <Fragment>
                {newChildren}
            </Fragment>
        );
    }
}
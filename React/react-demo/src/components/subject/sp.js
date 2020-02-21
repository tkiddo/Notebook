import React from 'react'
import {ThemeConsumer} from './context'

export class Subject extends React.Component {
    render() {
        return (
            <ThemeConsumer>
                {
                    (theme) => (
                        <h1 style={{ color: theme.mainColor }}>
                            {this.props.children}
                        </h1>
                    )
                }
            </ThemeConsumer>
        );
    }
}

export const Paragraph = (props, context) => {
    return (
        <ThemeConsumer>
            {
                (theme) => (
                    <p style={{ color: theme.textColor }}>
                        {props.children}
                    </p>
                )
            }
        </ThemeConsumer>
    );
};







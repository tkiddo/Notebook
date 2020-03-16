import React, { Fragment } from 'react'
import {Button} from './button'

export const StageOne =(props)=>{
    return (
        <Fragment>
            {props.theme}
            <Button theme={props.theme}/>
        </Fragment>
    )
}
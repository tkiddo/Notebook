import React from 'react'
import {Tabs,TabPane} from 'tkq-react-tabs'

export default class TestPage extends React.Component{
    render(){
        return (
            <div>
                <Tabs>
                    <TabPane>tab1</TabPane>
                </Tabs>
            </div>
        )
    }
}
import React from 'react'
import {ThemeProvider} from './context'
import {Subject,Paragraph} from './sp'

import {store} from '../../store'

const {counter} = store.getState()

const Page = () => (
    <div>
        <Subject>{counter.number}</Subject>
        <Paragraph>
            这是正文
        </Paragraph>
    </div>
);

export const Theme = () => {
    return (
        <ThemeProvider value={{ mainColor: 'green', textColor: 'red' }} >
            <Page />
        </ThemeProvider>
    )
}
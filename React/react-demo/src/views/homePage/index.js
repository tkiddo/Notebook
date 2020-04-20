import React, { Suspense, lazy } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './index.scss'

import Performance from '../../components/performance'

import MyComponent from 'sliver-react-components-lib'
const Home = function (props) {
    return (
        <div>
            <MyComponent />
        </div>
    )
}
const ContextComponent = lazy(() => import('../../components/context'))
const ErrorTest = lazy(() => import('../../components/errorBoundary/view'))
const RefComponent = lazy(() => import('../../components/ref'))
const WordsFly = lazy(() => import('../wordsFly'))
const CirclePrize = lazy(() => import('../circlePrize'))
const CombinedComponent = lazy(() => import('../combinedComponent'))
const AuthExample = lazy(() => import('../accessControl'))

const SuspeneseComponent = (Component) => {
    return props => (
        <Suspense fallback={<div>loading...</div>}>
            <Component {...props} />
        </Suspense>
    )
}

export default class HomePage extends React.Component {
    render() {
        return (
            <div className='flex'>
                <div className='left'>
                    <ul>
                        <li>
                            <Link className='link' to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className='link' to="/context">Context</Link>
                        </li>
                        <li>
                            <Link className='link' to="/errorTest">错误边界</Link>
                        </li>
                        <li>
                            <Link className='link' to="/ref">Ref</Link>
                        </li>
                        <li>
                            <Link className='link' to='/wordsFly'>Animation</Link>
                        </li>
                        <li>
                            <Link className='link' to='/performance'>Performance</Link>
                        </li>
                        <li>
                            <Link className='link' to='/circlePrize'>CirclePrize</Link>
                        </li>
                        <li>
                            <Link className='link' to='/combinedComponent'>CombinedComponent</Link>
                        </li>
                        <li>
                            <Link className='link' to='/authExample'>AuthExample</Link>
                        </li>
                    </ul>
                </div>

                <div className='right'>
                    <Switch>
                        <Route path="/context">
                            {SuspeneseComponent(ContextComponent)}
                        </Route>
                        <Route path="/errorTest">
                            <ErrorTest />
                        </Route>
                        <Route path="/ref">
                            {SuspeneseComponent(RefComponent)}
                        </Route>
                        <Route path="/wordsFly">
                            {SuspeneseComponent(WordsFly)}
                        </Route>
                        <Route path="/performance">
                            {SuspeneseComponent(Performance)}
                        </Route>
                        <Route path="/circlePrize">
                            {SuspeneseComponent(CirclePrize)}
                        </Route>
                        <Route path="/combinedComponent">
                            {SuspeneseComponent(CombinedComponent)}
                        </Route>
                        <Route path="/authExample">
                            {SuspeneseComponent(AuthExample)}
                        </Route>
                        <Route path="/">
                            {SuspeneseComponent(Home)({message:'hello'})}
                        </Route>
                    </Switch>
                </div>

            </div>
        )
    }
}





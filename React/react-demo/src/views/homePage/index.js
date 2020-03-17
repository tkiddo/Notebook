import React, { Suspense, lazy } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './index.scss'

const Home = function (params) {
    return (
        <h3>Hello</h3>
    )
}
const ContextComponent = lazy(()=>import('../../components/context'))
const ErrorTest = lazy(()=>import('../../components/errorBoundary/view'))
const RefComponent = lazy(()=>import('../../components/ref'))
export default class HomePage extends React.Component {
    render() {
        return (
            <div className='flex'>
                <div className='left'>
                    <ul>
                        <li>
                            <Link className='link' to="/">Home</Link>
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
                    </ul>
                </div>

                <div className='right'>
                    <Suspense fallback={<div>loading...</div>}>
                        <Switch>
                            <Route path="/context">
                                <ContextComponent />
                            </Route>
                            <Route path="/errorTest">
                                <ErrorTest />
                            </Route>
                            <Route path="/ref">
                                <RefComponent />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Suspense>

                </div>

            </div>
        )
    }
}





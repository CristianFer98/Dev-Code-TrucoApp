import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { FetchData } from './components/FetchData/FetchData';
import { Account } from './components/Account/Account'
import { Store } from './components/Store/Store';
import { Rules } from './components/Rules/Rules'
import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/store' component={Store} />
                <Route exact path='/rules' component={Rules} />
            </Layout>
        );
    }
}

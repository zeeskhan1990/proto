
import * as React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router';
import { SynchronizedHistory } from 'mobx-react-router';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import HomePage from './pages/home/HomePage';
import App from './layout/App'

// enable MobX strict mode
useStrict(true);

interface IRootType {
    store: any;
    history: SynchronizedHistory
};

export default function Root({ store, history }: IRootType) {
    return (
        <Provider {...store}>
            <Fabric>
                <App>
                    <Router history={history}>
                        <Switch>
                            <Route path="/" component={HomePage} />
                        </Switch>
                    </Router>
                </App>
            </Fabric>
        </Provider>
    );
}


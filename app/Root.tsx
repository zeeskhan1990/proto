
import * as React from 'react';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router} from 'react-router';
import { SynchronizedHistory } from 'mobx-react-router';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { initializeIcons } from '@uifabric/icons';
import App from './layout/App';
import Routes from './routes';

// enable MobX strict mode
useStrict(true);

// Register icons and pull the fonts from the default SharePoint cdn:
initializeIcons();

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
                        <Routes/>
                    </Router>
                </App>
            </Fabric>
        </Provider>
    );
}


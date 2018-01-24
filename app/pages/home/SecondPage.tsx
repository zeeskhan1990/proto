import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Second from './components/Second';

export class SecondPage extends React.Component<RouteComponentProps<any>, void> {
  render() {
    return (
      <Second />
    );
  }
}

export default (SecondPage as any as React.StatelessComponent<RouteComponentProps<any>>);

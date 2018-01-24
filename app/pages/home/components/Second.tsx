import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
        Hello Second World!!!
        </div>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
}

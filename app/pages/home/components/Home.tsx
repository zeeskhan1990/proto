import * as React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {css} from 'glamor';
import {Div} from 'glamorous';

const MyStyledDiv = glamorous.div({
  fontSize: 20
});

const myCustomGlamorStyles = css({fontSize: 30});

// const CustomButton = glamorous(DefaultButton)({
//   fontSize: 20,
//   textAlign: 'center',
// })

export default class Home extends React.Component {
  render() {
    return (
            <Div>
              <div>Hello World!</div>
              <Link to="/second">Second Home Page</Link>
              <MyStyledDiv>My glamorous styled div </MyStyledDiv>
              <DefaultButton className={`${myCustomGlamorStyles}`} text='See Button' primary={ true }>Test Button</DefaultButton>
            </Div>
    );
  }
}

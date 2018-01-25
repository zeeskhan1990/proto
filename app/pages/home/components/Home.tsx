import * as React from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import {css} from 'glamor';
import {Div} from 'glamorous';
import { inject, observer } from 'mobx-react';

const MyStyledDiv = glamorous.div({
  fontSize: 20
});

const myCustomGlamorStyles = css({fontSize: 30});

// const CustomButton = glamorous(DefaultButton)({
//   fontSize: 20,
//   textAlign: 'center',
// })

@inject('routing')
@observer
export default class Home extends React.Component<any, any> {
  render() {
    const { push } = this.props.routing;

    return (
            <Div>
              <div>Hello First World!</div>
              <Link to="/second">Second World</Link>
              <MyStyledDiv>My glamorous styled div </MyStyledDiv>
              <DefaultButton className={`${myCustomGlamorStyles}`} onClick={() => push('/second')} text='See Button' primary={ true }>Test Button</DefaultButton>
            </Div>
    );
  }
}

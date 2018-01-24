import * as React from 'react';
import glamorous from 'glamorous';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
// import {css} from 'glamor';

loadTheme({
  palette: {
    'themePrimary': 'red'
  }
});

const MyGrid = glamorous.div('ms-font-xl', {
  margin: 'auto',
  display: 'grid',
  width: '100vw',
  height: '100vh',
  gridTemplateRows: '[row1-start] 40px [row1-end row2-start] auto [row2-end]',
  gridTemplateColumns: '200px auto',
  gridTemplateAreas: `
      "header header header"
      "sidebar content content"
    `,
});

/* const baseStyle = css({
  padding: 10
}); */

const Box = glamorous.div({
  padding: 10
});

/* const Sidebar = glamorous(Box)({
  backgroundColor: '#71B1D1',
  color: '#fff',
}) */

const Header = glamorous(Box)('ms-bgColor-neutralDark ms-fontColor-neutralLighterAlt', {
  /* backgroundColor: '#343A41',
  color: '#fff', */
  display: 'flex',
  alignItems:'center'
});

/* const Content = glamorous(Box)({
  backgroundColor: '#fff',
  color: '#000'
}); */

/* 
grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
grid-template-columns: 1fr 50px auto;
grid-template-areas: 
  "header header header" 
  "footer footer footer"; 
*/

export default class App extends React.Component<any, any> {

  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return (<DevTools />);
    }
    return null;
  };

  render() {
    return (
      <MyGrid>
        <Header css={{ gridArea: 'header' }}>Header</Header>
        <Box className={`ms-bgColor-themePrimary ms-fontColor-neutralLighterAlt`} css={{ gridArea: 'sidebar' }}>Sidebar</Box>
        <Box className={`ms-bgColor-white ms-fontColor-black`} css={{ gridArea: 'content' }}>
          {this.props.children}
          {/* {this.renderDevTool()} */}
        </Box>
      </MyGrid>
    );
  }
};
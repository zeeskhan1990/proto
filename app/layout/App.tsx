import * as React from 'react';
import glamorous , {ThemeProvider} from 'glamorous';
import * as Palettes from '../globals/palette';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
// import {css} from 'glamor';

//Has to be made dynamic theme resolver
const currentPalette = Palettes.azurePalette;

loadTheme({
  palette: currentPalette
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
    `
});

const Box = glamorous.div({
  padding: 10
});

const Sidebar = glamorous(Box)({
  gridArea: 'sidebar'
},({theme}) => ({
  backgroundColor: currentPalette.themePrimary,
  color: currentPalette.neutralLighterAlt,
}))

const Header = glamorous(Box)({
  display: 'flex',
  alignItems:'center',
  gridArea: 'header'
},({theme}) => ({
  backgroundColor: currentPalette.neutralPrimary,
  color: currentPalette.neutralLighterAlt,
}));

const Content = glamorous(Box)({
  gridArea: 'content'
},({theme}) => ({
  backgroundColor: currentPalette.neutralLighterAlt,
  color: currentPalette.black,
}));

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
      <ThemeProvider theme={currentPalette}>
        <MyGrid>
          <Header>Header</Header>
          <Sidebar>Sidebar</Sidebar>
          <Content>
            {this.props.children}
            {/* {this.renderDevTool()} */}
          </Content>
        </MyGrid>
      </ThemeProvider>
    );
  }
};
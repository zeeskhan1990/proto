import * as React from 'react';
import glamorous , {ThemeProvider, Div} from 'glamorous';
import * as Palettes from '../globals/palette';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Layer, LayerHost } from 'office-ui-fabric-react/lib/Layer';
/* import { autobind } from 'office-ui-fabric-react/lib/Utilities'; */
/* import { DirectionalHint } from 'office-ui-fabric-react/lib/common/DirectionalHint'; */
import {css} from 'glamor';

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

const Header = glamorous(Box)({
  display: 'flex',
  alignItems:'center',
  gridArea: 'header'
},({theme}) => ({
  backgroundColor: currentPalette.neutralPrimary,
  color: currentPalette.neutralLighterAlt
}));

const Sidebar = glamorous(Box)({
  gridArea: 'sidebar',
  padding: 0
},({theme}) => ({
  backgroundColor: currentPalette.themePrimary,
  color: currentPalette.neutralLighterAlt
}))

const Content = glamorous(Box)({
  gridArea: 'content'
},({theme}) => ({
  backgroundColor: currentPalette.neutralLighterAlt,
  color: currentPalette.black
}));

const layerStyle = css({
  padding:20,
  backgroundColor: 'blue'
});


export default class App extends React.Component<any, any> {

  constructor(props: INavProps) {
    super(props);
    this._onClickHandler = this._onClickHandler.bind(this);
  }
  
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return (<DevTools />);
    }
    return null;
  };

  private _onClickHandler(e: React.MouseEvent<HTMLElement>) {
    alert('test');
    return false;
  }



  render() {

    return (
      <ThemeProvider theme={currentPalette}>
        <MyGrid>
          <Header>
            <Div css={{display:'flex',flexFlow:'column',justifyContent:'flex-start'}}>
              <Icon iconName='CollapseMenu' className='ms-IconExample' />
              <LayerHost id='layerhost1' className='LayerExample-customHost' />
            </Div>
            <Div className='brand-div'>
              <span>Coglite</span>
            </Div>
          </Header>
          <Sidebar>
          <div>
              <Nav
                groups={
                  [
                    {
                      links:
                      [
                        {
                          name: 'Home',
                          url: '/second',
                          links: [{
                            name: 'Activity',
                            url: '/second',
                            key: 'key1'
                          },
                          {
                            name: 'News',
                            url: '/second',
                            key: 'key2'
                          }],
                          isExpanded: true
                        },
                        { name: 'Documents', url: '/second', key: 'key3', isExpanded: true },
                        { name: 'Pages', url: '/second', key: 'key4' },
                        { name: 'Notebook', url: '/second', key: 'key5' },
                        { name: 'Long Name Test for ellipse', url: '/second', key: 'key6' },
                        {
                          name: 'Edit',
                          url: '/second',
                          onClick: this._onClickHandler,
                          icon: 'Edit',
                          key: 'key8'
                        }
                      ]
                    }
                  ]
                }
                className={'my-nav-class'}
                initialSelectedKey={ 'key1' }
              />
            </div>
          </Sidebar>
          <Content>
            {this.props.children}
            {/* {this.renderDevTool()} */}
          </Content>
        <Layer>
          <div className={`${layerStyle}`}>Example Layer Content</div>
        </Layer>
        </MyGrid>
      </ThemeProvider>
    );
  }
};
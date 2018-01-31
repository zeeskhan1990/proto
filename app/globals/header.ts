import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';

export const items = [
    {
      key: 'headerMenu',
      name: '',
     /*  icon: 'CollapseMenu', */
      ariaLabel: 'Main menu of Coglite',
      className: 'test-header-class',
      iconProps: {
          iconName: 'CollapseMenu',
          className: 'good-icon'
      },
      ['data-automation-id']: 'newHeaderMenu',
      onClick:  (ev?: React.MouseEvent<HTMLElement>, item?: IContextualMenuItem) => {
          console.log("HEADER CLICKED");
          console.log(ev);
          console.log(item); 
          return;
        }
    },
    {
      key: 'coglite',
      name: 'Coglite',
      ariaLabel: 'Coglite Header',
      ['data-automation-id']: 'uploadButton',
      onClick: () => { return; }
    }
  ];
  
  export const farItems = [
    {
      key: 'userConfig',
      name: 'User Name - Coglite Workspace',
      onClick: () => { return; }
    },
    {
      key: 'help',
      name: '',
      icon: 'FeedbackRequestSolid',
      onClick: () => { return; }
    },
    {
      key: 'chat',
      name: '',
      icon: 'ChatSolid',
      onClick: () => { return; }
    },
    {
      key: 'forum',
      name: '',
      icon: 'Group',
      onClick: () => { return; }
    },
    {
      key: 'submitFeedback',
      name: '',
      icon: 'Emoji2',
      onClick: () => { return; }
    },
    {
      key: 'accountManagement',
      name: '',
      icon: 'AccountManagement',
      onClick:  (ev?: React.MouseEvent<HTMLElement>, item?: IContextualMenuItem) => {
        console.log("ACCOUNT CLICKED");
        console.log(ev);
        console.log(item); 
        return;
      }
    }
  ];
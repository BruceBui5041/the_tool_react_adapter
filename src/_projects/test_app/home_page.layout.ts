export default (): LayoutSchema => ({
  appBar: {
    type: 'appbar',
    title: {
      type: 'text',
      text: 'Home Page {{ passedData }}',
    },
  },
  content: {
    type: 'container',
    child: {
      type: 'column',
      children: [
        {
          type: 'text',
          text: 'Home Page content ',
        },
        {
          type: 'text',
          text: 'pageArguments : {{passedData}}',
        },
        {
          type: 'button',
          onClick: 'gotoFields()',
          text: 'Go to Fields',
        },
        {
          type: 'button',
          onClick: 'setHomePageData()',
          text: 'setHomePageData: {{abcd}} / {{homePageData}}',
        },
        {
          type: 'row',
          scrollable: true,
          children: [
            {
              type: 'container',
              width: 200,
              height: 100,
              backgroundColor: 'red',
              margin: [5, 5],
            },
            {
              type: 'container',
              width: 200,
              height: 100,
              backgroundColor: 'blue',
              margin: [5, 5],
            },
            {
              type: 'container',
              width: 200,
              height: 100,
              backgroundColor: 'black',
              margin: [5, 5],
            },
            {
              type: 'container',
              width: 200,
              height: 100,
              backgroundColor: 'yellow',
              margin: [5, 5],
            },
            {
              type: 'container',
              width: 200,
              height: 100,
              backgroundColor: 'orange',
              margin: [5, 5],
            },
          ],
        },
        {
          type: 'container',
          height: 200,
          width: 300,
          child: {
            type: 'column',
            scrollable: true,
            children: [
              {
                type: 'container',
                width: 200,
                height: 50,
                backgroundColor: 'red',
                margin: [5, 5],
              },
              {
                type: 'container',
                width: 200,
                height: 50,
                backgroundColor: 'blue',
                margin: [5, 5],
              },
              {
                type: 'container',
                width: 200,
                height: 50,
                backgroundColor: 'black',
                margin: [5, 5],
              },
              {
                type: 'container',
                width: 200,
                height: 50,
                backgroundColor: 'yellow',
                margin: [5, 5],
              },
              {
                type: 'container',
                width: 200,
                height: 50,
                backgroundColor: 'orange',
                margin: [5, 5],
              },
            ],
          },
        },
        {
          type: 'row',
          children: [
            {
              type: 'button',
              flex: 1,
              text: 'Toggle Tile',
              onClick: 'toogleExpansionTitle()',
            },
            {
              type: 'expansion_tile',
              name: 'expansionTileExpanded',
              flex: 3,
              elevation: 0,
              title: {
                type: 'container',
                height: 32,
                child: {
                  type: 'text',
                  text: 'Expansion Tile',
                },
              },
              children: [
                {
                  type: 'text',
                  text: 'Expansion Tile Body',
                },
              ],
            },
          ],
        },
      ],
    },
  },
});

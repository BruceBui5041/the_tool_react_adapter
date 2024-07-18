export default (): LayoutSchema => ({
  content: {
    type: 'container',
    backgroundColor: '#ffa500',
    width: '1sw',
    scrollable: true,
    child: {
      type: 'column',
      wrappers: [
        {
          type: 'safe_area',
        },
      ],
      children: [
        {
          type: 'text',
          color: '#primaryColor',
          text: 'Is Mobile: {{ _tIsMobile }}, Is Web: {{_tIsWeb}}',
        },
        {
          type: 'column',
          mainAxisAlignment: 'center',
          children: [
            {
              type: 'button',
              onClick: 'goToHomePage()',
              text: 'Go To Home Page',
            },
            {
              type: 'button',
              buttonType: 'text',
              onClick: 'goFieldTestPage()',
              text: 'Go to Fields test page',
            },
            {
              type: 'button',
              buttonType: 'text',
              onClick: 'goToPermissionTestPage()',
              text: 'Go to Permission Page',
            },
            {
              type: 'button',
              buttonType: 'text',
              onClick: "goTo('test_api')",
              text: 'Go to Test API page',
            },
            {
              type: 'button',
              buttonType: 'text',
              onClick: "goTo('test_root_data')",
              text: 'Go to Test $root data',
            },
          ],
        },
        {
          type: 'button',
          onClick: 'testFunction()',
          text: 'Test Button From JSON',
        },
        {
          type: 'text',
          color: '#primaryColor',
          text: 'base color #primaryColor: {{ abcd }}',
        },
        {
          type: 'text',
          color: '#primaryColor',
          className: 'text-error',
          text: 'className=text-error | color=#primaryColor',
        },
        {
          type: 'text',
          color: '{{ dynamicColor }}',
          text: 'color: {{ dynamicColor }}',
        },
        {
          type: 'text',
          color: '#primaryColor',
          className: ['text-error', 'text-error--small'],
          text: '[text-error, text-error--small]: {{ abcd }}',
        },
        {
          type: 'text',
          key: '{{ abcd }}',
          color: '#primaryColor',
          className: [{ 'text-error': '{{ text-error }}' }],
          text: '[{text-error: {{ text-error }}}]',
        },
        {
          type: 'text',
          text: 'TextTheme.bodyLarge | w:700 | size: 16',
          fontWeight: 'w700',
          fontSize: 16,
          style: 'textTheme.bodyLarge',
        },
        {
          type: 'container',
          backgroundColor: 'red',
          // hidden: '{{!dynamicProps}}',
          dynamicProps: [
            {
              conditions: [
                {
                  source: '{{dynamicProps}}',
                  operator: '==',
                  target: true,
                },
                {
                  source: '{{dynamicProps}}',
                  operator: '==',
                  target: true,
                },
              ],
              true: {
                backgroundColor: 'green',
              },
            },
            {
              conditions: [
                [
                  {
                    source: '{{dynamicProps}}',
                    operator: '==',
                    target: false,
                  },
                ],
                [
                  {
                    source: '{{dynamicProps}}',
                    operator: '==',
                    target: false,
                  },
                ],
              ],
              true: {
                backgroundColor: 'blue',
              },
            },
          ],
          child: {
            type: 'text',
            color: '#primaryColor',
            text: 'Dynamic Changing Widget backgroundColor based on dynamicProps and conditions',
          },
        },
        {
          type: 'container',
          backgroundColor: '#ffff00',
          child: {
            type: 'button',
            onClick: 'updatePageState()',
            text: 'Call setPageData : {{ abcd }} , {{nest.nest1}}',
          },
        },
        {
          type: 'container',
          backgroundColor: 'mediumpurple',
          child: {
            type: 'button',
            onClick: 'changeTheme()',
            text: 'Toggle Change Theme',
          },
        },
        {
          type: 'column',
          children: [
            {
              type: 'button',
              onClick: 'getTestingData()',
              text: 'Fetch data from server',
            },
            {
              type: 'text',
              text: '{{apiData}}',
            },
          ],
        },
        {
          type: 'container',
          backgroundColor: '#ffff00',
          hidden: true,
          child: {
            type: 'text',
            color: '#primaryColor',
            className: [{ 'text-error': '{{ text-error }}' }],
            text: 'Hidden Container',
          },
        },
        {
          type: 'container',
          backgroundColor: 'blue',
          hidden: '{{text-error}}',
          child: {
            type: 'text',
            color: '#primaryColor',
            className: [{ 'text-error': '{{ text-error }}' }],
            text: 'Dynamic Hidden Container: {{text-error}}',
          },
        },
      ],
    },
  },
});

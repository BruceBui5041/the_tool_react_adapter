export default (): LayoutSchema => ({
  content: {
    type: 'container',
    padding: [15, 10, 15, 10],
    dynamicProps: [
      {
        conditions: {
          source: '{{ props.backgroundColor }}',
          operator: '==',
          target: null,
        },
        true: {
          backgroundColor: '#white100',
        },
        false: {
          backgroundColor: '{{ props.backgroundColor }}',
        },
      },
    ],
    borderRadius: {
      type: 'all',
      radius: 12,
    },
    child: {
      type: 'column',
      mainAxisAlignment: 'spaceBetween',
      children: [
        {
          type: 'row',
          mainAxisAlignment: 'spaceBetween',
          children: [
            {
              type: 'container',
              width: 36,
              height: 36,
              backgroundColor: '{{ props.topLeftIcon.backgroundColor }}',
              borderRadius: {
                type: 'all',
                radius: 8,
              },
              child: {
                type: 'icon',
                color: '{{ props.topLeftIcon.color }}',
                icon: '{{ props.topLeftIcon.icon }}',
              },
            },
            {
              type: 'field',
              fieldType: 'select',
              name: 'data_duration',
              padding: [0, 0, 0, 0],
              defaultValue: 'to_day',
              hidden: '{{ props.hideDuration }}',
              maxWidth: 120,
              maxHeight: 36,
              style: {
                color: '#black30',
                fontSize: '10sp',
              },
              icon: {
                type: 'icon',
                icon: 'chevron-down',
                color: '#black30',
              },
              items: [
                ['to_day', 'Today'],
                ['to_week', 'This Week'],
                ['to_month', 'This Month'],
                ['to_year', 'This Year'],
              ],
            },
          ],
        },
        {
          type: 'row',
          mainAxisAlignment: 'spaceBetween',
          children: [
            {
              type: 'column',
              crossAxisAlignment: 'start',
              children: [
                {
                  type: 'text',
                  style: 'textTheme.labelLarge',
                  text: '{{ props.summary1.title }}',
                  color: '{{ props.summary1.titleColor }}',
                },
                {
                  type: 'row',
                  mainAxisAlignment: 'spaceBetween',
                  children: [
                    {
                      type: 'text',
                      text: '{{ props.summary1.detail }}  ',
                      color: '{{ props.summary1.detailColor }}',
                    },
                    {
                      type: 'text',
                      style: 'textTheme.labelSmall',
                      color: '#successColor',
                      dynamicProps: [
                        {
                          conditions: {
                            source: '{{ props.summary1.pnlPercentage }}',
                            operator: '>',
                            target: 0,
                          },
                          true: {
                            color: '#successColor',
                          },
                          false: {
                            color: '#errorColor',
                          },
                        },
                      ],
                      hidden: '{{ !props.summary1.pnlPercentage }}',
                      text: '{{ props.summary1.pnlPercentage }}%',
                    },
                  ],
                },
              ],
            },
            {
              type: 'column',
              crossAxisAlignment: 'start',
              children: [
                {
                  type: 'row',
                  children: [
                    {
                      type: 'text',
                      style: 'textTheme.labelLarge',
                      text: '{{ props.summary2.title }}',
                      color: '{{ props.summary2.titleColor }}',
                    },
                  ],
                },

                {
                  type: 'row',
                  mainAxisAlignment: 'spaceBetween',
                  children: [
                    {
                      type: 'text',
                      text: '{{ props.summary2.detail }}  ',
                      color: '{{ props.summary2.detailColor }}',
                    },
                    {
                      type: 'text',
                      style: 'textTheme.labelSmall',
                      dynamicProps: [
                        {
                          conditions: {
                            source: '{{ props.summary2.pnlPercentage }}',
                            operator: '>',
                            target: 0,
                          },
                          true: {
                            color: '#successColor',
                          },
                          false: {
                            color: '#errorColor',
                          },
                        },
                      ],
                      hidden: '{{ !props.summary2.pnlPercentage }}',
                      text: '{{ props.summary2.pnlPercentage }}%',
                    },
                  ],
                },
              ],
            },
            {
              type: 'column',
              crossAxisAlignment: 'start',
              hidden: '{{ !props.summary3 }}',
              children: [
                {
                  type: 'row',
                  children: [
                    {
                      type: 'text',
                      style: 'textTheme.labelLarge',
                      text: '{{ props.summary3.title }}',
                    },
                  ],
                },

                {
                  type: 'row',
                  mainAxisAlignment: 'spaceBetween',
                  children: [
                    {
                      type: 'text',
                      text: '{{ props.summary3.detail }}  ',
                    },
                    {
                      type: 'text',
                      style: 'textTheme.labelSmall',
                      dynamicProps: [
                        {
                          conditions: {
                            source: '{{ props.summary3.pnlPercentage }}',
                            operator: '>',
                            target: 0,
                          },
                          true: {
                            color: '#successColor',
                          },
                          false: {
                            color: '#errorColor',
                          },
                        },
                      ],
                      hidden: '{{ !props.summary3.pnlPercentage }}',
                      text: '{{ props.summary3.pnlPercentage }}%',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
});

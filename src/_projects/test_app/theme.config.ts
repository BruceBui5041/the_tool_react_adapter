export default (): ClientThemeSchema => ({
  base: {
    '#primaryColor': 'white',
    '#primaryWatchColor': 'skyblue',
    '#borderInputColorFocused': '#838383',
    '--dark': {
      '#primaryColor': 'purple',
      '#primaryWatchColor': 'black',
      '#borderInputColor': 'black',
    },
  },
  classes: {
    'text-error': { color: 'red' },
    'text-error--small': { color: 'violet', fontSize: 17 },
    'text-warning': { color: 'accen', fontSize: 30 },
  },
  theme: {
    primaryColor: '#primaryColor',
    scaffoldBackgroundColor: '#primaryColor',
    primarySwatch: '#primaryWatchColor',
    textTheme: {
      bodyText2: {
        color: '#primaryWatchColor',
        fontSize: 15,
        fontWeight: 'bold',
      },
    },
    // appBarTheme: {
    //   backgroundColor: '#primaryWatchColor',
    //   shape: {
    //     type: 'rounded',
    //     borderRadius: {
    //       type: 'vertical',
    //       bottom: { type: 'circular', radius: 25 },
    //     },
    //   },
    // },
    inputDecorationTheme: {
      alignLabelWithHint: true,
      focusColor: '#borderInputColorFocused',
      fillColor: '#borderInputColorFocused',
      filled: true,
      focusedBorder: {
        type: 'outline',
        borderRadius: {
          type: 'only',
          bottomLeft: {
            type: 'circular',
            radius: 6.0,
          },
          bottomRight: {
            type: 'circular',
            radius: 6.0,
          },
        },
      },
    },
  },
});

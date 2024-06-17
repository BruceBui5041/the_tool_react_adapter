export default (): ClientThemeSchema => {
  return {
    base: {
      '#primaryColor100': '#5570FF',
      '#primaryColor12': '#5570FF1F',
      '#primaryColor16': '#5570FF29',
      '#black100': '#1C1D22',
      '#black04': '#1C1D220A',
      '#black10': '#1C1D221A',
      '#black20': '#1C1D2233',
      '#black30': '#1C1D224D',
      '#black60': '#1C1D2299',
      '#grey100': '#E1E2E9',
      '#white100': '#FFFFFF',
      '#white30': '#8B8D97',
      '#white16': '#FFFFFF29',
      '#secondaryColor': '#FFCC91',
      '#secondaryColor20': '#FFCC9133',
      '#secondaryColor30': '#FFCC914D',
      '#successColor': '#519C66',
      '#successColor12': '#519C661F',
      '#successColor16': '#519C6629',
      '#errorColor': '#CC5F5F',
      '#errorColor12': '#CC5F5F1F',
      '#primaryWatchColor': 'white',
      '#borderInputColorFocused': '#EFEFEF',
      '--dark': {
        '#borderInputColorFocused': '#838383',
        '#primaryColor100': '#5570F1',
        '#primaryWatchColor': 'skyblue',
        '#borderInputColor': 'black',
      },
    },
    classes: {
      'auth-background': {
        scrollable: true,
        width: '1sw',
        height: '1sh',
        image: {
          type: 'network',
          url: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          fit: 'cover',
        },
      },
      field_prefix_icon_color: {
        prefixIconColor: '#primaryWatchColor',
      },
      'side-nav__item__selected--bg': {
        backgroundColor: '#primaryColor100',
      },
      'side-nav__item__selected--color': {
        color: 'white',
      },
      'app--bg': {
        backgroundColor: '#black10',
      },
      'side-nav--bg': {
        backgroundColor: '#white100',
      },
      'common--component--bg': {
        padding: [15, 10, 15, 10],
        backgroundColor: '#white100',
        borderRadius: {
          type: 'all',
          radius: 12,
        },
      },
      'outlined--field': {
        fillColor: '#black10',
        filled: true,
        icon: {
          type: 'icon',
          icon: 'chevron-down',
          color: '#black60',
        },
      },
      'bordered-field': {
        boxBorder: {
          type: 'outline',
          borderSide: {
            color: '#grey100',
            style: 'solid',
            width: 1,
          },
          borderRadius: {
            type: 'all',
            radius: 8,
          },
        },
        enabledBorder: {
          type: 'outline',
          borderSide: {
            color: '#grey100',
            style: 'solid',
            width: 1,
          },
          borderRadius: {
            type: 'all',
            radius: 8,
          },
        },
        focusedBorder: {
          type: 'outline',
          borderSide: {
            color: '#grey100',
            style: 'solid',
            width: 1,
          },
          borderRadius: {
            type: 'all',
            radius: 8,
          },
        },
      },
      'field-padding': {
        padding: [0, 0, 0, 8],
      },
      'sm-mobile-break-point': {
        minWidth: 400,
      },
      'mobile-break-point': {
        minWidth: 600,
      },
      'ipad-break-point': {
        minWidth: 900,
      },
      'desktop-break-point': {
        minWidth: 1200,
      },
    },
    theme: {
      primaryColor: '#primaryColor100',
      // scaffoldBackgroundColor: '#primaryColor100',
      primarySwatch: '#primaryWatchColor',
      textTheme: {
        bodyMedium: 'Roboto',
        // bodyLarge: 'Acme',
        bodyLarge: {
          // fontFamily: 'Acme',
        },
        titleLarge: {
          // fontFamily: 'Acme',
          fontWeight: 'w500',
        },
        titleMedium: {
          fontWeight: 'w500',
        },
        headlineSmall: {
          fontWeight: 'w600',
        },
        labelLarge: {
          color: '#white30',
        },
      },
      appBarTheme: {
        backgroundColor: '#primaryWatchColor',
        iconTheme: {
          color: '#primaryColor100',
        },
      },
      // elevatedButtonTheme: { backgroundColor: '#primaryWatchColor' },
      // iconButtonTheme: {
      //   backgroundColor: '#primaryWatchColor',
      //   textStyle: { color: 'red' },
      // },
      outlinedButtonTheme: {
        shape: {
          type: 'rounded',
          borderRadius: {
            type: 'all',
            radius: 8,
          },
        },
      },
      elevatedButtonTheme: {
        backgroundColor: '#primaryColor100',
        shape: {
          type: 'rounded',
          borderRadius: {
            type: 'all',
            radius: 12,
          },
        },
        textStyle: {
          color: '#white100',
        },
      },
      inputDecorationTheme: {
        alignLabelWithHint: true,
        focusColor: '#borderInputColorFocused',
        fillColor: '#borderInputColorFocused',
        enabledBorder: {
          type: 'outline',
          borderRadius: {
            type: 'all',
            radius: 8,
          },
          borderSide: {
            color: 'transparent',
            style: 'solid',
          },
        },
        border: {
          type: 'outline',
          borderRadius: {
            type: 'all',
            radius: 8,
          },
        },
        filled: true,
        focusedBorder: {
          type: 'outline',
          borderSide: {
            color: '#primaryWatchColor',
            style: 'solid',
          },
          borderRadius: {
            type: 'all',
            radius: 8,
          },
        },
      },
      dialogTheme: {
        backgroundColor: '#white100',
      },
    },
  };
};

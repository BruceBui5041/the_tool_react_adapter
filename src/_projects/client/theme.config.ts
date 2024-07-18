export default (): ClientThemeSchema => {
  return {
    base: {
      '#primaryColor': '#FFFFFF',
      '#primaryWatchColor': '#FFFFFF',
      '#borderInputColorFocused': '#EFEFEF',
      '#textColor': '#000000',
      '--dark': {
        '#borderInputColorFocused': '#838383',
        '#primaryColor': 'purple',
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
      primaryColor: '#primaryColor',
      // scaffoldBackgroundColor: '#primaryColor',
      primarySwatch: '#primaryWatchColor',
      textTheme: {
        bodyMedium: {
          fontFamily: 'Roboto',
          color: '#textColor',
        },
        // bodyLarge: 'Acme',
        bodyLarge: {
          fontFamily: 'Acme',
          color: '#textColor',
        },
        titleLarge: {
          fontFamily: 'Acme',
          fontWeight: 'w500',
          color: '#textColor',
        },
        titleMedium: {
          fontWeight: 'w500',
          color: '#textColor',
        },
        headlineSmall: {
          fontWeight: 'w600',
          color: '#textColor',
        },
      },
      appBarTheme: {
        backgroundColor: '#primaryWatchColor',
        iconTheme: {
          color: '#primaryColor',
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
      inputDecorationTheme: {
        alignLabelWithHint: true,
        focusColor: '#borderInputColorFocused',
        fillColor: '#borderInputColorFocused',
        enabledBorder: {
          type: 'outline',
          borderRadius: {
            type: 'all',
            radius: 24,
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
            radius: 24,
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
            radius: 24,
          },
        },
      },
    },
  };
};

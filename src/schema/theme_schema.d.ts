import {
  Alignment,
  DataBindingString,
  FontWeight,
  Shape,
} from './widget_property_type';
import { BorderShapeSchema } from './layout_schema';
import { Brightness, GoogleFontName } from './theme_type';
import { ColorScheme, ColorScheme2, Padding, Side } from './theme_data_schema';

export {};

interface InputDecorationThemeSchema {
  alignLabelWithHint?: boolean;
  focusColor?: string;
  border?: BorderShapeSchema;
  filled?: boolean;
  fillColor?: string;

  focusedBorder?: BorderShapeSchema;
  enabledBorder?: BorderShapeSchema;
  disabledBorder?: BorderShapeSchema;
  borderProps?: BorderShapeSchema;
}

interface TextStylePropertySchema {
  color?: string;
  fontSize?: number | string;
  fontWeight?: FontWeight;
  fontFamily?: GoogleFontName;
  decorationColor?: string;
  backgroundColor?: string;
}

export type TextStyleSchema = TextStylePropertySchema | GoogleFontName;

interface TextThemeSchema {
  bodyText2?: TextStyleSchema;
  bodySmall?: TextStyleSchema;
  bodyMedium?: TextStyleSchema;
  bodyLarge?: TextStyleSchema;

  titleSmall?: TextStyleSchema;
  titleMedium?: TextStyleSchema;
  titleLarge?: TextStyleSchema;

  headlineSmall?: TextStyleSchema;
  headlineMedium?: TextStyleSchema;
  headlineLarge?: TextStyleSchema;

  displaySmall?: TextStyleSchema;
  displayMedium?: TextStyleSchema;
  displayLarge?: TextStyleSchema;

  labelSmall?: TextStyleSchema;
  labelMedium?: TextStyleSchema;
  labelLarge?: TextStyleSchema;

  buttonSmall?: TextStyleSchema;
  buttonMedium?: TextStyleSchema;
  buttonLarge?: TextStyleSchema;

  captionSmall?: TextStyleSchema;
  captionMedium?: TextStyleSchema;
  captionLarge?: TextStyleSchema;

  overlineSmall?: TextStyleSchema;
  overlineMedium?: TextStyleSchema;
  overlineLarge?: TextStyleSchema;

  subtitleSmall?: TextStyleSchema;
  subtitleMedium?: TextStyleSchema;
  subtitleLarge?: TextStyleSchema;
}

export interface ButtonStyleSchema {
  alignment?: string; // The alignment of the button's child within the button's bounds.
  padding?: string; // The padding between the button's bounds and its child.
  backgroundColor?: string; // The background color of the button.
  foregroundColor?: string; // The foreground (text) color of the button.
  overlayColor?: string; // The color of the button's overlay when it is pressed or hovered.
  shadowColor?: string; // The color of the button's shadow.
  elevation?: number; // The elevation of the button.
  textStyle?: TextStyleSchema; // The style of the button's text.
  shape?: Shape; // The shape of the button.
  side?: Side; // The border side of the button.
  minimumSize?: string; // The minimum size constraints for the button.
  fixedSize?: string; // The fixed size constraints for the button.
  maximumSize?: string; // The maximum size constraints for the button.
  visualDensity?: number; // The visual density configuration for the button.
  tapTargetSize?: string; // The target size for tap events.
  animationDuration?: number; // The duration of various button animations.
  enableFeedback?: boolean; // Whether the button should provide haptic feedback.
}

interface SystemUiOverlayStyleSchema {
  systemNavigationBarColor?: string; // The color of the system navigation bar (Android).
  systemNavigationBarDividerColor?: string; // The color of the divider between the system navigation bar and the app content (Android).
  statusBarColor?: string; // The color of the status bar (Android).
  statusBarBrightness?: Brightness; // The brightness of the status bar (Android).
  statusBarIconBrightness?: Brightness; // The brightness of the status bar icons (Android).
  systemNavigationBarIconBrightness?: Brightness; // The brightness of the system navigation bar icons (Android).
}

interface IconThemeData {
  color: string;
  opacity?: number;
  size?: number;
}

interface AppBarThemeSchema {
  iconTheme?: IconThemeData;
  backgroundColor?: string; // The background color of the app bar.
  foregroundColor?: string; // The color of the app bar's icons and text.
  elevation?: number; // The elevation of the app bar, which controls the drop shadow.
  shadowColor?: string; // The color of the app bar's drop shadow.
  centerTitle?: boolean; // A boolean flag indicating whether to center the title within the app bar.
  backwardsCompatibility?: boolean; // Whether the app bar's layout should be consistent with older versions of Flutter.
  toolbarHeight?: number; // The height of the toolbar portion of the app bar.
  titleSpacing?: number; // The spacing around the app bar's title.
  toolbarTextStyle?: TextStyleSchema; // The text style for the app bar's toolbar text (e.g., actions).
  titleTextStyle?: TextStyleSchema; // The text style for the app bar's title text.
  systemOverlayStyle?: SystemUiOverlayStyleSchema; // The style applied to the system overlays (e.g., status bar) when the app bar is visible.
}

// this.backgroundColor,
// this.elevation,
// this.shadowColor,
// this.surfaceTintColor,
// this.shape,
// this.alignment,
// this.iconColor,
// this.titleTextStyle,
// this.contentTextStyle,
// this.actionsPadding,

interface DialogTheme {
  backgroundColor?: DataBindingString | string;
  surfaceTintColor?: DataBindingString | string;

  alignment?: Alignment;
  iconColor?: DataBindingString | string;

  titleTextStyle?: TextStyleSchema;
  contentTextStyle?: TextStyleSchema;

  elevation?: number;
  shape?: Shape;
  actionsPadding?: Padding;
  shadowColor?: string;
}

interface ThemeSchema {
  primaryColor?: string;
  scaffoldBackgroundColor?: string;
  primarySwatch?: string;
  inputDecorationTheme?: Partial<InputDecorationThemeSchema>;
  textTheme?: TextThemeSchema;
  elevatedButtonTheme?: ButtonStyleSchema;
  outlinedButtonTheme?: ButtonStyleSchema;
  filledButtonTheme?: ButtonStyleSchema;
  textButtonTheme?: ButtonStyleSchema;
  iconButtonTheme?: ButtonStyleSchema;
  appBarTheme?: AppBarThemeSchema;
  switchTheme?: SwitchThemeSchema;
  dialogTheme?: DialogTheme;
}

declare global {
  interface ClientThemeSchema {
    base?: Record<string, any>;
    classes?: Record<string, any>;
    theme: ThemeSchema;
  }
}

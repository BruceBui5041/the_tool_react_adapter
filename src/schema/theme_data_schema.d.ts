export interface ColorScheme {
  background: string;
  brightness: string;
  error: string;
  errorContainer: string;
  inversePrimary: string;
  inverseSurface: string;
  onBackground: string;
  onError: string;
  onErrorContainer: string;
  onInverseSurface: string;
  onPrimary: string;
  onPrimaryContainer: string;
  onSecondary: string;
  onSecondaryContainer: string;
  onSurface: string;
  onSurfaceVariant: string;
  onTertiary: string;
  onTertiaryContainer: string;
  outline: string;
  primary: string;
  primaryContainer: string;
  secondary: string;
  secondaryContainer: string;
  shadow: string;
  surface: string;
  surfaceTint: string;
  surfaceVariant: string;
  tertiary: string;
  tertiaryContainer: string;
}

export interface Padding {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

export interface BottomLeft {
  type: string;
  x: number;
  y: number;
}

export interface BottomRight {
  type: string;
  x: number;
  y: number;
}

export interface TopLeft {
  type: string;
  x: number;
  y: number;
}

export interface TopRight {
  type: string;
  x: number;
  y: number;
}

export interface BorderRadius {
  bottomLeft: BottomLeft;
  bottomRight: BottomRight;
  topLeft: TopLeft;
  topRight: TopRight;
  type: string;
}

export interface Side {
  color: string;
  style: string;
  width: number;
}

export interface Shape {
  borderRadius: BorderRadius;
  side: Side;
  type: string;
}

export interface ButtonTheme {
  alignedDropdown: boolean;
  colorScheme: ColorScheme;
  height: number;
  layoutBehavior: string;
  minWidth: number;
  padding: Padding;
  shape: Shape;
  textTheme: string;
}

export interface ColorScheme2 {
  background: string;
  brightness: string;
  error: string;
  errorContainer: string;
  inversePrimary: string;
  inverseSurface: string;
  onBackground: string;
  onError: string;
  onErrorContainer: string;
  onInverseSurface: string;
  onPrimary: string;
  onPrimaryContainer: string;
  onSecondary: string;
  onSecondaryContainer: string;
  onSurface: string;
  onSurfaceVariant: string;
  onTertiary: string;
  onTertiaryContainer: string;
  outline: string;
  primary: string;
  primaryContainer: string;
  secondary: string;
  secondaryContainer: string;
  shadow: string;
  surface: string;
  surfaceTint: string;
  surfaceVariant: string;
  tertiary: string;
  tertiaryContainer: string;
}

export interface IconTheme {
  color: string;
}

export interface BottomLeft2 {
  type: string;
  x: number;
  y: number;
}

export interface BottomRight2 {
  type: string;
  x: number;
  y: number;
}

export interface TopLeft2 {
  type: string;
  x: number;
  y: number;
}

export interface TopRight2 {
  type: string;
  x: number;
  y: number;
}

export interface BorderRadius2 {
  bottomLeft: BottomLeft2;
  bottomRight: BottomRight2;
  topLeft: TopLeft2;
  topRight: TopRight2;
  type: string;
}

export interface BorderSide {
  color: string;
  style: string;
  width: number;
}

export interface FocusedBorder {
  borderRadius: BorderRadius2;
  borderSide: BorderSide;
  gapPadding: number;
  type: string;
}

export interface InputDecorationTheme {
  alignLabelWithHint: boolean;
  fillColor: string;
  filled: boolean;
  floatingLabelAlignment: string;
  floatingLabelBehavior: string;
  focusColor: string;
  focusedBorder: FocusedBorder;
  isCollapsed: boolean;
  isDense: boolean;
}

export interface PrimaryIconTheme {
  color: string;
}

export interface BodyLarge {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodyMedium {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodySmall {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayLarge {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayMedium {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplaySmall {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineLarge {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineMedium {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineSmall {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelLarge {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelMedium {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelSmall {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleLarge {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleMedium {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleSmall {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface PrimaryTextTheme {
  bodyLarge: BodyLarge;
  bodyMedium: BodyMedium;
  bodySmall: BodySmall;
  displayLarge: DisplayLarge;
  displayMedium: DisplayMedium;
  displaySmall: DisplaySmall;
  headlineLarge: HeadlineLarge;
  headlineMedium: HeadlineMedium;
  headlineSmall: HeadlineSmall;
  labelLarge: LabelLarge;
  labelMedium: LabelMedium;
  labelSmall: LabelSmall;
  titleLarge: TitleLarge;
  titleMedium: TitleMedium;
  titleSmall: TitleSmall;
}

export interface BodyLarge2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodyMedium2 {
  color: string;
  decoration: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
}

export interface BodySmall2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayLarge2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayMedium2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplaySmall2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineLarge2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineMedium2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineSmall2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelLarge2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelMedium2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelSmall2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleLarge2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleMedium2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleSmall2 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TextTheme {
  bodyLarge: BodyLarge2;
  bodyMedium: BodyMedium2;
  bodySmall: BodySmall2;
  displayLarge: DisplayLarge2;
  displayMedium: DisplayMedium2;
  displaySmall: DisplaySmall2;
  headlineLarge: HeadlineLarge2;
  headlineMedium: HeadlineMedium2;
  headlineSmall: HeadlineSmall2;
  labelLarge: LabelLarge2;
  labelMedium: LabelMedium2;
  labelSmall: LabelSmall2;
  titleLarge: TitleLarge2;
  titleMedium: TitleMedium2;
  titleSmall: TitleSmall2;
}

export interface BodyLarge3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodyMedium3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodySmall3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayLarge3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayMedium3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplaySmall3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineLarge3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineMedium3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineSmall3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelLarge3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelMedium3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelSmall3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleLarge3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleMedium3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleSmall3 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface Black {
  bodyLarge: BodyLarge3;
  bodyMedium: BodyMedium3;
  bodySmall: BodySmall3;
  displayLarge: DisplayLarge3;
  displayMedium: DisplayMedium3;
  displaySmall: DisplaySmall3;
  headlineLarge: HeadlineLarge3;
  headlineMedium: HeadlineMedium3;
  headlineSmall: HeadlineSmall3;
  labelLarge: LabelLarge3;
  labelMedium: LabelMedium3;
  labelSmall: LabelSmall3;
  titleLarge: TitleLarge3;
  titleMedium: TitleMedium3;
  titleSmall: TitleSmall3;
}

export interface BodyLarge4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface BodyMedium4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface BodySmall4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplayLarge4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplayMedium4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplaySmall4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineLarge4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineMedium4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineSmall4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelLarge4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelMedium4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelSmall4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleLarge4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleMedium4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleSmall4 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface Dense {
  bodyLarge: BodyLarge4;
  bodyMedium: BodyMedium4;
  bodySmall: BodySmall4;
  displayLarge: DisplayLarge4;
  displayMedium: DisplayMedium4;
  displaySmall: DisplaySmall4;
  headlineLarge: HeadlineLarge4;
  headlineMedium: HeadlineMedium4;
  headlineSmall: HeadlineSmall4;
  labelLarge: LabelLarge4;
  labelMedium: LabelMedium4;
  labelSmall: LabelSmall4;
  titleLarge: TitleLarge4;
  titleMedium: TitleMedium4;
  titleSmall: TitleSmall4;
}

export interface BodyLarge5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface BodyMedium5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface BodySmall5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplayLarge5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplayMedium5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplaySmall5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineLarge5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineMedium5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineSmall5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelLarge5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelMedium5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelSmall5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  letterSpacing: number;
  textBaseline: string;
}

export interface TitleLarge5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleMedium5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleSmall5 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  letterSpacing: number;
  textBaseline: string;
}

export interface EnglishLike {
  bodyLarge: BodyLarge5;
  bodyMedium: BodyMedium5;
  bodySmall: BodySmall5;
  displayLarge: DisplayLarge5;
  displayMedium: DisplayMedium5;
  displaySmall: DisplaySmall5;
  headlineLarge: HeadlineLarge5;
  headlineMedium: HeadlineMedium5;
  headlineSmall: HeadlineSmall5;
  labelLarge: LabelLarge5;
  labelMedium: LabelMedium5;
  labelSmall: LabelSmall5;
  titleLarge: TitleLarge5;
  titleMedium: TitleMedium5;
  titleSmall: TitleSmall5;
}

export interface BodyLarge6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface BodyMedium6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface BodySmall6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplayLarge6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplayMedium6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface DisplaySmall6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineLarge6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineMedium6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface HeadlineSmall6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelLarge6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelMedium6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface LabelSmall6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleLarge6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleMedium6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface TitleSmall6 {
  fontWeight: string;
  fontSize: number;
  inherit: boolean;
  textBaseline: string;
}

export interface Tall {
  bodyLarge: BodyLarge6;
  bodyMedium: BodyMedium6;
  bodySmall: BodySmall6;
  displayLarge: DisplayLarge6;
  displayMedium: DisplayMedium6;
  displaySmall: DisplaySmall6;
  headlineLarge: HeadlineLarge6;
  headlineMedium: HeadlineMedium6;
  headlineSmall: HeadlineSmall6;
  labelLarge: LabelLarge6;
  labelMedium: LabelMedium6;
  labelSmall: LabelSmall6;
  titleLarge: TitleLarge6;
  titleMedium: TitleMedium6;
  titleSmall: TitleSmall6;
}

export interface BodyLarge7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodyMedium7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface BodySmall7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayLarge7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplayMedium7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface DisplaySmall7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineLarge7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineMedium7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface HeadlineSmall7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelLarge7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelMedium7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface LabelSmall7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleLarge7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleMedium7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface TitleSmall7 {
  color: string;
  decoration: string;
  fontFamily: string;
  inherit: boolean;
}

export interface White {
  bodyLarge: BodyLarge7;
  bodyMedium: BodyMedium7;
  bodySmall: BodySmall7;
  displayLarge: DisplayLarge7;
  displayMedium: DisplayMedium7;
  displaySmall: DisplaySmall7;
  headlineLarge: HeadlineLarge7;
  headlineMedium: HeadlineMedium7;
  headlineSmall: HeadlineSmall7;
  labelLarge: LabelLarge7;
  labelMedium: LabelMedium7;
  labelSmall: LabelSmall7;
  titleLarge: TitleLarge7;
  titleMedium: TitleMedium7;
  titleSmall: TitleSmall7;
}

export interface Typography {
  black: Black;
  dense: Dense;
  englishLike: EnglishLike;
  tall: Tall;
  white: White;
}

declare global {
  interface ThemeData {
    applyElevationOverlayColor: boolean;
    backgroundColor: string;
    bottomAppBarColor: string;
    brightness: string;
    buttonTheme: ButtonTheme;
    canvasColor: string;
    cardColor: string;
    colorScheme: ColorScheme2;
    dialogBackgroundColor: string;
    disabledColor: string;
    dividerColor: string;
    errorColor: string;
    focusColor: string;
    highlightColor: string;
    hintColor: string;
    hoverColor: string;
    iconTheme: IconTheme;
    indicatorColor: string;
    inputDecorationTheme: InputDecorationTheme;
    materialTapTargetSize: string;
    platform: string;
    primaryColor: string;
    primaryColorDark: string;
    primaryColorLight: string;
    primaryIconTheme: PrimaryIconTheme;
    primaryTextTheme: PrimaryTextTheme;
    scaffoldBackgroundColor: string;
    secondaryHeaderColor: string;
    selectedRowColor: string;
    shadowColor: string;
    splashColor: string;
    splashFactory: string;
    textTheme: TextTheme;
    toggleableActiveColor: string;
    typography: Typography;
    unselectedWidgetColor: string;
    useMaterial3: boolean;
    visualDensity: string;
  }
}

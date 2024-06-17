import { ButtonStyleSchema, TextStyleSchema } from './theme_schema';
import { TextThemeValue } from './theme_type';
import {
  AutovalidateMode,
  Alignment,
  MainAxisAlignment,
  CrossAxisAlignment,
  BoxFit,
  Shape,
  MarginType,
  PaddingType,
  BorderStyle,
  TextAlign,
  FlexFit,
  KeyboardType,
  ThousandSeparator,
  FontWeight,
  DataBindingString,
  ClipBehavior,
  BorderSide,
  BorderRadius,
  ShapeBorder,
  DismissDirection,
  BoxBorder,
  BoxDecoration,
  BoxShadow,
} from './widget_property_type';
export {};

declare global {
  export interface LayoutSchema {
    appBar?: AppBarSchema;
    content?: WidgetSchema;
    components?: Record<string, WidgetSchema>;
    bottomNav?: BottomNavigationSchema;
    drawer?: DrawerSchema;
  }
}

type ButtonType = 'icon' | 'text' | 'outlined' | 'filled';

interface NetWorkImageProviderSchema extends CommonSchema {
  type: 'network';
  url: string;
  fit?: BoxFit;
}

interface AssetImageProviderSchema extends CommonSchema {
  type: 'asset';
}

interface MemoryImageProviderSchema extends CommonSchema {
  type: 'memory';
}

interface Positioned {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
}

interface MediaScreenOnlySchema {
  maxWidth?: number;
  minWidth?: number;
  maxHeight?: number;
  minHeight?: number;
  orientation?: 'landscape' | 'portrait';
  style?: Partial<WidgetSchema>;
  className?: string | Record<any, any> | string[];
}

interface IConditionElement {
  source: any;
  operator: '==' | '!=' | '>' | '<' | '>=' | '<=' | '=';
  target: any;
}

interface IConditionDynamicProps {
  type?: 'condition';
  /**
   * The conditions to apply the props
   * @example [{...condition}] => if condition is true apply the props
   * @example [{...condition1}, {...condition2}] => if condition1 AND condition2 are true apply the props
   * @example [[{...condition1}], [{...condition2}]] => if condition1 OR condition2 are true apply the props
   * @example [[{...condition1}, {...condition2}], [{...condition3}, {...condition4}]] => if (condition1 AND condition2) OR (condition3 AND condition4) are true apply the props
   */
  conditions: IConditionElement | IConditionElement[] | IConditionElement[][];
  /**
   * These props will be applied if the conditions are true
   */
  true: Partial<WidgetSchema>;
  /**
   * These props will be applied if the conditions are false
   */
  false?: Partial<WidgetSchema>;
}

interface ISwitchCaseDynamicProps {
  type: 'switch';
  /**
   * The value to switch
   * @example ```switch``` value can be a string, number, boolean, '{{ valueBinding }}'
   * @example ```{ switch: '{{ pageState }}', "value1": { color: 'red' }, "value2": { color: 'blue'}}```
   * * If pageState = value1 then apply color: red or if pageState = value2 then apply color: blue
   */
  switch: any;
  cases: {
    [key: string | number]: Partial<WidgetSchema>;
  };
}

type IDynamicProps = IConditionDynamicProps | ISwitchCaseDynamicProps;

interface CommonSchema {
  key?: string;
  /**
   * Will wrap the widget with an Expanded widget
   */
  flex?: number;
  positioned?: Positioned;
  hidden?: string | boolean;
  className?: string | Record<any, any> | string[];
  mediaScreenOnly?: MediaScreenOnlySchema[];
  /**
   * Should use wrapper for utilities widgets. Ex: Padding, Align, Opacity, ...
   * This will make the performance better
   * Wrapper will wrap the widget base on the order of the array
   * Wrapper should not have any data binding value
   * Ex: [Padding, Align, Opacity] => Padding(Align(Opacity(child)))
   */
  wrappers?: Partial<WrapperSchema>[];

  dynamicProps?: IDynamicProps[];
}

interface ScrollViewSchema extends CommonSchema {
  type: 'scroll_view';
  sliverListType?: 'fixed_extent_list';
  itemExtent?: number;
  children: WidgetSchema[];
}

interface TextSchema extends CommonSchema {
  type: 'text';
  text?: string;
  color?: string;
  fontSize?: number;
  wordSpacing?: number;
  selected?: boolean;
  textAlign?: TextAlign;
  fontWeight?: FontWeight;
  style?: keyof TextThemeValue;
}

interface ButtonSchema extends CommonSchema {
  type: 'button';
  text?: string;
  buttonType?: ButtonType;
  color?: string;
  iconSize?: string | number;
  icon?: string | DataBindingString;
  onClick?: string;
  style?: ButtonStyleSchema;
  child?: WidgetSchema;
}

interface RowAndColumnSchema extends CommonSchema {
  type: 'row' | 'column';
  crossAxisAlignment?: CrossAxisAlignment;
  mainAxisAlignment?: MainAxisAlignment;
  /**
   * This use to set scroll on Row or Column.
   * if scrollable = true and widget is Row => Axix.horizontal.
   * if scrollable = true and widget is Column => Axix.vertical.
   */
  scrollable?: boolean;
  children: WidgetSchema[];
}

interface ContainerSchema extends CommonSchema {
  type: 'container';
  width?: number | 'infinity' | string;
  height?: number | 'infinity' | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  margin?: MarginType;
  padding?: PaddingType;
  backgroundColor?: string;
  boxBorder?: BoxBorder | BorderSide;
  borderRadius?: BorderRadius;
  gradient?: LinearGradient;
  scrollable?: boolean;
  shape?: Shape;
  image?:
    | NetWorkImageProviderSchema
    | NetWorkImageProviderSchema
    | MemoryImageProviderSchema;
  alignment?: Alignment;
  opacity?: number;
  boxShadow?: BoxShadow;
  child?: WidgetSchema;
}

interface ExpandedSchema extends CommonSchema {
  type: 'expanded';
  child: WidgetSchema;
}

interface FlexibleSchema extends CommonSchema {
  type: 'flexible';
  fit?: FlexFit;
  child: WidgetSchema;
}

interface ComponentSchema extends CommonSchema {
  /**
   * Should use 'component' with binding value
   */
  type: 'component';
  /**
   * the file name of the component will be loaded
   */
  path: string;
  componentProps: {
    [key: string]: string | number | boolean | Record<string, any>;
  };
}

interface BottomNavigationItemSchema {
  label?: string;
  icon: WidgetSchema;
  activeIcon?: WidgetSchema;
  path: string;
  backgroundColor?: string;
}

interface BottomNavigationSchema {
  type: 'bottom_navigation';
  selectedItemColor?: string;
  backgroundColor?: string;
  navType: 'shifting' | 'fixed';
  items: BottomNavigationItemSchema[];
}

interface AppBarSchema {
  type: 'appbar';
  title?: WidgetSchema;
  appBarBottom?: {
    height: number;
    child: WidgetSchema;
  };
  elevation?: number;
  /**
   * This is base on centerTitle of AppBar. If alignment = true, then AppBar centerTitle will be true
   */
  alignment?: boolean;
  shapeBorder?: ShapeBorder;
  shadowColor?: string;
  actions?: WidgetSchema[];
  leading?: WidgetSchema;
  content?: WidgetSchema;
}

interface DrawerSchema {
  child?: WidgetSchema;
  backgroundColor?: string;
  elevation?: number;
  width?: string | number;
}

interface InnerComponentSchema extends WidgetSchemaCommon {
  type?: 'inner_component';
  component: string;
  [key: string]: any;
}

interface FormSchema extends CommonSchema {
  type: 'form';
  name: string;
  /**
   * @summary Enabled/Disabled auto validate on change value on all fields
   */
  autovalidateMode?: AutovalidateMode;
  /**
   * @summary This function will be eval for validating all fields.
   * - It needs to return a map with this format {"<field name>": "<error text | null>", ...}
   */
  validationFunction?: string;
  /**
   * Contains form's field names
   */
  validateOrder?: string[];

  child?: WidgetSchema;
}

interface FieldInputDecorationSchema {
  hintText?: string;
  labelText?: string;

  fillColor?: string;
  filled?: boolean;
  validators?: Validator[];

  maxHeight?: string | number;
  minHeight?: string | number;

  maxWidth?: string | number;
  minWidth?: string | number;

  padding?: PaddingType;

  boxBorder?: BorderShapeSchema | { type: 'none' };
  focusedBorder?: BorderShapeSchema;
  enabledBorder?: BorderShapeSchema;
  disabledBorder?: BorderShapeSchema;
  // borderProps?: BorderShapeSchema;

  prefixIcon?: WidgetSchema;
  suffixIcon?: WidgetSchema;

  suffixIconColor?: string;
  prefixIconColor?: string;

  prefixText?: string;
  suffixText?: string;
}

interface FieldSchema extends CommonSchema, FieldInputDecorationSchema {
  name: string;
  /**
   * @summary This function will be eval for validating field value
   * - Return false if value is valid
   * - Return error message if value is invalid
   */
  validationFunction?: string;
  /**
   * This function will callback when select change with the value of selected items
   * onChange(value: any)
   */
  onChange?: DataBindingString;
  /**
   * @summary Enabled/Disabled auto validate on change value
   */
  autovalidate?: boolean;

  defaultValue?: string | boolean | number;
  allowClear?: boolean;

  enabled?: string | boolean;

  style?: TextStyleSchema;
  icon?: WidgetSchema;
}

interface EmailValidator {
  type: 'is_email';
  errorText?: string;
}

interface RequiredValidator {
  type: 'is_required';
  errorText?: string;
}

interface MaxValidator {
  type: 'max';
  maxValue: number;
  /**
   * True: value > maxValue
   * False: value >= maxValue
   */
  inclusive?: boolean;

  errorText?: string;
}

interface MinValidator {
  type: 'min';
  minValue: number | string;
  errorText?: string;
  /**
   * True: value > minValue
   * False: value >= minValue
   */
  inclusive?: boolean;
}

interface MaxLengthValidator {
  type: 'max_length';
  maxLengthValue: number;
}

interface MinLengthValidator {
  type: 'min_length';
  minLengthValue: number;
}

interface NumericValidator {
  type: 'numeric';
  errorText?: string;
}

interface NotEqualValidator {
  type: 'not_equal';
  value: any;
  errorText?: string;
}

interface DateStringValidator {
  type: 'date_string';
  value: any;
  errorText?: string;
}

type Validator =
  | RequiredValidator
  | EmailValidator
  | NumericValidator
  | MaxValidator
  | MinValidator
  | MinLengthValidator
  | NotEqualValidator
  | MinLengthValidator;

interface TextFieldFormatterSchema {
  number?: boolean;
  negativeNumber?: boolean;
}

interface CurrencyFormatterSchema {
  maxLength?: number;
  /**
   * default is 2
   */
  decimalPlaces?: number;
  thousandSeparator?: ThousandSeparator;
  leadingSymbol?: string;
  trailingSymbol?: string;
  useSymbolPadding?: boolean;
  /**
   * This function will callback when input change with the numeric to stringed value
   * onChange(value: string)
   */
  onChange?: string;
}

interface TextFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'text';
  keyboardType?: KeyboardType;
  maxLines?: number;
  minLines?: number;
  /**
   * @summary If this is true the text will be replace by * symbol
   */
  obscureText?: boolean | string;

  formatters?: TextFieldFormatterSchema | CurrencyFormatterSchema;
}

interface CurrencyFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'currency';
  // keyboardType?: KeyboardType;
  maxLines?: number;
  minLines?: number;
  formatters?: CurrencyFormatterSchema;
}

interface SwitchFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'switch';
  title?: WidgetSchema;
  subTitle?: WidgetSchema;
}

type SelectFieldItemsType =
  | [string | number, string | number][]
  | { value: string | number; label: string | number; enabled?: boolean }[]
  | DataBindingString;

interface SelectFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'select';
  items?: SelectFieldItemsType;
  /**
   * itemLayout is the layout of each item in the dropdown
   */
  itemLayout?: WidgetSchema;
}

interface SearchableSelectFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'select';
  items?: SelectFieldItemsType;
  /**
   * itemLayout is the layout of each item in the dropdown
   */
  itemLayout?: WidgetSchema;
  searchable?: true;
  /**
   * Use to decorating the input search field
   */
  searchInputFieldDecoration?: FieldInputDecorationSchema;
  /**
   * this function will be called when the select filter change
   * @example onSearchChange(item, filter)
   */
  onSearchChange?: DataBindingString;
}

interface MultipleSelectFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'multiple_select';
  isMultiSelect: boolean;
  items: SelectFieldItemsType;
}

interface ChoiceChipFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'choice_chip';
  items: string[] | DataBindingString | { [key: string]: string }[];
  itemLayout?: WidgetSchema;
  backgroundColor?: string;
}

interface FilterChoiceChipFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'choice_chip';
  multipleSelect: true;
}

interface DatetimeFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'datetime';
  format?: string;
}

interface DateFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'date';
  format?: string;
  lastDate?: string;
  firstDate?: string;
  /**
   * Initial date of the field. Using with format yyyy-MM-dd hh:mm:ss
   * @example defaultValue: "2024-09-17 00:00:00"
   * @example defaultValue: "now" // using current datetime as the initial value
   */
  defaultValue?: 'now' | string;
  initialDate?: string;
}

interface DateRangeFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'range';
  lastDate: string;
  firstDate: string;
}

interface CustomFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'custom';
  child: WidgetSchema;
}

interface TimeFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'time';
  format?: string;
}

interface CheckboxFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'checkbox';
  title: WidgetSchema;
}

interface ImagePickerFieldSchema extends FieldSchema {
  type: 'field';
  fieldType: 'image';
  /**
   * This function will callback when image change and return the uploaded image url
   * onChange(value: string)
   */
  onChange?: string;

  /**
   * will override "uploadFileHost" in client config
   */
  host?: string;
  child?: WidgetSchema;
  actionButton?: WidgetSchema;
}

export interface BorderShapeSchema {
  type: 'outline' | 'underline';
  borderSide?: BorderSide;
  borderRadius?: BorderRadius;
  gapPadding?: number;
}

export interface StackSchema extends CommonSchema {
  type: 'stack';
  clipBehavior?: ClipBehavior;
  children: WidgetSchema[];
}

interface TableColumnSchema {
  label: string;
  tooltip?: string;
  numeric?: boolean;
  /**
   * Data appear in row
   */
  fieldData?: string;
  /**
   * Should be an function with 2 params columnIndex (number), ascending (boolean)
   * Ex: (columnIndex: number, fieldData: string, ascending: boolean) => void
   */
  onSort?: string;

  fixedWidth?: number | string;
}

interface TableRowSchema {
  selected?: boolean;
  onSelectChanged?: string;
  onLongPress?: string;
  color?: string;
  cells: TableCellSchema[];
}

interface TableCellSchema {
  child: WidgetSchema;
  placeholder?: boolean;
  showEditIcon?: boolean;
  onTap?: string;
  onLongPress?: string;
  onTapDown?: string;
  onDoubleTap?: string;
  onTapCancel?: string;
}

interface LayoutBuilderItemSchema {
  child: WidgetSchema | InnerComponentSchema;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  className?: string | Record<any, any> | string[];
}

interface LayoutBuilder {
  layouts: LayoutBuilderItemSchema[];
  defaultLayoutIndex?: number;
}

interface LayoutBuilderSchema extends CommonSchema {
  type: 'layout_builder';
  layoutBuilder: LayoutBuilder;
}

interface TableSchema extends CommonSchema {
  type: 'table';
  name: string;
  minWidth?: number | string;
  columns?: TableColumnSchema[];
  rows?: TableRowSchema[];
  wrapInCard?: boolean;
  headingRowDecoration?: BoxDecoration;
  headingRowColor?: string;
  horizontalMargin?: string | number;
  columnSpacing?: number;
  dividerThickness?: number;
  /**
   * This function will use to get data and return to FE
   * Refer to function in js with 1 argument
   * @param loadingInfo: ```{ offset: number, limit: number, sortColumn?: string, isSortAscending?: boolean }```
   *
   */
  loadDataFunction: string;
  /**
   * Will be used if column not specify the onSort function of it own
   * Should be an function with 2 params columnIndex (number), ascending (boolean)
   * Ex: (columnIndex: number, fieldData: string, ascending: boolean) => void
   */
  onSort?: string;

  /**
   * Handles the selection of a row in a table.
   *
   * This take a string function name in pageContext that function will be called when row selected.
   * It provided rowIndex and isSelected parameters
   *
   * @param rowIndex - The index of the row being selected or deselected.
   * @param isSelected - A boolean flag indicating whether the row should be selected (true) or deselected (false).
   */
  onSelectChanged?: string;

  /**
   * Handles the select all of table.
   *
   * This This take a string function name in pageContext that function will be called when click the select all row in table.
   * It provided selection parameters whether table select all (true) or table deselected all (false).
   *
   * @param selection - A boolean flag indicating whether table select all (true) or table deselected all (false).
   */
  onSelectAll?: string;

  /**
   * To specify total data count in the query response
   */
  total?: string;
}

interface GradientAlignment {
  x: number;
  y: number;
}
interface LinearGradient {
  type: 'linear';
  colors: string[];
  stops?: number[];
  begin?: Alignment | GradientAlignment;
  end?: Alignment | GradientAlignment;
}

interface ClickableSchema extends CommonSchema {
  type: 'clickable';
  backgroundColor?: string;
  splashColor?: string;
  padding?: [number, number, number, number] | [number, number];
  radius?: number;
  onClick?: string;
  onLongClick?: string;
  onHover?: string;
  width?: number | string;
  height?: number | string;
  image?:
    | NetWorkImageProviderSchema
    | NetWorkImageProviderSchema
    | MemoryImageProviderSchema;
  shape?: Shape;
  child?: WidgetSchema;
}

interface ClipOvalSchema extends CommonSchema {
  /**
   * Using for cliping its child , default is clip into circle
   */
  type: 'clip_oval';
  child: WidgetSchema;
}

interface ListViewSchema extends CommonSchema {
  type: 'list';
  name: string;
  separator?: WidgetSchema;
  itemLayout: WidgetSchema;
  itemExtent?: DataBindingString | number;
  itemCount?: DataBindingString | number;
}

interface ExpansionChildSchema extends CommonSchema {
  selected?: boolean | string;
  head: WidgetSchema;
  body: WidgetSchema;
}

interface ExpansionChildrenSchema extends ExpansionChildSchema {
  type?: string;
  backgroundColor?: string;
}

interface ExpansionPanelListSchema extends CommonSchema {
  type: 'expansion_list';
  /**
   * If name is provided the ExpansionList will compute base on the value of 'name' key in state
   * Value of 'name' key must be an array
   */
  name: string;
  children: ExpansionChildrenSchema[];
  elevation?: number;
  dividerColor?: string;
}

interface ListTileSchema extends CommonSchema {
  type: 'list_tile';
  horizontalTitleGap?: number;
  leading?: WidgetSchema;
  title?: WidgetSchema;
  trailing?: WidgetSchema;
  subtitle?: WidgetSchema;
  onClick?: string;
  onLongClick?: string;
}

interface CardSchema extends CommonSchema {
  type: 'card';
  child?: WidgetSchema;
  elevation?: number;
  color?: string;
  shadowColor?: string;
  shapeBorder?: ShapeBorder;
  margin?: MarginType;
  /**
   * The horizontal gap between the titles and the leading/trailing widgets.
   * If null, then the value of [ListTileTheme.horizontalTitleGap] is used. If that is also null, then a default value of 16 is used.
   */
  horizontalTitleGap?: number;
}

interface CenterSchema extends CommonSchema {
  /**
   * Use to center the child inside its parent
   */
  type: 'center';
  child?: WidgetSchema;
  heightFactor?: number;
  widthFactor?: number;
}

interface OpacitySchema extends CommonSchema {
  type: 'opacity';
  opacity: number;
  child?: WidgetSchema;
}

interface PaddingSchema extends CommonSchema {
  type: 'padding';
  padding: PaddingType;
  child?: WidgetSchema;
}

interface IconSchema extends CommonSchema {
  type: 'icon';
  icon: string;
  color?: string;
  iconSize?: number;
  weight?: number;
}

interface AlignSchema extends CommonSchema {
  type: 'align';
  alignment: Alignment;
  child: WidgetSchema;
  heightFactor?: number;
  widthFactor?: number;
}

interface ExpansionTileSchema extends CommonSchema {
  type: 'expansion_tile';
  /**
   * Use to set state in the the page data to track the expansion of the tile
   */
  name?: string;
  leading?: WidgetSchema;
  title: WidgetSchema;
  trailing?: WidgetSchema;
  subtitle?: WidgetSchema;
  children?: WidgetSchema[];
  backgroundColor?: string;
  elevation?: number;
}

interface SizedBoxSchema extends CommonSchema {
  type: 'sized_box';
  child?: WidgetSchema;
  width?: string | number;
  height?: string | number;
}

interface BottomSheetShema extends CommonSchema {
  type: 'bottom_sheet';
  name: string;
  body: WidgetSchema;

  /**
   * Allowed value is from 0 to 1
   */
  height?: string | number;
  /**
   * Allowed value is from 0 to 1
   */
  maxHeight?: string | number;
  /**
   * Allowed value is from 0 to 1
   */
  minHeight?: string | number;

  backgroundColor?: string;

  /**
   * Duration in miliseconds
   */
  duration?: number;
}

interface DialogShema extends CommonSchema {
  type: 'dialog';
  name: string;
  backgroundColor?: string;
  title?: WidgetSchema;
  content?: WidgetSchema;
  actions?: WidgetSchema[];
}

interface GestureDetectorSchema extends CommonSchema {
  type: 'gesture_detector';
  onClick?: string;
  child: WidgetSchema;
}

interface WrapSchema extends CommonSchema {
  type: 'wrap';
  children: WidgetSchema[];
}

interface SafeAreaSchema extends CommonSchema {
  type: 'safe_area';
  child: WidgetSchema;
}

interface SnackbarSchema extends CommonSchema {
  type: 'snackbar';
  name: string;
  child: WidgetSchema;
  dismissDirection?: DismissDirection;
  duration?: number;
  backgroundColor?: string | 'transparent';
  elevation?: number;
  width?: number | string;
  margin?: MarginType;
  padding?: PaddingType;
  shapeBorder?: ShapeBorder;

  /**
   * This is the button text at the end of the snackbar
   */
  labelText?: string;
  /**
   * This is the function that will be called when the button text at the end is clicked
   */
  onClick?: string;
}

interface DismissableSchema extends CommonSchema {
  type: 'dismissable';
  key: string;
  child: WidgetSchema;
  direction?: DismissDirection;
  onDismissed?: string;
}

interface VisibilitySchema extends CommonSchema {
  type: 'visibility';
  visible: boolean | DataBindingString;
  maintainState?: boolean;
  maintainAnimation?: boolean;
  maintainSize?: boolean;
  child: WidgetSchema;
}

interface DividerSchema extends CommonSchema {
  type: 'divider';
  color?: string;
  height?: number;
  thickness?: number;
  endIndent?: number;
  indent?: number;
}

interface FittedBoxSchema extends CommonSchema {
  type: 'fitted_box';
  child: WidgetSchema;
  fit?: BoxFit;
  alignment?: Alignment;
  clipBehavior?: ClipBehavior;
}

type WrapperSchema =
  | ExpandedSchema
  | SafeAreaSchema
  | CenterSchema
  | OpacitySchema
  | AlignSchema
  | PaddingSchema
  | ClipOvalSchema
  | WrapSchema
  | ScrollViewSchema
  | FlexibleSchema
  | ClipOvalSchema;

type WidgetSchemaCommon =
  | ButtonSchema
  | RowAndColumnSchema
  | TextSchema
  | ContainerSchema
  | ScrollViewSchema
  | ExpandedSchema
  | FlexibleSchema
  | ComponentSchema
  | AppBarSchema
  // | InnerComponentSchema
  | FormSchema
  | TextFieldSchema
  | CurrencyFieldSchema
  | SelectFieldSchema
  | SearchableSelectFieldSchema
  | MultipleSelectFieldSchema
  | ChoiceChipFieldSchema
  | FilterChoiceChipFieldSchema
  | DatetimeFieldSchema
  | DateFieldSchema
  | DateRangeFieldSchema
  | TimeFieldSchema
  | CheckboxFieldSchema
  | ImagePickerFieldSchema
  | SwitchFieldSchema
  | CustomFieldSchema
  | StackSchema
  | TableSchema
  | LayoutBuilderSchema
  | ClickableSchema
  | ClipOvalSchema
  | ListViewSchema
  | ExpansionPanelListSchema
  | ListTileSchema
  | CardSchema
  | CenterSchema
  | PaddingSchema
  | IconSchema
  | AlignSchema
  | SizedBoxSchema
  | ExpansionTileSchema
  | OpacitySchema
  | BottomSheetShema
  | DialogShema
  | GestureDetectorSchema
  | SafeAreaSchema
  | SnackbarSchema
  | DismissableSchema
  | VisibilitySchema
  | DividerSchema
  | FittedBoxSchema
  | WrapSchema;

type WidgetSchema = WidgetSchemaCommon | InnerComponentSchema;

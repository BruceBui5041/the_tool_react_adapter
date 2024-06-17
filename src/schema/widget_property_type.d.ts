import { BlurStyleType } from './theme_type';

export type DataBindingString = `${'{{'}${string}${'}}'}`;

export type MarginType =
  | [number, number, number, number]
  | [number, number]
  | number;

export type PaddingType =
  | [number, number, number, number]
  | [number, number]
  | number;

interface RadiusCircular {
  type: 'circular';
  radius: number;
}

interface RadiusElliptical {
  type: 'elliptical';
  x: number;
  y: number;
}

interface RadiusZero {
  type: 'zero';
}

export type Radius = RadiusCircular | RadiusElliptical | RadiusZero | number;

interface BorderRadiusAll {
  type: 'all';
  radius: Radius;
}

interface BorderRadiusOnly {
  type: 'only';
  bottomLeft?: Radius;
  bottomRight?: Radius;
  topLeft?: Radius;
  topRight?: Radius;
}

export type BorderRadius = BorderRadiusAll | BorderRadiusOnly;

interface ShapeBorderCircle {
  type: 'circle';
  side?: BorderSide;
}

interface ShapeBorderRectangle {
  type: 'rectangle';
  borderRadius?: BorderRadius;
  side?: BorderSide;
}

interface ShapeBorderRound {
  type: 'rounded';
  borderRadius?: BorderRadius;
  side?: BorderSide;
}

export interface BorderSide {
  style?: BorderStyle;
  color?: string;
  width?: string | number;
}

export interface BoxBorder {
  top?: BorderSide;
  right?: BorderSide;
  bottom?: BorderSide;
  left?: BorderSide;
}

export interface BoxShadow {
  color?: string;
  offset?: { dx: number; dy: number };
  blurRadius?: number;
  spreadRadius?: number;
  /**
   *
   * ### normal
   *
   * These mirror DlBlurStyle and must be kept in sync.
   * Fuzzy inside and outside. This is useful for painting shadows that are
   * offset from the shape that ostensibly is casting the shadow.
   *
   * ### inner
   *
   * Fuzzy inside, nothing outside. This can make shapes appear to be lit from within
   *
   * ### outer
   *
   * Nothing inside, fuzzy outside. This is useful for painting shadows for
   * partially transparent shapes, when they are painted separately but without
   * an offset, so that the shadow doesn't paint below the shape.
   *
   * ### solid
   *
   * Solid inside, fuzzy outside. This corresponds to drawing the shape, and
   * additionally drawing the blur. This can make objects appear brighter,
   * maybe even as if they were fluorescent.
   */
  blurStyle?: BlurStyleType;
}

export interface BoxDecoration {
  // backgroundBlendMode: '<BlendMode>';
  border?: BoxBorder;
  // borderRadius: '<BorderRadius>';
  boxShadow?: BoxShadow;
  // color: '<Color>';
  // image: '<DecorationImage>';
  // gradient: '<Gradient>';
  // shape: '<BoxShape>';
}

export type ShapeBorder =
  | ShapeBorderCircle
  | ShapeBorderRectangle
  | ShapeBorderRound;

export type BorderStyle = 'none' | 'solid';

export type MainAxisAlignment =
  | 'center'
  | 'end'
  | 'spaceAround'
  | 'spaceBetween'
  | 'spaceEvenly'
  | 'start';
export type CrossAxisAlignment =
  | 'baseLine'
  | 'center'
  | 'end'
  | 'start'
  | 'stretch';
export type BoxFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'fitHeight'
  | 'fitWidth'
  | 'none'
  | 'scaleDown';

export type Alignment =
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
  | 'center'
  | 'centerLeft'
  | 'centerRight'
  | 'topCenter'
  | 'topLeft'
  | 'topRight';

export type AutovalidateMode = 'always' | 'disabled' | 'onUserInteraction';
export type TextAlign =
  | 'center'
  | 'end'
  | 'justify'
  | 'left'
  | 'right'
  | 'start';
export type Shape = 'circle' | 'rectangle' | ShapeBorder;
export type FontWeight =
  | 'bold'
  | 'normal'
  | 'w100'
  | 'w200'
  | 'w300'
  | 'w400'
  | 'w500'
  | 'w600'
  | 'w700'
  | 'w800'
  | 'w900';
export type FlexFit = 'loose' | 'tight';
export type KeyboardType = 'number' | 'text';
export type ThousandSeparator =
  | 'Comma'
  | 'Space'
  | 'Period'
  | 'None'
  | 'SpaceAndPeriodDecimalPlaces'
  | 'SpaceAndCommaDecimalPlaces';

export type ClipBehavior =
  | 'none'
  | 'hardEdge'
  | 'antiAlias'
  | 'antiAliasWithSaveLayer';

export type DismissDirection =
  | 'startToEnd'
  | 'endToStart'
  | 'up'
  | 'down'
  | 'vertical'
  | 'horizontal'
  | 'none';

import { codes } from './codes';
import { modifier } from './escapes';

// foreground colors
export const black = modifier(codes.foreground.black);
export const red = modifier(codes.foreground.red);
export const green = modifier(codes.foreground.green);
export const yellow = modifier(codes.foreground.yellow);
export const blue = modifier(codes.foreground.blue);
export const magenta = modifier(codes.foreground.magenta);
export const cyan = modifier(codes.foreground.cyan);
export const gray = modifier(codes.foreground.gray);
export const white = modifier(codes.foreground.white);

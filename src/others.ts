import { codes } from './codes';
import { modifier } from './escapes';

// other modifiers
export const reset = modifier(codes.modifier.reset);
export const bold = modifier(codes.modifier.bold);
export const dim = modifier(codes.modifier.dim);
export const italic = modifier(codes.modifier.italic);
export const underline = modifier(codes.modifier.underline);
export const inverse = modifier(codes.modifier.inverse);
export const hidden = modifier(codes.modifier.hidden);
export const strikethrough = modifier(codes.modifier.strikethrough);

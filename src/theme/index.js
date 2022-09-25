import { merge } from '../utils/merge';
import { MyComponents } from './overrides';
import { palette } from './palette';

export const theme = merge(MyComponents, palette);

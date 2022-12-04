import { isIphone } from './isIphone';

import { isIphoneX } from 'tools/isIphoneX';

export const addPostKeyboardSpacing = isIphone ? (isIphoneX() ? 80 : 5) : 55;
export const addCommentKeyboardSpacing = isIphone ? (isIphoneX() ? -30 : 4) : 5;

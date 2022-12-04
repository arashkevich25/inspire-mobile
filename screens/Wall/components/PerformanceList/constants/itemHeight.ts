import { ImagePostSize } from 'app-constants';

import { calcPhotoHeight, winWidth } from 'tools';

export const ITEM_HEIGHT = calcPhotoHeight(ImagePostSize.Height, ImagePostSize.Width, winWidth) + 176;

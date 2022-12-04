import { TILE_WIDTH_HEIGHT } from 'app-constants';

export const CLOSED_SECTION_HEIGHT = TILE_WIDTH_HEIGHT + 44;
export const OPENED_SECTION_HEIGHT = (categoriesCount: number) =>
    TILE_WIDTH_HEIGHT * Math.ceil(categoriesCount / 4) + CLOSED_SECTION_HEIGHT;

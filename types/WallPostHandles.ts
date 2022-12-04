import { WallPostHandlesTypes } from './WallPostHandlesTypes';

export type WallPostHandles =
    | WallPostHandlesTypes.OpenPostDetails
    | WallPostHandlesTypes.Inspire
    | WallPostHandlesTypes.OpenProfile
    | WallPostHandlesTypes.Recommend;

export enum AvatarActionTypes {
    SelectNewAvatar = '[ UserDetails / Avatar ] select new avatar',
    RemoveNewAvatar = '[ UserDetails / Avatar ] clear new avatar store',
}

export interface SelectNewAvatar {
    type: AvatarActionTypes.SelectNewAvatar;
    uri: string;
}

export interface RemoveNewAvatar {
    type: AvatarActionTypes.RemoveNewAvatar;
}

export type AvatarUnion = SelectNewAvatar | RemoveNewAvatar;

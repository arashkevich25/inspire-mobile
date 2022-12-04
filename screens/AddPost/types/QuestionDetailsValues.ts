import { MutableRefObject } from 'react';

export interface SelectedBackground {
    id: number;
    background: MutableRefObject<any>;
}

export interface QuestionDetailsValues {
    name: string;
    desc: string;
    background: SelectedBackground;
}

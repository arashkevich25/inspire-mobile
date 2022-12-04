import { TextColor } from 'components/Text/types';

export interface BottomMenuItem {
    icon?: any;
    title: any;
    children?: JSX.Element[] | JSX.Element;
    helpText?: string;
    action?: () => void;
    color?: TextColor;
}

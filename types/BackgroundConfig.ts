import { ImageRequireSource } from 'react-native';

import { TextColor } from 'components/Text/types';

export interface BackgroundConfig {
    id: number;
    import: ImageRequireSource;
    color: TextColor;
}

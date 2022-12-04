import { ThemeOptions } from 'app-constants';
import { isIphone } from '../app-constants/isIphone';

export function getPrepareBarStyleTheme(activeTheme: ThemeOptions) {
    if (isIphone) {
        return activeTheme === ThemeOptions.Light ? 'dark-content' : 'light-content';
    }

    return 'light-content';
}
